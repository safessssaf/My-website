// Initialize EmailJS
(function() {
    emailjs.init("NTEGw4pfLfqFd5g52");
})();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form_1");

    if (!form) return;

    // 'true' uses the capture phase to intercept before Fluent Forms scripts trigger
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation(); // Blocks Fluent Forms backend AJAX handlers

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            title: document.getElementById("country").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_80lenfa", "template_xnjasld", templateParams)
            .then(function(response) {
                alert("Email sent successfully!");
                console.log("SUCCESS!", response.status, response.text);
                form.reset();
            }, function(error) {
                alert("Failed to send email. Check console for details.");
                console.error("FAILED...", error);
            });
    }, true);
});