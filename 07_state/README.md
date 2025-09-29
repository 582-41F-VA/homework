# Homework: State

Create a component that renders a given list of images into a carousel.
The carousel should display only one image at a time, and include
buttons to navigate to the next and previous sections. Each image should
have a source and a textual description (for the `alt` attribute). By
default, the carousel does not loop; when it reaches the last section,
clicking "next" has no effect, and clicking "previous" on the first
section does nothing. However, if the `loop` prop is set to true, the
carousel should wrap around; clicking "next" on the last section shows
the first, and clicking "previous" on the first section shows the last.
