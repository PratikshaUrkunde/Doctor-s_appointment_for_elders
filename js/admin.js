const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        swal("Good job!", "Admin have successfully logged in!", "success");
        //alert("Admin have successfully logged in.");
        window.location.href='book.html';
    } else {
        swal("Oops!", "Invalid username and password!", "error");
       // alert("Invalid username and password")
    }
})