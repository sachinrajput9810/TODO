import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

function ToDoDetails({setTodoDetails , setOpenDialog, todoDetails , openDialog}){
    return <Fragment>
         <Dialog onClose = {() => setOpenDialog(false)} open = {openDialog} >
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button onClick={() => {
                     setOpenDialog(false) ;
                     setTodoDetails(null) ;
                }}>Close</Button>
            </DialogActions>
         </Dialog>
    </Fragment>
}

export default ToDoDetails 