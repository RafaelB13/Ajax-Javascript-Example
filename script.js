//Variaveis
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const form = document.getElementById("form")

const btnReceber = document.querySelector("#receber")
const list = document.querySelector("#list")

//Evento do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault()

    //Objeto
    let dados = {
        nome: nome.value,
        email: email.value
    }

    //Requisição Ajax
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(dados)
    })
        .then((response) => {//Promise
            if (response.ok) {
                alert("Enviado com sucesso \nStatus code: " + response.status)
            } else {
                alert("Error \nStatus code: " +
                    response.status)
            }
            return response.json()
        }).then((response) => {
            console.log(response)
        })

})

//Event botão receber
btnReceber.addEventListener("click", (event) => {
    event.preventDefault()
    //Requisição Ajax 
    fetch('https://reqres.in/api/users?page=2')
        .then((response) => {
            if (response.ok) {
                alert("Sucesso \nStatus code: " +response.status)
            }else{
                alert("Erro\nStatus code: "+response.status)
            }
            return response.json();
        })
        .then((response) => {  //Promise
            response.data.forEach((user) => {
                let item = document.createElement("li")
                item.classList.add("item")
                item.innerHTML = '<img src="' + user.avatar + '" /> <span>' + user.first_name + '</span>'
                list.appendChild(item)


            })
        })
})

