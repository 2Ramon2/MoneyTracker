import { Summary } from "../Summary";
import { DashboardContainer } from "./styles";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <DashboardContainer>
      <Summary />
      <TransactionsTable />
    </DashboardContainer>
  );
}
