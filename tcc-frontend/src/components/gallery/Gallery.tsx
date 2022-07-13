import ScrollContainer from "react-indiana-drag-scroll";

interface GalleryProps {
  className?: string;
  children?: JSX.Element[] | JSX.Element;
}

function Gallery(props: GalleryProps) {
  return (
    <div className="relative w-screen h-fit flex flex-row items-center justify-center mt-10 mb-2 md:mt-12 rounded-[20px] pl-12 pr-12 scrollbar-none">
      <ScrollContainer className="grid grid-flow-col gap-8 snap-mandatory">
        {props.children !== undefined ? props.children : <div></div>}
      </ScrollContainer>
    </div>
  );
}

export default Gallery;
