import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false);
  };
  // console.log(images);

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  };
};

export default useFetchGifs;