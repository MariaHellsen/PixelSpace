
const formContainer = document.getElementById("form-container");
const formHeading = document.createElement("h2");
formHeading.innerHTML+= `Send Us a Message <br>-We'll Get Back to You Right Away!`;
formHeading.id ="form-heading";
formHeading.style.textAlign = "center";
formContainer.appendChild(formHeading);
const formDiv = document.getElementById("form-container");
const Form = document.createElement("form");
Form.id = "contact-form";
Form.style.maxWidth = "500px";
Form.style.margin = "0 auto";
Form.style.padding = "20px";
Form.style.backgroundColor = "#fff";
Form.style.borderRadius = "8px";
Form.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
Form.style.display = "flex";
Form.style.flexDirection = "column";
Form.style.gap = "15px"; 

const firstNameGroup = document.createElement('div');
firstNameGroup.className = 'form-group';
const firstNameLabel = document.createElement('label');
firstNameLabel.textContent = 'First Name';
firstNameLabel.htmlFor = 'firstName';
const firstNameInput = document.createElement('input');
firstNameInput.type = 'text';
firstNameInput.id = 'firstName';
firstNameInput.placeholder = 'Enter your first name';
firstNameInput.required = true;
firstNameGroup.appendChild(firstNameLabel);
firstNameGroup.appendChild(firstNameInput);
Form.appendChild(firstNameGroup);
formDiv.appendChild(Form);

const lastNameGroup = document.createElement('div');
    lastNameGroup.className = 'form-group';
    const lastNameLabel = document.createElement('label');
    lastNameLabel.textContent = 'Last Name';
    lastNameLabel.htmlFor = 'lastName';
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.id = 'lastName';
    lastNameInput.placeholder = 'Enter your last name';
    lastNameInput.required = true;
    lastNameGroup.appendChild(lastNameLabel);
    lastNameGroup.appendChild(lastNameInput);
    Form.appendChild(lastNameGroup);

    const phoneGroup = document.createElement('div');
    phoneGroup.className = 'form-group';
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone';
    phoneLabel.htmlFor = 'phone';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.id = 'phone';
    phoneInput.placeholder = 'Enter your phone number';
    phoneInput.required = true;
    phoneGroup.appendChild(phoneLabel);
    phoneGroup.appendChild(phoneInput);
    Form.appendChild(phoneGroup);

    const emailGroup = document.createElement('div');
    emailGroup.className = 'form-group';
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    emailLabel.htmlFor = 'email';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'Enter your email';
    emailInput.required = true;
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    Form.appendChild(emailGroup);

 const messageGroup = document.createElement('div');
    messageGroup.className = 'form-group';
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message';
    messageLabel.htmlFor = 'message';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.id = 'message';
    messageTextarea.rows = 4;
    messageTextarea.placeholder = 'Enter your message';
    messageTextarea.required = true;
    messageGroup.appendChild(messageLabel);
    messageGroup.appendChild(messageTextarea);
    Form.appendChild(messageGroup);
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    Form.appendChild(submitButton);

    formContainer.appendChild(Form);

    Form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if ( firstName && lastName && phone && email && message){
        alert(`Form submitted successfully!\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`);
        Form.reset(); 
      }
      else {
        alert('Please fill out all fields.');
      }
    });