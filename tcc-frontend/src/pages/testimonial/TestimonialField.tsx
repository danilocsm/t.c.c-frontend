interface TestimonialFieldProps {
  author: string;
  text: string;
}

function TestimonialField({ author, text }: TestimonialFieldProps) {
  return (
    <div className="bg-cerGreen text-center md:w-[1170px] md:h-[204px] w-2/4 h-fit rounded-[20px] flex flex-col justify-center items-center">
      <p className="text-[20px] px-4">{text}</p>
      <span className="text-[18px] self-end pr-4 pt-2">{author}</span>
    </div>
  );
}

export default TestimonialField;