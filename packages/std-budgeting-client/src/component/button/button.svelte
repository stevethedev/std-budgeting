<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Variant } from "./variants";

  const dispatch = createEventDispatcher();

  export let label: string = "";
  export let tabindex: number = 0;
  export let isDisabled: boolean = false;
  export let variant: Variant = Variant.Default;

  const onPress = (e: MouseEvent | KeyboardEvent) => {
    dispatch("press", e);
  };

  $: className = ["button", className].join(" ");
</script>

<button
  {...$$props}
  class={className}
  class:danger={variant === Variant.Danger}
  class:ghost={variant === Variant.Ghost}
  class:primary={variant === Variant.Primary}
  class:success={variant === Variant.Success}
  disabled={isDisabled}
  on:click={onPress}
  {tabindex}
  title={label}
>
  <slot name="icon" />
  <slot>{label}</slot>
</button>

<style lang="scss">
  @import "../../styles/layout.scss";

  .button {
    @include block;

    --button-color--neutral: var(--theme--color--gray-400);
    --button-color--hover: var(--theme--color--gray-300);
    --button-color--active: var(--theme--color--gray-200);
    --button-color--focus: var(--theme--color--gray-400);
    --button-color--disabled: var(--theme--color--gray-600);
    --button-color--foreground: var(--theme--color--gray-900);

    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: var(--button-cursor, pointer);
    transition: background-color 0.2s ease-in-out;
    background-color: var(--button-color--neutral);
    color: var(--button-color--foreground);

    &:hover {
      background-color: var(--button-color--hover);
    }

    &:focus {
      background-color: var(--button-color--focus);
      outline: none;
      box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.25);
    }

    &:active {
      background-color: var(--button-color--active);
    }

    &:disabled {
      --button-cursor: not-allowed;

      background-color: var(--button-color--disabled);
      color: var(
        --button-color--foreground-disabled,
        var(--button-color--foreground)
      );
      opacity: 0.8;
    }

    &.primary {
      --button-color--neutral: var(--theme--color--blue-900);
      --button-color--hover: var(--theme--color--blue-700);
      --button-color--active: var(--theme--color--blue-600);
      --button-color--focus: var(--theme--color--blue-600);
      --button-color--disabled: var(--theme--color--blue-700);
      --button-color--foreground: var(--theme--color--white);
      --button-color--foreground-disabled: var(--theme--color--blue-200);
    }

    &.ghost {
      --button-color--neutral: transparent;
      --button-color--hover: var(--theme--color--gray-300);
      --button-color--active: var(--theme--color--gray-200);
      --button-color--focus: var(--theme--color--gray-400);
      --button-color--disabled: var(--theme--color--gray-600);
      --button-color--foreground: var(--theme--color--gray-900);
    }

    &.danger {
      --button-color--neutral: var(--theme--color--red-900);
      --button-color--hover: var(--theme--color--red-700);
      --button-color--active: var(--theme--color--red-600);
      --button-color--focus: var(--theme--color--red-600);
      --button-color--disabled: var(--theme--color--red-700);
      --button-color--foreground: var(--theme--color--white);
      --button-color--foreground-disabled: var(--theme--color--red-200);
    }

    &.success {
      --button-color--neutral: var(--theme--color--green-900);
      --button-color--hover: var(--theme--color--green-700);
      --button-color--active: var(--theme--color--green-600);
      --button-color--focus: var(--theme--color--green-600);
      --button-color--disabled: var(--theme--color--green-700);
      --button-color--foreground: var(--theme--color--white);
      --button-color--foreground-disabled: var(--theme--color--green-200);
    }
  }
</style>
