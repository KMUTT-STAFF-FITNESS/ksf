import { Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import CreateSuccessModal from "../../components/core/Modal/CreateSuccessModal";
import ErrorModal from "../../components/core/Modal/ErrorModal";
import EditHeader from "../../components/Header/EditHeader";
import Input from "../../components/core/Input";
import {
  apiCreateMachine,
  apiFetchMachineGroup,
  apiFetchMachineType,
} from "../../api/machine";
import { navigate } from "@reach/router";
import _ from "lodash";
import Loading from "../../components/core/Loading";
import Select from "react-select";

export default function MachineCreate() {
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [machine, setMachine] = useState();
  const [isFetch, setIsFetch] = useState(false);
  const [machineGroup, setMachineGroup] = useState([]);
  const [machineType, setMachineType] = useState([]);
  const [groupId, setGroupId] = useState(1);
  const [typeId, setTypeId] = useState(1);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const machineGroup = await apiFetchMachineGroup();
    const machineType = await apiFetchMachineType();

    const mg = [];
    _.map(machineGroup.data, (data, id) => {
      mg.push({
        value: data.machine_group_id,
        label: data.machine_group_name,
      });
    });
    setMachineGroup(mg);

    const mt = [];

    _.map(machineType.data, (data, i) => {
      mt.push({
        value: data.machine_type_id,
        label: data.machine_type_name,
      });
    });
    setMachineType(mt);

    const temp = {
      machine: "",
    };
    setMachine(temp);
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

  const handleSubmit = async (data) => {
    const temp = {
      machine_name: data.machine_name,
      machine_group_id: groupId,
      machine_type_id: typeId,
    };

    try {
      await apiCreateMachine(temp);
      setIsOpenSuccessModal(true);
      setTimeout(() => {
        navigate("/admin/machine");
      }, 2000);
    } catch (err) {
      setIsOpenErrorModal(true);
    }
  };

  const handleGroup = (data) => {
    setGroupId(data);
  };

  const handleType = (data) => {
    setTypeId(data);
  };

  return (
    <div className="flex flex-col flex-1">
      <ErrorModal
        open={isOpenErrorModal}
        onClose={() => setIsOpenErrorModal(false)}
      />
      <CreateSuccessModal
        open={isOpenSuccessModal}
        onClose={() => setIsOpenSuccessModal(false)}
      />
      <Formik initialValues={machine} onSubmit={handleSubmit}>
        {(formikProps) => (
          <>
            <EditHeader title="สร้างเครื่องออกกำลังกาย" />
            <Form className="overflow-y-auto">
              <div className="p-6 overflow-y-auto min-h-screen">
                <Field name="machine_name">
                  {({ field, meta }) => (
                    <div>
                      <Input
                        placeholder="ชื่อเครื่องออกกำลังกาย"
                        inputProps={{ ...field }}
                      />
                    </div>
                  )}
                </Field>
                <div className="my-3">
                  <Select
                    value={machineType.find(
                      (option) => option.value === option.value
                    )}
                    options={machineType}
                    onChange={(option) => handleType(option.value)}
                    defaultValue={machineType[0]}
                  />
                </div>
                <div className="my-3">
                  <Select
                    value={machineGroup.find(
                      (option) => option.value === option.value
                    )}
                    options={machineGroup}
                    onChange={(option) => handleGroup(option.value)}
                    defaultValue={machineGroup[0]}
                  />
                </div>
                <div className="col-4 mx-auto">
                  <button value="submit" className="buttonBack btn-block">
                    สร้างเครื่องออกกำลังกาย
                  </button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
