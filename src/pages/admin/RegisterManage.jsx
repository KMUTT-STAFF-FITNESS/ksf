import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import DataTable from "../../components/DataTable";
import { apiDeleteMember, apiFetchUsers } from "../../api/users";
import EditHeader from "../../components/Header/EditHeader";
import { IconButton, Tooltip } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import Loading from "../../components/core/Loading";
import ConfirmModal from "../../components/core/Modal/ConfirmModal";
import CreateSuccessModal from "../../components/core/Modal/CreateSuccessModal";
import ErrorModal from "../../components/core/Modal/ErrorModal";
import { CSVLink } from "react-csv";

export default function RegisterManage() {
  const [users, setUsers] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);
  const [removerId, setRemoveId] = useState();
  const [exportData, setExport] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchUsers();
    const temp = {
      users: data,
    };
    setUsers(temp);
    setIsFetch(false);
    setExport(true);
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
    setRemoveId(id);
    setIsOpenConfirm(true);
  };

  const handleDelete = async (id) => {
    const data = {
      profile_id: id,
    };
    try {
      await apiDeleteMember(data);
      setIsOpenSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      setIsOpenError(true);
    }
  };

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
      Header: "ลบข้อมูล",
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
  const headers = [
    { label: "ชื่อ", key: "fname" },
    { label: "นามสกุล", key: "lname" },
    { label: "Email", key: "email" },
    { label: "เบอร์โทร", key: "tel_no" },
    { label: "เพศ", key: "gender" },
    { label: "หน่วยงาน/สังกัด", key: "department" },
    { label: "id", key: "user_id" },
  ];

  return (
    <div className="w-full">
      <ConfirmModal
        open={isOpenConfirm}
        onClose={() => setIsOpenConfirm(false)}
        onConfirm={() => handleDelete(removerId)}
      />
      <CreateSuccessModal
        open={isOpenSuccess}
        onClose={() => setIsOpenSuccess(false)}
      />
      <ErrorModal open={isOpenError} onClose={() => setIsOpenError(false)} />
      <Formik initialValues={users} onSubmit="s">
        {(formikProps) => (
          <FieldArray name="users">
            {(userArray) => (
              <Field name="users">
                {({ field, meta }) => (
                  <>
                    <EditHeader formik={formikProps} title="สมาชิก" />
                    {exportData && (
                      <div className="text-center my-2">
                        <CSVLink
                          data={field.value}
                          headers={headers}
                          filename={"users.csv"}
                          className="btn btn-primary"
                        >
                          ดาวน์โหลด
                        </CSVLink>
                      </div>
                    )}
                    {console.log(field.value)}
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
