// ==UserScript==
// @name         Neopets – Pyramids scroller
// @description  scrolls the Pyramids game down to the game
// @match        http://www.neopets.com/games/pyramids/pyramids.phtml*
// @match        http://www.neopets.com/games/sakhmet_solitaire/sakhmet_solitaire.phtml*
// ==/UserScript==

$(document).ready(function(){
    document.getElementById('content').scrollIntoView()
});
