document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbx3sd6TELLcc3adt5TdOdJlz27QRvL7wF_OQo_KmJLXRw1YnRHhf2siGoDo6n3KiPH_/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.text())
    .then(data => alert("Message Sent Successfully"))
    .catch(error => alert("Error Sending Message"));
});
