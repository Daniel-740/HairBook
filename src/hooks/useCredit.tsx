import { useUser } from "@/context/UserContext";
import { useState } from "react";

export const useCredit = () => {
  const [credit, setCredit] = useState<string>('');
  const { userApp, setUserApp } = useUser();

  const handleNumericChange = (text: string) => {
    // Remove any non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
    setCredit(numericValue);
  };

  const handleCreditRecharge = () => {
    const numericCredit = parseInt(credit, 10);

    if (!isNaN(numericCredit) && numericCredit > 0) {
      setUserApp((prevUser) => {
        if (!prevUser) return null;
        return {
          ...prevUser,
          credits: (prevUser.credits || 0) + numericCredit,
        };
      });

      setCredit('');
      alert('Creditos recargados!.');
    } else {
      alert('Por favor, ingresa una cantidad válida de créditos.');
    }
  };
  return {
    credit,
    setCredit,
    handleCreditRecharge,
    handleNumericChange,
    userApp,
  };
};
