import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { SummaryContainer, IncomeIcon, OutcomeIcon, TotalIcon } from "./styles";
import { MdAttachMoney } from "react-icons/md";
import { useContext } from "react";
import { TransactionsContext } from "../Context/TransactionsContext";

export function Summary() {
  const { transactionsList } = useContext(TransactionsContext);

  const summary = transactionsList.reduce(
    (ac, item) => {
      if (item.type === "deposit") {
        ac.income += item.amount;
        ac.total += item.amount;
      } else if (item.type === "withdraw") {
        ac.outcome -= item.amount;
        ac.total -= item.amount;
      }
      return ac;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  const { income, outcome, total } = summary;

  const currencyFormat = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <SummaryContainer>
      <div>
        <header>
          <h2>Entrada</h2>
          <IncomeIcon>
            <AiOutlineArrowUp size={24} color="#fff" />
          </IncomeIcon>
        </header>
        <strong>{currencyFormat.format(income)}</strong>
      </div>

      <div>
        <header>
          <h2>Saída</h2>
          <OutcomeIcon>
            <AiOutlineArrowDown size={24} color="#fff" />
          </OutcomeIcon>
        </header>
        <strong>{currencyFormat.format(outcome)}</strong>
      </div>

      <div>
        <header>
          <h2>Total</h2>
          <TotalIcon>
            <MdAttachMoney size={24} color="#fff" />
          </TotalIcon>
        </header>
        <strong>{currencyFormat.format(total)}</strong>
      </div>
    </SummaryContainer>
  );
}
