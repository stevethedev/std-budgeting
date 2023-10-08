import { FC, useState } from "react";
import { Default } from "../../layout/default";
import { Tab, TabControl } from "../../container/tab-control";
import { useBudgetOverview } from "../../hooks/budget-overview";
import { BudgetOverview } from "../../container/budget-overview";

enum TabId {
  Overview = "overview",
  Income = "income",
  Expense = "expense",
}

export const Budget: FC = () => {
  const [selectedId, setSelectId] = useState<TabId>(TabId.Overview);

  const { value: budgetOverview } = useBudgetOverview({
    select: [
      {
        name: "Income",
        filter: {
          field: "category",
          operator: "eq",
          value: "income",
        },
      },
      {
        name: "Expenses",
        filter: {
          field: "category",
          operator: "eq",
          value: "expense",
        },
      },
    ],
  });

  return (
    <Default>
      <TabControl<TabId> selectedId={selectedId} onSelectId={setSelectId}>
        <Tab key={"overview"} id={TabId.Overview} label="Overview">
          <b>Overview</b>
          {budgetOverview === null || <BudgetOverview data={budgetOverview} />}
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
