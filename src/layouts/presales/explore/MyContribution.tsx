import { Box, Grid } from "@mui/material";

import { _explore } from "../../../_mocks/_explore";
import Card from "./Card";
const MyContribution = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 8, mb: 2 }}>
        <Grid container>
          {_explore.map((data: any) => (
            <Grid item xs={12} sm={6} lg={4} key={data.id}>
              <Card explore={data} />
            </Grid>
          ))}
        </Grid>
      </Box>
  )
}

export default MyContribution