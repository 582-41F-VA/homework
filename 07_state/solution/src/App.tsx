import { useState } from "react";

const images = [
    { src: "images/mountain.jpg", alt: "Snow-covered mountain at sunrise" },
    { src: "images/forest.jpg", alt: "Dense forest with sunlight" },
    { src: "images/beach.jpg", alt: "Golden beach with gentle waves" },
    { src: "images/city.jpg", alt: "Skyline of a modern city at night" },
    { src: "images/desert.jpg", alt: "Sand dunes under a clear blue sky" },
];

export default function App() {
    return <Carousel images={images} />;
}

type Image = {
    src: string;
    alt: string;
};

type CarouselProps = {
    images: Array<Image>;
    loop?: boolean;
};

function Carousel({ images, loop = false }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <>
            {images.map((image, i) => (
                <img
                    style={{ display: i === currentIndex ? "block" : "none" }}
                    src={image.src}
                    alt={image.alt}
                />
            ))}
            <button onClick={() => setCurrentIndex(currentIndex - 1)}>
                prev
            </button>
            <button onClick={() => setCurrentIndex(currentIndex + 1)}>
                next
            </button>
        </>
    );
}
