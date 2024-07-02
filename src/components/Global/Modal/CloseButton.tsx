import Image from "next/image";
import iconClose from "/public/icons/icon_close.svg";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      className="absolute top-[20px] right-[20px] text-gray-600 hover:text-gray-900"
      onClick={onClick}
    >
      <Image src={iconClose} width={18} height={18} alt="" />
    </button>
  );
};

export default CloseButton;
