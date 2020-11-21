import { IconButton, Tooltip } from "@material-ui/core";
import { CheckRounded } from "@material-ui/icons";
import { Field, FieldArray, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { apiApproveMember, apiFetchPendingUsers } from "../../api/users";
import Loading from "../../components/core/Loading";
import DataTable from "../../components/DataTable";
import EditHeader from "../../components/Header/EditHeader";
import Zoom from "react-medium-image-zoom";
import CreateSuccessModal from "../../components/core/Modal/CreateSuccessModal";
import ErrorModal from "../../components/core/Modal/ErrorModal";

export default function Dashboard() {
  const [isFetch, setIsFetch] = useState(false);
  const [user, setUser] = useState();
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchPendingUsers();
    const temp = {
      user: data,
    };
    setUser(temp);
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

  const handleApprove = async (id) => {
    const data = {
      profile_id: id,
    };
    try {
      await apiApproveMember(data);
      setIsOpenSuccessModal(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      setIsOpenErrorModal(true);
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
      Header: "หลักฐานการชำระเงิน",
      accessor: "receipt_path",
      Cell: ({ cell: { value } }) => (
        // <img src={`http://localhost:8000/${value}`} alt="" />
        <>
          {value === "cash" ? (
            <p className="font-sarabun">ชำระด้วยเงินสด</p>
          ) : (
            <Zoom>
              <img
                src={`http://localhost:8000/${value.substring(6)}`}
                alt=""
                width="120"
                height="120"
              />
            </Zoom>
          )}
        </>
      ),
    },
    {
      Header: "อนุมัติ",
      accessor: "profile_id",
      Cell: ({ cell: { value } }) => (
        <Tooltip title="ลบ">
          <IconButton onClick={() => handleApprove(value)}>
            <CheckRounded />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="w-full">
      <CreateSuccessModal
        open={isOpenSuccessModal}
        onClose={() => setIsOpenSuccessModal(false)}
      />
      <ErrorModal
        open={isOpenErrorModal}
        onClose={() => setIsOpenErrorModal(false)}
      />
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
