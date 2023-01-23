import React,{useState} from 'react';
import { DatePicker,Row, Col, Card,Typography,Button} from 'antd';
const { Title } = Typography;
function App() {
  const [date, setdate]= useState("");
  const [age, setage]= useState("");
  let today = new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear();
  let datee,dobyear, todayyear,agee;
  const onChange = ( date,dateString) => {
    datee= ( date,dateString);
    setdate(datee);
  }
  const Clicked = () =>{
    dobyear=date.split("/");
    todayyear=today.split("/");
    agee=todayyear[2]-dobyear[2];
    setage(agee);
  }
  return (
    <div className="App">
       <Row justify="center">
    <Col span={24}>
      <Card style={{ height: 100 }}>
        <Title level={1}>Age Calculator</Title>
      </Card>
    </Col>
  </Row>
  <br/>
  <br/>
  <Row>
    <Col span={24} offset={9}>
    <h1>Today date is : {today}</h1>
    <h1>Your DOB is : {date}</h1>
    <h1>Your age is : {age}</h1>
    <br/>
    </Col>
    <Col span={24} offset={10}>
    <DatePicker size="large" picker="date" onChange={onChange} format="DD/MM/YYYY" style={{width:200}}/>
    </Col>
    <br/>
  <br/>
    <Col span={24} offset={11}>
    <Button type="primary" onClick={Clicked}>Get age</Button>
    </Col>
 
  </Row>
     
   
    </div>
  );
}

export default App;
