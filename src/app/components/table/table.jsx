import React from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import styles from "./table.module.scss";
import { useEffect } from "react";
const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setPageSize(5);
  }, []);

  return (
    <div className={styles["Git-table"]}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span className={styles["sort"]}>
                    {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : "▶"}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles["pagination"]}>
        <button
          className={styles["button"]}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          style={
            canPreviousPage
              ? { backgroundColor: "rgba(255, 255, 255, 0.3)" }
              : {}
          }
        >
          {"<"}
        </button>
        <button
          className={styles["button"]}
          onClick={() => nextPage()}
          disabled={!canNextPage}
          style={
            canNextPage ? { backgroundColor: "rgba(255, 255, 255, 0.3)" } : {}
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Table;
