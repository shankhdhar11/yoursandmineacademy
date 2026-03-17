document.addEventListener("DOMContentLoaded", () => {

    const token = localStorage.getItem("admin_token");

    const loginSection = document.getElementById("login-section");
    const adminPanel = document.getElementById("admin-panel");

    if(token){

        loginSection.style.display = "none";
        adminPanel.style.display = "block";

        loadOpportunities();

    }else{

        loginSection.style.display = "block";
        adminPanel.style.display = "none";

    }

});


async function login(){

    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    const res = await fetch("https://yoursandmineacademy.onrender.com/login",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({username,password})

    });

    const data = await res.json();

    if(data.status === "success"){

        localStorage.setItem("admin_token",data.token);

        alert("Login success");

        location.reload();

    }else{

        alert("Login failed");

    }

}


async function updateEvent(){

    const heading = document.getElementById("event-heading").value;
    const description = document.getElementById("event-description").value;

    const token = localStorage.getItem("admin_token");

    const res = await fetch("https://yoursandmineacademy.onrender.com/admin/update-event",{

        method:"POST",

        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },

        body:JSON.stringify({heading,description})

    });

    const data = await res.json();

    alert(data.status);

}


async function updateOffer(){

    const heading = document.getElementById("offer-heading").value;
    const description = document.getElementById("offer-description").value;

    const token = localStorage.getItem("admin_token");

    const res = await fetch("https://yoursandmineacademy.onrender.com/admin/update-offer",{

        method:"POST",

        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },

        body:JSON.stringify({heading,description})

    });

    const data = await res.json();

    alert(data.status);

}


async function addOpportunity(){

    const heading = document.getElementById("heading").value;
    const description = document.getElementById("description").value;

    const token = localStorage.getItem("admin_token");

    const res = await fetch("https://yoursandmineacademy.onrender.com/admin/add-opportunity",{

        method:"POST",

        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },

        body:JSON.stringify({heading,description})

    });

    const data = await res.json();

    alert(data.status);

    loadOpportunities();

}


async function loadOpportunities(){

    const res = await fetch("https://yoursandmineacademy.onrender.com/opportunities");

    const data = await res.json();

    const container = document.getElementById("opportunities-list");

    container.innerHTML = "";

    data.forEach(op => {

        container.innerHTML += `

        <div style="border:1px solid black;padding:10px;margin:10px;">

        <h3>${op.heading}</h3>

        <p>${op.description}</p>
        <br>
        <button onclick="deleteOpportunity(${op.id})" class="loginbutton" >Delete</button>

        </div>

        `;

    });

}


async function deleteOpportunity(id){

    const token = localStorage.getItem("admin_token");

    const res = await fetch(`https://yoursandmineacademy.onrender.com/admin/delete-opportunity/${id}`,{

        method:"DELETE",

        headers:{
            "Authorization":`Bearer ${token}`
        }

    });

    const data = await res.json();

    alert(data.status);

    loadOpportunities();

}


function logout(){

    localStorage.removeItem("admin_token");
    alert(
        "logged out successfully"
    );

    window.location.href="index.html";

}
