import React from "react";
import { Col, Container, Row } from "reactstrap";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
class App extends React.Component {
 render(){
  return (
   <Container className="my-5">
     <Row>
       <Col md={4}>
         <Sidebar/>
       </Col>
       <Col md={8}>
         <MainContent/>
       </Col>
     </Row>
   </Container>
   );
 }
}

export default App;
