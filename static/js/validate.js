	function validateText() {
   			 var x = document.getElementById("fname");
   			 var y = document.getElementById("lname");
   			 var z = document.getElementById("phone");
   			 var a = document.getElementById("roll");
   			 var phoneno = /^\d{10}$/;
    		 if ( /[^a-zA-Z\-\/]/.test( x.value ) || x.value=="" || x.value>=0 ) {
       		 x.setCustomValidity("Invalid Entry");
       		}
       		else{
       			x.setCustomValidity("");
       		}


       		if ( /[^a-zA-Z\-\/]/.test( y.value ) || y.value=="" || y.value>=0) {
       		 y.setCustomValidity("Invalid Entry");
       		}
       		else{
       			y.setCustomValidity("");
       			if(x.value == y.value){
       				y.setCustomValidity("Last Name Can't be Same as First Name");
       			}
       		}

       		if(z.value.match(phoneno)){
       			z.setCustomValidity("");
       		}
       		else{
       			z.setCustomValidity("Phone No. Should be of 10 digit");
       		}

       		if(a.value.match(phoneno)){
       			a.setCustomValidity("");
       		}
       		else{
       			a.setCustomValidity("Please Enter a Valid Roll Number");
       		}
} 