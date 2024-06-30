import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';


const GoogleIcon: React.FC = (props) => (
    <SvgIcon {...props}>
        <path d="M21.35 11.1h-9.15v2.86h5.26c-0.23 1.2-0.9 2.22-1.89 2.92v2.42h3.06c1.79-1.64 2.82-4.05 2.82-6.78 0-0.58-0.05-1.15-0.1-1.71l-0.01-0.01z" fill="#4285F4"/>
        <path d="M12.2 22.1c2.43 0 4.46-0.81 5.95-2.19l-3.06-2.42c-0.83 0.55-1.87 0.89-2.99 0.89-2.31 0-4.26-1.56-4.95-3.66h-3.12v2.31c1.5 2.96 4.51 4.98 8.17 4.98z" fill="#34A853"/>
        <path d="M7.25 14.72c-0.2-0.6-0.31-1.23-0.31-1.88s0.11-1.28 0.31-1.88v-2.31h-3.12c-0.64 1.28-1.01 2.71-1.01 4.19s0.37 2.91 1.01 4.19l3.12-2.31z" fill="#FBBC05"/>
        <path d="M12.2 7.04c1.29 0 2.44 0.44 3.35 1.31l2.51-2.51c-1.49-1.39-3.52-2.25-5.86-2.25-3.66 0-6.68 2.02-8.17 4.98l3.12 2.31c0.68-2.1 2.63-3.66 4.95-3.66z" fill="#EA4335"/>
    </SvgIcon>
    );

const GoogleSignUpButton: React.FC = () => {
    return (
        <Button variant="contained" color="inherit" fullWidth startIcon={<GoogleIcon />} style={{ 
            textTransform: 'none',
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid #ccc'
        }}
        >
        Sign In with Google
        </Button>
    );
};


export default GoogleSignUpButton;
