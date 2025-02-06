import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      name: "Nigel",
      address: "Bournemouth",
      phone: "01202 123456",
      email: "nigel@nigel.nigel",
      complaint: "My pripps blao is too warm..",
      contact: "post",
      consent: true,
    },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    contact: "",
    content: false,
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    console.log(name, value, type);
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <div>
        <h1 className="display-2">Controlled Form</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <h2>Complaining Form</h2>

          <label>
            Full Name
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="form-control"
            />
          </label>
          <br />
          <input type="submit" value="Submit!" className="btn btn-success" />
        </form>
        <hr />

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Complaint</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>{complaint.name}</td>
                <td>{complaint.address}</td>
                <td>{complaint.phone}</td>
                <td>{complaint.email}</td>
                <td>{complaint.complaint}</td>
                <td>{complaint.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
