import type { ReactNode } from "react";

const AddressItem = ({ children }: { children: ReactNode }) => {
  return (
    <span className="flex items-center gap-2 text-blue-800 font-semibold">
      {children}
    </span>
  );
};

export default AddressItem;
