import requests

url = "https://demo.sgp.net.br/api/ura/contrato/termoaceite/{idcontrato}"

payload={'token': '06907913-de63-49be-895c-80be5b021cf9',
'aceite': 'sim'}
files=[

]
headers = {}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)