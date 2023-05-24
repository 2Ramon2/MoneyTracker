import { useContext } from "react";
import { TransactionsTableContainer } from "./styles";
import { TransactionsContext } from "../Context/TransactionsContext";

export function TransactionsTable() {
  const { transactionsList } = useContext(TransactionsContext);
  return (
    <TransactionsTableContainer transactionsList={transactionsList}>
      <table>
        <thead>
          {transactionsList.length !== 0 && (
              <tr>
                <th>Titulo</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            )}
        </thead>
        <tbody>
          {transactionsList.map((transactionItem) => {
            return (
              <tr key={transactionItem.id}>
                <td>{transactionItem.title}</td>
                <td className={transactionItem.type}>
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transactionItem.amount)}
                </td>
                <td>{transactionItem.category}</td>
                <td>
                  {Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "short",
                  }).format(transactionItem.date)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TransactionsTableContainer>
  );
}
