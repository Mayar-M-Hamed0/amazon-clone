$(document).ready(function() {
  console.log("hi")
    let email = $("#mop-mail");

    let password = $("#password");
    let repassword = $("#repass");
    let un=$("#name")
    console.log(password.val(),repassword.val(),un)

    let registerBtn = $("#btnss");


    registerBtn.on("click", register);
  
    function register(e) {
      e.preventDefault();
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // const namereg=/^[a-zA-Z_-]{3,16}/
      const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
  
      if (email.val() === "" || password.val() === ""|| un.val() === ""||repassword.val()==="") {
      

       alert("fill your data")



        
      } else {
      }if (!emailRegex.test(email.val()) ) {



       $("#mail-error").html("worng email")


      }else if (!passwordRegex.test(password.val())) {

              $("#passerr").html("password must be minmum 8 charcters ")
      
      } 
       else if(password.val()!=repassword.val()){
        $("#repasserr").html("the password isn't identical")
       }
      
      else {
  
  
        localStorage.setItem("email", email.val());
        localStorage.setItem("password", password.val());
        localStorage.setItem("username", un.val());
  
        setTimeout(function() {
          window.location = "login.html";
        }, 1500);
      }
        
    }
  });
  