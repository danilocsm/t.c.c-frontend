import GridObject from "../../components/grid-object/GridObject";
import SearchBar from "../../components/searchbar/SearchBar";

const allActivities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Activities() {
  return (
    <>
      <div className="w-100vw grid items-center justify-center">
        <h1 className="text-center text-[36px] mt-2">ATIVIDADES</h1>
        <div className="w-screen flex flex-row h-fit">
          <p className="text-center text-[20px] px-[135px]">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim. Elit aute irure tempor
            cupidatat incididunt sint deserunt.
          </p>
        </div>
        <div className="w-screen flex flex-col items-center justify-center mt-4">
          <h1 className="font-grandstander text-[30px] "> FAÇA SUA BUSCA </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-screen h-1/5">
          <SearchBar />
        </div>
        <div className="w-screen h-fit flex flex-col items-center justify-center md:pl-10 mb-4 overflow-x-hidden">
          <h1 className="text-[36px] py-6">ATIVDADES DISPONÍVEIS</h1>
          <div className="grid grid-cols-4 w-screen items-center justify-center gap-4 px-8 overflow-x-hidden">
            {allActivities.map((activity) => {
              return (
                <GridObject
                  title="Titulo"
                  image="image.png"
                  link="link.com.br"
                  buttonText= "saiba mais"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Activities;
