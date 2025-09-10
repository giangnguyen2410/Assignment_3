const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\.,;:\s@\"]+(.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+.)+[a-zA-Z]{2,}))$/
  );
};
const viewBtns = document.querySelectorAll('.view-btn');
const jobContents = document.querySelectorAll('.job-content');

const handleOpenClose = (button,index)=>{
    console.log(button)
    let jobContent = jobContents[index];
    if(window.getComputedStyle(jobContent).display === 'none'){
        jobContent.style.display = "block";
        button.textContent = "View less";
    }else{
        jobContent.style.display = "none";
        button.textContent = "View more";
    }
}
for (let i=0;  i<viewBtns.length; i++){
    viewBtns[i].addEventListener("click", () => handleOpenClose(viewBtns[i], i))
}
const handleSubmit = () => {
  let emailValue = document.getElementById("email").value;
  let personalInfo = document.querySelector(".info-group");
  let emailForm = document.querySelector(".email-input-group");
  let errorMessage = document.querySelector(".message");
  if (!emailValue) {
    errorMessage.textContent = "Vui lòng nhập email";
    errorMessage.style.color = "red";
  }
  if (validateEmail(emailValue)) {
    personalInfo.style.display = "block";
    emailForm.style.display = "none";
  }
};
const handleEmailChange = () => {
  let emailValue = document.getElementById("email").value;
  let errorMessage = document.querySelector(".message");
  if (validateEmail(emailValue)) {
    errorMessage.textContent = "";
  } else if (!emailValue) {
    errorMessage.textContent = "Vui lòng nhập email";
    errorMessage.style.color = "red";
  } else {
    errorMessage.textContent = "Sai định dạng email";
    errorMessage.style.color = "red";
  }
};
const handleClose = () => {
  let personalInfo = document.querySelector(".info-group");
  let emailForm = document.querySelector(".email-input-group");
  let emailInput = document.querySelector("#email");
  personalInfo.style.display = "none";
  emailForm.style.display = "block";
  emailInput.value = "";
  emailInput.focus();
};
document.querySelector(".close-btn").addEventListener("click", handleClose);
document.getElementById("email").addEventListener("input", handleEmailChange);
document.getElementById("submit-btn").addEventListener("click", handleSubmit);
