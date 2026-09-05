import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PaymentMethodSelector } from "../PaymentMethodSelector";

describe("PaymentMethodSelector", () => {
  it("notifica a forma de pagamento selecionada", () => {
    const onChange = vi.fn();

    render(<PaymentMethodSelector value="pix" onChange={onChange} />);
    fireEvent.click(screen.getByLabelText("Dinheiro"));

    expect(onChange).toHaveBeenCalledWith("cash");
  });
});