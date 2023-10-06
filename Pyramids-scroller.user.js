// ==UserScript==
// @name         Neopets – Pyramids scroller
// @description  scrolls the Pyramids and Solitaire games down to the game
// @match        https://www.neopets.com/games/pyramids/pyramids.phtml*
// @match        https://www.neopets.com/games/sakhmet_solitaire/sakhmet_solitaire.phtml*
// ==/UserScript==

$(document).ready(function(){
    //use this if you want to scroll to the black bar with the title of the game
    document.getElementById('content').scrollIntoView()

    //use this if you want to scroll to the top grey row of the table (starting with "consecutive plays", or "draws remaining")
    //document.querySelector('.contentModule table').scrollIntoView()
});
