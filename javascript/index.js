let table = document.getElementById('listofemployee')
let login_Form = document.getElementById('loginForm')
let navbtn = document.getElementById('navBtn')
let nav = document.getElementById('nav')
let listofemployee = [
    { id: 1, name: "ahmad", sallary: 23 },
    { id: 2, name: "kabir", sallary: 43 },
    { id: 3, name: "nazir", sallary: 53 },
    { id: 3, name: "samim", sallary: 13 },
    { id: 1, name: "ahmad", sallary: 23 },
    { id: 2, name: "kabir", sallary: 43 },
    { id: 3, name: "nazir", sallary: 53 },
    { id: 3, name: "samim", sallary: 13 },
    { id: 1, name: "ahmad", sallary: 23 },
    { id: 2, name: "kabir", sallary: 43 },
    { id: 3, name: "nazir", sallary: 53 },
    { id: 3, name: "samim", sallary: 13 },
    { id: 1, name: "ahmad", sallary: 23 },
    { id: 2, name: "kabir", sallary: 43 },
    { id: 3, name: "nazir", sallary: 53 },
    { id: 3, name: "samim", sallary: 13 },
    { id: 1, name: "ahmad", sallary: 23 },
    { id: 2, name: "kabir", sallary: 43 },
    { id: 3, name: "nazir", sallary: 53 },
    { id: 3, name: "samim", sallary: 13 },
    { id: 1, name: "ahmad", sallary: 23 },
    { id: 2, name: "kabir", sallary: 43 },
    { id: 3, name: "nazir", sallary: 53 },
    { id: 3, name: "samim", sallary: 13 },
    { id: 1, name: "ahmad", sallary: 23 },
    { id: 2, name: "kabir", sallary: 43 },
    { id: 3, name: "nazir", sallary: 53 },
    { id: 3, name: "samim", sallary: 13 },
    { id: 1, name: "ahmad", sallary: 23 },
    { id: 2, name: "kabir", sallary: 43 },
    { id: 3, name: "nazir", sallary: 53 },
    { id: 3, name: "samim", sallary: 13 }
]

let list_of_Employee_Server = JSON.stringify(listofemployee)

let Object_of_Employee = JSON.parse(list_of_Employee_Server)



// function h1Clicked() {
//     console.log(Object_of_Employee)

//     Object_of_Employee.map((item, index) => {
//         table.innerHTML += `<tr>
//             <td>${index + 1}</td>
//             <td>${item.id}</td>
//             <td>${item.name}</td>
//             <td>${item.sallary}</td>
//         </tr>`
//     })


// }




// login_Form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let username = event.target[0].value;
//     let password = event.target[1].value;


//     if (username = "sam" && password === "sam") {
//         window.location = '/pages/home.html'
//     }
//     else {
//         let erro = document.getElementById("error")
//         erro.innerHTML = "Incorrect User Name and Password"
//     }
// });

// login_Form.addEventListener("", () => {
//     alert("mouce enter")
// }, { once: true })

navbtn.addEventListener("mouseup", () => {

    nav.classList.toggle('open');
})