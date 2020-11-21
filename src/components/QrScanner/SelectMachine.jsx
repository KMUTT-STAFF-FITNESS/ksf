import React, { useState, useCallback, useEffect } from "react";
import { Field, Formik, Form } from "formik";
import { apiFetchMachineGroup } from "../../api/machine";
import Select from "react-select";
import { navigate } from "@reach/router";

export default function SelectMachine(props) {
  const [machines, setMachine] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsFetch(true);
      const { data } = await apiFetchMachineGroup();

      const mg = [];
      data.map((item) => {
        const m = {
          value: item.machine_group_id,
          label: item.machine_group_name,
        };
        mg.push(m);
      });

      setMachine(mg);
      setIsFetch(false);
    } catch (error) {
      setIsFetch(false);
    } finally {
      setIsFetch(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Select
        className={`z-50 shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline form-control `}
        value={
          machines
            ? machines.find((option) => option.value === option.value)
            : ""
        }
        onChange={(option) => navigate(`howtoplay/${option.value}`)}
        options={machines}
        defaultValue={machines && machines[0]}
        className="my-2"
      />
    </div>
  );
}
