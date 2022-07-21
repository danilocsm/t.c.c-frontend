import { useState } from "react";

function EditAgentForm() {
  const [base64, setBase64] = useState<string>("");

  const onProfilePictureFormChange = (event: any) => {
    if (event.target.files === undefined || event.target.files === null) return;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleProfilePictureLoaded;
      reader.readAsBinaryString(file);
    }
  };

  const _handleProfilePictureLoaded = (readerEvt: any) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString));
  };

  const profilePictureUpload = (event: any) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    if (reader !== undefined && file !== undefined) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <form onChange={onProfilePictureFormChange}>
      <label
        htmlFor="profilePictureInput"
        className="rounded-[20px] w-[202px] h-[50px] shadow-cerShadow bg-cerBlue items-center justify-center flex cursor-pointer hover:bg-cerPurple"
      >
        Inserir foto
        <input
          type="file"
          className="hidden"
          id="profilePictureInput"
          onChange={profilePictureUpload}
        />
      </label>
    </form>
  );
}

export default EditAgentForm;
