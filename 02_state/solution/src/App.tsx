import { useState } from "react";

export default function App() {
    const images = [
        {
            src: "https://kagi.com/proxy/computer-programming-vs-computer-science-image_blog.jpg?c=oHUg0c5fD7PLTwGay-BuDpTSlyOK0BDNKMN7MSJr8NVBOZJbcY1Y61wLfEGbSubT8ngmxNBuCm0m3Qyim_K_m41IcWoykS5n_lxV8zWi0PaXc3wZLzSzm6x_Lq2Ozevl0VZZ4D5sWMN7WUplgqxY6q7YMNANDznCVyz5wFNgHsU%3D",
            caption: "Image 1",
        },
        {
            src: "https://kagi.com/proxy/OIP.S7DDVkjsJoEEwILuvBJLRgHaHa?c=3SgynE8ofVcfX71I7M3hSy7-8GsGNVaWMLYt1IFzJZV2IKW0euH1hIn5PrijgguSZQI1F81rJshbVGHrf39-XSwE4Q2OzTos6QLTJjsNFTyLleb7s9WKm-VvQ83YTvwe",
            caption: "Image 2",
        },
    ];
    return <Carousel images={images} loop={true} />;
}

type Image = {
    src: string;
    caption: string;
};

type CarouselProps = {
    images: Array<Image>;
    loop?: boolean;
};

function Carousel({ images, loop = false }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = images[currentIndex];

    if (!currentImage) throw new Error("invariant: missing image");

    const firstImageIndex = 0;
    const lastImageIndex = images.length - 1;
    const isFirstImage = currentIndex === firstImageIndex;
    const isLastImage = currentIndex === lastImageIndex;

    function moveLeft(): void {
        if (isFirstImage) setCurrentIndex(lastImageIndex);
        else setCurrentIndex(currentIndex - 1);
    }

    function moveRight(): void {
        if (isLastImage) setCurrentIndex(firstImageIndex);
        else setCurrentIndex(currentIndex + 1);
    }

    return (
        <>
            <figure>
                <img src={currentImage.src} rel={currentImage.caption} />
                <figcaption>{currentImage.caption}</figcaption>
            </figure>
            <nav>
                <button onClick={moveLeft} disabled={!loop && isFirstImage}>
                    Previous
                </button>
                <button onClick={moveRight} disabled={!loop && isLastImage}>
                    Next
                </button>
            </nav>
        </>
    );
}
