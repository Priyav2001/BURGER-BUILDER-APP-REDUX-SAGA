import React,{ useState} from 'react';
import {Form,Input,Modal,Button,Divider,Typography,Row,Col,RadioChangeEvent,Radio,Space,DatePicker,DatePickerProps,

} from 'antd';
import { connect } from "react-redux";
import { loadRequest, LOAD_REQUEST } from "../../redux/actions";
// import './style.css';
import { Location } from '../Location/Location';
const { RangePicker } = DatePicker;
export default function Form1() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const[msg,setMsg]=useState('');
  const onchange: DatePickerProps['onchange'] = (date:any, dateString:any) => {
    console.log(date, dateString);
  };
  const onFinish = (values:any) => {
    console.log(values);
  };
  const [value, setValue] = useState('Female');
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleKeyDown = (event:any) => {

    var value:string=event.target.value;
    console.log("hi");
    if (event.key === 'Enter') {
     console.log('do validate',typeof(value))
     if(/^[0-9]{10}$/.test(value)==true){
       console.log("ghjj")
       setMsg("valid");
          }
          else{
            setMsg("Not valid");
          }
        }
      };

  return (
    <div className='Formcontainer'>
    <Button className="bgcolor" style={{display: 'inline-flex',marginLeft:550,justifyContent: 'center',alignItems: 'center',backgroundColor:"pink",marginTop:220}} onClick={() => {
      setIsModalVisible(true);
     }}>
   Let's fill the details to order
</Button><br></br>
<Button style={{marginTop:12,marginLeft:600}} onClick={loadRequest}>Get Details</Button>
<Modal title="Make an Order..!"
      open={isModalVisible}
      
      onOk={() => {
        setIsModalVisible(false);
      }}
      onCancel={() => {
        setIsModalVisible(false);
      }}
      footer={null}
      >
    <Form layout="vertical" onFinish={onFinish}>
     {/* First name */}
      <Form.Item
        label="FName"
        name={['user', 'fname']}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{width:"50%",marginLeft:12}} placholder="First name" />
      </Form.Item>
        {/* Last name */}
        <Form.Item
        name={['user', 'lname']}
        label="LName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{width:"50%",marginLeft:12}} placholder="Last name" />
      </Form.Item>
      {/* Gender */}
      <Form.Item
      name={['user', 'gender']}
      label="Gender"
      rules={[
        {
          required: true,
        },
      ]}>
      <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={'Female'}>Female</Radio>
        <Radio value={'Male'}>Male</Radio>
      </Space>
    </Radio.Group>
    </Form.Item>

    {/* Phoneno */}
      <Divider orientation="left" orientationMargin="0">
        <Typography.Title level={4}>CONTACT DETAILS</Typography.Title>
      </Divider>

      <Row gutter={10}>
        <Col md={12} xs={24}>
          <Form.Item
            name={['user', 'phone_no']}
            label="Phone No."
            rules={[
              {
                required: true, 
                message: "A value must be entered",
                pattern: new RegExp(/^[0-9]+$/)
              },
            ]}
          >
                <Input
        placeholder="x"
        maxLength={10}
    />
            {/* <Input type="number" onKeyDown={handleKeyDown}/> */}
            {/* <span style={{color:"#C5C5C5"}}>{msg}</span> */}
          </Form.Item>
        </Col>

      </Row>

      {/* Location */}
      <Divider orientation="left" orientationMargin="0">
        <Typography.Title level={4}>LOCATION</Typography.Title>
      </Divider>

      <Row gutter={10}>
        <Col md={12} xs={24}>
          <Form.Item
            name={['user', 'location']}
          >
            <span style={{justifyContent:"space-between", width: "50%"}}><Location/></span>
          </Form.Item>
        </Col>

      </Row>

        {/* DOB */}
      <Divider orientation="left" orientationMargin="0">
        <Typography.Title level={4}>DOB</Typography.Title>
      </Divider>

      <Row gutter={10}>
        <Col md={12} xs={24}>
          <Form.Item
            name={['user', 'dob']}
          >
                             <Space direction="vertical" size={12}>
                 <DatePicker onchange={onchange} />
                  </Space>
          </Form.Item>
        </Col>

      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Modal>
    </div>
  );
}