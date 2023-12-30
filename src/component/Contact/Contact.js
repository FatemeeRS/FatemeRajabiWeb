import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Contact.css";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const inputSubjectRef = useRef(null);

  const handleChangeInputSubject = (event) => {
    if (event.target.value) {
      setSubject(event.target.value);
      setErrors({
        ...errors,
        subject: null,
      });
    } else {
      subjectErrors();
    }
  };
  const subjectErrors = () => {
    setErrors({
      ...errors,
      subject: "Please write your subject ",
    });
  };

  const handleFocusInputSubject = (event) => {
    if (event.target.value) {
      setErrors({
        ...errors,
        subject: null,
      });
    } else {
      subjectErrors();
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleChangeInputEmail = (event) => {
    if (validateEmail(event.target.value)) {
      setEmail(event.target.value);
      setErrors({
        ...errors,
        email: null,
      });
    } else {
      setErrors({
        ...errors,
        email: " ! Email is not valid",
      });
    }
  };
  const handleChangeTextEarea = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmited = () => {
    if (errors.email === null && errors.subject === null) {
      alert("Thank you for contacting to me. You’re helping me make better! ");
    } else if (errors.email !== null) {
      alert("Please Enter your email ");
    } else if (errors.subject !== null) {
      alert("Please Enter your subject ");
    }
    console.log("subject", subject);
    console.log("email", email);
    console.log("description", description);
  };

  useEffect(() => {
     inputSubjectRef.current.focus()
  }, []);

  return (
    <div className="content">
      <div>
        <Input
          inputRef={inputSubjectRef}
          type="text"
          placeholder="Subject"
          onChange={handleChangeInputSubject}
          onFocus={handleFocusInputSubject}
        />
        {errors.subject && <span>{errors.subject}</span>}
      </div>
      <div>
        <Input
          // ref={inputSubjectRef}
          type="email"
          placeholder="Email"
          onChange={handleChangeInputEmail}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <textarea onChange={handleChangeTextEarea} value={"Write your opinion "}>
        Your request here
      </textarea>
      <Button onClick={handleSubmited} className={"sub-btn"}>
        {" "}
        submit
      </Button>
    </div>
  );
};
export default Contact;
