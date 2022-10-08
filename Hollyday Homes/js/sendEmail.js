function sendEmail() {
    console.log("Email sent!");
    // Email.send({
    //     Host: "smtp.elasticemail.com",
    //     Username: "africanscenery@gmail.com",
    //     Password: "3EC303108BAB7C13E87B9809DE971892DFEC",
    //     To: "africanscenery@gmail.com",
    //     From: document.getElementById("email").value,
    //     Subject: "New contact form enquiry",
    //     Body: "Name:" + document.getElementById("name").value
    //         + "<br> E-mail id:" + document.getElementById("email").value
    //         + "<br> phone no:" + document.getElementById("phone").value
    //         + "<br> message:" + document.getElementById("message").value
    // }).then(function (message) {
    //     alert("Mail has been sent successfully")
    // });

    Email.send({
        SecureToken : "7eab0c09-fdf4-45c4-b4e0-79a8d9e077d1",
        To : 'africanscenery@gmail.com',
        From : "jeffersongakuya@gmail.com",
        Subject: "New contact form enquiry",
        Body: "Name:" + document.getElementById("name").value
            + "<br> E-mail id:" + document.getElementById("email").value
            + "<br> phone no:" + document.getElementById("phone").value
            + "<br> message:" + document.getElementById("message").valu
    }).then(
      message => alert(message)
    );
}
