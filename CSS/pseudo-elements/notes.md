# Pseudo-element
keyword added after a selector that is used to style a specific parts of an element \

Syntax: [selector]::[pseudo-element]

# Common Pseudo-elements and Their Uses:

- `::before` and `::after`: These are used to insert content before or after the content of an element. The inserted content is specified using the content property. This is commonly used for decorative elements, icons, or clearfixes. \

    Code

        p::before {
        content: "Note: ";
        font-weight: bold;
        }

- `::first-letter`: Styles the first letter of the first line of a block-level element. This is often used for creating drop caps. \

    Code

        p::first-letter {
        font-size: 2em;
        color: blue;
        }

- `::first-line`: Styles the first formatted line of a block-level element. The length of the first line depends on the element's width and text wrapping. \

    Code

        p::first-line {
        font-style: italic;
        }

- `::selection`: Styles the portion of an element that is currently selected by the user (e.g., highlighted text). \

    Code

        ::selection {
        background-color: yellow;
        color: black;
        }

- `::placeholder`: Styles the placeholder text of form elements like `<input>` or `<textarea>`. \

    Code

        input::placeholder {
        color: gray;
        font-style: italic;
        }
