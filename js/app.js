

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Assume login is successful (replace with actual authentication logic)
    sessionStorage.setItem("authenticated", "true");

    // Redirect to dashboard
    window.location.href = "dashboard.html";
});

// Logout Button Logic
// Logout Button Logic
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            // Prevent default <a> tag behavior
            e.preventDefault();

            // Clear session or local storage
            sessionStorage.removeItem("authenticated");
            alert("You have been logged out.");

            // Redirect to login page
            window.location.href = "login.html";
        });
    } else {
        console.error("Logout button not found!");
    }
});


// Handle Send Money Form Submission
const sendMoneyForm = document.getElementById("send-money-form");
if (sendMoneyForm) {
    sendMoneyForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const amount = document.getElementById("amount").value;

        if (email && amount) {
            alert(`$${amount} has been sent to ${email}.`);
            sendMoneyForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
}




