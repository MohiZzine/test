import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";
import classes from "./UserForm.module.css";
import FileInput from "../UI/Input/FileInput/FileInput";
import TextInput from "../UI/Input/TextInput/TextInput";
import Button from "../UI/Button/Button";

const UserForm = () => {
  const restAPIUrl = "http://localhost:3000/candidate";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  // const [file, setFile] = useState(null);

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const aboutChangeHandler = (event) => {
    setAbout(event.target.value);
  };

  // const fileChangeHandler = (event) => {
  //   setFile(event.target.files[0]);
  // };

  const submitHandler = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    /* 
    const formObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      about: about,
    }; */
    try {
      let formFields = new FormData(form);

      let responsibleData = await postFormFieldsAsJson({
        restAPIUrl,
        formFields,
      });
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
    // const formData = new FormData();
    // formData.append("firstName", firstName);
    // formData.append("lastName", lastName);
    // formData.append("email", email);
    // formData.append("about", about);
    // // formData.append("file", file[0]);

    // const file = formData.get("file");
    // const fileExtension = file.type.split(".").atChar(-1);
    // console.log(fileExtension);
    // if (!(file && (fileExtension === "pdf" || fileExtension === "docx"))) {
    //   alert("Please upload a pdf or docx file");
    //   return;
    // }
    // console.log(formObj);
    // fetchData(formObj);
    // const inputData = {
    //   userId: firstName,
    //   title: lastName,
    //   body: email,
    //   about: about,
    //   file: file,
    // };

    // fetchData()
    //   .then((response) => {
    //     if (response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .then((error) => {
    //     console.log(
    //       "There has been a problem with the fetch operation: ",
    //       error
    //     );
    //   });

    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", inputData)
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));

    // fetch("./", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(inputData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));

    // fetch("https://api.github.com/users/MohiZzine")
    //   .then((res) => res.json())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));
    // Axios.post("https://api.github.com/users/MohiZzine", inputData)
    //   .then((response) => {
    //     console.log(response);
    //     console.log(inputData);
    //   })
    //   .catch((error) => console.log(error));
  };

  async function postFormFieldsAsJson({ url, formData }) {
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJsonString = JSON.stringify(formDataObject);

    let fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: formDataJsonString,
    };

    let res = await fetch(url, fetchOptions);

    if (!res.ok) {
      let error = await res.text();
      throw new Error(error);
    }
    return res.json();
  }

  return (
    <div className={classes.wrapper}>
      <h1>User Form</h1>
      <form
        action="http://localhost:3000/candidate"
        method="post"
        className={classes["form-container"]}
        onSubmit={submitHandler}
      >
        <TextInput
          input={{
            type: "text",
            name: "first_name",
            id: "first_name",
            placeholder: "First name",
            onChange: firstNameChangeHandler,
          }}
          value={firstName}
        />
        <TextInput
          input={{
            type: "text",
            name: "last_name",
            id: "last_name",
            placeholder: "Last name",
            onChange: lastNameChangeHandler,
            value: lastName,
          }}
        />
        <TextInput
          input={{
            type: "text",
            name: "email",
            id: "email",
            placeholder: "Email",
            onChange: emailChangeHandler,
            value: email,
          }}
        />
        <textarea
          name="about"
          id="about"
          rows="2"
          placeholder="About you"
          onChange={aboutChangeHandler}
          value={about}
        ></textarea>
        <FileInput
          input={{ type: "file", name: "file", id: "file" }}
          // onChange={fileChangeHandler}
        />
        {/* <FileInput  /> */}
        <Button type="submit" value="Submit" className="btn btn-pink" />
      </form>
    </div>
  );
};

export default UserForm;
