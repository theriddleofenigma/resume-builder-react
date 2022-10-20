import { Button, TextField } from "@material-ui/core";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [degree, setDegree] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Welcome to Resume Builder!
      </h1>
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "1rem"
        }}
      >
        <div>
          <TextField
            className="input"
            variant="filled"
            value={name}
            label="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            className="input"
            variant="filled"
            value={email}
            label="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            className="input"
            variant="filled"
            value={phone}
            label="Enter your phone number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            className="input"
            variant="filled"
            value={degree}
            label="Enter your degree"
            onChange={(e) => {
              setDegree(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            className="input"
            variant="filled"
            value={skills}
            multiline
            rows={4}
            label="Enter your skills"
            onChange={(e) => {
              setSkills(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            className="input"
            variant="filled"
            value={experience}
            multiline
            rows={4}
            label="Enter your project experience"
            onChange={(e) => {
              setExperience(e.target.value);
            }}
          />
        </div>
        <br />
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{ background: "teal", color: "white" }}
            variant="contained"
            onClick={() =>
              navigate("/resume", {
                state: { name, email, phone, degree, skills, experience }
              })
            }
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
