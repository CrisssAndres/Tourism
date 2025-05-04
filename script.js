function submitForm() {
    const name = document.getElementById("name").value;
    const msg = document.getElementById("message").value;
    alert(`Thank you, ${name}! Your message has been received:\n"${msg}"`);
}
