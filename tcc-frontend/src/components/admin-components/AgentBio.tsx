import { useEffect, useState } from "react";

function AgentBio() {
  const [agentData, setAgentData] = useState({ image: undefined });
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [base64, setBase64] = useState<string>("");

  const onChange = (event: any) => {
    if (event.target.files === undefined || event.target.files === null) return;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString));
  };

  const photoUpload = (event: any) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    if (reader !== undefined && file !== undefined) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-screen flex flex-row" onChange={onChange}>
      <div className="w-1/4 flex flex-col items-center justify-center gap-y-4">
        {agentData.image !== undefined ? (
          <img
            className="rounded-[20px] w-[202px] h-[236px] shadow-cerShadow"
            src={agentData.image}
          />
        ) : (
          <div className="bg-cerGreen rounded-[20px] w-[202px] h-[236px] shadow-cerShadow"></div>
        )}
        <label
          htmlFor="profilePictureInput"
          className="rounded-[20px] w-[202px] h-[50px] shadow-cerShadow bg-cerBlue items-center justify-center flex cursor-pointer hover:bg-cerPurple"
        >
          Inserir foto
          <input
            type="file"
            className="hidden"
            id="profilePictureInput"
            onChange={photoUpload}
          />
        </label>
      </div>
      <div className="w-3/4 flex flex-col items-start justify-start gap-y-4">
        <span className="text-[32px]">NOME COMPLETO</span>
        <span className="text-[32px]">EMAIL DE CONTATO</span>
      </div>
    </div>
  );
}

export default AgentBio;
