/***********************************************************
 *
 * Project name: 	Nimoy · Login & Register Form HTML Template
 * Decription: 		HTML | Miscellaneous Template for ThemeForest.net
 * Author: 			ceosDesigns
 * Link:			http://nimoy.ceosdesigns.sk/ 
 * Version:			1.00
 *
 ************************************************************/

(function ($) {
	"use strict";

    $(window).on('load', function () {
        // remove preloader
        $('.nm-ripple').fadeOut(500, function () {
            $('#nm-preloader').fadeOut(500);
        });

        // show / hide text within password input field
        let togglePassword = document.getElementById("toggle-password");
        if (togglePassword) {
            togglePassword.addEventListener('click', function() {
                var el = document.getElementById("inputPassword");
                if (el.type === "password") {
                    el.type = "text";
                } else {
                    el.type = "password";
                }
            });
        }
    });
})(jQuery)