'use strict';

const getElem = (key) => document.getElementById(key);

const closePopup = () => {
  window.close();
}

const setElemText = (elem, text) => {
  elem.innerText = text;
}

const setHtmlValue = (elem, text) => {
  elem.value = text;
}

const getStorage = (key) => {
  return localStorage[key];
}

const toBool = (value) => {
  if (value == null) return null; 
  return value == 'true' ? true : false;
}

const setStorage = (key, val) => {
  localStorage[key] = val;
}

const updateTxtField = (btn, key, trueTxt, falseTxt) => {
  let storage = getStorage(key);
  let status  = toBool(storage);
  let msg     = status ? trueTxt : falseTxt;
  setElemText(btn, msg);
}

const toggleBtnClick = () => {
  let storage = getStorage(elements.onOff.key);

  // Load config
  let onOffBtn            = getElem(elements.onOff.id);
  let onOffBtnConfig      = toBool(storage);

  // Save config
  setStorage(elements.onOff.key, !onOffBtnConfig);
  updateTxtField(onOffBtn, elements.onOff.key, 'Off', 'On');
}

const saveBtnClick = () => {
  let getUsernameInput    = getElem(elements.username.id).value;
  let getDescriptionInput = getElem(elements.description.id).value;
  
  setStorage(elements.username.key, getUsernameInput);
  setStorage(elements.description.key, getDescriptionInput);
}

const elements = {
  onOff: {
    "element" : getElem("toggleBtn"),
    "onclick" : toggleBtnClick,
    "type"    : "button",
    "id"      : "toggleBtn",
    "key"     : "Enabled"
  },
  submit: {
    "element" : getElem("submitBtn"),
    "onclick" : saveBtnClick,
    "type"    : "button",
    "id"      : "submitBtn",
    "key"     : null
  },
  cancel: {
    "element" : getElem("cancelBtn"),
    "onclick" : closePopup,
    "type"    : "button",
    "id"      : "cancelBtn",
    "key"     : null
  },
  username: {
    "element" : getElem("usernameInput"),
    "onclick" : null,
    "type"    : "textField",
    "id"      : "usernameInput",
    "key"     : "Username"
  },
  description: {
    "element" : getElem("descriptionInput"),
    "onclick" : null,
    "type"    : "textField",
    "id"      : "descriptionInput",
    "key"     : "Description"
  },
}

window.onload = () => {
  let storage = getStorage(elements.onOff.key);

  // Load on/off status
  let onOffBtn            = getElem(elements.onOff.id);
  let onOffBtnConfig      = toBool(storage);

  // Load Username
  let usernameField       = getElem(elements.username.id);
  let usernameConfig      = getStorage(elements.username.key);

  // Load Description
  let descriptionField    = getElem(elements.description.id);
  let descriptionConfig   = getStorage(elements.description.key);

  // Defaults
  let defaultUsername     = "Anonymous";
  let defaultDescription  = "No description";
  let defaultOnOff        = false;

  // If null, set default values
  // Status
  if (onOffBtnConfig == null) {
    setStorage(elements.onOff.key, defaultOnOff)
    onOffBtnConfig = defaultOnOff;
  }
  // Username
  if (usernameConfig == null) {
    usernameConfig = defaultUsername;
    setStorage(elements.username.key, defaultUsername)
  }
  // Description
  if (descriptionConfig == null) {
    descriptionConfig = defaultDescription;
    setStorage(elements.description.key, defaultDescription)
  }

  // Set values
  updateTxtField(onOffBtn, elements.onOff.key, 'Off', 'On');
  setHtmlValue(usernameField, usernameConfig);
  setHtmlValue(descriptionField, descriptionConfig);
}

const listeners = {
  "toggleBtn": elements.onOff.onclick,
  "cancelBtn": elements.cancel.onclick,
  "submitBtn": elements.submit.onclick
}

for (let key in listeners) {
  getElem(key).addEventListener('click', listeners[key]);
}
