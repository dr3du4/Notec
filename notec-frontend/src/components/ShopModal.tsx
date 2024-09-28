import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Modal} from "@mui/material";
import * as React from "react";

const style = {
   position: 'absolute' as const,
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

type Props = {
   open: boolean;
   setOpen: (e: boolean) => void;
   children?: React.ReactNode;
}

const ShopModal = ({open, setOpen, children}: Props) => {
   const handleClose = () => setOpen(false);

   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            {children ? children : <>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
               </Typography>
               <Typography id="modal-modal-description" sx={{mt: 2}}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
               </Typography>
            </>}
         </Box>
      </Modal>
   )
}

export default ShopModal;