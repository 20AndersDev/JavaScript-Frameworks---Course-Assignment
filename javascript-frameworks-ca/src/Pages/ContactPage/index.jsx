import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.fullName.length >= 3 &&
      formData.subject.length >= 3 &&
      isValidEmail(formData.email) &&
      formData.body.length >= 3
    ) {
      console.log("Form data:", formData);
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Layout>
      <FormContainer>
        <h1>Contact Page</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="fullName">Full Name:</Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">Subject:</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="body">Body:</Label>
            <TextArea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </FormContainer>
    </Layout>
  );
}

export default ContactPage;
