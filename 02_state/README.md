# Homework: State

For this homework, your task is to implement a `<Carousel>` component
that renders a given list of images as a [carousel]. The carousel must
display one image at a time, and include buttons to show the next and
previous image. Each image should have a URL and a caption.

By default, the carousel should not loop; when it reaches the last
image, the "next" and "previous" buttons are disabled. However, if the
`loop` prop is set to `true`, the carousel should wrap around; clicking
"next" while on the last image should show the first, and clicking
"previous" while on the first image should show the last.

[carousel]: https://www.nngroup.com/articles/designing-effective-carousels/
