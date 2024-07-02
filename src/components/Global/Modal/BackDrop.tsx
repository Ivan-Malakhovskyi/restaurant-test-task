import { ReactNode, SyntheticEvent } from "react";

interface BackdropProps {
  onClick: (e: SyntheticEvent) => void;
  children: ReactNode;
  maxheight?: string;
}

const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  children,
  maxheight,
}) => {
  return (
    <div
      className="fixed inset-0 w-screen  h-screen overflow-y-auto bg-accentBgColor  flex justify-end  items-start z-50"
      onClick={onClick}
      style={{ maxHeight: maxheight }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
