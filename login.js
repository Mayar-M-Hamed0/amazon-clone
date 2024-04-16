$(document).ready(function() {

    let loginBtn = $("#login");
    
    
    let username=$("#username1")
   
    
    loginBtn.on("click", function(e) {
      e.preventDefault();
  
      let email = $("#mop-mail");

    let password = $("#password");
    
    let un= localStorage.getItem("username")

      let mail = localStorage.getItem("email");
      let getPassword = localStorage.getItem("password");
  
      if (email === "" || password === "" ) {
       
       alert("fill the data")


      }   else {   

        if (email.val() === mail &&  password.val() === getPassword ) {
          username.addClass("d-non")
          $("#newname").html(un)
          setTimeout(() => {
            window.location = "Home.html";
          }, 1500);
        } else {



         $("#invalid-user").html("invalid user")
          }
          




        
      }
    });
  });
  