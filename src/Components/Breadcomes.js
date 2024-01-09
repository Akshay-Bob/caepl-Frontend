import Breadcrumb from "react-bootstrap/Breadcrumb";

const breadStyles = {
  textTransform: "uppercase",
  fontFamily: "LibreCaslonText-Regular",
  textDecoration: "none",
  color: "#42413f",
  fontSize: '12px'
};

function Breadcomes(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item style={breadStyles}>
       Home
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
