import {Form,Input,Modal,Button,Divider,Typography,Row,Col,RadioChangeEvent,Radio,Space,DatePicker,DatePickerProps,

} from 'antd';
import React,{useState} from "react";
import { connect } from "react-redux";
import { Location } from "../Location/Location";
import { loadRequest, LOAD_REQUEST } from "../../redux/actions";
import "./Forms.css"
const onchange: DatePickerProps['onchange'] = (date:any, dateString:any) => {
    console.log(date, dateString);
  };

const Forms: React.FC = (props:any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [currentValueRadio, setcurrentValueRadio] = React.useState('female');
  const onFinish = (values: any) => {
    console.log("Form Data Values:", values);
  };
  const [value, setValue] = useState('Female');
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const customFormat = (value:any) => `${value.format("YYYY-MM-DD")}`;

  return (
    <>
    <div className="formcontainer">
    <Button className="bgcolor" style={{display: 'inline-flex',marginLeft:550,justifyContent: 'center',alignItems: 'center',backgroundColor:"pink",marginTop:220}} onClick={() => {
         setIsModalVisible(true);
        }}>
      Let's fill the details to order
  </Button><br></br>
  {/* <Button type="primary" style={{marginTop:12,marginLeft:600}} onClick={props.loadRequest}>Get Details</Button> */}
  
  {/* Modal */}
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
      {/* <Divider orientation="left" orientationMargin="0">
        <Typography.Title level={4}>NAME</Typography.Title>
      </Divider> */}
    <Form layout="vertical" onFinish={onFinish}>
     {/* First name */}
      <Form.Item
        label="First Name"
        name={['user', 'fname']}
        rules={[
          {
            required: true,
            pattern: new RegExp(/^[a-zA-Z_ ]*$/)
          },
        ]}
      >
        <Input style={{width:"50%",marginLeft:12}} placholder="First name" />
      </Form.Item>
        {/* Last name */}
        <Form.Item
        name={['user', 'lname']}
        label="Last Name"
        rules={[
          {
            required: true,
            pattern: new RegExp(/^[a-zA-Z_ ]*$/)
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
        placeholder="phone"
        maxLength={10}
    />
 
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
          {/* <Form.Item
            name={['user', 'dob']}
          >
                  <Space direction="vertical" size={12}>
                 <DatePicker onchange={onchange} />
                  </Space>
          </Form.Item> */}
                <Form.Item
                    name={['user', "date_of_birth"]}
                    label="Date of Birth"
                    rules={[
                    {
                        required: false,
                    },
                    ]}
                >
                    <DatePicker format={customFormat} />
                </Form.Item>
        </Col>

      </Row>
       <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {/* <br></br> */}
        <Button type="primary" style={{marginTop:12,marginLeft:280}} onClick={props.loadRequest}>Get Details</Button>
      </Form.Item>
    </Form>
    </Modal>
    </div>
    </>
  );
};
const mapDispatchToProps = {
  loadRequest: loadRequest,

};

export default connect(null, mapDispatchToProps)(Forms);

