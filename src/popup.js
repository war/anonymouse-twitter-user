'use strict';

//Buttons
const toggleBtnStr = "toggleBtn";
const cancelBtnStr = "cancelBtn";
const submitBtnStr = "submitBtn";

//Inputs
const usernameInputStr = "usernameInput";
const descriptionInputStr = "descriptionInput";

const getElem = (key) => document.getElementById(key);

const getToggleBtn = () => getElem(toggleBtnStr);
const getCancelBtn = () => getElem(cancelBtnStr);
const getsubmitBtn = () => getElem(cancelBtnStr);

const closePopup = () => {
    window.close();
}

const setHtmlText = (elem, text) => {
    elem.innerText = text;
}

const setHtmlValue = (elem, text) => {
    elem.value = text;
}

const getFromStorage = (key, returnBool = true) => {
  if (returnBool) {
    return localStorage[key] == 'true' ? true : false;
  }

  return localStorage[key];
}

const setToStorage = (key, val) => {
    localStorage[key] = val;
}

const updateStatus = (btn, key, trueTxt, falseTxt) => {
  let status = getFromStorage(key);
  let msg = status ? trueTxt : falseTxt;
  setHtmlText(btn, msg);
}

const toggleBtnClick = () => {
  // Load config
  let addonStatus = getFromStorage(toggleBtnStr);
  let btn = getToggleBtn();

  // Save config
  setToStorage(toggleBtnStr, !addonStatus);
  updateStatus(btn, toggleBtnStr, 'Off', 'On');
}

const saveBtnClick = () => {
  let getUsernameInput = getElem(usernameInputStr).value;
  let getDescriptionInput = getElem(descriptionInputStr).value;
  
  setToStorage(usernameInputStr, getUsernameInput);
  setToStorage(descriptionInputStr, getDescriptionInput);
}

window.onload = () => {
  // Load on/off status
  let addonStatus = getFromStorage(toggleBtn);

  

  // If null, set default values
  // Status
  if (addonStatus == null) {
    setToStorage(toggleBtnStr, false)
  }
  // Username
  if (addonStatus == null) {
    setToStorage(usernameInputStr, false)
  }
  // Description
  if (addonStatus == null) {
    setToStorage(descriptionInputStr, false)
  }


  
  let btn = getToggleBtn();
  updateStatus(btn, toggleBtnStr, 'Off', 'On');

  // Load Username
  let usernameField     = getElem(usernameInputStr);
  let usernameConfig    = getFromStorage(usernameInputStr, false);
  if (usernameField.value != null) {
    setHtmlValue(usernameField, usernameConfig);
  }

  // Load Description
  let descriptionField  = getElem(descriptionInputStr);
  let descriptionConfig = getFromStorage(descriptionInputStr, false);

  if (descriptionField.value != null) {
    setHtmlValue(descriptionField, descriptionConfig);
  }
}

const listeners = {
  "toggleBtn": toggleBtnClick,
  "cancelBtn": closePopup,
  "submitBtn": saveBtnClick
}

for (let key in listeners) {
  getElem(key).addEventListener('click', listeners[key]);
}
