const signup = document.getElementById("singup");
const login_form = document.getElementById("login");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const Email = document.getElementById("Email")
const Password = document.getElementById("Password")
const Homepages = document.getElementById("Homepage")
 
const registers = ()=>{

    if(fName.value === "" || lName.value === "" || Email.value === "" || Password.value === "" ){
        
        return alert("please fill all fields")
    }
}
const Homepage = ()=>{
    console.log("working");
    window.location.href = "./Homepage.html"
}



const register =()=> {
    
    if(fName.value === "" || lName.value === "" || Email.value === "" || Password.value === "" ){
        
        return alert("please fill all fields")
    }
}




login_form.style.display = "none"
function login(){

signup.style.display = "block"
login_form.style.display = "none"
}

const singup = ()=>{
    
    login_form.style.display = "block"
    signup.style.display = "none"
}