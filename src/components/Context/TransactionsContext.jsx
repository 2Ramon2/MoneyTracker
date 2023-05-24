import { createContext, useState } from "react";

export const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");
  const [category, setCategory] = useState("");
  const [transactionsList, setTransactionsList] = useState([]);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false);
    setTitle("");
    setAmount(0);
    setTransactionType("");
    setCategory("");
  }

  return (
    <TransactionsContext.Provider
      value={{
        title,
        setTitle,
        amount,
        setAmount,
        transactionType,
        setTransactionType,
        category,
        setCategory,
        transactionsList,
        setTransactionsList,
        isTransactionModalOpen,
        handleOpenTransactionModal,
        handleCloseTransactionModal,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
