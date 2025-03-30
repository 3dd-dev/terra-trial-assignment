import React, { useRef, useEffect, useState } from "react";

function LazyImage({ src, alt, className }) {
  const imageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const currentImageRef = imageRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(currentImageRef);
        }
      });
    });

    observer.observe(currentImageRef);

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, [src]);

  return <img ref={imageRef} src={imageSrc} alt={alt} className={className} />;
}

export default LazyImage;
