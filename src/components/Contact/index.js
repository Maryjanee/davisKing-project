import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { SectionContainer } from "../SiteWideComponents/AboutSection/AboutElements";
import {
  ContactContentContainer,
  ContactTextAndSocial,
  ContactText,
  ContactMailContainer,
  ContactMail,
  ContactForm,
  ContactTextArea,
  ContactItem,
  SocialMediaIcon,
  MailContainer,
  Email,
  FormGrid,
  ContactItemLabel,
  ContactInput,
  ContactSubmitBtn,
} from "../../components/Contact/ContactElements";
import { Heading } from "../FeaturedHome/FeaturedItems";

import mail from "../../assets/mail.svg";
import SocialMedia from "../../components/SiteWideComponents/SocialLinks/";

const Contact = () => {
  let history = useHistory();
  const INITIAL_FORM = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const INITIALCONFIRMATION = {
    confirmationHeading: "",
    confirmationText: "",
  };

  const [buttonText, setButtonText] = useState("Send Email");
  const [formDetails, setFormDetails] = useState(INITIAL_FORM);
  const { firstName, lastName, email, phone, message } = formDetails;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormDetails(INITIAL_FORM);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText("Sending...");
    const dataToSubmit = {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      message,
    };

    axios({
      method: "POST",
      url: "https://davisking-server.herokuapp.com/send",
      data: {
        dataToSubmit,
      },
    }).then((response) => {
      if (response.data.status === "Ok") {
    
        history.push({
          pathname: "/confirmation",
          state: { headingText: "Thanks! Your message was sent.", text: "I will get back to you really soon!" },
        });
        setButtonText("Send");
        resetForm();
      } else if (response.data.status === "Failed") {
        
        history.push({
          pathname: "/confirmation",
          state: {
            headingText: "Message Sending Failed!",
            text: "An error occurred and the form wasn't submitted.",
          },
        });
        setButtonText("Send");
        resetForm();
      }
    });
  };

  return (
    <>
      <SectionContainer id="contact">
        <Heading>Contact</Heading>
        <ContactContentContainer>
          <ContactTextAndSocial>
            <ContactText>
              Do you have booking enquires or would you love a chat? I would
              absolutely love to hear from you.
            </ContactText>
            <SocialMedia />

            <ContactMailContainer>
              <ContactMail>
                <MailContainer>
                  <SocialMediaIcon src={mail} />
                </MailContainer>
                <Email label="davisking2@gmail.com" mailto="mailto:davisking2@gmail.com" >davisking2@gmail.com</Email>
              </ContactMail>

              <ContactMail>
                <MailContainer>
                  <SocialMediaIcon src={mail} />
                </MailContainer>
                <Email label="info@thedavisking.com" mailto="mailto:info@thedavisking.com" >info@thedavisking.com</Email>
              </ContactMail>
            </ContactMailContainer>
          </ContactTextAndSocial>
          <ContactForm onSubmit={handleSubmit}>
            <FormGrid>
              <ContactItem className="first-name">
                <ContactItemLabel htmlFor="firstName">
                  First Name
                </ContactItemLabel>
                <ContactInput
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  required
                  onChange={handleChange}
                />
              </ContactItem>
              <ContactItem className="last-name">
                <ContactItemLabel htmlFor="lastName">
                  Last Name
                </ContactItemLabel>
                <ContactInput
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  required
                  onChange={handleChange}
                />
              </ContactItem>
              <ContactItem className="email">
                <ContactItemLabel htmlFor="email">Email</ContactItemLabel>
                <ContactInput
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  required
                  onChange={handleChange}
                />
              </ContactItem>
              <ContactItem className="phone">
                <ContactItemLabel htmlFor="phone">Phone</ContactItemLabel>
                <ContactInput
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  required
                  onChange={handleChange}
                />
              </ContactItem>
              <ContactItem className="message">
                <ContactItemLabel htmlFor="message">Message</ContactItemLabel>
                <ContactTextArea
                  id="message"
                  value={message}
                  name="message"
                  required
                  onChange={handleChange}
                ></ContactTextArea>
              </ContactItem>
            </FormGrid>
            <ContactSubmitBtn type="submit">{buttonText}</ContactSubmitBtn>
          </ContactForm>
        </ContactContentContainer>
      </SectionContainer>
    </>
  );
};

export default Contact;
