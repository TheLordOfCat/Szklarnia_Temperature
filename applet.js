const Applet = imports.ui.applet;
const Mainloop = imports.mainloop;
const St = imports.gi.St;
const GLib = imports.gi.GLib;

function MyApplet(metadata, orientation, panelHeight, instanceId) {
    this._init(metadata, orientation, panelHeight, instanceId);
}

MyApplet.prototype = {
    __proto__: Applet.TextApplet.prototype,

    _init: function(metadata, orientation, panelHeight, instanceId) {
        Applet.TextApplet.prototype._init.call(this, orientation, panelHeight, instanceId);
        this.set_applet_label("Loading...");
        this._updateLoop();
    },

    _updateLoop: function() {
        try {
            let [ok, out, err, exit] = GLib.spawn_command_line_sync(
                GLib.get_home_dir() + '/.local/share/cinnamon/applets/szklarnia@TheLordOfCats/venv/bin/python ' +
                GLib.get_home_dir() + '/.local/share/cinnamon/applets/szklarnia@TheLordOfCats/szklarnia_temperature.py'
            );

            global.log("Applet spawn result: ok=" + ok + ", out=" + out + ", err=" + err + ", exit=" + exit);

            if (ok && out) {
                let result = out.toString().trim();
                this.set_applet_label(result);
            } else {
                this.set_applet_label("Error");
            }
        } catch (e) {
            global.log("Applet script failed: " + e);
            this.set_applet_label("Script failed");
        }

        Mainloop.timeout_add_seconds(180, () => {
            this._updateLoop();
            return false;
        });
    },

    on_applet_clicked: function(event) {
        this.set_applet_label("Updating...");
        Mainloop.timeout_add_seconds(2, () => {
            this._updateLoop();
            return false;
        });
    }

};

function main(metadata, orientation, panelHeight, instanceId) {
    return new MyApplet(metadata, orientation, panelHeight, instanceId);
}