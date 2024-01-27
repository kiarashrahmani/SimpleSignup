$(document).ready(function () {
    // When the form is submitted
    $('#signupForm').submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form data
        var formData = getFormData($(this));

        // Send an AJAX request
        $.ajax({
            type: 'POST',
            url: '/save',
            contentType: 'application/json', // Set content type to JSON
            data: JSON.stringify(formData), // Convert formData to JSON string
            success: function (data) {
                // Handle success, e.g., display a success message
                console.log('Form submitted successfully:', data);
            },
            error: function (error) {
                // Handle errors, e.g., display an error message
                console.error('Error submitting form:', error);
            }
        });
    });

    // Function to extract form data dynamically
    function getFormData(form) {
        var formData = {};
        form.serializeArray().forEach(function (field) {
            formData[field.name] = field.value;
        });
        return formData;
    }
});
