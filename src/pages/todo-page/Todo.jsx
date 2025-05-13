import { useRef, useState } from "react";
import "./to-do.css";

export const Todo = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const objdata = Object.fromEntries(formdata);
    const value = objdata.Inputdata;

    if (indexValue !==null) {
      const updatedData = data.map((item,index)=>index==indexValue ? inputValue : item)
      setData(updatedData)
    } else {
      data.includes(value) || value == "" ? setInputValue("") : setData((prev) => [...prev, value]);
    }
    setInputValue("");
    setIndexValue(null)
  };

  const handleDelete = (deletedData) => {
    const updatedData = data.filter((item) => item !== deletedData);
    setData(updatedData);
  };

  const handleUpdate = (selectedData, indexValue) => {
  console.log("index value", indexValue);
    
    setIndexValue(indexValue);
    setInputValue(selectedData);
  };

  console.log("index value", indexValue);
  
  return (
    <div className="todo-container">
      <div className="todo-heading">Todo List</div>

      <form onSubmit={handleButtonClick} className="todocont">
        <span className="form-group">
          <input
            type="text"
            name="Inputdata"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type todo lists"
          />
          <button type="submit">{indexValue !==null ? "Edit" :"Submit"}</button>
        </span>

        <div className="todo-data-container">
          {data.map((item, index) => {
            return (
              <div key={index} className="list-item">
                <span>{item} </span>
                <button type="button" onClick={() => handleDelete(item)}>Delete</button>
                <button type="button" onClick={() => handleUpdate(item, index)}>
                  Update
                </button>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
