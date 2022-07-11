import { useState } from "react";
import ActivityForm from "../../components/activity-components/ActivityForm";
import AgentBio from "../../components/admin-components/AgentBio";
import OptionsLayout from "../../components/admin-components/OptionsLayout";
import ItemForm from "../../components/item-components/ItemForm";

function HealthAgentPage() {
  const [optionSelected, setOptionSelected] = useState<string>("");

  return (
    <div className="w-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-[36px] text-center w-screen">
        PÁGINA DO AGENTE DE SAÚDE
      </h1>
      <AgentBio />
      <OptionsLayout
        onSelected={(selected: string) => {
          setOptionSelected(selected);
        }}
      />
      <div className="mt-4 w-screen h-auto flex items-center justify-center">
        {(optionSelected === "NOVA ATIVIDADE" && <ActivityForm />) ||
          (optionSelected === "NOVO UTENSÍLIO" && <ItemForm />) ||
          (optionSelected === "LISTA DE ATIVIDADES" && (
            <h1>Lista de atividades</h1>
          )) ||
          (optionSelected === "LISTA DE UTENSÍLIOS" && (
            <h1>Lista de utensílios</h1>
          ))}
      </div>
    </div>
  );
}

export default HealthAgentPage;
