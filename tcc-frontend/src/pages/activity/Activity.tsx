import { useEffect } from "react";
import { useParams } from "react-router";
import ActivityObject from "../../components/acitivty-object/ActivityObject";
import ActivityImages from "../../components/activity-images/ActivityImages";
import Gallery from "../../components/gallery/Gallery";
import SearchBar from "../../components/searchbar/SearchBar";

// TODO remove
import DefaultObjectImage1 from "/public/images/defaultItem1.png";
import DefaultObjectImage2 from "/public/images/defaultItem2.png";
import DefaultObjectImage3 from "/public/images/defaultItem3.png";

function Activity() {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    // api.get(id)
  }, []);

  return (
    <>
      <div className="w-100vw grid items-center justify-center">
        <div className="w-screen flex flex-col items-center justify-center mt-4">
          <h1 className="text-[30px] "> FAÇA SUA BUSCA </h1>
        </div>
        <div className="flex flex-row items-center justify-center w-screen h-1/5">
          <SearchBar />
        </div>
        <h1 className="mt-4 mb-4 text-[36px] text-center"> Activity: {id}</h1>
        <div className="w-screen flex flex-col items-center justify-center text-center">
          <p className="pl-2 pr-2">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim. Elit aute irure tempor
            cupidatat incididunt sint deserunt.
          </p>
          <h2 className="mt-2">
            <span className="font-bold">Síndromes e doenças em foco:</span>{" "}
            <span>
              Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
              tempor enim. Elit aute irure tempor cupidatat incididunt sint
              deserunt.
            </span>
          </h2>
        </div>
        <ActivityImages imagesArray={[]} />
        <div className="flex flex-col justify-center gap-2">
          <h2 className="mt-6 text-[30px] text-center">
            UTENSÍLIOS QUE PODEM AUXILIAR:
          </h2>
          <Gallery className={""}>
            <ActivityObject
              name={"Nome do objeto".toUpperCase()}
              description={
                "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. "
              }
              img={DefaultObjectImage1}
            />
            <ActivityObject
              name={"Nome do objeto".toUpperCase()}
              description={
                "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. "
              }
              img={DefaultObjectImage2}
            />
            <ActivityObject
              name={"Nome do objeto".toUpperCase()}
              description={
                "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. "
              }
              img={DefaultObjectImage3}
            />
          </Gallery>
        </div>
        <h2 className="mt-4 text-[30px] text-center">
          OBSERVAÇÕES IMPORTANTES:
        </h2>
        <p className="mt-2 mb-4 text-center pl-2 pr-2">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis
          id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore
          cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
          sint deserunt.
        </p>
      </div>
    </>
  );
}

export default Activity;
