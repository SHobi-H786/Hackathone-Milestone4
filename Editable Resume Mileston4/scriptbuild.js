// src/index.ts
// Function to handle resume generation
function generateResume() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var institution = document.getElementById('institution').value;
    var degree = document.getElementById('degree').value;
    var year = document.getElementById('year').value;
    var company = document.getElementById('company').value;
    var role = document.getElementById('role').value;
    var years = document.getElementById('years').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate resume
    var resumeHtml = "\n      <h2>Resume</h2>\n      <h3>Personal Information</h3>\n      <p>Name: ".concat(name, "</p>\n      <p>Email: ").concat(email, "</p>\n      <p>Contact:").concat(contactNumber, "</p>\n      \n      <h3>Education</h3>\n      <p>University: ").concat(institution, "</p>\n      <p>Degree: ").concat(degree, "</p>\n      <p>Year: ").concat(year, "</p>\n      \n      <h3>Work Experience</h3>\n      <p>Company: ").concat(company, "</p>\n      <p>Role: ").concat(role, "</p>\n      <p>Years: ").concat(years, "</p>\n      \n      <h3>Skills</h3>\n      <p>").concat(skills.join(', '), "</p>\n    ");
    // Output the resume to the page
    var resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeHtml;
    }
}
// Ensure that the TypeScript code runs when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
            generateResume(); // Generate resume when form is submitted
        });
    }
});
