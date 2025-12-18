// send-email.js
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contact-form");

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		// Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS Service and Template IDs.
		emailjs
			.sendForm("agyat_contact_service", "agyat_contact_form", form)
			.then(
				function (response) {
					console.log("SUCCESS!", response.status, response.text);
					alert("Message sent successfully!");
					form.reset();
				},
				function (error) {
					console.error("FAILED...", error);
					alert("Failed to send message. Please try again later.");
				}
			);
	});
});
