import { AxiosError } from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CloseButton from "../../components/CloseButton";
import DefaultForm from "../../components/default-form/DefaultForm";
import LoadingIcon from "../../components/LoadingIcon";
import { PublicApi } from "../../lib/api";
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
      const response = await PublicApi.get("/testimonials/all");
      setTestimonials(response.data);
    } catch (error: AxiosError | any) {
      toast.error("Erro recuperando os depoimentos.");
    } finally {
      setIsGettingTestimonials(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const onButtonClick = async () => {
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
      await PublicApi.post("/testimonials/create", {
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
      <div className="grid place-items-center px-[135px] mt-2 w-screen">
        <p className="text-[20px] text-center">
          Esta seção é dedicada para todos que quiserem postar algum tipo de
          experiência vivida com um parente próximo ou até mesmo pessoal. Clique
          no botão azul para contar um pouquinho sobre seu aprendizado com
          tratamentos de reabilitação.
        </p>
      </div>
      {isGettingTestimonials ? (
        <div className="grid place-items-center my-4">
          <LoadingIcon />
        </div>
      ) : testimonials.length === 0 ? (
        <h1 className="text-center text-[36px] my-4">
          NENHUM DEPOIMENTO CADASTRADO
        </h1>
      ) : (
        <div className="w-screen h-[calc(70vh-1rem)] flex flex-col overflow-x-hidden overflow-y-auto items-center justify-center gap-y-4 my-4">
          {testimonials.map((testimonial: any) => {
            return (
              <TestimonialField
                author={testimonial.author}
                text={testimonial.text}
              />
            );
          })}
        </div>
      )}
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
          <AddTestimonialButton onClick={onButtonClick} />
        </div>
      )}
      <Toaster position="top-right" />
    </div>
  );
}

export default Testimonials;
