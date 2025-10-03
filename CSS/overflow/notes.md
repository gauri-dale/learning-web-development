# Overflow
This is a property that sets the desired behaviour when content does not fit in the parent element i.e. it overflows. \

There are 5 states:
1. `overflow: visible` -> if any inner elements overflow, allow it to do so \

2. `overflow: hidden` -> any content that does overflow from the box, will be hidden \

3. `overflow: clip` -> similar to hidden. Used in tandem with `overflow-clip-margin` property. Using this property, we can set how far the content is displays or overflows outside of the box. \

4. `overflow: scroll` -> the box contains a scroll bar. \

5. `overflow: auto` -> doesnt't display scroll bar unless needed