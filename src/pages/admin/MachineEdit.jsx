import { Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import CreateSuccessModal from "../../components/core/Modal/CreateSuccessModal";
import ErrorModal from "../../components/core/Modal/ErrorModal";
import EditHeader from "../../components/Header/EditHeader";
import Input from "../../components/core/Input";
import {
  apiEditMachine,
  apiDeleteMachine,
  apiFetchMachineGroup,
  apiFetchMachineId,
  apiFetchMachineType,
} from "../../api/machine";
import { navigate } from "@reach/router";
import _ from "lodash";
import Loading from "../../components/core/Loading";
import Select from "react-select";
import ConfirmModal from "../../components/core/Modal/ConfirmModal";
import { apiDeleteMember } from "../../api/users";
import BtnBack from "../../components/core/BtnBack";

export default function MachineEdit(props) {
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [machine, setMachine] = useState({
    machine_name: "",
    machine_group_id: 1,
    machine_type_id: 1,
  });
  const [isFetch, setIsFetch] = useState(false);
  const [machineGroup, setMachineGroup] = useState([]);
  const [machineType, setMachineType] = useState([]);
  const [groupId, setGroupId] = useState(1);
  const [typeId, setTypeId] = useState(1);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const machineGroup = await apiFetchMachineGroup();
    const machineType = await apiFetchMachineType();
    const { data } = await apiFetchMachineId(props.id);

    const temp = {
      machine_name: data.machine_name,
      machine_group_id: parseInt(data.machine_group_id),
      machine_type_id: parseInt(data.machine_type_id),
    };

    setGroupId(temp.machine_group_id);
    setTypeId(temp.machine_type_id);

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

    setMachine(temp);
    setIsFetch(false);
  }, [props]);

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
      machine_id: props.id,
      machine_name: data.machine_name,
      machine_group_id: groupId,
      machine_type_id: typeId,
    };

    try {
      await apiEditMachine(temp);
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

  const handleRemove = () => {
    setIsOpenConfirm(true);
  };

  const handleDelete = async () => {
    const temp = {
      machine_id: props.id,
    };
    try {
      await apiDeleteMachine(temp);
      setIsOpenSuccessModal(true);
      setTimeout(() => {
        navigate("/admin/machine");
      }, 2000);
    } catch (err) {
      setIsOpenErrorModal(true);
    }
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
      <ConfirmModal
        open={isOpenConfirm}
        onClose={() => setIsOpenConfirm(false)}
        onConfirm={() => handleDelete()}
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
                      (option) => option.value === machine.machine_type_id
                    )}
                    options={machineType}
                    onChange={(option) => handleType(option.value)}
                    defaultValue={machineType[machine.machine_type_id]}
                  />
                </div>
                <div className="my-3">
                  <Select
                    value={machineGroup.find(
                      (option) => option.value === machine.machine_group_id
                    )}
                    options={machineGroup}
                    onChange={(option) => handleGroup(option.value)}
                    defaultValue={machineGroup[machine.machine_group_id]}
                  />
                </div>
                <div className="row">
                  <div className="col-6 mx-auto">
                    <button
                      type="button"
                      onClick={() => handleRemove()}
                      className="buttonBack btn-block"
                    >
                      ลบ
                    </button>
                  </div>
                  <div className="col-6 mx-auto">
                    <button value="submit" className="buttonBack btn-block">
                      แก้ไขเครื่องออกกำลังกาย
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
