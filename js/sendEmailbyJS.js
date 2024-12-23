// JavaScript Document

	function sendEmailbyJS() {
				
			var username = document.getElementById("username").value;
        	var email    = document.getElementById("email").value;
        	var subject  = document.getElementById("subject").value;
        	var message  = document.getElementById("message").value;
		
		    var templateParams = {
    			user_name: username,
				user_email: email,
				user_subject:  subject,
				user_message: message
			};
           
			
			var emailMessage = document.getElementById("email-message");

            const serviceId = "service_f4hbsy6";
            const templateId = "template_gab3dh7";            
            const publicKey = "r5JfYe93cOJxAgE4k";

            emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then (
                res => {
					// reset the Contact Form
					document.getElementById("contactForm").reset();
					                    
                    // console.log(res);
                    console.log('Email Sent SUCCESS!');
					emailMessage.textContent = "Email 發送成功!";
                   
                })
            .catch(
                err => {
                  console.log('Email Sent FAIL!');
                  emailMessage.textContent = "Email 發送失敗!";
               });
    }                    