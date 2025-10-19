//login page js code
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector(".email[type='email']");
    const passwordInput = document.querySelector(".email[type='password']");
    const rememberMeCheckbox = document.querySelector("input[type='checkbox']");

    // Load remembered email if it exists
    if (localStorage.getItem("rememberedEmail")) {
        emailInput.value = localStorage.getItem("rememberedEmail");
        rememberMeCheckbox.checked = true;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for validation

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple validation
        if (!email) {
            alert("Please enter your email or phone number.");
            return;
        }
        if (!password) {
            alert("Please enter your password.");
            return;
        }

        // If "Remember me" is checked, save email to localStorage
        if (rememberMeCheckbox.checked) {
            localStorage.setItem("rememberedEmail", email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }

       
        // You can redirect to another page here if needed
        window.location.href = "netflix.html";
    });
});

//index.html js code
    document.addEventListener("DOMContentLoaded", function() {
        const emailSignupForms = document.querySelectorAll(".email-signup");
        
        emailSignupForms.forEach(form => {
            form.addEventListener("submit", function(event) {
                event.preventDefault(); // Prevent form submission for validation
                
                const emailInput = form.querySelector("input[type='email']");
                const email = emailInput.value.trim();

                // Simple email validation
                if (!email) {
                    alert("Please enter your email address.");
                    return;
                }

                // Simulate successful signup (you can replace this with actual signup logic)
                alert("Sign Up Successful!"); // Replace with actual signup logic
                // You can redirect to another page here if needed
                // window.location.href = "netflix.html"; // Example redirect
            });
        });

        // Accordion functionality for FAQ
        const accordions = document.querySelectorAll(".accordion input[type='radio']");
        
        accordions.forEach(accordion => {
            accordion.addEventListener("change", function() {
                const content = this.nextElementSibling;
                const isChecked = this.checked;

                // Close all other accordion items
                accordions.forEach(otherAccordion => {
                    if (otherAccordion !== this) {
                        otherAccordion.checked = false;
                        otherAccordion.nextElementSibling.style.maxHeight = null;
                    }
                });

                // Toggle the current accordion item
                if (isChecked) {
                    content.style.maxHeight = content.scrollHeight + "px"; // Expand
                } else {
                    content.style.maxHeight = null; // Collapse
                }
            });
        });
    });


    //netflix.html js code
    document.addEventListener("DOMContentLoaded", function() {
        // Handle Join Now button click
        const joinNowButton = document.querySelector(".JoinNow");
        joinNowButton.addEventListener("click", function() {
            alert("Join Now button clicked!"); // Replace with actual join logic
            // You can redirect to the signup page here if needed
            // window.location.href = "signup.html"; // Example redirect
        });

        // Handle Log In button click
        const signInButton = document.querySelector(".SignIn");
        signInButton.addEventListener("click", function() {
            alert("Log In button clicked!"); // Replace with actual login logic
            // You can redirect to the login page here if needed
            // window.location.href = "login.html"; // Example redirect
        });

        // Handle Join Now button in the footer
        const joinNowFooterButton = document.querySelector(".Joinnow1");
        joinNowFooterButton.addEventListener("click", function() {
            alert("Join Now button in footer clicked!"); // Replace with actual join logic
            // You can redirect to the signup page here if needed
            // window.location.href = "signup.html"; // Example redirect
        });

        // Handle language selection
        const languageSelect = document.getElementById("English");
        languageSelect.addEventListener("change", function() {
            const selectedLanguage = this.value;
            alert("Language changed to: " + selectedLanguage); // Replace with actual language change logic
            // You can implement logic to change the language of the page here
        });
    });


