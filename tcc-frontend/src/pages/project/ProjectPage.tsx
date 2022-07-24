import { Slide } from "pure-react-carousel";
import Gallery from "../../components/gallery/Gallery";
import InfoBox from "../../components/InfoBox";

function ProjectPage() {
  return (
    <div className="w-100vw grid items-center justify-center">
      <div className="flex flex-row items-center justify-center w-screen">
        <h1 className="font-grandstander text-3xl text-black mt-4 text-center">
          CONHEÇA MAIS NOSSO PROJETO
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center w-screen">
        <p className="font-grandstander text-xl text-black mt-2 text-center indent-5 pl-2 pr-2"></p>
      </div>
      <div className="flex flex-row w-screen items-center justify-center">
        <div className="md:w-1/4 md:h-[245px] bg-zinc-500 mt-4 ml-6 hidden rounded-[20px] md:block"></div>
        <div className="md:w-3/4 md:h-[245px] pl-2 pr-2">
          <p className="font-grandstander text-xl text-black mt-4  pr-4 text-center indent-5"></p>
        </div>
      </div>
      <Gallery>
        <div className="md:w-[300px] md:h-[300px] rounded-[20px] bg-zinc-500 w-[150px] h-[150px] md:inline-block snap-start"></div>
        <div className="md:w-[300px] md:h-[300px] rounded-[20px] bg-zinc-500 w-[150px] h-[150px] md:inline-block snap-start"></div>
        <div className="md:w-[300px] md:h-[300px] rounded-[20px] bg-zinc-500 w-[150px] h-[150px] md:inline-block snap-start"></div>
        <div className="md:w-[300px] md:h-[300px] rounded-[20px] bg-zinc-500 w-[150px] h-[150px] md:inline-block snap-start"></div>
        <div className="md:w-[300px] md:h-[300px] rounded-[20px] bg-zinc-500 w-[150px] h-[150px] md:inline-block snap-start"></div>
        <div className="md:w-[300px] md:h-[300px] rounded-[20px] bg-zinc-500 w-[150px] h-[150px] md:inline-block snap-start"></div>
      </Gallery>
      <InfoBox
        title={"CONTATOS:"}
        content={
          "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt."
        }
      />
      <InfoBox
        title={"MATERIAIS:"}
        content={
          "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt."
        }
      />
    </div>
  );
}

export default ProjectPage;
