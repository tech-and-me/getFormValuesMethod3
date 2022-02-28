

const handleOnSubmit = () => {
 
    const email = document.getElementById("InputEmail").value;
    const password = document.getElementById("InputPassword").value;
    const testingLabel = document.getElementById("testingLabel").textContent;

    console.log("Email entered is : " , email);
    console.log("Password entered is : " , password);
    console.log("The value of the testing label is  : " , testingLabel);

}
