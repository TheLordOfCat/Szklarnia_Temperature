import requests

def get_temperature():
    url = "https://szklarniapwr.pl/data.json"
    response = requests.get(url)
    response.raise_for_status()  # will raise error if request fails
    data = response.json()
    return data["temperature"]

if __name__ == "__main__":
    print(get_temperature())
