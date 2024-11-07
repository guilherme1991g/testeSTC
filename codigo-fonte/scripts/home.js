const { request } = require("request");

    const token = "c4f162f7f90c2713ab536ff04a8ffe2edc15019d0ee567a9e720b7b7b30d6fb33b373c89c6ce2df9b3337b41b8c1496bab95ab487ee1b8933365d3a15414501e919c3306ef7e64f83674bd8f6e68b975"; // API Token
    
    var options = {
      'method': 'GET',
      'url': 'https://api.hinova.com.br/api/sga/v2/veiculo/buscar/pfc7899/placa',
      'headers': {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"	
      },
      formData: {
        "usuario": "guilherme1991g",
        "senha": "Gui1991g"
    
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      alert(response.body);
    });
