import React, { FC } from 'react';
import { Layout, Menu, Avatar, Dropdown, Row, Col } from '@/components/ui';
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import './Header.css';

const { Header } = Layout;

interface AppHeaderProps {
    email: string;
}

const AppHeader: FC<AppHeaderProps> = ({ email }) => {
    const avatarLetter = email ? email[0].toUpperCase() : 'U';

    const userMenu = (
        <Menu
            items={[]}
        />
    );

    return (
        <Header className="header head-bar">
            <Row justify="space-between" align="middle" style={{ width: '100%' }}>
                <Col span={20} flex="none" className='header-heading'>
                    <div className="nav-title">Dashboard & Monitoring</div>
                </Col>
                <Col span={4} flex="auto" style={{ textAlign: 'right' }}>
                    <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
                        <a onClick={e => e.preventDefault()}>
                            <Avatar size="large" icon={<AiOutlineUser />} />
                        </a>
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    );
};

export { AppHeader };
