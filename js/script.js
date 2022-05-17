/* Created by: marco cuconato
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-02-html/sw.js", {
    scope: "/ICS20-Unit6-02-html/",
  })
}

/**
 * Input
 */

 function updateCount() {
  if (localStorage.clicks) {
    document.getElementById("output").innerHTML = "Cookies: " + localStorage.clicks
  } else {
    localStorage.clicks = 0
  }
}
/**
 * Resets the click counter
 */
function resetCookies() {
  localStorage.clicks = 0
  updateCount()
}

/**
 * Adds 1 to the counter
 */
function getCookies() {
  localStorage.clicks++
  updateCount()
}
