import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";

const breadStyles = {
  textTransform: "uppercase",
  fontFamily: "LibreCaslonText-Regular",
  textDecoration: "none",
  color: "#42413f",
};

function Breadcomes(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <NavLink to="/" style={breadStyles}>
          Home
        </NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item style={breadStyles}>
        {props.cat} 
      </Breadcrumb.Item>
      <Breadcrumb.Item active style={breadStyles}>
        {props.address}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcomes;
