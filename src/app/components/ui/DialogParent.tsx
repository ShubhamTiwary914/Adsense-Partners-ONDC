import { ReactNode } from "react";
import {  Dialog, DialogContent, DialogActions, Button } from "@mui/material";



interface DialogParentProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const DialogParent: React.FC<DialogParentProps> = ({ open, onClose, children }) => {
    return (
        <Dialog open={open} onClose={onClose} PaperProps={{ style: { backgroundColor: 'white', width: '600px' } }} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
            <Button onClick={onClose} color="primary">Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogParent;