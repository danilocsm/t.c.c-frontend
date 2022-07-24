import { useRef } from "react";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";

interface GalleryProps {
  children?: JSX.Element[] | JSX.Element;
}

const OFFSET = 70;

function Gallery(props: GalleryProps) {
  const scrollviewRef = useRef(null);

  const onRightButtonClick = () => {
    if (scrollviewRef !== null) scrollviewRef.current.scrollLeft += OFFSET;
  };

  const onLeftButtonClick = () => {
    if (scrollviewRef !== null) scrollviewRef.current.scrollLeft -= OFFSET;
  };

  return (
    <div className="relative w-screen grid grid-flow-col h-[calc(50vh-1rem)] place-items-center my-10 rounded-[20px] px-12">
      <button
        onClick={onLeftButtonClick}
        className=" w-[100px] h-[51px]"
      >
        <LeftArrow />
      </button>
      <div
        ref={scrollviewRef}
        className="w-[calc(75vw-1rem)] grid grid-flow-col place-items-center gap-x-4 overflow-y-hidden overflow-x-auto scrollbar-none rounded-[20px]"
      >
        {props.children}
      </div>
      <button
        onClick={onRightButtonClick}
        className=" w-[100px] h-[51px]"
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default Gallery;
