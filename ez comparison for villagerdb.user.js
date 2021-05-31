// ==UserScript==
// @name         ez comparison for villagerdb
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       cappy
// @match        https://villagerdb.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @require      http://cdnjs.cloudflare.com/ajax/libs/sugar/1.3/sugar.min.js
// @icon         https://www.google.com/s2/favicons?domain=villagerdb.com
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    $('.list-compare-shared').appendTo('#content form');
    $('.list-compare-missing').appendTo('#content form');
});
