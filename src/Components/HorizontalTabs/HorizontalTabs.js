import React from "react";
import { Tabs, Tab, TabScreen } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import './HorixontalTabs.css'

const HorizontalTabs = (props) => {
  // define state with initial value to let the tabs start with that value
  const [activeTab, setActiveTab] = React.useState(1);

  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    // console.log(e);
    setActiveTab(index);
  };
  return (
    <>
      <Tabs activeTab={activeTab} onTabClick={onTabClick}>
        {/* generating an array to loop through it  */}
        {props.tabList.map((item) => (
          <Tab key={item}>{item}</Tab>
        ))}
      </Tabs>

      {/* {props.tabList.map((item) => (
        <TabScreen
          key={item}
          activeTab={activeTab}
          index={item}
          // You can add animation with adding a custom class
          className="some-animation-class"
        >
          TabScreen {item}
        </TabScreen>
      ))} */}
    </>
  );
};


export default HorizontalTabs;