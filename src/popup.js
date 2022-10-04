'use strict';

import { getElem, getStorage } from "./utils.js";
import { setHtmlValue, setStorage, toBool } from "./utils.js";
import { updateTxtField, elements } from "./utils.js";

window.onload = () => {
  let storage           = getStorage(elements.onOff.key);

  // Load on/off status
  let onOffBtn          = getElem(elements.onOff.id);
  let onOffBtnConfig    = toBool(storage);

  // Load Username
  let usernameField     = getElem(elements.username.id);
  let usernameConfig    = getStorage(elements.username.key);

  // Load Description
  let descriptionField  = getElem(elements.description.id);
  let descriptionConfig = getStorage(elements.description.key);

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
