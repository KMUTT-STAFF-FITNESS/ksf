import React, { useCallback, useEffect, useState } from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import Input from "../../components/core/Input";
import Select from "react-select";
import _ from "lodash";
import { apiCreateReportTemplate } from "../../api/report";
import { Helmet } from "react-helmet";
import MachineForm from "../../components/Machine/MachineForm";
import { apiFetchMachine } from "../../api/machine";
import DataTable from "../../components/DataTable";

export default function FormUpdate() {
  const [machine, setMachine] = useState();
  const [isFetch, setIsFetch] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchMachine();
    const temp = {
      machine: data
    }
    setMachine(temp);
    setIsFetch(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return <div>wait....</div>;
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
    console.log(val, index);
    let temp = machine;
    temp[index] = {
      ...machine[index],
      type: val,
    };
    setMachine(temp);
  }
  // const [machine, setMachine] = useState([]);

  // const addItem = () => {
  //   setMachine([
  //     ...machine,
  //     {
  //       id: "",
  //       newItem: "",
  //     },
  //   ]);
  // };

  // return (
  //   <div>
  //     <Formik initialValues={machine}>
  //       <form>
  //         <input className="form-control" onSubmit={(e)=>{this.addItem(e)}}>
  //         </input>
  //       </form>
  //     </Formik>
  //     <ul>
  //       {machine.map((item) => (
  //         <li key={item.id}>{item.newItem}</li>
  //       ))}
  //     </ul>
  //     <button onClick={addItem}>Add Machine</button>
  //   </div>
  // );

  // function additem (e) {
  //   const [machine, setMachine] = useState([])
  //   const addMachine =()=>{
  //     setMachine([... machine,{
  //       name: ""
  //     }])
  //   }

  //   setMachhine({
  //     machine:[...this.state.machine , newMachine]
  //   })
  // }

  const columns = [
    {
      Header: "Machine Name",
      accessor: "machine_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
    },
    {
      Header: "Machine Type",
      accessor: "member_type_name",
      Cell: ({ cell: { value } }) => <p className="font-sarabun">{value}</p>,
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
                  <DataTable data={field.value} columns={columns} />
                )}
              </Field>
            )}
          </FieldArray>
          // <Form className="overscroll-y-auto">
          //   <div className="p-6 overscroll-y-auto">
          //     <MachineForm formik={formikProps} handleAdd={handleAdd} />
          //   </div>
          // </Form>
        )}
      </Formik>
    </div>
    // <div className="flex flex-col flex-1">
    //   <div className="p-6 w-full">
    //     <Formik initialValues={machine}>
    //       {(formikProps) => (
    //         <FieldArray name="machine">
    //           {(machineArray) => (
    //             <Field name="machine">
    //               {({ field, meta }) => (
    //                 <table class="table">
    //                   <thead>
    // <tr>
    //   <th scope="col">Machine Name</th>
    //   <th scope="col">Type</th>
    //   <th scope="col">Status</th>
    //   <th scope="col">Action</th>
    //   <button
    //     type="button"
    //     class="btn btn-outline-success"
    //     onClick={() => handleAdd()}
    //   >
    //     Add
    //   </button>
    // </tr>
    //                   </thead>
    //                   <tbody>
    //                     {/* {machine.map(item=>{
    //                     return (

    //                       <tr>
    //                         <th>
    //                           <td>{item}</td>
    //                           <td>cc</td>
    //                           <td>cc</td>
    //                         </th>
    //                     </tr>
    //                     )

    //                   })} */}
    //                     {_.map(machineArray, (data, machineIndex) => (
    //                       <tr key={machineIndex}>
    //                         <td>
    //                           {" "}
    //                           <Field name={`machine.${machineIndex}.name`}>
    //                             {({ field }) => (
    //                               <Input
    //                                 placeholder="ชื่อเครื่องเล่น"
    //                                 inputProps={{ ...field }}
    //                                 onSubmit={(e) => {
    //                                   this.additem(e);
    //                                 }}
    //                               />
    //                             )}
    //                           </Field>
    //                         </td>
    //                         <td>
    //                           {/* <Field
    //                           name={`machine.${machineIndex}.type`}
    //                           className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
    //                         >
    //                           <Select
    //                             onChange={(value) =>
    //                               handleChange(value, machineIndex)
    //                             }
    //                             options={options}
    //                           />
    //                         </Field> */}
    //                           {data.type}
    //                         </td>
    //                         <td>{data.status}</td>
    //                         <td>
    //                           <button
    //                             type="button"
    //                             class="btn btn-outline-info"
    //                             onClick={() => console.log(machine)}
    //                           >
    //                             Save
    //                           </button>
    //                           <button
    //                             type="button"
    //                             class="btn btn-outline-danger"
    //                             onClick={() => handleRemove()}
    //                           >
    //                             Delete
    //                           </button>
    //                         </td>
    //                       </tr>
    //                     ))}
    //                     {/* {machine.map((data, index) => {
    //                     return (
    //                       <tr key={index}>
    //                         <td>
    //                           {" "}
    //                           <Field name={`machine.${index}.name`}>
    //                             {({ field }) => (
    //                               <Input
    //                                 placeholder="ชื่อเครื่องเล่น"
    //                                 inputProps={{ ...field }}
    //                                 ref={(input) => (this.newItem = input)}
    //                                 onSubmit={(e) => {
    //                                   this.additem(e);
    //                                 }}
    //                               />
    //                             )}
    //                           </Field>
    //                         </td>
    //                         <td>
    //                           <Field
    //                             name={`machine.${index}.type`}
    //                             className={`shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
    //                           >
    //                             <Select
    //                               onChange={(value) =>
    //                                 handleChange(value, index)
    //                               }
    //                               options={options}
    //                             />
    //                           </Field>
    //                           {index.type}
    //                         </td>
    //                         <td>{index.status}</td>
    //                         <td>
    //                           <button
    //                             type="button"
    //                             class="btn btn-outline-info"
    //                             onClick={() => console.log(machine)}
    //                           >
    //                             Save
    //                           </button>
    //                           <button
    //                             type="button"
    //                             class="btn btn-outline-danger"
    //                             onClick={() => handleRemove()}
    //                           >
    //                             Delete
    //                           </button>
    //                           {index.number}
    //                         </td>
    //                       </tr>
    //                     );
    //                   })} */}
    //                   </tbody>
    //                 </table>
    //               )}
    //             </Field>
    //           )}
    //         </FieldArray>
    //       )}
    //     </Formik>
    //   </div>
    // </div>
  );
}
