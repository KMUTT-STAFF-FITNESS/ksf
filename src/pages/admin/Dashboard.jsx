import { IconButton, Tooltip } from "@material-ui/core";
import { CheckRounded } from "@material-ui/icons";
import { Field, FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import EditHeader from "../../components/Header/EditHeader";

export default function Dashboard() {
  const [user, setUser] = useState();
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

  const columns = [
    {
      Header: "ชื่อ",
      accessor: "fname",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "นามสกุล",
      accessor: "lname",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "E-mail",
      accessor: "email",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "ประเภทสมาชิก",
      accessor: "member_type",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "หลักฐานการชำระเงิน",
      accessor: "receipt_path",
      Cell: ({ cell: { value } }) => <img src={value} alt="" />,
    },
    {
      Header: "อนุมัติ",
      accessor: "profile_id",
      Cell: ({ cell: { value } }) => (
        <Tooltip title="ลบ">
          <IconButton onClick={() => console.log(value)}>
            <CheckRounded />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Formik initialValues={user} onSubmit="">
        {(formikProps) => (
          <FieldArray name="user">
            {(notiArray) => (
              <Field name="user">
                {({ field, meta }) => (
                  <>
                    <EditHeader formik={formikProps} title="สมัครสมาชิก" />
                    <Form className="overflowy-auto">
                      <div className="p-6 overflow-x-hidden">
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
