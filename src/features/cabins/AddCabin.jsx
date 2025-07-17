import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(setIsOpenModal);
  return (
    <div>
      <Button
        variation="primary"
        size="medium"
        onClick={() => {
          setIsOpenModal((show) => !show);
          console.log("sdfa");
        }}
      >
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
