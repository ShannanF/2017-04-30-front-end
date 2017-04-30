$(document).ready(function() {
    // console.log("lalala");

    $("#signupBtn").click(function(event) {
        // alert("sign up btn clicked!");
        // console.log(event);
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username + "" + password);

        if (username && password) {
            //AJAX
            $.post("http://open-commerce.herokuapp.com/api/signup", {

                    username: username,
                    password: password,
                },
                function(response) {
                    // console.log(response);
                    if (response.success) {
                        alert("signup successful!");
                    } else {
                        alert(response.message);
                    }
                }

            );

        } else {
            alert("please provide a username and password for signup!");
        }
    });

});
