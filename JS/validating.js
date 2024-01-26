        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("button").addEventListener("click", function() {
                validateForm();
            });
        });

        function validateForm() {
            var firstname = document.getElementById("Firstname").value;
            var lastname = document.getElementById("Lastname").value;
            var email = document.getElementById("Email").value;
            var maritalStatus = document.getElementById("Marital").value;

            // Basic validation, you can add more specific checks as needed
            if (firstname.trim() === "" || lastname.trim() === "" || !isValidEmail(email)) {
                alert("Please fill in all the required fields and provide a valid email address.");
            } else {
                // Form is valid, you can proceed with form submission or other actions
                alert("Form submitted successfully!\nFirstname: " + firstname + "\nLastname: " + lastname + "\nEmail: " + email + "\nMarital Status: " + maritalStatus);
                // Add further processing or form submission logic here
            }
        }

        function isValidEmail(email) {
            // Simple email validation regex
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
}
    

        function isStrongPassword(password) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
        }
        function isValidURL(url) {
            return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
        }
        function isValidPhoneNumber(phoneNumber) {
            return /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/.test(phoneNumber);
        }
        function isValidDate(date) {
            return /^\d{4}-\d{2}-\d{2}$/.test(date);
        }
        function isValidIPAddress(ipAddress) {
            return /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/.test(ipAddress);
        }
        function isValidCreditCardNumber(cardNumber) {
            return /^\d{12,19}$/.test(cardNumber);
        }
        function isValidUsername(username) {
            return /^[a-zA-Z0-9_]{3,16}$/.test(username);
        }
        function isValidHexColorCode(hexColor) {
            return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(hexColor);
        }
        function isValidZIPCode(zipCode) {
            return /^\d{5}(-\d{4})?$/.test(zipCode);
        }