/**
 * Created by root on 09/09/16.
 */
import React from 'react';
import ExampleComponent from './src/view/components/ExampleComponent.jsx';

let  element = document.getElementById('irfwan-container');
let AppBaseComponent = <ExampleComponent />;

export function getElement() {
  return element;
}

export function getAppBaseComponent() {
  return AppBaseComponent;
}

export function createApp(_component, _element) {
  AppBaseComponent = _component;
  element = _element;
}