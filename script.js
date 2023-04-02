function form_alert() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	fname = "First Name: "+fname;
	lname = "Last Name: "+lname;
	phone = "Phone Number: "+phone;
	email = "Email ID: "+email;
	alert(fname+"\n"+lname+"\n"+phone+"\n"+email);
}