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

function Testimonials() {
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
    </div>
  );
}

export default Testimonials;
