import React, { useRef, useState } from "react";
import "./Form.css";
import gsap from "gsap";
import { useEffect } from "react";

const Form =()=>{
  const tl= new gsap.timeline();
  let inp1=useRef(null);
  let inp2=useRef(null);
  let inp3=useRef(null);
  let formBtn=useRef(null);

    useEffect(()=>{
      tl.from([inp1,inp2,inp3,formBtn],1,{
        opacity:0,
        y:400,
        // skewY:10,
        stagger:{
          amount:0.4
        }
    
      })
  },[])
  const[state,setState]=useState({
    name: "",
    email: "",
    message: "",
    btnText: "SUBMIT",
    nameError: false,
    emailError: false,
    messageError: false,
  });
  const [oldState,setOldstate]=useState();
  useEffect(()=>{
    setOldstate(state);
  },[])
  const validate = (id) => {
    console.log("state", state)
    if (id == "email") {
      const atposition =  state.email.indexOf("@");
      const dotposition =  state.email.lastIndexOf(".");
      const wrongEmail =
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >=  state.email.length ||
        state.email.length <= 5;
      setState(old=>{
        old.emailError = wrongEmail;
        return old
       })
    } else if (id == "name") {
      const wrongName =
         state.name.replace(/\s/g, "").length == 0 ||
         state.name.length <= 2;
      setState(old=>{
        old.nameError = wrongName;
        return old;
       })
    } else if (id == "message") {
      const wrongMessage =
         state.message.replace(/\s/g, "").length == 0 ||
         state.message.length < 2;

       setState(old=>{
        old.messageError = wrongMessage;
        return old;
       })
    }
  };

  const handleChange=(e)=> {
    // console.log(e.target.id, e.target.name);
    const key = e.target.id != "message" ? e.target.name : "message";
    const msgDiv = document.getElementById("message");
    const value = key != "message" ? e.target.value : msgDiv.innerText;
    setState(old=>{ 
      console.log("old", old)
      old[key] = value
      return old
    });
    console.log(state)
    validate(key);
  }

  

  const submitForm = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwCxiiMafp0KsaJTcTpSi4U9c5MrfP766YWZP0w_QMGlZxgGEQ6RKu4--64KaVL78G3/exec";
    const form = document.forms["myForm"];
    const msgDiv = document.getElementById("message");

    await  validate("name");
    await  validate("email");
    await  validate("message");
    if (
       state.nameError ||
       state.emailError ||
       state.messageError
    ) {
    } else {
       setState({
        btnText: "SENDING...",
      });
      const data = new FormData(form);
      data.append("message", msgDiv.innerText);
      fetch(scriptURL, { method: "POST", body: data })
        .then((response) => {
          form.reset();
          msgDiv.innerText = "";
           setState( oldState);
        })
        .catch((error) => {
           setState({
            btnText: "SUBMIT",
          });
          alert(
            "some error occoured while submitting the form, please try again later"
          );
        });
    }
  };
  return (
    <div className="formMain">
      <form className="form" id="myForm">
        <input
          required
          className="input"
          onChange={ handleChange}
          type="Text"
          name="name"
          placeholder="Name"
          ref={el=>inp1=el}
        />
        { state.nameError && <div className="error">invalid name</div>}
        <input
          required
          className="input"
          onChange={ handleChange}
          type="email"
          name="email"
          placeholder="Email"
          ref={el=>inp2=el}
        />
        { state.emailError && <div className="error">invalid email</div>}
        <div
          id="message"
          data-placeholder="Say Hello to Me"
          contentEditable="true"
          onInput={ handleChange}
          className="input message"
          ref={el=>inp3=el}
        />
        { state.messageError && (
          <div className="error">invalid message</div>
        )}
        <button 
        ref={el=>formBtn=el} 
        className="formBtn" onClick={ submitForm}>
          { state.btnText}
        </button>
      </form>
    </div>
  );

}
export default Form;
