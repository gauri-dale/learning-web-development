# Pseudo-classes
Pseudo-classes are keywords added to a selector that define a special state of an element. They allow you to style an element not based on its direct properties, but on its current condition or interaction. \

Common pseudo-classes:

1. `:hover`: Styles an element when the user's mouse pointer is hovering over it. \

2. `:focus`: Styles an element when it has received focus, such as an input field selected by tabbing.

3. `:active`: Styles an element while it is being "activated" by the user, for example, when a link is being clicked. \

4. `:visited`: Styles links that the user has already visited. \

5. `:first-child / :last-child`: Selects the first or last child element of its parent. \

Code

    ul li:first-child {
      font-weight: bold;
    }

6. `:nth-child(n)`: Selects elements based on their position within a parent, where 'n' can be a number, a keyword like 'odd' or 'even', or a formula. \

- n -> even/odd: to select every even/odd element. \
- n -> 3n: for every 3rd element (it can be any number)

Code

    p:nth-child(2n) {
      background-color: lightgray;
    }

7. `:not(selector)`: Applies styles to elements that do not match the provided selector. \

Code

    div:not(.special) {
      border: 1px solid black;
    }