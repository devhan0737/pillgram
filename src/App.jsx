import styled from "styled-components";
import "./style/basic.css";
import Header from "./components/Header/Header";
import Contents from "./components/contents/Contents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./_root/LoginPage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./components/footer/Footer";
import ZodSignupPage from "./_root/ZodSignupPage";
import SocialNaverCallBack from "./_root/SocialNaverCallBack";

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  position: relative;
`;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SignupPage" element={<ZodSignupPage />} />
        <Route path="/auth/naver/callback" element={<SocialNaverCallBack />} />
      </Routes>
      <Wrapper>
        <Header />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
