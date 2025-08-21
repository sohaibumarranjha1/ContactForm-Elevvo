document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!fullName || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
});
