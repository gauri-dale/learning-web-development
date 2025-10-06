# To include a Background Image

- use `background-image: url();` 

- if the image is too small, the image repeats itself. To avoid this, use `background-repeat: no-repeat;`

# background-position
- This property controls the initial placement of a background image or gradient within an element's background area. It does not affect the element's position in the document flow or the position of its content.

- Takes values like keywords (`top`, `center`, `bottom`, `left`, `right`), lengths (`px`, `em`, `rem`), or percentages (`%`) to define the x and y coordinates relative to the background's origin.

# background-attachment
It dictates whether the background image scrolls with the content of the page, remains fixed in the viewport, or scrolls within its containing element. \

The `background-attachment` property accepts three main values: \

- `scroll` (default): The background image scrolls along with the content of the page. If the page content scrolls, the background image also moves out of view. \

- `fixed`: The background image remains fixed relative to the viewport, meaning it stays in the same position on the screen even when the page content scrolls. This creates a parallax-like effect. \

- `local`: The background image scrolls along with the content of its containing element, not necessarily the entire page. This is useful when you have an element with a scrollbar and want the background image to scroll within that specific element.

# background-size
This property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space. \

The `background-size` property accepts three main values: \

- `contain`: Scales the image as large as possible within its container without cropping or stretching the image. If the container is larger than the image, this will result in image tiling, unless the background-repeat property is set to no-repeat. \

- `cover`: Scales the image (while preserving its ratio) to the smallest possible size to fill the container (that is: both its height and width completely cover the container), leaving no empty space. If the proportions of the background differ from the element, the image is cropped either vertically or horizontally. \

- `auto`: Scales the background image in the corresponding direction such that its intrinsic proportions are maintained. \