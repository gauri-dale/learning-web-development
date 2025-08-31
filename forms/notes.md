# Forms
-`<form> </form>` to create a form

- `action` attribute determines what location the form is sent to after submitting. \

-`method` attribute species whether this is a GET request or a POST request. \
POST is used for **confidential information** i.e. username and password.
GET is used for **insensitive data**

# Elements in a Form

-`<input>` (self-closing) is used to create a TEXT BOX by default unless specified (such as passwords, emails, phone no.). \
    - `id` attribute specifies a unique identifier for an HTML element within a document. Same value as the for attribute. \ 

    - `required` attribute means that the text box cannot be NULL or blank. \

    -`minlength` attribute specifies the minimum length of text. \

    - `maxlength` attribute specifies the maximum length of text. \

    -`placeholder` attribute helps give the user an idea what the input or format of the input needs to look like. \

    -`max` and `min` specifies the max. or min. **value**. \

    -`value` default value in case nothing is entered. \

    - **Radio Button**  allow users to select only one option from a predefined set of choices. \
    Created using `<input type="radio">`

-`<label> </label>` used to label the text box. \
    - `for` attribute is used to help people using a screenreader. \

- `type="reset"` to reset the form. \

- `type="submit"` to create a Submit button.

