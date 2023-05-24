import { MdAttachMoney } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import { HeaderContainer, HeaderContent } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../Context/TransactionsContext";

export function Header() {
  const { handleOpenTransactionModal } = useContext(TransactionsContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <span>
          MoneyTracker
          <MdAttachMoney size={40} />
        </span>

        <button onClick={handleOpenTransactionModal} type="button">
          <IoMdAdd size={24} color="#fff" />
          Cadastrar transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  );
}
