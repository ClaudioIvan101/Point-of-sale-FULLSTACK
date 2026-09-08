import { LazyLoadImage } from 'react-lazy-load-image-component';

export function ImagenContent({ image }) {
    return (
        <div>
            <LazyLoadImage
                effect='blur'
                alt={image.alt}
                height={image.height}
                src={image.src}
                width={image.width} />
            <span>{image.caption}</span>
        </div>
    );
}