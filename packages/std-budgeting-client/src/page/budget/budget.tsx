import { FC, useState } from "react";
import { Default } from "../../layout/default";
import { Tab, TabControl } from "../../container/tab-control";

enum TabId {
  Overview = "overview",
  Income = "income",
  Expense = "expense",
}

export const Budget: FC = () => {
  const [selectedId, onSelectId] = useState<TabId>(TabId.Overview);
  return (
    <Default>
      <TabControl<TabId> selectedId={selectedId} onSelectId={onSelectId}>
        <Tab key={"overview"} id={TabId.Overview} label="Overview">
          Overview
        </Tab>
        <Tab key="income" id={TabId.Income} label="Income">
          Income
        </Tab>
        <Tab key={"expense"} id={TabId.Expense} label="Expenses">
          Expense
        </Tab>
      </TabControl>
    </Default>
  );
};
