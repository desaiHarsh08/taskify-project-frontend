import { ErrorContext, ErrorContextType } from "@/provider/ErrorProvider";
import { useContext } from "react";

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};
