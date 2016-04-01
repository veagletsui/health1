import '../plugins/leanModal/jquery.leanModal.min.js';

import React from "react";
import ReactDom from "react-dom";
import HabitModel from "./Components/habitListing.js";
import AddingNewHabit from "./Components/addingHabit.js"
import Filter from './Components/filter.js'

import { Provider } from 'react-redux';
import store from './store/store';

// var userId;
//
// if (sessionStorage.userid){
//   userId = sessionStorage.userid;
//
// }else{
//   userId = 123;
// }
// console.log(userId);

  //Listing out all the habit
  ReactDom.render(
    <Provider store = {store}>
      <HabitModel />
    </Provider>,
    document.getElementById('habit_listing')
  );

  //filter bar for filting the list of habit
  ReactDom.render(
    <Provider store = {store}>
      <Filter />
    </Provider>,
    document.getElementById('filterDiv')
  );

  //adding new habit
  ReactDom.render(
    <AddingNewHabit />,
    document.getElementById('new_habit_popup')
  );

  //adding some pop up affect to the overall user experience
  $("#add_more").leanModal({ top : 200, overlay : 0.8, closeButton: ".modal_close" });
  $(".habits_display").leanModal({ top : 200, overlay : 0.8, closeButton: ".modal_close" });
