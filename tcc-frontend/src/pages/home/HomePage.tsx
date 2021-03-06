import SectionContainer from "../../components/SectionContainer";

const sections = [
  {
    name: "Atividades",
    brief:
      "Clique no botão para conhecer a nossa seção de atividades para realizar com seus familiares",
    page: "/activities",
  },
  {
    name: "Utensílios",
    brief:
      "Clique no botão para conhecer nossa lista de utensílios para ajudar no tratamento dos seus familiares",
    page: "/items",
  },
  {
    name: "Sobre o projeto",
    brief: "Clique no botão para conhecer mais sobre nosso projeto",
    page: "/about",
  },
  {
    name: "Depoimentos",
    brief:
      "Clique no botão para prestar um depoimento sobre o tratamento de um familiar",
    page: "/testimonials",
  },
  {
    name: "Dúvidas",
    brief: "Clique no botão para enviar uma dúvida para nossos profissionais",
    page: "/help",
  },
];

function HomePage() {
  return (
    <div className="w-screen grid place-items-center">
      <div className="w-[calc(80%-2rem)] flex flex-wrap  justify-center gap-4 mt-4 px-8">
        {sections.map((section) => {
          return (
            <SectionContainer
              name={section.name.toUpperCase()}
              brief={section.brief}
              page={section.page}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
