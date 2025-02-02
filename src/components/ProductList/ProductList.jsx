import { Row, Col } from 'antd';
import {ProductItem} from '../ProductItem/ProductItem';

export const ProductList = ({ products }) => {
  return (
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
};
