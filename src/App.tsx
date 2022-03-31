import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import QRCode from 'react-qr-code';
import Text from './components/Text'
import Instagram from './components/Instagram';
import Geolocation from './components/Geolocation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [qrText, setQrText] = useState<string>("");
  
  return (
    <Container className='mx-auto'>
      <h1 className='my-4'>Qr Code Generator</h1>
      {qrText.length > 0 && <QRCode value={qrText} />}
      <h4 className='my-3'>Choose the type of QRCode format</h4>
      <Tab.Container defaultActiveKey="text">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="text">Text and URLs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="instagram">Instagram</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="geo">GeoLocation</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="text">
                <Text setQrText={setQrText} />
              </Tab.Pane>
              <Tab.Pane eventKey="instagram">
                <Instagram setQrText={setQrText} />
              </Tab.Pane> 
              <Tab.Pane eventKey="geo">
                <Geolocation setQrText={setQrText} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default App;
