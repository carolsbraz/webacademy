import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfirmationModal from "../Modals/Confirmacao";

describe("ConfirmationModal", () => {
  const modalMock = {
    isShow: true,
    title: "Exemplo de modal",
    message: "Funcionou",
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
  };

  it("should render modal with the correct text", () => {
    const { getByText } = render(<ConfirmationModal {...modalMock} />);

    expect(getByText("Exemplo de modal")).toBeInTheDocument();
    expect(getByText("Funcionou")).toBeInTheDocument();
    expect(getByText("Confirmar")).toBeInTheDocument();
    expect(getByText("Cancelar")).toBeInTheDocument();
  });

  it("should call onCancel when the cancel button is clicked", async () => {
    const { getByText } = render(<ConfirmationModal {...modalMock} />);

    await act(async () => {
      userEvent.click(getByText("Cancelar"));
      await waitFor(() => {
        expect(modalMock.onCancel).toHaveBeenCalled();
      });
    });
  });

  it("should call onConfirm when Confirm button is clicked", async () => {
    const { getByText } = render(<ConfirmationModal {...modalMock} />);

    await act(async () => {
      userEvent.click(getByText("Confirmar"));
      await waitFor(() => {
        expect(modalMock.onCancel).toHaveBeenCalled();
      });
    });
  });

  it("should call onCancel when modal is closed", async () => {
    const { getByLabelText } = render(<ConfirmationModal {...modalMock} />);

    await act(async () => {
      userEvent.click(getByLabelText("Close"));
      await waitFor(() => {
        expect(modalMock.onCancel).toHaveBeenCalled();
      });
    });
  });
});
