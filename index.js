
let form = document.querySelector(".form");
let form2 = document.querySelector("form");
let submit = document.querySelector('[name="sub"]');

let first = document.querySelector('[name=first]');
let last = document.querySelector('[name=last]');
let mail = document.querySelector('[name=mail]');
let pass = document.querySelector('[name=pass]');

let paragragh1 = document.createElement("p");
let paragragh2 = document.createElement("p");
let paragragh3 = document.createElement("p");
let paragragh4 = document.createElement("p");

let text1 = document.createTextNode("First Name cannot be empty");
let text2 = document.createTextNode("Last Name cannot be empty");
let text3 = document.createTextNode("Looks like this is not an email");
let text4 = document.createTextNode("Password cannot be empty");

let image1 = document.createElement("img");
let image2 = document.createElement("img");
let image3 = document.createElement("img");
let image4 = document.createElement("img");

document.forms[0].onsubmit = function (e) {
    let firstName = false;
    let lastName = false;
    let email = false;
    let password = false;

    if (first.value !== "") {
        firstName = true;
    }

    if (last.value !== "") {
        lastName = true;
    }

    let code = /\w+@\w+\.\w+/ig;
    let valid = code.test(mail.value);

    if (valid === true) {
        email = true;
    }

    if (pass.value !== "") {
        password = true;
    }

    if (firstName === false) {
        paragragh1.appendChild(text1);
        paragragh1.style.cssText = "font-size:11px; font-style: italic; color: hsl(0, 100%, 74%); width: 375px; height: 10px; padding: 0; margin: 0; display: flex; justify-content: end; margin-top: -20px; margin-right: -20px;";
        first.style.cssText = "border:2px solid hsla(0, 100%, 74%);";
        first.setAttribute("placeholder", "");
        first.after(paragragh1);
        image1.src = "./images/icon-error.svg";
        image1.style.cssText = "width: 24px; height: 24px; position: relative; top:-35px; left: 170px";
        first.after(image1);
        form.style.cssText = "height: 80vh";
        form2.style.cssText = "height: 65vh";
        e.preventDefault();
    }

    if (lastName === false) {
        paragragh2.appendChild(text2);
        paragragh2.style.cssText = "font-size:11px; font-style: italic; color: hsl(0, 100%, 74%); width: 375px; height: 10px; padding: 0; margin: 0; display: flex; justify-content: end; margin-top: -20px; margin-right: -20px;";
        last.style.cssText = "border:2px solid hsla(0, 100%, 74%);";
        last.setAttribute("placeholder", "");
        last.after(paragragh2);
        image2.src = "./images/icon-error.svg";
        image2.style.cssText = "width: 24px; height: 24px; position: relative; top:-35px; left: 170px";
        last.after(image2);
        form.style.cssText = "height: 80vh";
        form2.style.cssText = "height: 65vh";
        e.preventDefault();
    }

    if (email === false) {
        paragragh3.appendChild(text3);
        paragragh3.style.cssText = "font-size:11px; font-style: italic; color: hsl(0, 100%, 74%); width: 375px; height: 10px; padding: 0; margin: 0; display: flex; justify-content: end; margin-top: -20px; margin-right: -20px;";
        mail.style.cssText = "color: hsl(0, 100%, 74%); border:2px solid hsla(0, 100%, 74%);";
        mail.setAttribute("placeholder", "");
        mail.after(paragragh3);
        image3.src = "./images/icon-error.svg";
        image3.style.cssText = "width: 24px; height: 24px; position: relative; top:-35px; left: 170px";
        mail.after(image3);
        form.style.cssText = "height: 80vh";
        form2.style.cssText = "height: 65vh";
        e.preventDefault();
    }

    if (password === false) {
        paragragh4.appendChild(text4);
        paragragh4.style.cssText = "font-size:11px; font-style: italic; color: hsl(0, 100%, 74%); width: 375px; height: 10px; padding: 0; margin: 0; display: flex; justify-content: end; margin-top: -20px; margin-right: -20px;";
        pass.style.cssText = "border:2px solid hsla(0, 100%, 74%);";
        pass.setAttribute("placeholder", "");
        pass.after(paragragh4);
        image4.src = "./images/icon-error.svg";
        image4.style.cssText = "width: 24px; height: 24px; position: relative; top:-35px; left: 170px";
        pass.after(image4);
        form.style.cssText = "height: 80vh";
        form2.style.cssText = "height: 65vh";
        e.preventDefault();
    }

    submit.style.cssText = "background-color: hsla(154, 59%, 51%, 0.479); box-shadow: 0 3px 0 0 hsla(154, 66%, 43%, 0.600);";
};
