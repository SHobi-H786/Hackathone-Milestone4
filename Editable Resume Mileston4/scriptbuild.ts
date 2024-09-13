// src/index.ts

// Function to handle resume generation
function generateResume() {
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contactNumber = (document.getElementById('contactNumber') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const years = (document.getElementById('years') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  
    // Generate resume
    const resumeHtml = `
      <h2>Resume</h2>
      <h3>Personal Information</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Contact:${contactNumber}</p>
      
      <h3>Education</h3>
      <p>University: ${institution}</p>
      <p>Degree: ${degree}</p>
      <p>Year: ${year}</p>
      
      <h3>Work Experience</h3>
      <p>Company: ${company}</p>
      <p>Role: ${role}</p>
      <p>Years: ${years}</p>
      
      <h3>Skills</h3>
      <p>${skills.join(', ')}</p>
    `;
  
    // Output the resume to the page
    const resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
      resumeOutput.innerHTML = resumeHtml;
    }
  }
  
  // Ensure that the TypeScript code runs when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        generateResume(); // Generate resume when form is submitted
      });
    }
  });
  