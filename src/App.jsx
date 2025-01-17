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

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  position: relative;
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
      <Wrapper>
        <Header />
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
