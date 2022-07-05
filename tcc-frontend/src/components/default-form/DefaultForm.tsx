import { FormEvent, useState } from "react";

interface DefaultFormProps {
  input1Data: { label: string; placeholder: string };
  input2Data: { label: string; placeholder: string };
  textAreaData: { label: string; placeholder: string };
  onSubmit: (event: FormEvent, data: any) => Promise<void>;
}

function DefaultForm({
  input1Data,
  input2Data,
  textAreaData,
  onSubmit,
}: DefaultFormProps) {
  const [input1Value, setInput1Value] = useState<string>("");
  const [input2Value, setInput2Value] = useState<string>("");
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    await onSubmit(event, { input1Value, input2Value, textAreaValue });
    setInput1Value("");
    setInput2Value("");
    setTextAreaValue("");
  };

  return (
    <form
      className="w-full p-4 flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="md:w-[1170px] md:h-[628px] w-3/4 h-2/3 bg-cerGreen flex flex-col items-center justify-start gap-6 rounded-[20px] shadow-cerShadow">
        <span className="text-[20px] mt-2">{input1Data.label}:</span>
        <input
          type="text"
          name="name"
          className="md:w-[1030px] md:h-[59px] bg-white rounded-[20px] pl-2"
          placeholder={input1Data.placeholder}
          onChange={(event) => {
            setInput1Value(event.target.value);
          }}
          value={input1Value}
        />
        <span className="text-[20px]">{input2Data.label}:</span>
        <input
          type="text"
          name="email"
          className="md:w-[1030px] md:h-[59px] bg-white rounded-[20px] pl-2"
          placeholder={input2Data.placeholder}
          onChange={(event) => setInput2Value(event.target.value)}
          value={input2Value}
        />
        <span className="text-[20px]">{textAreaData.label}:</span>
        <textarea
          name="comment"
          placeholder={textAreaData.placeholder}
          className="md:w-[1030px] md:h-[225px] bg-white resize-none rounded-[20px] px-2 py-2"
          onChange={(event) => setTextAreaValue(event.target.value)}
          value={textAreaValue}
        ></textarea>
        <button
          type="submit"
          disabled={
            textAreaValue.length === 0 ||
            input1Value.length === 0 ||
            input2Value.length === 0
          }
          className="self-end rounded-[20px] bg-cerBlue w-[100px] h-[60px] mr-10 mb-2 hover:bg-cerPurple hovert:text-white focus:border-2 focus:border-cerPurple focus:text-white focus:outline-none disabled:opacity-50 disabled:hover:opacity-70 transition-all ease-in-out"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default DefaultForm;
