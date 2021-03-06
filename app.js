
function save() {
  var info = {}; 

  
  info.fname = document.getElementById("fname").value;
  info.lname = document.getElementById("lname").value;
  info.address = document.getElementById("address").value;
  info.dietary = document.getElementById("dietary").value;
  info.phone = document.getElementById("phone").value;

  if (
    info.fname === "" ||
    info.lname === "" ||
    info.address === "" ||
    info.dietary === "" ||
    info.phone === ""
  ) {
    alert("Fields must be fill out first");
    return;
  }

 
  console.log(info);

  
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var address = document.getElementById("address").value;
  var dietary = document.getElementById("dietary").value;
  var phone = document.getElementById("phone").value;
  
  localStorage.setItem("First Name", fname);
  localStorage.setItem("Last Name", lname);
  localStorage.setItem("Address", address);
  localStorage.setItem("Dietary", dietary);
  localStorage.setItem("Phone Number", phone);

  
  localStorage.setItem("Info", JSON.stringify(info));
}


function deleteElement() {
  localStorage.removeItem("First Name");
  localStorage.removeItem("Last Name");
  localStorage.removeItem("Address");
  localStorage.removeItem("Dietary Requirements");
  localStorage.removeItem("Phone Number");
  localStorage.removeItem("Info");
  readAll();
}


function readAll() {
  
  var formLocalStorage = JSON.parse(localStorage.getItem("Info"));

  if (formLocalStorage === null) {
   
    document.getElementById("display-data").innerHTML =
      "Sorry, no data to show";
  } else {
    document.getElementById(
      "display-data"
    ).innerHTML = `<h4>User Information:</h4>
                 First Name: ${formLocalStorage.fname}<br> 
                 Last Name: ${formLocalStorage.lname}<br>
                 Address: ${formLocalStorage.address}<br>
                 Dietary Requirements:  ${formLocalStorage.dietary}<br>
                 Phone Number: ${formLocalStorage.phone}`;
  }
  document.getElementById("display-data").removeAttribute("hidden");
}
