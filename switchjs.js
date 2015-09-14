/*!
 * switchJS - jQuery Plugin to switch elements in the DOM easily and fast - v0.0.1
 * more info at: https://github.com/Agezao/SwitchJS
 *
 * No license, free to use and distribute.
 *
 * @author Gabriel Age
 * @requires jQuery
 *
 * using:
 * $(elementToSwitch).switch(anotherElementToSwitch);
 *
 */
(function( $ ) {
    $.fn.switch = function(switchTo) {
	    var nextAppend,prevAppend,parentAppend;
		nextAppend = prevAppend = parentAppend = null;
		if($(switchTo).next().length > 0)
			nextAppend=$(switchTo).next()[0];
		else if($(switchTo).prev().length > 0)
			prevAppend = $(switchTo).prev()[0];
		else parentAppend = $(switchTo).parent();

		$(switchTo).insertAfter(this);
		if(nextAppend != null)
			$(this).insertBefore(nextAppend)
		else if(prevAppend != null)
			$(this).insertAfter(prevAppend)
		else $(this).append(parentAppend)
    };
}( jQuery ));