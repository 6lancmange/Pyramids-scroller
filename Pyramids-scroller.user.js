// ==UserScript==
// @name         Neopets – Pyramids scroller
// @description  scrolls the Pyramids game down to the game
// @match        http://www.neopets.com/games/pyramids/pyramids.phtml*
// ==/UserScript==

$(document).ready(function(){
    document.getElementById('content').scrollIntoView()
});
