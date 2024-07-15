import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'
import { Alert } from '@mui/material'


export default function Toaster({ open, setConfig, message, styles }){
    const handleClose = () => {
        setConfig(old=>{
            let newcon = {...old}
            newcon['open'] = false
            //console.log(newcon)
            return newcon;
        })
    }
    

    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={styles.color} variant={styles.mode} sx={{ 
                width: '100%' 
            }}>
                {message}
            </Alert>
        </Snackbar>
    )
}