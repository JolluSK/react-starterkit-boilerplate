import React, { FC, useState } from 'react';
import { Layout, Menu, Button, Row, Col, Flex } from '@/components/ui';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { BsPieChartFill } from 'react-icons/bs';

import './Sidebar.css';
import Logo from '@/assets/icons/logo.svg';

const { Sider } = Layout;

const Sidebar: FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => setCollapsed(!collapsed);

    const siderStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
    };

    const menuItems = [
        {
            key: 'dashboard',
            label: <Link to={"/"}>Dashboard</Link>,
            icon: <BsPieChartFill />,
        },
    ];

    return (
        <Sider className="sidebar" breakpoint='lg' width="12%" style={siderStyle} trigger={null} collapsible collapsed={collapsed} onCollapse={toggleCollapsed} >
            <Row align="middle" justify="center" style={{ padding: '25px' }}>
                <Col span={20} className={collapsed ? "no-display" : ""} >
                    <img src={Logo} alt="Jio" style={{ maxHeight: '45px' }} />
                </Col>
                <Col span={4}>
                    <Button className="collapse-button" type="primary" onClick={toggleCollapsed} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
                </Col>
            </Row>
            <Row className='responsive-scroll-sidebar'>
                <Col span={24}>
                <Menu
                    mode="vertical"
                    defaultSelectedKeys={['dashboard']}
                    className="sidebar-menu"
                    items={menuItems}
                />
                </Col>
            </Row>
        </Sider>
    );
};

export { Sidebar };
