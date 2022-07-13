import "./App.css";
import { useState } from "react";

export default function App() {
    const [form, setForm] = useState({
      name: "",
      emails: "",
      mobile: ""
    });
  
    function handleChange(event) {
      console.log(event.target);
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    }

    return (
        <div class="container">
           <div class="container-close">&times;</div>
           <img className = "img-responsive" 
          src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="image"></img>
          <div class="container-text">
          <h2>Ideas and UI components in your inbox</h2>
          <p> Sign up to receive ideas, free components and free resources plus 15% on all of our pro UI kits.</p>
          <input type="Your Name" placeholder="Your Name" value={form.name} name="name" onChange={(event) => handleChange(event)}/>
          <input type="Your Email" placeholder="Your Email" value={form.emails} name="emails" onChange={(event) => handleChange(event)}/>
          <input type="Your Number" placeholder="Your Number" value={form.mobile} name="mobile" onChange={(event) => handleChange(event)}/>
          <button type="submit">SUBMIT</button>
          </div>
        </div>
      );
    }
 
