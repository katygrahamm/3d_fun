import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Laptop from "../assets/laptop.png"

function imagegrid() {
    return (
        <div>
           <Grid>
            <img src={Laptop}/>
           </Grid>
        </div>
    )
}

export default imagegrid