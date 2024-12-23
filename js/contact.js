$(function () {

    $("#myContactForm input, #myContactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {

            event.preventDefault();

            var username = $("input#username").val();
            var useremail = $("input#useremail").val();
            var usersubject = $("input#usersubject").val();
            var usermessage = $("textarea#usermessage").val();

            var msg = "Data : " + username + '|' + useremail + '|' + usersubject + '|' + usermessage;
            console.log(msg);

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

		    var templateParams = {
    			user_name: username,
				user_email: useremail,
				user_subject:  usersubject,
				user_message: usermessage
			};
           
			
            const serviceId = "service_f4hbsy6";
            const templateId = "template_gab3dh7";            
            const publicKey = "r5JfYe93cOJxAgE4k";

            console.log("msg : Call EmailJS ...");

            emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then (
                res => {
						                    
                    // console.log(res);
                    console.log('msg : Email Sent SUCCESS!');
					SendSuccessFunc ();
                   
                })
            .catch(
                err => {
                  console.log(': Email Sent FAIL!');
                  SendFailFunc ();
                  
               });

        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    console.log("msg : waiting for submit, Stand by ... ");

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('input#username').focus(function () {
    $('#success').html('');
});

function SendSuccessFunc () {
    $('#success').html("<div class='alert alert-success'>");
    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
    $('#success > .alert-success')
            .append("<strong>您的訊息已發送成功! </strong>");
    $('#success > .alert-success')
            .append('</div>');
    $('#myContactForm').trigger("reset");
};

function SendFailFunc () {

    var username = $("input#username").val();
    $('#success').html("<div class='alert alert-danger'>");
    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
    $('#success > .alert-danger').append($("<strong>").text("Sorry: " + username + ",似乎我們的Mail主機沒有回應， 請稍侯再試一次!"));
    $('#success > .alert-danger').append('</div>');
    $('#myContactForm').trigger("reset");
};

function SendCompleteFunc () {
    $this = $("#sendMessageButton");
    $this.prop("disabled", false);
};
