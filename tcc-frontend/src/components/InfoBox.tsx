interface InfoBoxProps {
  title: string;
  content: string;
}

function InfoBox(props: InfoBoxProps) {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 bg-zinc-500 rounded-[20px] p-3 text-center">
      <h2 className="font-grandstander text-black">{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default InfoBox;
