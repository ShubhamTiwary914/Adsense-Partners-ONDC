import { Typography, Link } from "@mui/material";


export default function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Yardstick Adsense Partners Program
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }