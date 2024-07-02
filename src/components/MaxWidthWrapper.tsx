import { FC, ReactNode } from "react";

type TMaxWidthWrapper = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWrapper: FC<TMaxWidthWrapper> = ({ className, children }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1070px] px-[15px] md:px-4 lg:px-6 xl:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
