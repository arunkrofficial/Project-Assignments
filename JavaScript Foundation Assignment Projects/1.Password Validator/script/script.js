function passwordValidator() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    console.log(password,confirmPassword);
    let msg = document.getElementById("msg");

    if(password.length != 0){
        if(password == confirmPassword){
            msg.textContent = "Password Match";
            msg.style.backgroundColor = "#008000"
        }
        else{
            msg.textContent = "Password don't Match";
            msg.style.backgroundColor = "#ff0000"
        }
    }
    else{
        alert("Password can't be empty");
        msg.textContent = ""
    }
}