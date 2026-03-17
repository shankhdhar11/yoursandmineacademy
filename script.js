menubtn=document.getElementById("menu");
navlistdiv=document.getElementById("navlistdiv");
crossbtn=document.getElementById("crossbtn");
const menulist=()=>{
    navlistdiv.style.display="block";
    menubtn.style.display="none";
    crossbtn.style.display="block";
}
const crosslist=()=>{
    navlistdiv.style.display="none";
    menubtn.style.display="block";
    crossbtn.style.display="none";
}


const authenticationpage = () => {
    window.open("authentication.html", "_blank");
}


const facebook=document.getElementById("facebook");
const instagram=document.getElementById("instagram");
const linkedin=document.getElementById("linkedin");
const twitter=document.getElementById("twitter");
const youtube=document.getElementById("youtube");

const insta= () =>{
    window.open("https://www.instagram.com/yoursandmine.academy/" , "_blank");
}
const fb= () =>{
    window.open("https://www.facebook.com/profile.php?id=61558448406506" , "_blank");
}
const twit= () =>{
    window.open("https://x.com/yoursmi93497726" , "_blank");
}
const linkdn= () =>{
    window.open("https://www.linkedin.com/company/y-m-academy/" , "_blank");
}
const yt= () =>{
    window.open("https://youtube.com/@yandmacademy?si=-q2eK4M7Ign5-3SR" , "_blank");
}




const getaquotebtn=document.getElementById("getaquotebtn");

const contactustransfer=() =>{
    window.location.href="contactus.html";
}

const coursestransfer=() =>{
    window.location.href="courses.html";
}

const makeCall = () => {
    window.location.href = "tel:8076009799";
};