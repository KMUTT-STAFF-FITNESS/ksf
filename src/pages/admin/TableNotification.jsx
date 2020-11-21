import { navigate } from "@reach/router";
import { Field, FieldArray, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { apiFetchNotification } from "../../api/notification";
import Loading from "../../components/core/Loading";
import DataTable from "../../components/DataTable";
import CreateHeader from "../../components/Header/CreateHeader";

export default function TableNotification() {
  const [notifications, setNotifications] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchNotification();
    const temp = {
      notifications: data,
    };
    setNotifications(temp);
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

  const columns = [
    {
      Header: "message_title",
      accessor: "message_title",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "content",
      accessor: "content",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    // {
    //   Header: "E-mail",
    //   accessor: "email",
    //   Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    // },
    // {
    //   Header: "Cost",
    //   accessor: "cost",
    //   Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    // },
    // {
    //   Header: "Delete",
    //   accessor: "profile_id",
    //   Cell: ({ cell: { value } }) => (
    //     <Tooltip title="ลบ">
    //       <IconButton onClick={() => handleRemove(value)}>
    //         <CloseRounded />
    //       </IconButton>
    //     </Tooltip>
    //   ),
    // },
  ];
  return (
    <div className="w-full">
      <Formik initialValues={notifications} onSubmit="">
        {(formikProps) => (
          <FieldArray name="notifications">
            {(notiArray) => (
              <Field name="notifications">
                {({ field, meta }) => (
                  <>
                    <CreateHeader onClick={() => navigate("/admin/notification/create")} title="ข่าวสาร" />
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
