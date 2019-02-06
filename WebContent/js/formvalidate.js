function validate()
{
	if(document.myform.uname.value=="")
	{
		alert("Please provide Your Name");
		document.myform.uname.focus();
		return false;
	}
		
	if(document.myform.email.value=="")
	{
		alert("Please provide Your Email-id");
		document.myform.email.focus();
		return false;
	}
	
	if(document.myform.email.value=="")
	{
		alert("Please provide Your Email-id");
		document.myform.email.focus();
		return false;
	}
		
	if(document.myform.mobno.value.length<10){
		mobno.className="wrong-input";
	alert("Please Provide a Contact Number of 10 digits!");
	document.myform.mobno.focus();
	
	return false;
	}

	
	if(document.myform.pass1.value.length<5){
		pass1.className="wrong-input";
	alert("Enter your Password ");
	document.myform.pass1.focus();
	return false;
	}

	if(document.myform.pass1.value!=pass2.value){
		pass2.className="wrong-input";
	alert("Password Mismatch");
	document.myform.pass2.focus();
	return false;
	}
	return true;
}
