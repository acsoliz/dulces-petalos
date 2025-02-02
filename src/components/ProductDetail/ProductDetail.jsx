import { Descriptions, Flex, Image } from 'antd';
import './ProductDetail.css';
import { BackButton } from '../BackButton/BackButton';

export const ProductDetail = ({ product }) => {
  
  return (
    <Flex className="product-detail">
      <Flex className="back-button-container">
        <BackButton />
      </Flex>
      <Flex className="product-detail-content">
        <Image src={product.imgUrl} alt={product.name} className="product-image" />
        <Descriptions title="Detalles del Producto" className="ant-descriptions" layout="vertical">
          <Descriptions.Item label="Nombre">{product.name}</Descriptions.Item>
          <Descriptions.Item label="Nombre Científico">{product.binomialName}</Descriptions.Item>
          <Descriptions.Item label="Precio">{product.price} €</Descriptions.Item>
          <Descriptions.Item label="Riegos por Semana">{product.wateringsPerWeek}</Descriptions.Item>
          <Descriptions.Item label="Fertilizante Recomendado">{product.fertilizerType}</Descriptions.Item>
          <Descriptions.Item label="Altura">{product.heightInCm}</Descriptions.Item>
        </Descriptions>
      </Flex>
    </Flex>
  );
};