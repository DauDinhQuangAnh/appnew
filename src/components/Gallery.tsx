import { FC, useState } from "react";
import Lightbox, { ImagesListType } from "react-spring-lightbox";

const images: ImagesListType = [
  {
    src: "screenshots/sign_in.jpg",
    loading: "lazy",
    alt: "Sign in screen",
  },
  {
    src: "screenshots/sign_up.jpg",
    loading: "lazy",
    alt: "Sign up screen",
  },
  {
    src: "screenshots/error.jpg",
    loading: "lazy",
    alt: "Error validation",
  },
  {
    src: "screenshots/forget_password.jpg",
    loading: "lazy",
    alt: "Forget password screen",
  },
  {
    src: "screenshots/verification.jpg",
    loading: "lazy",
    alt: "Email verification screen",
  },
  {
    src: "screenshots/home.jpg",
    loading: "lazy",
    alt: "Home screen",
  },
  {
    src: "screenshots/options_modal.jpg",
    loading: "lazy",
    alt: "Options Modal Open",
  },
  {
    src: "screenshots/player.jpg",
    loading: "lazy",
    alt: "Audio Player Modal",
  },
  {
    src: "screenshots/detail.jpg",
    loading: "lazy",
    alt: "Audio Detail Modal",
  },
  {
    src: "screenshots/profile_uploads.jpg",
    loading: "lazy",
    alt: "Profile Screen With Uploads Tab Open",
  },
  {
    src: "screenshots/edit_modal.jpg",
    loading: "lazy",
    alt: "Edit Modal Open",
  },
  {
    src: "screenshots/profile_playlist.jpg",
    loading: "lazy",
    alt: "Profile Screen With Playlist Tab Open",
  },
  {
    src: "screenshots/profile_history.jpg",
    loading: "lazy",
    alt: "Profile Screen With History Tab Open",
  },
  {
    src: "screenshots/settings.jpg",
    loading: "lazy",
    alt: "Profile Settings Screen",
  },
  {
    src: "screenshots/public_profile_uploads.jpg",
    loading: "lazy",
    alt: "Public Profile Screen With Uploads Tab Open",
  },
  {
    src: "screenshots/upload_page.jpg",
    loading: "lazy",
    alt: "Audio Upload Screen",
  },
  {
    src: "screenshots/edit_page.jpg",
    loading: "lazy",
    alt: "Screen to Update Audios",
  },
  {
    src: "screenshots/background_player.jpg",
    loading: "lazy",
    alt: "Playing Auido in Background Mode",
  },
];

interface GridProps {
  images: ImagesListType;
  onClick(index: number): void;
}

const Grid: FC<GridProps> = ({ images, onClick }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-lg hover:shadow-xl p-4 cursor-pointer hover:scale-[1.02] transition-all"
            onClick={() => onClick(index)}
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface ButtonProps {
  onClick(): void;
  title: string;
  visible?: boolean;
}
const Button: FC<ButtonProps> = ({ visible, onClick, title }) => {
  if (!visible) return null;

  return (
    <button onClick={onClick} className="text-white p-4 cursor-pointer z-50">
      {title}
    </button>
  );
};

const Gallery = () => {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  const handleOnImagePress = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  return (
    <>
      <Grid images={images} onClick={handleOnImagePress} />
      <Lightbox
        isOpen={showModal}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        onClose={() => setShowModal(false)}
        renderImageOverlay={() => (
          <div className="absolute top-0 text-center flex items-center justify-center p-4">
            <p className="bg-primary bg-opacity-30 text-white font-semibold px-4 py-2 rounded text-sm">
              {images[currentImageIndex].alt}
            </p>
          </div>
        )}
        renderPrevButton={() => (
          <Button
            onClick={gotoPrevious}
            title="Previous"
            visible={currentImageIndex > 0}
          />
        )}
        renderNextButton={() => (
          <Button
            onClick={gotoNext}
            title="Next"
            visible={currentImageIndex < images.length - 1}
          />
        )}
        className="bg-gray-900 bg-opacity-50 backdrop-blur-sm"
      />
    </>
  );
};

export default Gallery;
