var RtlElement = pc.createScript('rtlElement');

/*
 * Attach this script to Text Element components that need to support RTL text
 * When rendering text the element will use a pre-registered converter
 * to correctly render the RTL text. (See also RtlSetup.js)
 */
RtlElement.prototype.initialize = function() {
    if(this.entity.element) {
        this.entity.element.rtlReorder = true;
        this.entity.element.unicodeConverter = true;
    }
};