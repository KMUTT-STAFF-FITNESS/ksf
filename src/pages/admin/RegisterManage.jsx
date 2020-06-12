import React, { useCallback, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { useState } from "react";
import { Formik, Field, FieldArray } from "formik";
import DataTable from "../../components/DataTable";

export default function RegisterManage() {
  const [users, setUsers] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await axios.get(`http://localhost:8000/users`);
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
    return <div>wait....</div>;
  }
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
  ];

  return (
    <div className="p-6 w-full">
      {/* {_.map(users, (data, index) => (
        <div key={index} className="w-full my-2 border p-6">
          <p>Name: {data.fname}</p>
          <p>Last name: {data.lname}</p>
          <p>date of birth: {data.dob}</p>
          <p>email: {data.email}</p>
          <p>cost: {data.cost}</p>
        </div>
      ))} */}
      <Formik initialValues={users} onSubmit="">
        {(formikProps) => (
          <FieldArray name="users">
            {(userArray) => (
              <Field name="users">
                {({ field, meta }) => (
                  <DataTable
                    data={field.value}
                    columns={columns}
                    pageSize={prefixNameRowPerPage}
                    onChangeRowsPerPage={setPrefixNameRowPerPage}
                    rowsPerPageOptions={[5, 10, 15, 20]}
                  />
                )}
              </Field>
            )}
          </FieldArray>
        )}
      </Formik>
    </div>
  );
}
