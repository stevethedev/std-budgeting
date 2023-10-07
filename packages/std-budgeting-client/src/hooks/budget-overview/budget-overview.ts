import {
  useEventDispatch,
  useEventListener,
} from "../../provider/events/events";
import { useCallback, useEffect, useState } from "react";
import type {
  BudgetOverviewRequestPayload,
  BudgetOverviewResponsePayload,
} from "@stevethedev/std-budgeting-events";

/**
 * The interface for the budget overview hook.
 */
export interface BudgetOverview {
  value: null | BudgetOverviewResponsePayload;
  refresh: () => void;
}

/**
 * The hook for retrieving the budget overview.
 * @param query The query for the budget overview.
 * @returns The budget overview state and the refresh function.
 */
export const useBudgetOverview = (
  query: BudgetOverviewRequestPayload,
): BudgetOverview => {
  // Generate a unique key for the query
  const queryKey = JSON.stringify(query);

  // Define the state for the budget overview
  const [budgetOverview, setBudgetOverview] =
    useState<null | BudgetOverviewResponsePayload>(null);

  // Get the event dispatch function for the budget overview request event
  const dispatch = useEventDispatch("budget-overview:request");

  // Get the event listener for the budget overview response event
  const { off } = useEventListener(
    "budget-overview:response",
    setBudgetOverview,
  );

  // Define the refresh function for the budget overview
  const refresh = useCallback(() => {
    dispatch(query);
  }, [dispatch, queryKey]);

  // Refresh the budget overview when the query changes, and remove the event listener when the component unmounts
  useEffect(() => {
    refresh();
    return off;
  }, [dispatch, queryKey]);

  // Return the budget overview state and the refresh function
  return { value: budgetOverview, refresh };
};
