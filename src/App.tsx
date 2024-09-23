import { AppRouter } from './router/AppRouter';
import './App.css';
import FincaInfo from './pages/FincaInfo/FincaInfo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogPage from './pages/Blog/BlogPage';


const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fincainfo" element={<FincaInfo />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
