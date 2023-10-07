import type { FC } from "react";
import { Body, Cell, Foot, Head, Row, Table } from "../../component/table";
import { BudgetOverviewResponsePayload } from "@stevethedev/std-budgeting-events";
import { Spread } from "@stevethedev/std-budgeting-events/src/message/budget-overview";
import { Currency } from "../../component/currency";
import { Stack } from "../../component/stack";

export interface Props {
  data: BudgetOverviewResponsePayload;
}

export const BudgetOverview: FC<Props> = ({ data }) => {
  const sums = data.values.reduce(
    (acc, { budgeted, actual }) => {
      acc.budgeted += budgeted;
      acc.actual += actual;
      return acc;
    },
    { budgeted: 0, actual: 0 },
  );
  return (
    <Table>
      <Head>
        <Row>
          <Cell isHeader>Description</Cell>
          <Cell isHeader>Planned</Cell>
          <Cell isHeader>Actual</Cell>
          <Cell isHeader>Difference</Cell>
        </Row>
      </Head>
      <Body>
        {data.values.map(({ name, budgeted, actual }) => (
          <BudgetRow
            key={name}
            name={name}
            budgeted={budgeted}
            actual={actual}
          />
        ))}
      </Body>
      <Foot>
        <BudgetRow name="Total" budgeted={sums.budgeted} actual={sums.actual} />
      </Foot>
    </Table>
  );
};

const BudgetRow: FC<Spread> = ({ name, budgeted, actual, ...props }) => (
  <Row {...props}>
    <Cell title={`Description: ${name}`}>{name}</Cell>
    <Cell title={`Planned: ${budgeted}`}>
      <Stack>
        <Currency isBlock>{budgeted}</Currency>
      </Stack>
    </Cell>
    <Cell title={`Actual: ${actual}`}>
      <Stack>
        <Currency isBlock>{actual}</Currency>
      </Stack>
    </Cell>
    <Cell title={`Difference: ${budgeted - actual}`}>
      <Stack>
        <Currency isBlock>{budgeted - actual}</Currency>
      </Stack>
    </Cell>
  </Row>
);
