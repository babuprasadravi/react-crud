import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TableView from "./components/TableView";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Update existing entry
      const newData = [...tableData];
      newData[editIndex] = formData;
      setTableData(newData);
      setEditIndex(null);
    } else {
      // Add new entry
      setTableData([...tableData, formData]);
    }
    // Reset form
    setFormData({
      name: "",
      age: "",
      email: "",
      phone: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(tableData[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newData = tableData.filter((_, i) => i !== index);
    setTableData(newData);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-md-4">
          <Form
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            editIndex={editIndex}
          />
        </div>
        <div className="col-md-8">
          <TableView
            data={tableData}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
