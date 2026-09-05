import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CustomerSection } from "../CustomerSection";

describe("CustomerSection", () => {
  it("notifica as alterações dos dados do cliente", () => {
    const onChange = vi.fn();

    render(<CustomerSection customer={{ name: "Ana", email: "ana@example.com" }} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "Bia" } });

    expect(onChange).toHaveBeenCalledWith({ name: "Bia", email: "ana@example.com" });
  });
});