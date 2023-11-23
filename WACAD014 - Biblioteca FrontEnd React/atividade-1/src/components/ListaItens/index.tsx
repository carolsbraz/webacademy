import { useRef, useState } from "react";
import CustomTable, { TableColumn } from "../Tabela";
import ConfirmationModal from "../Confirmacao";

interface IItem {
  id: number;
  titulo: string;
  feito: boolean;
}

interface CustomTableColumn<T> extends TableColumn<T> {
  isCheckbox?: boolean;
}

export default function Listaitems() {
  const [titulo, SetTitulo] = useState<string>("");
  const [feito, SetFeito] = useState<boolean>(false);

  const itemToDelete = useRef<IItem>();

  const [isModalConfirmationOpen, SetIsModalConfirmationOpen] = useState(false);

  const [items, Setitems] = useState<IItem[]>([]);

  function RemoverItemTabela(itemToDelete: IItem) {
    Setitems(items.filter((item) => item.id !== itemToDelete.id));
  }

  const columnsitems: CustomTableColumn<IItem>[] = [
    { head: "", accessor: "feito", isCheckbox: true },
    { head: "", accessor: "titulo" },
    {
      head: "Remover",
      isActionButton: true,
      onActionClick: (obj) => {
        itemToDelete.current = obj;
        SetIsModalConfirmationOpen(true);
      },
    },
  ];

  function AdditemArray() {
    const jsonitem: IItem = {
      id: items.length + 1,
      titulo: titulo,
      feito: feito,
    };
    Setitems([...items, jsonitem]);
  }

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={titulo}
        placeholder="Nome do item"
        onChange={(e) => SetTitulo(e.target.value)}
      />

      <button onClick={() => AdditemArray()}>Salvar</button>

      <CustomTable data={items} columns={columnsitems} SetFeito={SetFeito} />

      <ConfirmationModal
        isShow={isModalConfirmationOpen}
        message="Deseja excluir esse item?"
        title="Alerta"
        onCancel={() => {
          SetIsModalConfirmationOpen(false);
        }}
        onConfirm={() => {
          RemoverItemTabela(itemToDelete.current!);
          SetIsModalConfirmationOpen(false);
        }}
      />
    </div>
  );
}
