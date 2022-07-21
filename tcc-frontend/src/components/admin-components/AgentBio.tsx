import { useState } from "react";

interface AgentBioProps {
  username: string;
  email: string;
  picture: string;
}

function AgentBio({ username, email, picture }: AgentBioProps) {
  return (
    <div className="w-screen flex flex-row mt-4">
      <div className="w-1/4 flex flex-col items-center justify-center gap-y-4">
        {picture !== undefined ? (
          <img
            className="rounded-[20px] w-[202px] h-[236px] shadow-cerShadow"
            src={`data:image/png;base64,${picture}`}
          />
        ) : (
          <div className="bg-cerGreen rounded-[20px] w-[202px] h-[236px] shadow-cerShadow"></div>
        )}
      </div>
      <div className="w-3/4 flex flex-col items-start justify-start gap-y-4">
        <span className="text-[32px]">{username}</span>
        <span className="text-[32px]">{email}</span>
      </div>
    </div>
  );
}

export default AgentBio;
