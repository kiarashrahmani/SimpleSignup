document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", function () {
        // Validate the form
        var isValid = validateForm();

        // If the form is valid, proceed with the AJAX request
        if (isValid) {
            // Get form data
            var formData = getFormData();

            // Send an AJAX request
            $.ajax({
                type: 'POST',
                url: '/save',
                contentType: 'application/json',
                data: JSON.stringify(formData),
                success: function (data) {
                    // Handle success, e.g., display a success message
                    console.log('Form submitted successfully:', data);
                },
                error: function (error) {
                    // Handle errors, e.g., display an error message
                    console.error('Error submitting form:', error);
                }
            });
        }
    });
});

function validateForm() {
    var firstname = document.getElementById("Firstname").value;
    var lastname = document.getElementById("Lastname").value;
    var email = document.getElementById("Email").value;
    var maritalStatus = document.getElementById("Marital").value;
    var password = document.getElementById("Password").value;
    var URL = document.getElementById("URL").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var date = document.getElementById("date").value;
    var ipAddress = document.getElementById("ipAddress").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var username = document.getElementById("username").value;
    var hexColor = document.getElementById("hexColor").value;
    var zipCode = document.getElementById("zipCode").value;

    // Basic validation, you can add more specific checks as needed
    if (firstname.trim() === "" || lastname.trim() === "" || !isValidEmail(email)) {
        alert("Please fill in all the required fields and provide a valid email address.");
        return false;
    } else if (!isStrongPassword(password)) {
        alert("Please enter a stronger password");
        return false;
    } else if (!isValidURL(URL)) {
        alert("Please enter a valid URL");
        return false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
        alert("Please enter a valid Phone number");
        return false;
    } else if (!isValidDate(date)) {
        alert("Please enter a valid Date");
        return false;
    } else if (!isValidIPAddress(ipAddress)) {
        alert("Please enter a valid IPAddress");
        return false;
    } else if (!isValidCreditCardNumber(cardNumber)) {
        alert("Please enter a valid CreditCardNumber");
        return false;
    } else if (!isValidUsername(username)) {
        alert("Please enter a valid Username");
        return false;
    } else if (!isValidHexColorCode(hexColor)) {
        alert("Please enter a valid HexColorCode");
        return false;
    } else if (!isValidZIPCode(zipCode)) {
        alert("Please enter a valid ZIPCode");
        return false;
    }

    // Form is valid
    return true;
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
    return /^\d{10}$/.test(zipCode);
}

function getFormData() {
    var form = document.getElementById('signupForm');
    var formData = {};

    // Extract form data dynamically
    $(form).serializeArray().forEach(function (field) {
        formData[field.name] = field.value;
    });

    return formData;
}
