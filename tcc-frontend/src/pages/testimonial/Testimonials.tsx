import { AxiosError } from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CloseButton from "../../components/CloseButton";
import DefaultForm from "../../components/default-form/DefaultForm";
import LoadingIcon from "../../components/LoadingIcon";
import { api } from "../../lib/api";
import AddTestimonialButton from "../../components/testimonial-components/AddTestimonialButton";
import TestimonialField from "../../components/testimonial-components/TestimonialField";

const scrollToRef = (ref: any) => {
  window.scrollTo(0, ref.current.offsetTop);
};

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [isGettingTestimonials, setIsGettingTestimonials] = useState(true);
  const [showNewTestimonialForm, setShowNewTestimonialForm] = useState(false);
  const myRef = useRef(null);

  const fetchTestimonials = async () => {
    setIsGettingTestimonials(true);
    try {
      const response = await api.get("/testimonials/all");
      setTestimonials(response.data);
    } catch (error: AxiosError | any) {
    } finally {
      setIsGettingTestimonials(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const onButtonCLick = async () => {
    setShowNewTestimonialForm(true);
    await setTimeout(() => {
      scrollToRef(myRef);
    }, 10);
  };

  const onSubmit = async (event: FormEvent, data: any) => {
    event.preventDefault();
    setShowNewTestimonialForm(false);
    console.log(data);
    try {
      await api.post("/testimonials/create", {
        author: data.input1Value,
        text: data.textAreaValue,
      });
      toast.success("Depoimento adicionado com sucesso!");
    } catch (error: AxiosError | any) {
      toast.error(error.response.data.message);
    } finally {
      fetchTestimonials();
      await setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    }
  };

  return (
    <div className="grid w-screen items-center justify-center overflow-x-hidden">
      <div className="text-center w-screen px-[318px] mt-2 flex items-center justify-center">
        <h1 className="text-[36px]">DEPOIMENTOS</h1>
      </div>
      <div className="text-center px-[135px] mt-2 w-fit">
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
        {isGettingTestimonials ? (
          <LoadingIcon />
        ) : testimonials.length === 0 ? (
          <h1>NENHUM DEPOIMENTO CADASTRADO</h1>
        ) : (
          testimonials.map((testimonial: any) => {
            return (
              <TestimonialField
                author={testimonial.author}
                text={testimonial.text}
              />
            );
          })
        )}
      </div>
      {showNewTestimonialForm ? (
        <div ref={myRef} className="flex flex-row items-center justify-center">
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
          >
            <CloseButton onClick={() => setShowNewTestimonialForm(false)} />
          </DefaultForm>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <AddTestimonialButton onClick={onButtonCLick} />
        </div>
      )}
      <Toaster position="top-right" />
    </div>
  );
}

export default Testimonials;
