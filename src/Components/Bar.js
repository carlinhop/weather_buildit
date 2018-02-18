import React from "react";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

const Bar = () => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text="Weather BuildIt" />
    </ToolbarGroup>

    <ToolbarGroup>
      <TextField hintText="City" />
      <FlatButton label="Search" primary={true} />
    </ToolbarGroup>
  </Toolbar>
);

export default Bar;
