import DefaultImage from "/public/images/defaultActivityImage.png";

interface ActivityImagesProps {
  imagesArray: string[];
}

function ActivityImages({ imagesArray }: ActivityImagesProps) {
  return (
    <>
      <div className="w-screen h-6/7 flex flex-row items-center justify-center overflow-x-auto overflow-y-hidden scrollbar-thumb-cerBlue">
        {imagesArray.length == 0 ? (
          <img src={DefaultImage} width="600" height="600" />
        ) : (
          imagesArray.map((image) => {
            return (
              <>
                <img src={image} width="600" height="600" />
              </>
            );
          })
        )}
      </div>
    </>
  );
}

export default ActivityImages;
