import { useEffect, useState } from "react";
import ActivityForm from "../../components/activity-components/ActivityForm";
import ActivitiesDashboard from "../../components/admin-components/ActivitiesDashboard";
import AgentBio from "../../components/admin-components/AgentBio";
import DoubtsDashboard from "../../components/admin-components/DoubtsDashboard";
import ItemsDashboard from "../../components/admin-components/ItemsDashboard";
import OptionsLayout from "../../components/admin-components/OptionsLayout";
import ItemForm from "../../components/item-components/ItemForm";
import LoginForm from "../../components/login-form/LoginForm";
import LogoutButton from "../../components/LogoutButton";
import { useForceUpdate } from "../../hooks/custom.hooks";
import { PrivateApi } from "../../lib/api";
import { getUser, isAuthenticated } from "../../lib/services/auth.service";

function HealthAgentPage() {
  const [userData, setUserData] = useState({});
  const [optionSelected, setOptionSelected] = useState<string>("");
  const forceUpdate = useForceUpdate();

  const fecthUserData = async () => {
    try {
      const response = await PrivateApi("/users/" + getUser());
      if (response.data) setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthUserData();
  });

  if (!isAuthenticated()) {
    return (
      <div className="w-screen grid place-items-center mt-4">
        <LoginForm sideEffect={forceUpdate} />
      </div>
    );
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-row relative w-screen">
        <h1 className="text-[36px] text-center w-screen">
          PÁGINA DO AGENTE DE SAÚDE
        </h1>
        <LogoutButton sideEffect={forceUpdate} />
      </div>
      <AgentBio
        username={userData.username}
        email={userData.email}
        picture={userData.picture}
      />
      <OptionsLayout
        onSelected={(selected: string) => {
          setOptionSelected(selected);
        }}
      />
      <div className="mt-4 w-screen h-auto flex items-center justify-center">
        {(optionSelected === "DÚVIDAS" && <DoubtsDashboard />) ||
          (optionSelected === "NOVA ATIVIDADE" && <ActivityForm />) ||
          (optionSelected === "NOVO UTENSÍLIO" && <ItemForm />) ||
          (optionSelected === "LISTA DE ATIVIDADES" && (
            <ActivitiesDashboard />
          )) ||
          (optionSelected === "LISTA DE UTENSÍLIOS" && <ItemsDashboard />)}
      </div>
    </div>
  );
}

export default HealthAgentPage;
