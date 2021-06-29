import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ContactContentContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  column-gap: 2rem;
  color: #fff;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactTextAndSocial = styled.div``;
export const ContactTextArea = styled.textarea`
  border: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  height: 100px;
`;
export const ContactText = styled.p`
  font-size: 16px;
  line-height: 5rem;
  padding: 3rem 0 1rem 0;
  @media (min-width: 992px) {
    width: 70%;
    font-size: 1.25rem;
  }
`;
export const SocialLinks = styled.div`
  display: flex;
`;
export const SocialMediaIconContainer = styled(LinkR)`
  margin: 1rem 1.5rem 0 0;
`;

export const SocialMediaIcon = styled.img`
  width: 1rem;
`;

export const ContactMail = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin: 1rem 0;
`;

export const Email = styled.p`
  font-size: 16px;
  margin-left: 1rem;
`;

export const MailContainer = styled.div``;

export const ContactMailContainer = styled.div`
  align-items: center;
  padding: 2rem 0;
`;

export const ContactForm = styled.form`
  position: relative;
`;
export const FormGrid = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "first last"
      "email  phone"
      "message message";
    grid-gap: 2rem;
    width: 100%;
    .first-name {
      grid-area: first;
    }
    .last-name {
      grid-area: last;
    }
    .email {
      grid-area: email;
    }
    .phone {
      grid-area: phone;
    }
    .message {
      grid-area: message;
      width: 90%;
    }
    #message {
      border-radius: 0.2rem;
    }
    #message:focus {
      outline: none;
      border-color: #719ece;
      box-shadow: 0 0 10px #719ece;
    }
  }
`;
export const ContactItem = styled.div`
  margin: 1.5rem 0 3rem 0;
  @media (min-width: 992px) {
    margin: 1rem 0 1rem 0;
  }
`;

export const ContactItemLabel = styled.label`
  display: block;
  margin: 1rem 0;
`;

export const ContactInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid #fff;
  font-size: 1.3rem;
  color: #fff;

  width: 100%;
  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid #ffa700;
  }
  @media (min-width: 992px) {
    width: 80%;
  }
`;

export const ContactSubmitBtn = styled.button`
  background: #FFA700;
  border-radius:4px;
  padding:1rem 1.5rem;
  width:10rem;
  color:#fff;
  position:absolute;
 
  
  @media screen and (max-width:768px){
    margin:1rem auto;
  }

  @media screen and (max-width:992px){
    margin:1rem auto;
    
  }
`;
