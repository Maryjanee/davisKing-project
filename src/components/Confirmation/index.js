import {useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ImageBackground } from "../SiteWideComponents/Header/HeaderElements";
import ConfirmImg from "../../assets/headerimg.jpg";

import {
  ConfirmationContainer,
  ConfirmationCard,
  ConfirmationText,
  ConfirmationHeading,
  LinkBackHome,
} from "./ConfirmationElement";


const Confirmation = () => {
  const location = useLocation();
  const [pageHeading, setPageHeading] = useState("");
  const [pageText, setPageText] = useState("");


  useEffect(() => {
    console.log(location.state);
    const {headingText, text} =  location.state;
    setPageHeading(headingText);
    setPageText(text);
 }, [location]);
 const HomeGradient =
 "linear-gradient(to left top, #423849, #3d2d48, #372247, #311645, #2b0943);";



  return (
    
    <ConfirmationContainer bgImg={ConfirmImg}bgGradient={HomeGradient}>
      <ConfirmationCard>
        <ConfirmationHeading>{pageHeading}</ConfirmationHeading>
        <ConfirmationText>{pageText}</ConfirmationText>
        <LinkBackHome to="/home">
          Go Back
        </LinkBackHome>
        </ConfirmationCard>
    </ConfirmationContainer>
  );
};

export default Confirmation;
