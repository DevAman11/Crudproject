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

  return <>

  </>;
}

export default Update;
