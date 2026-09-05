import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CashCalculator } from "../CashCalculator";

describe("CashCalculator", () => {
  it("calcula e exibe o troco", () => {
    const onReceivedChange = vi.fn();

    render(<CashCalculator total={40} received={50} onReceivedChange={onReceivedChange} change={10} />);

    expect(screen.getByText(/R\$\s?10,00/)).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Valor recebido"), { target: { value: "60" } });
    expect(onReceivedChange).toHaveBeenCalledWith(60);
  });
});