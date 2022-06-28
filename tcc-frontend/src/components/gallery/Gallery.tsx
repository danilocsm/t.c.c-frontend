import ScrollContainer from "react-indiana-drag-scroll";

interface GalleryProps {
  className: string;
  children?: JSX.Element[];
}
const rangeArray = [1, 2, 3, 4, 5, 6];

function Gallery(props: GalleryProps) {
  return (
    <div className="relative w-screen h-fit grid grid-flow-col mt-10 mb-2 md:mt-12 rounded-[20px] pl-12 pr-12 scrollbar-none">
      <ScrollContainer className="grid grid-flow-col gap-4 snap-mandatory">
        {rangeArray.map((range) => {
          return (
            <>
              {props.children !== undefined ? (
                props.children[range - 1]
              ) : (
                <div></div>
              )}
            </>
          );
        })}
      </ScrollContainer>
    </div>
  );
}

export default Gallery;
