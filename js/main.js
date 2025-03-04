import {findDataByForm} from "./formSignIn.js";

const form__login = document.querySelector("#form__login");
const dialog__login = document.querySelector("#dialog__login");
const dialog__message = document.querySelector("#dialog__message");
const dialog__login_close = document.querySelector("#dialog__login-close");

form__login.addEventListener("submit", findDataByForm)

dialog__login_close.addEventListener("click", (e)=> dialog__login.close());