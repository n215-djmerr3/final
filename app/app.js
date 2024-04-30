//import * as MODEL from "../model/model.js";
import {loadPage}from "../model/model.js"

/**
 * The function `changeRoute` extracts the page ID from the URL hash, then loads the corresponding page
 * content using AJAX.
 */
function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace('#', '');
    //   console.log(hashTag + ' ' + pageID);
    loadPage(pageID);

}

/**
 * The function `initURLListener` sets up a listener for changes in the URL hash and calls the
 * `changeRoute` function accordingly.
 */
function initURLListener() {
    $(window).on('hashchange', changeRoute);
    changeRoute();
}

/* The `$(document).ready(function () { initListeners(); loadPage("home"); });` code is using jQuery to
ensure that the DOM is fully loaded before executing the functions `initListeners()` and
`loadPage("home")`. This ensures that the event listeners are added to the navigation links and the
"home" page is loaded when the document is ready. */
$(document).ready(function () {
    initURLListener();
    //loadPage("home");

});