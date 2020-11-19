import React, { useCallback, useEffect } from "react";
import _ from "lodash";
import { useState } from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import DataTable from "../../components/DataTable";
import { apiFetchUsers } from "../../api/users";
import EditHeader from "../../components/Header/EditHeader";
import { IconButton, Tooltip } from "@material-ui/core";
import { CloseRounded, CreateRounded } from "@material-ui/icons";
import { navigate } from "@reach/router";
import Loading from "../../components/core/Loading";

export default function RegisterManage() {
  const [users, setUsers] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchUsers();
    const temp = {
      users: data,
    };
    setUsers(temp);
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

  const handleRemove = (id) => {
    console.log(id);
  };

  const columns = [
    {
      Header: "Name",
      accessor: "fname",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "Surname",
      accessor: "lname",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "E-mail",
      accessor: "email",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "Cost",
      accessor: "cost",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "Delete",
      accessor: "profile_id",
      Cell: ({ cell: { value } }) => (
        <Tooltip title="ลบ">
          <IconButton onClick={() => handleRemove(value)}>
            <CloseRounded />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Formik initialValues={users} onSubmit="">
        {(formikProps) => (
          <FieldArray name="users">
            {(userArray) => (
              <Field name="users">
                {({ field, meta }) => (
                  <>
                    <EditHeader formik={formikProps} title="สมาชิก" />
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
