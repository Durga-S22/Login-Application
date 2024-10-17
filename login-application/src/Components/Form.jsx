import { useState } from "react";
import "../Styles/Form.css"
const Form = () => {
  // State for form input fields
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    email: "",
  });
  // State for storing submitted data
  const [submittedData, setSubmittedData] = useState([]);
  // Handle change in form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Dynamically update the field based on input name
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    setSubmittedData([...submittedData, formData]); // Add new data to the table
    setFormData({ name: "", phone: "", gender: "", email: "" }); // Reset form fields
  };

  return (
    <div className="FormPage">
      
      <h2 style={{color:"ghostwhite",fontSize:"35px"}}>Basic Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required/>
          </label>
        </div>
        <div>
        <label>Gender:</label>
    <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} required/> Male
    <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} required/> Female
    <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleChange} required/> Other     
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Data</h3>
      {submittedData.length > 0 ? (
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.gender}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{color:"white"}}>No data submitted yet</p>
      )}
    </div>
  );
};

export default Form;
