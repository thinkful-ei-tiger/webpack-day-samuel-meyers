import $ from 'jquery';
import {  } from "./index.css";

import shoppingList from './shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
