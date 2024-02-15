import { ReactNode, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export interface TableColumn<T> {
  accessor?: keyof T | ((data: T) => ReactNode);
  head: string;

  isActionButton?: boolean;
  onActionClick?: (obj: T) => void;
  isCheckbox?: boolean;
  onCheckboxChange?: (obj: T, checked: boolean) => void;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  SetFeito: (value: boolean) => void;
}

export default function CustomTable<T>(props: TableProps<T>) {
  const [checkedRows, setCheckedRows] = useState<Record<number, boolean>>({});

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {props.columns.map((column, index) => (
            <th key={index}>{column.head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {props.columns.map((column, colIndex) => (
              <td key={colIndex}>
                {column.isActionButton ? (
                  <button onClick={() => column.onActionClick?.(item)}>
                    {column.head}
                  </button>
                ) : column.isCheckbox ? (
                  <input
                    type="checkbox"
                    checked={!!checkedRows[rowIndex]}
                    onChange={(e) => {
                      const newCheckedRows = {
                        ...checkedRows,
                        [rowIndex]: e.target.checked,
                      };
                      setCheckedRows(newCheckedRows);
                      column.onCheckboxChange?.(item, e.target.checked);
                      if (e.target.checked) {
                        props.SetFeito(true);
                      }
                    }}
                  />
                ) : (
                  <span
                    style={{
                      textDecoration: checkedRows[rowIndex]
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {typeof column.accessor === "function"
                      ? (column.accessor(item) as ReactNode)
                      : (item[column.accessor!] as ReactNode)}
                  </span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
