import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, width, height, ...props }) => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={imgRef} style={{ width, height }}>
      {isInView ? (
        <img src={src} alt={alt} width={width} height={height} {...props} />
      ) : (
        <div style={{ width, height, background: '#f5f5f5' }} />
      )}
    </div>
  );
};

export default LazyImage;