interface UpdateButtonProps {
  onClick: () => void;
  style: string;
}

function UpdateButton({ style, onClick }: UpdateButtonProps) {
  return (
    <button className={`absolute ${style}`} onClick={onClick}>
      Atualizar
    </button>
  );
}

export default UpdateButton;
