import React from "react";
import { Field, FieldArray } from "formik";
import _ from "lodash";

export default function MachineForm(props) {
  return (
    <div className="overscroll-y-auto">
      <div className="w-full px-3">
        <FieldArray name="machine">
          {(machineArray) => (
            <Field name="machine">
              {({ field, meta }) => (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Machine Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                      <button
                        type="button"
                        class="btn btn-outline-success"
                        onClick={() => props.handleAdd()}
                      >
                        Add
                      </button>
                    </tr>
                  </thead>
                  <tbody>
                    {_.map(machineArray.form.values, (data, index) => (
                      <tr>
                        <td>{data.machine_name}</td>
                        <td>{data.member_type_name}</td>
                        <td>none</td>
                        <td>test</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Field>
          )}
        </FieldArray>
      </div>
    </div>
  );
}
