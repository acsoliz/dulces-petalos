import { useParams } from 'react-router-dom';
import { ProductDetail } from '@/components';
import { useProduct } from '@/hooks';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { product } = useProduct(id);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-page">
      <ProductDetail product={product} />
    </div>
  );
};