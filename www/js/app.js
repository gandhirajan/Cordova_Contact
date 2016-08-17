$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {		
     $('#contact').click( function() 
		{	
		    try {				
				var contact = navigator.contacts.create({"displayName": "CordovaUser"});
				var phoneNumbers = [];
				phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
				phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
				phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
				contact.phoneNumbers = phoneNumbers;				
				contact.save();
				alert("Contact created successfully");
			}
			catch(err) {
				alert("Plugin Error - " + err.message);
			}
			
		});		
}