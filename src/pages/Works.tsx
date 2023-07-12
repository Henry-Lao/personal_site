import { Grid } from "@mui/material"
import WorkCard from "../components/WorkCard"


function Works() {
    return(
        <Grid container spacing={4} mx={1}>
            <Grid item xs={12}>
                <WorkCard/>
            </Grid>
            <Grid item xs={12}>
                <WorkCard/>
            </Grid>
            <Grid item xs={12}>
                <WorkCard/>
            </Grid>
            <Grid item xs={12}>
                <WorkCard/>
            </Grid>
            <Grid item xs={12}>
                <WorkCard/>
            </Grid>
        </Grid>
    )
}

export default Works