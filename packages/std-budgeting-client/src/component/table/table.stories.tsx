import type { StoryObj } from "@storybook/react";
import { Body, Caption, Cell, Foot, Head, Row, Table } from ".";

export default {
  title: "Component/Table",
  component: Table,
};

export const Default: StoryObj = {
  name: "Table",
  args: {
    children: [
      <Head key="head">
        <Row>
          <Cell>Head / Row 1 / Cell 1</Cell>
          <Cell>Head / Row 1 / Cell 2</Cell>
          <Cell>Head / Row 1 / Cell 3</Cell>
        </Row>
      </Head>,
      <Body key="body">
        <Row>
          <Cell>Body / Row 1 / Cell 1</Cell>
          <Cell>Body / Row 1 / Cell 2</Cell>
          <Cell>Body / Row 1 / Cell 3</Cell>
        </Row>
        <Row>
          <Cell>Body / Row 2 / Cell 1</Cell>
          <Cell>Body / Row 2 / Cell 2</Cell>
          <Cell>Body / Row 2 / Cell 3</Cell>
        </Row>
        <Row>
          <Cell>Body / Row 3 / Cell 1</Cell>
          <Cell>Body / Row 3 / Cell 2</Cell>
          <Cell>Body / Row 3 / Cell 3</Cell>
        </Row>
      </Body>,
      <Foot key="foot">
        <Row>
          <Cell>Foot / Row 1 / Cell 1</Cell>
          <Cell>Foot / Row 1 / Cell 2</Cell>
          <Cell>Foot / Row 1 / Cell 3</Cell>
        </Row>
      </Foot>,
      <Caption key="caption">Caption</Caption>,
    ],
  },
};
