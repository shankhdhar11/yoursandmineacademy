document.addEventListener("DOMContentLoaded", async () => {

    const applybutton = document.getElementById("applybutton");
    const container = document.getElementById("opportunities");

    applybutton.style.display = "none"; // initially hide

    try {

        const res = await fetch("http://127.0.0.1:8000/opportunities");
        const data = await res.json();

        container.innerHTML = "";

        if(data.length === 0){
            applybutton.style.display = "none";
            container.innerHTML="No Vacancies available now."
            return;
        }

        data.forEach(op => {

            container.innerHTML += `
            <div style="border:1px solid black;padding:10px;margin:10px;">
                <h3>${op.heading}</h3>
                <p>${op.description}</p>
            </div>
            `;

        });

        // opportunities mil gayi → button show
        applybutton.style.display = "flex";
        

    } catch(error){
        console.error("Error loading opportunities:", error);
    }

});


const applybutton = document.getElementById("applybutton");
const section4 = document.getElementById("section4");
const closebtn = document.getElementById("close");

applybutton.addEventListener("click", function(){
    section4.style.display = "flex";
});

closebtn.addEventListener("click", function(){
    section4.style.display = "none";
});