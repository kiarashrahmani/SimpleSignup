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
            if (firstname.trim() === "" || lastname.trim() === "" || !isValidEmail(email) ) {
                alert("Please fill in all the required fields and provide a valid email address.");
            }
            else if (!isStrongPassword(password)) {
                 alert("Please enter a stronger password");
            }
            else if (!isValidURL(URL)) {
                 alert("Please enter a valid URL");
            }
            else if (!isValidPhoneNumber(phoneNumber)) {
                 alert("Please enter a valid Phone number");
            } 
            else if (!isValidDate(date)) {
                 alert("Please enter a valid Date");
            } 
            else if (!isValidIPAddress(ipAddress)) {
                 alert("Please enter a valid IPAddress");
            } 
            else if (!isValidCreditCardNumber(cardNumber)) {
                 alert("Please enter a valid CreditCardNumber");
            } 
            else if (!isValidUsername(username)) {
                 alert("Please enter a valid Username");
            } 
            else if (!isValidHexColorCode(hexColor)) {
                 alert("Please enter a valid HexColorCode");
            }
            else if (!isValidZIPCode(zipCode)) {
                 alert("Please enter a valid ZIPCode");
            }      
 
            else {
                // Form is valid, you can proceed with form submission or other actions
                alert("Form submitted successfully!\nFirstname: " + firstname + "\nLastname: "
                    + lastname + "\nEmail: " + email + "\nMarital Status: " + maritalStatus + "\nURL:" + URL +
                    "\nPhoneNumber:" + phoneNumber + "\nDate:" + date + "\nIPAddress:" + ipAddress + "\ncardNumber:" + cardNumber +
                    "\nusername:" + username +"\nhexColor:"+ hexColor +"\nZipcode:" +zipCode);
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
            return /^\d{10}$/.test(zipCode);
        }