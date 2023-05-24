import ReactModal from "react-modal";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineClose,
} from "react-icons/ai";

import {
  TransactionsModalContainer,
  TransactionTypeContainer,
  DepositButton,
  WithdrawButton,
} from "./styles";
import { TransactionsContext } from "../Context/TransactionsContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

ReactModal.setAppElement("#root");

export function TransactionsModal() {
  const {
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
    handleCloseTransactionModal,
  } = useContext(TransactionsContext);

  const disabledSubmit = title && amount && transactionType && category;

  function handleSubmitForm(event) {
    event.preventDefault();
    setTransactionsList([
      ...transactionsList,
      {
        id: uuidv4(),
        title,
        amount,
        type: transactionType,
        category,
        date: new Date(),
      },
    ]);
    setTitle("");
    setAmount(0);
    setTransactionType("");
    setCategory("");
    handleCloseTransactionModal();
  }

  console.log(transactionsList);

  return (
    <ReactModal
      isOpen={isTransactionModalOpen}
      onRequestClose={handleCloseTransactionModal}
      overlayClassName="modal-overlay"
      className="modal-content slide-in-fwd-center"
    >
      <TransactionsModalContainer>
        <h2>Cadastrar transação</h2>
        <button onClick={handleCloseTransactionModal} type="button" title="Fechar">
          <AiOutlineClose size={22} color="#fff" />
        </button>
        <form onSubmit={handleSubmitForm}>
          <input
            type="text"
            placeholder="Titulo"
            required
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            value={amount}
            onChange={({ target }) => setAmount(+target.value)}
          />

          <TransactionTypeContainer>
            <DepositButton
              type="button"
              onClick={() => setTransactionType("deposit")}
              transactionType={transactionType}
            >
              Deposito <AiOutlineArrowUp />
            </DepositButton>

            <WithdrawButton
              type="button"
              onClick={() => setTransactionType("withdraw")}
              transactionType={transactionType}
            >
              Saída
              <AiOutlineArrowDown />
            </WithdrawButton>
          </TransactionTypeContainer>

          <input
            type="text"
            placeholder="Categoria"
            required
            value={category}
            onChange={({ target }) => setCategory(target.value)}
          />

          <button disabled={!disabledSubmit} type="submit">
            Cadastrar
          </button>
        </form>
      </TransactionsModalContainer>
    </ReactModal>
  );
}
