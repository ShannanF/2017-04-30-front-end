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
    $("#loginBtn").click(function(event) {
    	event.preventDefault()
    	var username = $("#username").val();
    	var password = $('#password').val();
    	if (username && password) {
    		$.post("http://open-commerce.herokuapp.com/api/login", {
    			username: username,
    			password: password
    		},
    		function(response) {
    			if (response.success) {
    				var cookie = "x-access-token=" + response.token;
    				document.cookie = cookie; 
    				window.location.href = "/index.html";

    			} else {
    				alert(response.message);
    			}
    		});

    	} else {
    		alert("please provide a username and password for login!");
    	} 
    });

});
