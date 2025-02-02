import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const { Text } = Typography;
const { Meta } = Card;

export const ProductItem = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card
        hoverable
        cover={<img alt={product.name} src={product.imgUrl} className='product-image'/>}
      >
        <Meta title={product.name} description={`${product.price} €`} />
        <Text type="secondary">{product.binomialName}</Text>
      </Card>
    </Link>
  );
};
