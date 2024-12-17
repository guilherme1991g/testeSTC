const url = "http://cluster.apigratis.com/api/v2/login"; // API URL
const method = "POST"; // Request method, change for what's needed


fetch(url, {
    method,
    headers: {
        "Content-Type": "application/json"	 // This is the important part, the auth header
    },


}).then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
    .then((data) => {
        console.log(data)

    })
    .catch((error) => console.error("Fetch error:", error));



