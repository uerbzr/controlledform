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
    consent: false,
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    //console.log(name, value, type);
    //console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log("Form submitted");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-2">Controlled Form</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <h2>Complaining Form</h2>

              <label className="form-control">
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

              <label className="form-control">
                Address
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={formData.address}
                  required
                  className="form-control"
                />
              </label>

              <label className="form-control">
                Phone
                <input
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                  required
                  className="form-control"
                />
              </label>

              <label className="form-control">
                Email
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  className="form-control"
                />
              </label>
              <label htmlFor="complaint" className="form-control">
                <textarea
                  name="complaint"
                  onChange={handleChange}
                  value={formData.complaint}
                  rows="10"
                  placeholder="write your complaint"
                ></textarea>
              </label>

              <div className="form__radio-group">
                <p>How do you want to be contacted? </p>
                <label>
                  <input
                    type="radio"
                    name="contact"
                    value="phone"
                    onChange={handleChange}
                    checked={formData.contact === "phone"}
                  />
                  Phone
                </label>

                <label>
                  <input
                    type="radio"
                    name="contact"
                    value="email"
                    onChange={handleChange}
                    checked={formData.contact === "email"}
                  />
                  Email
                </label>

                <label>
                  <input
                    type="radio"
                    name="contact"
                    value="post"
                    onChange={handleChange}
                    checked={formData.contact === "post"}
                  />
                  Slow Mail
                </label>

                <label>
                  <input
                    type="radio"
                    name="contact"
                    value="none"
                    onChange={handleChange}
                    checked={formData.contact === "none"}
                  />
                  No contact!
                </label>
              </div>

              <label className="form-control">
                I agree you can take my data and do whatever!
                <input
                  type="checkbox"
                  name="consent"
                  onChange={handleChange}
                  checked={formData.consent}
                />
              </label>
              <br />
              <input
                type="submit"
                value="Submit!"
                className="btn btn-success"
              />
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
        </div>
      </div>
    </>
  );
}

export default App;
