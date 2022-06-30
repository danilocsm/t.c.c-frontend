interface InfoBoxProps {
  title: string;
  content: string;
}

function InfoBox(props: InfoBoxProps) {
  return (
    <div className="flex items-center justify-center w-screen mt-10 mb-4">
      <div className="flex flex-col items-center justify-center w-3/4 bg-cerGreen rounded-[20px] p-3 text-center">
        <h2 className="font-grandstander text-black">{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default InfoBox;
