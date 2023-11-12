import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

export interface TableColumn<T> {
  acessor?: keyof T;
  head: string;

  isActionButton?: boolean;
  onActionClick?: (obj: T) => void;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

export default function CustomTable<T>(props: TableProps<T>) {
  return (
    //<table className="table table-bordered table-striped">
    <Table bordered={true} striped={true}>
      <thead>
        <tr>
          {props.columns.map((column, index) => {
            return <th key={index}>{column.head}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => {
          return (
            <tr key={index}>
              {props.columns.map((column, index) => {
                return (
                  <td key={index}>
                    {column.isActionButton ? (
                      <button onClick={() => column.onActionClick?.(item)}>
                        {column.head}
                      </button>
                    ) : (
                      (item[column.acessor!] as ReactNode)
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
