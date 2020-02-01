let scrollbarWidth;

module.exports = function() {
    if (scrollbarWidth) {
        return scrollbarWidth;
    }

    const outer = document.createElement('div');
    const outerStyle = outer.style;
    outerStyle.visibility = "hidden";
    outerStyle.width = "100px";
    outerStyle.msOverflowStyle = "scrollbar";
    outerStyle.overflow = "scroll";

    const inner = document.createElement('div');
    inner.style.width = '100%';

    document.body.appendChild(outer);
    const widthNoScroll = outer.offsetWidth;

    outer.appendChild(inner);
    const widthWithScroll = inner.offsetWidth;

    document.body.removeChild(outer);

    scrollbarWidth = widthNoScroll - widthWithScroll;

    return scrollbarWidth;
};
