let fullname = document.getElementById("fullname");
let phonenumber = document.getElementById("phonenumber");
let address = document.getElementById("address");
let proposedcity = document.getElementById("proposedcity");
let proposedaddress = document.getElementById("proposedaddress");
let proposedlocation = document.getElementById("proposedlocation");
let proposedlocationphotos = document.getElementById("proposedlocationphotos");

let nameerror = document.getElementById("nameerror");
let phonenumbererror = document.getElementById("phonenumbererror");
let addresserror = document.getElementById("addresserror");
let cityerror = document.getElementById("cityerror");
let proposedaddresserror = document.getElementById("proposedaddresserror");
let proposedlocationerror = document.getElementById("proposedlocationerror");
let proposedlocationphotoserror = document.getElementById("proposedlocationphotoserror");

let formmessage = document.getElementById("formmessage");


const formvalidation = () => {

    let iserror = false;

    /* NAME */
    if(fullname.value.trim() === ""){
        nameerror.innerHTML = "Please enter your name!";
        nameerror.style.color = "red";
        iserror = true;
    } else {
        nameerror.innerHTML = "";
    }

    /* PHONE */
    if(phonenumber.value.trim() === ""){
        phonenumbererror.innerHTML = "Please enter your phone number!";
        phonenumbererror.style.color = "red";
        iserror = true;
    } 
    else if(!/^[0-9]{10}$/.test(phonenumber.value)){
        phonenumbererror.innerHTML = "Enter valid 10-digit phone number!";
        phonenumbererror.style.color = "red";
        iserror = true;
    } 
    else {
        phonenumbererror.innerHTML = "";
    }

    /* ADDRESS */
    if(address.value.trim() === ""){
        addresserror.innerHTML = "Please enter your address!";
        addresserror.style.color = "red";
        iserror = true;
    } else {
        addresserror.innerHTML = "";
    }

    /* CITY */
    if(proposedcity.value.trim() === ""){
        cityerror.innerHTML = "Please enter proposed city!";
        cityerror.style.color = "red";
        iserror = true;
    } else {
        cityerror.innerHTML = "";
    }

    /* PROPOSED ADDRESS */
    if(proposedaddress.value.trim() === ""){
        proposedaddresserror.innerHTML = "Please enter proposed address!";
        proposedaddresserror.style.color = "red";
        iserror = true;
    } else {
        proposedaddresserror.innerHTML = "";
    }

    /* LOCATION URL */
    if(proposedlocation.value.trim() === ""){
        proposedlocationerror.innerHTML = "Please enter location URL!";
        proposedlocationerror.style.color = "red";
        iserror = true;
    } 
    else if(!proposedlocation.value.startsWith("http")){
        proposedlocationerror.innerHTML = "Enter valid URL!";
        proposedlocationerror.style.color = "red";
        iserror = true;
    } 
    else {
        proposedlocationerror.innerHTML = "";
    }

    /* GOOGLE DRIVE LINK CHECK */
    if(proposedlocationphotos.value.trim() === ""){
        proposedlocationphotoserror.innerHTML = "Please enter Google Drive link!";
        proposedlocationphotoserror.style.color = "red";
        iserror = true;
    } 
    else if(!proposedlocationphotos.value.includes("drive.google.com")){
        proposedlocationphotoserror.innerHTML = "Enter valid Google Drive link!";
        proposedlocationphotoserror.style.color = "red";
        iserror = true;
    } 
    else {
        proposedlocationphotoserror.innerHTML = "";
    }

    /* FINAL CHECK */
    if(iserror){
        formmessage.innerHTML = "Kindly fill the form properly!";
        formmessage.style.color = "red";
        return;
    }

    /* WHATSAPP MESSAGE */
    let whatsappurl = "https://wa.me/918076009799?text=" +
        "New Franchise Inquiry %0a" +
        "Name: " + fullname.value + "%0a" +
        "Phone: " + phonenumber.value + "%0a" +
        "Address: " + address.value + "%0a" +
        "Proposed City: " + proposedcity.value + "%0a" +
        "Proposed Address: " + proposedaddress.value + "%0a" +
        "Location URL: " + proposedlocation.value + "%0a" +
        "Location Photos (Drive Link): " + proposedlocationphotos.value + "%0a" +
        "Please check the attached Google Drive link for PDF.";

    formmessage.innerHTML = "Sending Message...";
    formmessage.style.color = "green";

    window.open(whatsappurl, "_blank").focus();

    /* RESET */
    fullname.value = "";
    phonenumber.value = "";
    address.value = "";
    proposedcity.value = "";
    proposedaddress.value = "";
    proposedlocation.value = "";
    proposedlocationphotos.value = "";

    setTimeout(() => {
        formmessage.innerHTML = "";
    }, 2000);
}