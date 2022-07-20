let users = [];
function signup() {
    // let message = document.getElementsById('Thanks');
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    let address = document.getElementById('address').value;

    if (password === confirmpassword) {
        // get details from signup inputs
        let newUser = {
            user_firstname: firstname,
            user_lastname: lastname,
            user_email: email,
            user_password: password,
            user_address: address,
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].user_email === email) {
                alert("Email already exists");
                return;
            }
        }
        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "./login.html";
    }
    else {
        alert("Password does not match");
    }
    // message.innerHTML = "Thanks" +" "+lastname + " " + "is successfully sign up";
    // console.log(message);

}

function login() {
    let login_email = document.getElementById('login_email').value;
    let login_password = document.getElementById('login_password').value;

    let isMatch = false;

    for (let i = 0; i < users.length; i++) {

        if (users[i].user_email === login_email) {

            if (users[i].user_password === login_password) {
                localStorage.setItem("logged in", JSON.stringify(users[i]))
                isMatch = true;
                window.location.href = "./home.html";
                break
            }
        }
    }

    if (!isMatch) {
        alert("your email or password is incorrect");
    }
}
function logout() {

    localStorage.removeItem("logged in");
    window.location.href = "./login.html";

}