define(['vendor/handlebars', 'modules/handlebars-helpers'], function(Handlebars) {

Handlebars.registerPartial("_timeline", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<article data-view=\"timelineView\" class=\"timeline\">\r\n\r\n    <div id=\"timeline-container\">\r\n        <div id=\"hexagon-overlay\">\r\n            <div id=\"hexagon-overlay-contents\">\r\n                <p id=\"hexagon-overlay-year\"></p>\r\n                <div id=\"hexagon-overlay-icon\"></div>\r\n                <p id=\"hexagon-overlay-description\"></p>\r\n                <div class=\"modal-controls\">\r\n                    <button type=\"button\" id=\"timeline-arrow-left\" class=\"icon icon--arrow-left modal-controls-icons\"><span class=\"vh\">Prev</span></button>\r\n                    <button type=\"button\" id=\"timeline-arrow-right\" class=\"icon icon--arrow-right modal-controls-icons\"><span class=\"vh\">Next</span></button>\r\n                    <span class=\"modal-controls-spacer\"></span>\r\n                    <button type=\"button\" id=\"hexagon-close-button\" class=\"icon icon--close modal-controls-icons\"><span class=\"vh\">Close</span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    	<div class=\"timeline-scrollable-content\" id=\"scroll-container\">\r\n    		<div id=\"hexagon-container\">\r\n    		    <div id=\"hexagon-shadow-small\"></div>\r\n    		</div>\r\n    		<div id=\"hexagon-axis-horizontal\">\r\n    			<div class=\"key-events-timeline\">\r\n    				<div class=\"key-event-label hasgrove\">Acquired by<br/>Hasgrove</div>\r\n    				<div class=\"key-event-label stives\">Acquired by<br/>St Ives Group</div>\r\n    			</div>\r\n    			<div class=\"years-timeline\">\r\n    				<div class=\"year-label h-1995\">1995</div>\r\n    				<div class=\"year-label h-2000\">2000</div>\r\n    				<div class=\"year-label h-2005\">2005</div>\r\n    				<div class=\"year-label h-2010\">2010</div>\r\n    				<div class=\"year-label h-2015\">2015</div>\r\n    			</div>\r\n    		</div>\r\n    		<div id=\"hexagon-axis-vertical\">\r\n    			<div class=\"year-label v-1995\">1995</div>\r\n    			<div class=\"year-label v-2000\">2000</div>\r\n    			<div class=\"year-label v-2005\">2005</div>\r\n    			<div class=\"year-label v-2010\">2010</div>\r\n    			<div class=\"year-label v-2015\">2015</div>\r\n    		</div>\r\n    	</div>\r\n    	<div class=\"timeline-scroll-controls\" id=\"timeline-scroll-controls\">\r\n    		<div class=\"timeline-scroll-controls__arrow timeline-scroll-controls__arrow--left\" id=\"timeline-scroll-left\">\r\n                <span class=\"border-arrow border-arrow--left\"></span>\r\n    			<span class=\"vh\">scroll back</span>\r\n    		</div>\r\n    		<div class=\"timeline-scroll-controls__bar-wrapper\" id=\"scroll-bar-wrapper\">\r\n    			<div class=\"timeline-scroll-controls__bar\" id=\"timeline-scroll-bar\"></div>\r\n    		</div>\r\n    		<div class=\"timeline-scroll-controls__arrow timeline-scroll-controls__arrow--right\" id=\"timeline-scroll-right\">\r\n                <span class=\"border-arrow border-arrow--right\"></span>\r\n    			<span class=\"vh\">scroll forward</span>\r\n    		</div>\r\n    	</div>\r\n	</div>\r\n\r\n</article>\r\n";
},"useData":true}));

});