# Szklarnia_Temperature

This project creates a little applet which displays temperature inside the Politechinka Wrocławska Greenhouse (glass part of C-13 building).

# Install tutorial
1. Download the repository and unzipp it
2. Then go to /.local/share/cinnamon/applets and there create folder named:"szklarnia@TheLordOfCats"
3. Move the unzipped files there
4. Create a python venv, by opening this terminal in the folder /.local/share/cinnamon/applets/szklarnia@TheLordOfCats and typing "python3 -m venv venv"
5. Then activate the venv, by typing "source venv/bin/activate"
6. Install library requests, "pip install requests"
7. Deactivate the venv, "deactivate"
8. Open apltes, select the applet "Szklarnia PWr Temperature" and press "+" button at the bottom of the window
9. Press Alt + F2, then type "r" and hit enter

# Addtional info
You can change the name of the venv, but remember to update the paths in applet.js. You can also adjust the refresh rate of the temperature, standard is 15 minutes.

# Origins
The project idea was given to me by my good friend Wfa. Thx!!!