import React, { useState } from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import './HorizontalTabs.css'
import '../../Responsive.css'
import { Link } from "react-router-dom";

const HorizontalTabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.selectedIndex);

  const onTabClick = (e, index) => {
    setActiveTab(index);
    // setTabData(props.tabDetailsData[index]);
  };

  return (
    <>
      <Tabs activeTab={activeTab} onTabClick={onTabClick} className="tabs">
        {props.tabList.map((item) => (
          <Tab key={item}>
            <Link to={`/category?product=${item}`}>
              {item}
            </Link>
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default HorizontalTabs;
