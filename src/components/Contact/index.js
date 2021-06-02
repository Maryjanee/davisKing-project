import React, {useState} from 'react'
import { SectionContainer } from '../AboutSection/AboutElements';
import {ContactContentContainer,ContactTextAndSocial, ContactText,
   SocialLinks,ContactMailContainer , ContactMail, ContactForm,ContactTextArea,
    ContactItem,SocialMediaIconContainer,SocialMediaIcon,MailContainer,Email,FormGrid, ContactItemLabel,ContactInput,ContactSubmitBtn } from '../../components/Contact/ContactElements';
import { Heading } from '../FeaturedHome/FeaturedItems';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';
import mail from '../../assets/mail.svg';


const Contact = () => {
 const [buttonText, setButtonText] = useState('Submit');

 const handleSubmit = async (e) =>{
   e.preventDefault();
   setButtonText("Sending...");
   const { first,last, email, phone, message } = e.target.elements;
   let details = {
    firstName: first.value,
    lastName: last.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };
  let response = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(details),
  });
  setButtonText("Sent");
  let result = await response.json();
  alert(result.status);
  setButtonText("Submit");
 }
  return (
    <>
    <SectionContainer>
      <Heading>
        Contact
      </Heading>
      <ContactContentContainer>
        <ContactTextAndSocial>
          <ContactText>
            Do you have booking enquires or 
            would you love a chat? I would absolutely
            love to hear from you.
          </ContactText>
          <SocialLinks>
                <SocialMediaIconContainer>
                    <SocialMediaIcon src={facebook}/>
                </SocialMediaIconContainer>

              <SocialMediaIconContainer>
                  <SocialMediaIcon src={instagram}/>
              </SocialMediaIconContainer>

              <SocialMediaIconContainer>
                  <SocialMediaIcon src={twitter}/>
              </SocialMediaIconContainer>

              <SocialMediaIconContainer>
                  <SocialMediaIcon src={youtube}/>
              </SocialMediaIconContainer>
         </SocialLinks>
          <ContactMailContainer>
            <ContactMail>
                <MailContainer>
                    <SocialMediaIcon src={mail}/>
                </MailContainer>
                    <Email>
                      hello@davisking.com
                    </Email>
                </ContactMail>

                <ContactMail>
                  <MailContainer>
                        <SocialMediaIcon src={mail}/>
                  </MailContainer>
                      <Email>
                        hello@davisking.com
                      </Email>
                </ContactMail>
          </ContactMailContainer>

        </ContactTextAndSocial>
        <ContactForm onSubmit={handleSubmit}>
          <FormGrid>
              <ContactItem className="first-name">
                  <ContactItemLabel htmlFor="first">
                    First Name
                  </ContactItemLabel>
                  <ContactInput type="text" id="first" required/>
              </ContactItem>
              <ContactItem className="last-name">
                  <ContactItemLabel htmlFor="last">
                    Last Name
                  </ContactItemLabel>
                  <ContactInput type="text" id="last" required/>
              </ContactItem>
              <ContactItem className="email">
                  <ContactItemLabel htmlFor="email">
                    Email
                  </ContactItemLabel>
                  <ContactInput type="email" id="email" required/>
              </ContactItem>
              <ContactItem className="phone">
                  <ContactItemLabel htmlFor="phone">
                    Phone
                  </ContactItemLabel>
                  <ContactInput type="text" id="phone" required/>
              </ContactItem>
              <ContactItem className="message">
                  <ContactItemLabel htmlFor="message">
                        Message
                  </ContactItemLabel>
                <ContactTextArea id="message">

                </ContactTextArea>
              </ContactItem>
            </FormGrid>
            <ContactSubmitBtn type="submit">{buttonText}</ContactSubmitBtn>
        </ContactForm>
      </ContactContentContainer>
    </SectionContainer>
      
    </>
  )
}

export default Contact
