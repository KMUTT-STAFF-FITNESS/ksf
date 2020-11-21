import { Field, FieldArray, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { apiFetchReportProblem } from "../../api/report";
import Loading from "../../components/core/Loading";
import DataTable from "../../components/DataTable";
import EditHeader from "../../components/Header/EditHeader";

export default function TableReport() {
  const [report, setReport] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [prefixNameRowPerPage, setPrefixNameRowPerPage] = useState(10);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchReportProblem();
    const temp = {
      report: data,
    };
    setReport(temp);
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
      Header: "ปัญหา",
      accessor: "report_message",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "เครื่องออกกำลังกาย",
      accessor: "machine_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
  ];

  return (
    <div className="w-full">
      <Formik initialValues={report} onSubmit="">
        {(formikProps) => (
          <FieldArray name="report">
            {(notiArray) => (
              <Field name="report">
                {({ field, meta }) => (
                  <>
                    <EditHeader formik={formikProps} title="ปัญหา" />
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
