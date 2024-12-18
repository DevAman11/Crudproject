import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Update() {

  const {id} = useParams()
  const [Form, setForm] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Password: "",
  });

  useEffect( ()=>{
    const FetchData  = async ()=>{
      try {
        const res = await fetch(`http://localhost:7000/login${id}`)
        const Logtech = await res.json()
        console.log(Logtech);
        setForm(Logtech)
        
      } catch (error) {
        console.log(error);
      }
    }
    FetchData()
  },[id])

  const HandleValueChange = (e) => {
    setForm({
      ...Form,
      [e.target.Name]: e.target.value,
    });
  };

  const SubmitValue = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/login", {
        method: "PATCH",
        headers: {
          "Content-Type": "appication/json",
        },
        body: JSON.stringify(Form),
      });
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error:  ${errorData.message}`);
      } else {
        const Data = await response.json();
        setForm({
          Name: "",
          Phone: "",
          Email: "",
          Password: "",
        });
        alert("Signup Successfully", Data);
      }
    } catch (error) {
      console.log(error);
      alert("An Error occurred while singing up.");
    }
  };

  return <>

  </>;
}

export default Update;
