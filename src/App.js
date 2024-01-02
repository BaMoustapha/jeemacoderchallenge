import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function APP() {
  const [inputs, setInputs] = useState({
        prenom: "",
        name: "",
        email: "",
        telephone: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempTableData = tableData;
      tempTableData[editIndex] = inputs;
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        prenom: "",
        name: "",
        email: "",
        telephone: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        prenom: "",
        name: "",
        email: "",
        telephone: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData;
    filterData.splice(index, 1);
    setTableData([...filterData]);
    setInputs({
      prenom: "",
      name: "",
      email: "",
      telephone: "",
    });
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];
    setInputs({
      prenom: tempData.prenom, 
      name: tempData.name, 
      email: tempData.email, 
      telephone: tempData.telephone 
    });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="container">
      <h1 className="text-center my-5">Jeema Coder</h1>
      <div className="w-50 mx-auto p-10 my-5 d-flex align-items-center justify-content-center shadow p-3 mb-5 bg-body-tertiary rounded">
        <form onSubmit={handleSubmit}>
          <div className="row d-flex flex-column my-5 gap-5 fs-5">
            <div className="column1 d-flex gap-3">
            <label>Prenom</label>
            <input name="prenom" value={inputs.prenom} onChange={handleChange} required/>
            <label>Nom</label>
            <input name="name" value={inputs.name} onChange={handleChange} required/>
            </div>
            <div className="column2 d-flex gap-2">
            <label>Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} required/>
            <label>Telephone</label>
            <input name="telephone" value={inputs.telephone} onChange={handleChange} required/>
            </div>
          </div>

          <button type="submit" className={`w-100 ${editClick ? 'bg-warning' : 'bg-success'} my-3 fs-4`}>
            {editClick ? "modifier" : "Ajouter"}
          </button>

        </form>
      </div>
      <div>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Prenom</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {tableData.map((item, index) => (
              <tr>
                <td>{item.prenom}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.telephone}</td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-warning me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default APP;