import { Card, CardBody, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Box } from "@mui/material";
import DropSelector from "../ui/DropSelector";


const Charts = ({ chartoptions, ages, ageSetter }) => {
  return (
    <Box sx={{ width: '90%', borderRadius: 2, boxShadow: 5, p:3, m: 3, my: 5 }}>
      <Card>
        <CardBody>
          <Box sx={{ marginRight: 'auto', my: 2 }}>
            <DropSelector ages={ages} ageSetter={ageSetter} index={2}/>
          </Box>
          <CardTitle tag="h5"> {chartoptions.title} </CardTitle>
          <Chart
            type="area"
            width="100%"
            height="390"
            options={chartoptions.options}
            series={chartoptions.series}
          />
        </CardBody>
      </Card>
    </Box>
  );
};

export default Charts;
