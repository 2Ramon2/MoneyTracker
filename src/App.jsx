import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionsModal } from "./components/TransactionsModal";
import { useState } from "react";
import { TransactionsProvider } from "./components/Context/TransactionsContext";

export function App() {


  return (
    <TransactionsProvider>
      <Header />
      <Dashboard />
      <TransactionsModal/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}
