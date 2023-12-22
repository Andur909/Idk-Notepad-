window.addEventListener("load",events);
var fullname
var fname
var lname
var output
var saludation

function events()
{
	document.getElementById("inFname").focus();
	document.getElementById("btnSubmit").addEventListener("click", submit);
	document.getElementById("btnClear").addEventListener("click", clear);
}

function submit()
{

	saludation = document.getElementById("cmbsalute").selectedIndex;
	fname = document.getElementById("inFname").value;
	lname = document.getElementById("inLname").value;
	if (fname != "" && lname != "") 
	{
		fullname = fname + " " + lname;
		alert(fullname);
	} else {
		alert("Missing first/last name");
	}
	
	switch(saludation)
	{
		case 0:
			alert("Saludation required");
			saludation = "N/A";
			break;
		case 1:
			saludation = "Mr.";
			break;
		case 2:
			saludation = "Ms.";
			break;
		case 3:
			saludation = "Mrs.";
			break;
		case 4:
			saludation = "Dr.";
			break;
		default:
			alert("Saludation Required");
			saludation = "N/A";
			break;
	}
	
	if (saludation != "N/A") {		
		output = saludation + " " + fname + " " + lname;
		document.getElementById("lbloutput").innerHTML = output;
	}
}

function clear()
{
	document.getElementById("inFname").value = "";
	document.getElementById("inLname").value = "";
	document.getElementById("inFname").focus();
	document.getElementById("cmbsalute").selectedIndex = 0;
}