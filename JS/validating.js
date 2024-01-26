 document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("button").addEventListener("click", function() {
                validateForm();
            });
        });

        function validateForm() {
            var firstname = document.getElementById("Firstname").value;
            var lastname = document.getElementById("Lastname").value;
            var maritalStatus = document.getElementById("Marital").value;

            // Basic validation, you can add more specific checks as needed
            if (firstname.trim() === "" || lastname.trim() === "") {
                alert("Please fill in all the required fields (Firstname, Lastname)");
            } else {
                // Form is valid, you can proceed with form submission or other actions
                alert("Form submitted successfully!\nFirstname: " + firstname + "\nLastname: " + lastname + "\nMarital Status: " + maritalStatus);
                // Add further processing or form submission logic here
            }
        }