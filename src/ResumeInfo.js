import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResumeInfo() {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Resume</h1>
      <div style={{ display: "flex", justifyContent: "end" }}>
        Name: {state.name}
        <br />
        Email: {state.email}
        <br />
        Phone: {state.phone}
      </div>
      <br />
      <p>Degree: {state.degree}</p>
      <p>Skills: {state.skills}</p>
      <p>Experience: {state.experience}</p>
      <br />
      <br />
      <br />
      <Button
        style={{ background: "teal", color: "white" }}
        variant="contained"
        onClick={() => navigate("/")}
      >
        Create New Resume
      </Button>
    </div>
  );
}

/*export default class Resume extends React.Component {
  render() {
    return <div>Hi {this.props.name}</div>;
  }
}*/
