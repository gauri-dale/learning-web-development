# Combinators

These are special characters or symbols used within CSS selectors to define the relationship between two or more selectors. \

There are four main types of CSS combinators: \

1. `Descendant Combinator` (space):
    - Selects all elements that are descendants (children, grandchildren, etc.) of a specified element. \
    - Example: `div p` selects all `<p>` elements that are inside a `<div>`. \

2. `Child Combinator (>)`:
    - Selects only the direct children of a specified element. \
    - Example: `div > p` selects only `<p>` elements that are immediate children of a `<div>`. \

3. `Adjacent Sibling Combinator (+)`:
    - Selects an element that is immediately preceded by another specified element, and both share the same parent. \
    - Example: `div + p` selects the first `<p>` element that immediately follows a `<div>` and shares the same parent. \

4. `General Sibling Combinator (~)`:
    - Selects all elements that are siblings of a specified element and follow it in the document tree, sharing the same parent. \
    - Example: `div ~ p` selects all `<p>` elements that are siblings of a `<div>` and appear after it in the HTML. \