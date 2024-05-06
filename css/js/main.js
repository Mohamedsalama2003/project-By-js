function vaildate(){
    var user = document.getElementById('user').value;
   var email = document.getElementById('email').value;
     var pass = document.getElementById('pass').value;
    var confirmPass = document.getElementById('confirm').value;
    var result = document.getElementById('result');
    
    
   result.setAttribute("class","coder");
    
   if(user=="" && email=="" && pass=="" && confirmPass==""){
        result.innerHTML = "Enter Data In Form";
        return false;
    }else if (user.length <5 || user.length>15){
     result.innerHTML = "Enter 5-15 char in username";
         return false;
    }else if (email.indexOf("@",1)==-1 || email.indexOf(".") ==-1 ){  
          result.innerHTML = "Enter Valid Email";
       return false;
  }else if (pass.length<8){
        result.innerHTML = "Enter atleast 8 char in password";
        document.getElementById("details").innerHTML = "Week";

         return false;
    }else if (confirmPass != pass){
       result.innerHTML = "Matched Password";
         return false;
    }else {
         return true;
    }

 }