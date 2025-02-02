
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, ProductDetailPage } from './pages';
import { withHeader } from './hoc/withHeader';

const HomePageWithHeader = withHeader(HomePage);
const ProductDetailPageWithHeader = withHeader(ProductDetailPage);


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageWithHeader />} />
        <Route path="/product/:id" element={<ProductDetailPageWithHeader />} />
      </Routes>
    </Router>
  );
};

export default App;