const { request } = require("request");

    const token = "4962a431d48bdc7d85fbe39d430f8421191f6f6c9fe4593529cd9295177dc37c8e7f2a2e7d5bd7ab42258b1752a624c857cfa950a931fc1b822fd6885c847a2265c80bab40556abd4b8c782e08d8450108f990417ef0f723e7c3998def8b61668fdda80c0bd818be85f295a3641d8bf85857f054461c0992d50c8f4dc48eb149cbe5f5690d95d69d9c05fe92864c2ed4"; // API Token
    
    var options = {
      'method': 'GET',
      'url': 'https://api.hinova.com.br/api/sga/v2/veiculo/buscar/pfc7899/placa',
      'headers': {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"	
      },
      formData: {
    
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      alert(response.body);
    });
