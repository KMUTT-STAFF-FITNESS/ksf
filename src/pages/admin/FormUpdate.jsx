import React, { useCallback, useEffect, useState } from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import { Helmet } from "react-helmet";
import { apiFetchMachine } from "../../api/machine";
import DataTable from "../../components/DataTable";
import Loading from "../../components/core/Loading";
import { IconButton, Tooltip } from "@material-ui/core";
import { CreateRounded } from "@material-ui/icons";
import { navigate } from "@reach/router";
import CreateHeader from "../../components/Header/CreateHeader";

export default function FormUpdate() {
  const [machine, setMachine] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchMachine();
    const temp = {
      machine: data,
    };
    setMachine(temp);
    setIsFetch(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return (
      <div className="flex flex-col flex-1 min-h-screen">
        <Loading />
      </div>
    );
  }

  function handleAdd() {
    const values = [];
    values.push(...machine, { value: null });
    setMachine(values);
  }

  function handleRemove(i) {
    const values = [...machine];
    values.splice(i, 1);
    setMachine(values);
  }

  function handleChange(val, index) {
    let temp = machine;
    temp[index] = {
      ...machine[index],
      type: val,
    };
    setMachine(temp);
  }

  const columns = [
    {
      Header: "เครื่องออกกำลังกาย",
      accessor: "machine_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "ประเภทเครื่องออกกำลังกาย",
      accessor: "machine_type_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "Edit",
      accessor: "machine_id",
      Cell: ({ cell: { value } }) => (
        <Tooltip title="แก้ไข">
          <IconButton onClick={() => navigate(`/admin/machine/${value}/edit`)}>
            <CreateRounded />
          </IconButton>
        </Tooltip>
      ),
    },
  ];
  return (
    <div className="flex flex-col flex-1">
      <Helmet>
        <title>จัดการเครื่องเล่น</title>
      </Helmet>

      <Formik initialValues={machine}>
        {(formikProps) => (
          <FieldArray name="machine">
            {(machineArray) => (
              <Field name="machine">
                {({ field, meta }) => (
                  <>
                    <CreateHeader
                      onClick={() => navigate("/admin/machine/create")}
                      title="เครื่องออกกำลังกาย"
                    />
                    <Form className="overflow-y-auto">
                      <div className="p-6 overflow-y-auto">
                        <DataTable
                          data={field.value}
                          columns={columns}
                          pageSize={prefixNameRowPerPage}
                          onChangeRowsPerPage={setPrefixNameRowPerPage}
                          rowsPerPageOptions={[5, 10, 15, 20]}
                        />
                      </div>
                    </Form>
                  </>
                )}
              </Field>
            )}
          </FieldArray>
        )}
      </Formik>
    </div>
  );
}
