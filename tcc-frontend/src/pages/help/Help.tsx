import DefaultForm from "../../components/default-form/DefaultForm";

function Help() {
  return (
    <>
      <div className="w-100vw grid items-center justify-center">
        <div className="text-center md:px-[317px] mt-4">
          <h1 className="text-[36px]">TIRE SUA DÚVIDA AQUI</h1>
        </div>
        <div className="md:px-[135px] text-center mt-4">
          <p className="text-[20px]">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim. Elit aute irure tempor
            cupidatat incididunt sint deserunt.
          </p>
        </div>
        <DefaultForm
          input1Data={{
            label: "ESCREVA SEU NOME",
            placeholder: "ex: Maria José da Silva",
          }}
          input2Data={{
            label: "E-MAIL PARA CONTATO",
            placeholder: "ex: mariajose@email.com",
          }}
          textAreaData={{
            label: "ESCREVA SUA DÚVIDA",
            placeholder: "clique aqui para escrever...",
          }}
          onSubmit={() => {}}
        />
      </div>
    </>
  );
}

export default Help;
