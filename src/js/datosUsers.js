let url = "https://jsonplaceholder.typicode.com/users";

const extraccionUser = async () => {
    try {
        let respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("No se pudo establecer la conexió.")
        }

        let data = await respuesta.json();

        imprimirUser(data);

    } catch (error) {
        console.log(error);
    }
};

extraccionUser();
const imprimirUser = (data) => {
    let body = "";
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td><td>${data[i].address.city}</td></tr>`;
    }
    document.getElementById("data").innerHTML = body;
};
