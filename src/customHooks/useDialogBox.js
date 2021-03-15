import {useState} from "react";

const useDialogBox = () => {
  //  Dialog box state
  const [openDialog, setOpenDialog] = useState(null);

  //  Dialog box open
  const handleClickOpen = (id) => {
    setOpenDialog(id);
  };

  //  Dialog box close
  const handleClose = () => {
    setOpenDialog(0);
  };

  return {openDialog, handleClickOpen, handleClose};
};

export default useDialogBox;