const url = "http://ap3.stc.srv.br/integration/prod/ws/vehicle/update"; // API URL
const method = "POST"; // Request method, change for what's needed

const update = {
    key: 'd4cc8469585856eb0e1161559ebb0dcd',
    id: "511538563",
    manufacture: "st",
    lisencePlate: "chs0053",
    status: "1",

};

fetch(url, {
    method,
    headers: {
        "Content-Type": "application/json"	 // This is the important part, the auth header
    },

    body: JSON.stringify(update),

}).then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
    .then((data) => {

        for (i=5 ; i>0 ; i--){

        var placa = data
        console.log(placa)
        }
    })
    .catch((error) => console.error("Fetch error:", error));



