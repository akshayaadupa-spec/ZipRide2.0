import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

function Register() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (
      form.name &&
      form.email &&
      form.password &&
      form.college
    ) {

      login(form);

      alert("Registration Successful 🎉");

      navigate("/");

    } else {

      alert("Please fill all details");

    }
  };


  return (
    <div style={styles.container}>

      <div style={styles.box}>

        <h2>Create Account 🚗</h2>


        <form onSubmit={handleSubmit}>


          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />


          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />


          <input
            name="college"
            placeholder="College Name"
            value={form.college}
            onChange={handleChange}
            style={styles.input}
          />


          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />


          <button style={styles.button}>
            Register
          </button>


        </form>

      </div>

    </div>
  );
}


const styles = {

  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    background:"#f5f5f5",
  },

  box:{
    padding:"30px",
    background:"white",
    borderRadius:"10px",
    width:"320px",
    textAlign:"center",
    boxShadow:"0 0 10px rgba(0,0,0,0.1)"
  },

  input:{
    width:"100%",
    padding:"10px",
    margin:"10px 0",
  },

  button:{
    width:"100%",
    padding:"10px",
    background:"black",
    color:"white",
    border:"none",
    cursor:"pointer"
  }

};


export default Register;