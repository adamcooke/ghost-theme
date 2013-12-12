/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
	$("a[href^='http://']").attr("target","_blank");
	$("a[href^='https://']").attr("target","_blank");

    });

}(jQuery));
