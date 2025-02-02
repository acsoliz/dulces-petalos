import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './AppHeader.css';

const { Header } = Layout;

export const AppHeader = () => {
  const items = [
    {
      label: <Link to="/">Dulces Pétalos</Link>,
      key: '1',
    },
  ];

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        className="menu"
      />
    </Header>
  );
};