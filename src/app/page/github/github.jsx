import React from "react";
import styles from "./github.module.scss";
import Table from "../../components/table/table";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRepositories } from "../../redux/actions/repository";
import Loading from "../../components/loading/loading";
import Message from "../../components/message/message";
const Github = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositories());
  }, []);

  const { repositories, isLoading } = useSelector(
    (state) => state.repositories
  );

  const { message } = useSelector((state) => state.message);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: (d) => d.html_url,
        Cell: ({ row }) => (
          <a href={row.original.html_url}>{row.original.name}</a>
        ),
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Language",
        accessor: "language",
        sortType: "basic",
      },

      {
        Header: "Created at",
        accessor: "created_at",
        sortType: "basic",
      },
    ],
    []
  );

  return (
    <div>
      {message ? (
        <Message message={message} />
      ) : isLoading ? (
        <div className={styles["center"]}>
          <Loading />
        </div>
      ) : (
        <Table columns={columns} data={repositories || []} />
      )}
    </div>
  );
};

export default Github;
