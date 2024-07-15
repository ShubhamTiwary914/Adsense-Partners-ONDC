import { Box, Button, Divider } from '@mui/material';
import { COLORS } from '@/app/constant/THEME';





const PageTabs = ({ components, tab, setTab }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', borderBottom: `1px solid ${COLORS.GRAY_MID_1}` }}>
            {components.map((component, index) => (
                <Box key={index}
                    sx={{
                        textTransform: 'none',
                        color: 'text.secondary',
                        p: 2,
                        mx: 2,
                        width: '110%',
                        ...(tab === index && {
                            borderBottom: `2px solid ${COLORS.SIDEBAR_DARK_BLUE}`,
                            color: COLORS.SIDEBAR_DARK_BLUE
                        }),
                        '&:hover': { backgroundColor: COLORS.GRAY_LIGHT_2, cursor: 'pointer' },
                        display: 'flex',
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    onClick={() => setTab(index)}
                    >
                    {component}
                </Box>
            ))}
            </Box>
            <Divider />
        </Box>
    );
}

export default PageTabs