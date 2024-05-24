import logo from './logo.svg';
import './App.css';
import BaiTapThucHanhLayout from './BaiTapLayoutComponent/BaiTapThucHanhLayout';
import Header from './BaiTapLayoutComponent/Header';
import Body from './BaiTapLayoutComponent/Body';
import Banner from './BaiTapLayoutComponent/Banner';
import Item from './BaiTapLayoutComponent/Item';
import Footer from './BaiTapLayoutComponent/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
function App() {
  return (
    <div className="App">
      <BaiTapThucHanhLayout/>
      {/* <Header/>
      <Body/>
      <Banner/>
      <Item/>
      <Footer/> */}
    </div>
  );
}

export default App;
