# Forms
-`<form> </form>` to create a form

- `action` attribute determines what location the form is sent to after submitting. \

- `method` attribute species whether this is a GET request or a POST request. \
POST is used for **confidential information** i.e. username and password.\
GET is used for **insensitive data**

# Elements in a Form

## Input 
`<input>` (self-closing) is used to create a TEXT BOX by default unless specified (such as passwords, emails, phone no.). \

- `id` attribute specifies a unique identifier for an HTML element within a document. Same value as the for attribute. \ 

- `required` attribute means that the text box cannot be NULL or blank. \

-`minlength` attribute specifies the minimum length of text. \

- `maxlength` attribute specifies the maximum length of text. \

-`placeholder` attribute helps give the user an idea what the input or format of the input needs to look like. \

-`max` and `min` specifies the max. or min. **value**. \

-`value` default value in case nothing is entered. \

- `type="reset"` to reset the form. \

- `type="submit"` to create a Submit button.

## Label

-`<label> </label>` used to label the text box. \
    - `for` attribute is used to help people using a screenreader. \

## Radio Button
**Radio Button**  allow users to select only one option from a predefined set of choices. \
    Created using `<input type="radio">`


## Drop Down Menu (Select)
- `<select></select>` used to make a **drop down menu.**
- `<option></option>` used to enter the choices in the drop down menu.

## Check Box
Allows user to either select Yes or No as an option by ticking or unticking a box.\
    `<input type="checkbox">`

## Text Area
Used to get user feedback or comment.
    `<textarea></textarea>`

    To adjust area of this text:
        -`rows = " "` or `cols= " "`

## For File Submission
Used so that user is able to submit files/documents
    `<input type="file">`

By default, all file types are accepted. But to limit the types of files that are acceptable:
    `accept` attribute is used. \
     - accept="image/png, image/jpeg"