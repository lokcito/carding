import React from "react";
import ReactDOM from "react-dom";
import GroupCard from "./components/GroupCard";

const el = document.getElementById('carding');

const render = () => {
  ReactDOM.render(<GroupCard device={el.getAttribute('data-device')} />, el);
}

if (
  'fetch' in window &&
  'Intl' in window &&
  'URL' in window &&
  'Map' in window && 
  'Promise' in window && 
  'forEach' in NodeList.prototype &&
  'startsWith' in String.prototype &&
  'endsWith' in String.prototype &&
  'includes' in String.prototype &&
  'includes' in Array.prototype &&
  'assign' in Object &&
  'entries' in Object &&
  'keys' in Object
) {
  render();
} else {
  require('es6-promise').polyfill();
  import('./polyfills').then(render);
}