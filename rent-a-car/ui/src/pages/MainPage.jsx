import React, { useState } from 'react';
import './MainPage.css';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, TrophyOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Carousel } from 'antd';
import { Card, Col, Row } from 'antd';


const contentStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '200px',
  textAlign: 'center',
  fontSize: '40px',
  background: '#364d79',
};       

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  var names = ["Toyota", "Mazda", "Nissan", "Mercedes", "Hyundai", "Audi", "BMW"];


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'newCar1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'newCar2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'newCar3',
            },
            {
              key: '4',
              icon: <TrophyOutlined />,
              label: 'newCar4',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer }}>
          
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
          <div>
            <h3 style={contentStyle}>5</h3>
          </div>
        </Carousel>
          
        <Row gutter={16}>
          <Col span={8}>
            <Card title={names[1]} bordered={true}>
            <img className="image" src="https://1000logos.net/wp-content/uploads/2019/12/Mazda_Logo.png"></img>
            <button className="button-28">Go Rent!</button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title={names[2]} bordered={true}>
            <img className="image" src="data:image/png;base64,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"></img>
            <button className="button-28">Go Rent!</button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title={names[3]} bordered={true}>
            <img className="image" src="data:image/png;base64,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"></img>
              <button className="button-28">Go Rent!</button>
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title={names[4]} bordered={true}>
            <img className="image" src="https://di-uploads-pod5.dealerinspire.com/triplejsaipan/uploads/2018/05/HyundaiLogoStacked_4cblk-1024x659.gif"></img>
            <button className="button-28">Go Rent!</button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title={names[5]} bordered={true}>
            <img className="image" src="https://www.carlogos.org/car-logos/audi-logo-1995-download.png"></img>
            <button className="button-28">Go Rent!</button>
            </Card>
          </Col>
          <Col span={8}>
            <Card title={names[6]} bordered={true}>
            <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"></img>
            <button className="button-28">Go Rent!</button>
            </Card>
          </Col>
        </Row>
        

        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
