import React from 'react';

interface PhotoGalleryProps {
  imagePaths: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ imagePaths }) => {
  return (
    <section className="photos">
      <h2 className="text-2xl font-bold mb-4">Moje fotky</h2>
      <div className="photos-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagePaths.map((imagePath, index) => (
          <img key={index} src={imagePath} alt={`Fotka ${index + 1}`} className="w-full h-auto object-cover rounded shadow" />
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
