import React, { useState } from "react";
import styled from "styled-components";
import FirstTab from "./tabmenu/FirstTab";
import SeconTab from "./tabmenu/SeconTab";
import ThirdTab from "./tabmenu/ThirdTab";
import { mq, IsDesktop } from "./../../lib/media-query/mediaQuery";

const Container = styled.div`
  max-width: 380px;
  width: 100%;
  height: auto;
  padding: 80px 0;
  ${mq("desktop")} {
    max-width: 1232px;
    padding: 0 0 200px 0;
  }
`;
const TabBox = styled.div`
  max-width: 1232px;
  display: flex;
  width: 100%;
`;
const TabButton = styled.button`
  color: ${({ "data-active": dataActive }) =>
    dataActive === "true" ? "#2aad5c" : "#000"};
  padding: 10px 10px;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 700;
  margin-right: 8px;
  border-radius: 25px;
  border: none;
  &:hover {
    background-color: #e9ecef;
  }
`;
const TabContent = styled.div`
  width: 100%;
  padding-top: 40px;
`;
const FourthSection = () => {
  const TabData = [
    { id: 1, button: "01", content: <FirstTab /> },
    { id: 2, button: "02", content: <SeconTab /> },
    { id: 3, button: "03", content: <ThirdTab /> },
  ];

  const [activeTab, setactive] = useState(TabData[0].id);

  return (
    <Container>
      <TabBox>
        {TabData.map((tab) => (
          <TabButton
            key={tab.id}
            data-active={activeTab === tab.id ? "true" : "false"}
            onClick={() => setactive(tab.id)}
          >
            {tab.button}
          </TabButton>
        ))}
      </TabBox>
      <TabContent>
        {TabData.find((tab) => tab.id === activeTab)?.content}
      </TabContent>
    </Container>
  );
};

export default FourthSection;
