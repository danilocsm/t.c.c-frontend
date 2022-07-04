import { useRef, useState } from "react";
import DefaultForm from "../../components/default-form/DefaultForm";
import AddTestimonialButton from "./AddTestimonialButton";
import TestimonialField from "./TestimonialField";

const testimonials = [
  {
    author: "Pessoa 1",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt quesse pariatur duis deserunt mollit dolore cillum minim tempor enim.Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididuntsint deserunt.",
  },
  {
    author: "Pessoa 2",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt quesse pariatur duis deserunt mollit dolore cillum minim tempor enim.Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididuntsint deserunt.",
  },
  {
    author: "Pessoa 3",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt quesse pariatur duis deserunt mollit dolore cillum minim tempor enim.Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididuntsint deserunt.",
  },
];

const scrollToRef = (ref: any) => {
  window.scrollTo(0, ref.current.offsetTop);
};

function Testimonials() {
  const [showTestimonialLog, setShowTestimonialLog] = useState(false);
  const myRef = useRef(null);

  const onButtonCLick = async () => {
    setShowTestimonialLog(true);
    await setTimeout(() => {
      scrollToRef(myRef);
    }, 10);
  };

  const onSubmit = () => {
    setShowTestimonialLog(false);
  };

  return (
    <div className="grid w-screen items-center justify-center">
      <div className="text-center px-[318px] mt-2">
        <h1 className="text-[36px]">DEPOIMENTOS</h1>
      </div>
      <div className="text-center px-[135px] mt-2">
        <p className="text-[20px]">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis
          id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore
          cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
          sint deserunt.
        </p>
      </div>
      <div className="w-scren flex flex-col overflow-x-hidden items-center justify-center gap-y-4 my-4">
        {testimonials.map((testimonial) => {
          return (
            <TestimonialField
              author={testimonial.author}
              text={testimonial.description}
            />
          );
        })}
      </div>
      {showTestimonialLog ? (
        <div ref={myRef}>
          <DefaultForm
            input1Data={{
              label: "ESCREVA SEU NOME",
              placeholder: "OPCIONAL",
            }}
            input2Data={{ label: "ASSUNTO", placeholder: "ex: Assunto" }}
            textAreaData={{
              label: "DEPOIMENTO",
              placeholder: "clique aqui para escrever...",
            }}
            onSubmit={onSubmit}
          />
        </div>
      ) : (
        <AddTestimonialButton onClick={onButtonCLick} />
      )}
    </div>
  );
}

export default Testimonials;
