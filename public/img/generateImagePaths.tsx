// components/PhotoGallery.jsx
import React, { useEffect, useState } from 'react';

const PhotoGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const fetchImagePaths = async () => {
      try {
        const response = await fetch('/api/images'); // Replace with your server endpoint
        const data = await response.json();
        setImagePaths(data.imagePaths);
      } catch (error) {
        console.error('Failed to fetch image paths:', error);
      }
    };

    fetchImagePaths();
  }, []);

  return (
    <section className="photo-gallery">
      <h2>Moje fotky</h2>
      <div className="photos-container">
        {imagePaths.map((imagePath, index) => (
          <img key={index} src={imagePath} alt={`Fotka ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
