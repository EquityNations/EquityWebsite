import React from "react";
import ReactDOM from "react-dom";




import { ReactComponent as AppImg } from "./eqns.svg";
import { AppBar, Typography,Toolbar } from "@mui/material";


export const  AppLogo = () => {
  return (
    <div>
      <AppBar className="nav-bar" position="static" >
         <Toolbar>
          <Typography >
            <AppImg height={50} />
          </Typography>
        </Toolbar>
  </AppBar>
    </div>
  );
};
