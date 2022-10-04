export const getElem = (key) => document.getElementById(key);

export const closePopup = () => {
  window.close();
}

export const setElemText = (elem, text) => {
  elem.innerText = text;
}

export const setHtmlValue = (elem, text) => {
  elem.value = text;
}

export const getStorage = (key) => {
  return localStorage[key];
}

export const toBool = (value) => {
  if (value == null) return null; 
  return value == 'true' ? true : false;
}

export const setStorage = (key, val) => {
  localStorage[key] = val;
}

export const updateTxtField = (btn, key, trueTxt, falseTxt) => {
  let storage = getStorage(key);
  let status  = toBool(storage);
  let msg     = status ? trueTxt : falseTxt;
  setElemText(btn, msg);
}

export const toggleBtnClick = () => {
  let storage = getStorage(elements.onOff.key);

  // Load config
  let onOffBtn            = getElem(elements.onOff.id);
  let onOffBtnConfig      = toBool(storage);

  // Save config
  setStorage(elements.onOff.key, !onOffBtnConfig);
  updateTxtField(onOffBtn, elements.onOff.key, 'Off', 'On');
}

export const saveBtnClick = () => {
  let getUsernameInput    = getElem(elements.username.id).value;
  let getDescriptionInput = getElem(elements.description.id).value;
  
  setStorage(elements.username.key, getUsernameInput);
  setStorage(elements.description.key, getDescriptionInput);
}

export const elements = {
    onOff: {
      "element" : getElem("toggleBtn"),
      "onclick" : toggleBtnClick,
      "type"    : "button",
      "id"      : "toggleBtn",
      "key"     : "Enabled",
      "default" : false,
    },
    submit: {
      "element" : getElem("submitBtn"),
      "onclick" : saveBtnClick,
      "type"    : "button",
      "id"      : "submitBtn",
      "key"     : null,
      "default" : null,
    },
    cancel: {
      "element" : getElem("cancelBtn"),
      "onclick" : closePopup,
      "type"    : "button",
      "id"      : "cancelBtn",
      "key"     : null,
      "default" : "",
    },
    username: {
      "element" : getElem("usernameInput"),
      "onclick" : null,
      "type"    : "textField",
      "id"      : "usernameInput",
      "key"     : "Username",
      "default" : "Anonymous",
    },
    description: {
      "element" : getElem("descriptionInput"),
      "onclick" : null,
      "type"    : "textField",
      "id"      : "descriptionInput",
      "key"     : "Description",
      "default" : "No description",
    },
    profilePhoto: {
      "element" : getElem("profilePhoto"),
      "onclick" : null,
      "type"    : "textField",
      "id"      : "descriptionInput",
      "key"     : "Description",
      "default" : "No description",
    },
    profileHeader: {
      "element" : getElem("profileHeader"),
      "onclick" : null,
      "type"    : "textField",
      "id"      : "descriptionInput",
      "key"     : "Description",
      "default" : "No description",
    },
  }