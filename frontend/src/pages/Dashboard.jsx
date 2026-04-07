import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NoteCard from "../components/NoteCard";

function Dashboard() {
  return (
    <>
      <div className="container">
        <h2>Dashboard</h2>
        <button className="btn btn-primary m-3">Add Note</button>
        <br />

        <NoteCard />
      </div>
    </>
  );
}

export default Dashboard;
