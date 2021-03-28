import requests

url = "http://127.0.0.1:8000/teamapi"

payload={'id': 'sdfsdfsdfdsfsdf'}
files=[

]
headers = {
  'Authorization': 'Basic YWRtaW46YWRtaW4='
}

response = requests.request("DELETE", url, headers=headers, data=payload, files=files)

print(response.text)