function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const body =
        `Name: ${name}%0D%0A` +
        `Email: ${email}%0D%0A%0D%0A` +
        `${message}`;

    const mailto =
        `mailto:mounikachandaka3@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${body}`;

    window.location.href = mailto;
}