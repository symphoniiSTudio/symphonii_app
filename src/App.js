import React, { useState, useEffect } from "react";
import { AuthProvider } from "./AdminFolder/Admin.service/UserAuth"
import ScrollTop from "./ScrollTop";
import "./App.css";
import Home from "./components/pages/Home";
import ClipLoader from "react-spinners/ClipLoader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/SymphoniiServicess/AllServicess";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
// import SinglePageRoutes from "./SinglePageRoutes";
import About from "./components/pages/About";
import Kingsley from "./components/pages/Symphoniistaffs/Kingsley";
import AnimationPagenation from "./components/pages/SymphoniiServicess/AnimationServices";
import IllustrationService from "./components/pages/SymphoniiServicess/IllustrationServices";
import OurServices from "./components/pages/OurServices";
import Animation from "./components/OurserviceList/Animation";
import Art from "./components/OurserviceList/Art";
import BrandSect from "./components/OurserviceList/BrandDesign";
import AllPortfolio from "./components/Portfolio/AllPortfolio";
import IllustrationPortfolio from "./components/Portfolio/IllustrationPortfolio";
import AnimationPortfolio from "./components/Portfolio/AnimationPortfolio";
import AnimationPortfolio1 from "./components/Portfolio/PortfolioComponents/PortFolioBanner1";
import BrandDesignPortfolio from "./components/Portfolio/BrandDesignPortfolio";
import AnimationPageSample from "./components/SingleProductComponents/SingleProductPages/AnimationPages/AnimationPageSample";
// import BrandDesign1 from "./components/SingleProductComponents/SingleProductPages/BranddesignPages/BrandDesign";
import IllustrationPageSample from "./components/SingleProductComponents/SingleProductPages/IllustrationPage/IllustrationPageSample";
import Oldworman from "./components/SingleProductComponents/SingleProductPages/IllustrationPage/Oldworman";
import Amanda from "./components/SingleProductComponents/SingleProductPages/IllustrationPage/Amanda";
import TheMan from "./components/SingleProductComponents/SingleProductPages/IllustrationPage/TheMan";
import Amanoukha from "./components/SingleProductComponents/SingleProductPages/IllustrationPage/Oldman";
import Chume from "./components/SingleProductComponents/SingleProductPages/IllustrationPage/Chume";
import Mascot from "./components/SingleProductComponents/SingleProductPages/IllustrationPage/Mascot";
import Carol from "./components/SingleProductComponents/SingleProductPages/AnimationPages/AnimationPageComponents/Carol";
import Littlepot from './components/SingleProductComponents/SingleProductPages/AnimationPages/AnimationPageComponents/TiitlePot'
import Ymcs from "./components/SingleProductComponents/SingleProductPages/AnimationPages/AnimationPageComponents/Ymcs";
import Paparap from "./components/SingleProductComponents/SingleProductPages/AnimationPages/AnimationPageComponents/Paparap";
import Cakeoder from "./components/SingleProductComponents/SingleProductPages/AnimationPages/AnimationPageComponents/Cakeorder"
import Amaga from "./components/SingleProductComponents/SingleProductPages/AnimationPages/AnimationPageComponents/AMC";
import Ecommerce from "./components/SingleProductComponents/SingleProductPages/AnimationPages/AnimationPageComponents/Ecommerce";
import Logo2 from "./components/SingleProductComponents/SingleProductPages/BranddesignPages/Logo2";
import BusinessCard from "./components/SingleProductComponents/SingleProductPages/BranddesignPages/BusinessCard";
import ProductDesin from "./components/SingleProductComponents/SingleProductPages/BranddesignPages/ProductDesign";
import MusicartDesign from "./components/SingleProductComponents/SingleProductPages/BranddesignPages/MusicArtDesign";
import Weedingdesign from "./components/SingleProductComponents/SingleProductPages/BranddesignPages/WeedingDesign";
import Vectorart from './components/SingleProductComponents/SingleProductPages/BranddesignPages/VectorDesign'
import Jiw from "./components/SingleProductComponents/SingleProductPages/AnimationPages/AnimationPageComponents/Jiw"
import Register from './AdminFolder/Admincomponent/CreateUser/Register';
import Login from './AdminFolder/Admincomponent/CreateUser/Login';
import Forgetpassword from './AdminFolder/Admincomponent/CreateUser/Forgetpassword';
import PrivateRote from './AdminFolder/Admincomponent/CreateUser/PrivateRoute';
import Validate from './AdminFolder/Admin.service/Validation.services'
import PrivateRoute from "./AdminFolder/Admincomponent/CreateUser/PrivateRoute";
import ProductIndexpage from "./components/Productpage/ProductIndex";
import Dasbordindex from "./AdminFolder/AdminDasboard/Dasbordindex";
import AllUserLog from './AdminFolder/AdminDasboard/AllUserLog'
import CreateStaff from './AdminFolder/AdminDasboard/AdminCreateStaff/CreateStaff'
import CreatePassword from './AdminFolder/AdminDasboard/AdminCreateStaff/CreatePassword'
import ProductIndex from "./components/Productpage/ProductIndex";
import { DataProvider } from "./AdminFolder/Admin.service/Context";
import CreateProduct from "./AdminFolder/AdminDasboard/CreateProduct";
import CreateAnimation from './AdminFolder/AdminDasboard/CreateAnimation'
import CreatContent from './AdminFolder/Admincomponent/ContentManager/ComicCreation'
import ComicPage from "./components/pages/ComicPage";
import OfficeSlap from "./components/Comic/OfficeSlap";
import ComicITem from "./components/Comic/ComicITem";
import ViewAllComic from "./components/Comic/ViewAllComic";
import CreateIllustration from './AdminFolder/AdminDasboard/CreateIllustration'
import CreatebandDesign from './AdminFolder/AdminDasboard/CreateBrandDesign'
import AllProductPage from "./AdminFolder/Productservices/Compoents/AllProductPage";
import AnimatedCustomize from './components/Productpage/ProductList/AnimatedCustomize'
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div className="app1">
          <div className="symphoniiicone">
            <ClipLoader size={30} loading={loading} color={"#ed1846"} />
          </div>
        </div>
      ) : (
        <Router>
          <ScrollTop />
          <DataProvider>
          <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactUs} />
            <Route
              path="/staff/symphonii/kingsley"
              exact
              component={Kingsley}
            />
            <Route path="/services" component={OurServices} />
            <Route path="/portfolio" component={AllPortfolio} />
            <Route path="/illustration" component={IllustrationPortfolio} />
            <Route path="/animation_portfolio" component={AnimationPortfolio} />
            <Route path="/animation_Shows" component={AnimationPortfolio1} />
            <Route path="/brand_design_portfolio" component={BrandDesignPortfolio}/>
            <Route
              path="/Service_Page_Animation_002211"
              component={AnimationPageSample}
            />
            {/* <Route path="/brandDesign_11222" component={BrandDesign1} /> */}
            <Route
              path="/brandDesign_11222"
              component={IllustrationPageSample}
            />

            {/* { SinglePageRoutes.map(props => <Route {...props} />) } */}
            <Route path="/animation" component={Animation} />
            <Route path="/art" component={Art} />
            <Route path="/BrandDesign" component={BrandSect} />
            <Route path="/services/all" component={Services} />
            
            
            <Route path="/comic/symphoni/index" component={ComicPage} />
            <Route path="/slapofice/symphoni/index" component={OfficeSlap} />
            <Route path="/new-user/:id" component={ComicITem} />
            <Route path="/new-user/:creator_link" component={ComicITem}/>
            <Route path="/view/all/comic/symphonii" component={ViewAllComic}/>


             <Route  path="/services/illustration" component={IllustrationService}/>
            <Route path="/services/animation" component={AnimationPagenation} />
            <Route path="/products" component={Products} />

            {/* single page for illustration Route is here  */}
            <Route path="/oldwoman" component={Oldworman} />
            <Route path="/amanda" component={Amanda} />
            <Route path="/Amanoukha" component={Amanoukha} />
           
            <Route path="/thompson" component={TheMan} />
            <Route path="/chume" component={Chume} />
            <Route path="/mascot" component={Mascot} />

            {/* single page for animation route is here */}
            <Route path="/ymce" component={Ymcs} />
            <Route path="/AMAGODA" component={Amaga} />
            <Route path="/car_pooling" component={Carol} />
            <Route path="/jifftwins" component={Jiw} />
            <Route path="/little_pot" component={Littlepot} />
            <Route path="/cakes" component={Cakeoder} />
            <Route path="/paparap" component={Paparap} />
            <Route path="/e-commerce" component={Ecommerce} />
       
            <Route path="/fier" component={Logo2} />
            <Route path="/business_card" component={BusinessCard} />
            <Route path="/product_design" component={ProductDesin} />
            <Route path="/music_cover_art" component={MusicartDesign} />
            <Route path="/weeding_design" component={Weedingdesign} />
            <Route path=" /vector_design" component={Vectorart} />

            {/* admin routes only */}
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/forget_password" component={Forgetpassword} />
            <Route path="/validate%users" component={PrivateRote} />
            <Route path="/check" component={Validate} />
            <Route path="/customize/request/symphonii" component={AllProductPage} />
            <Route path='/new-user/:link' component={CreatePassword}/>
            
            {/* privateRouth here */}
            {/* <PrivateRote path = "/symphonii/store/auth_user/:uid" component= {ProductIndexpage}/> */}
            <PrivateRote path = "/admin/auth_user/:uid" component= {Dasbordindex}/>
            <PrivateRote path = "/admin_auth/super/" component= {Dasbordindex}/>
            <PrivateRote path = "/user/view" component= {AllUserLog}/>
            <PrivateRote path = "/Admin/create_staff/user" component= {CreateStaff}/>
         
            <PrivateRote path = "/select/product/symhonii/index" component= {CreateProduct}/>
            <PrivateRote path = "/p1/animation/product" component= {CreateAnimation}/>
            <PrivateRote path = "/createnew/service" component= {CreateIllustration}/>
            <PrivateRote path = "/p2/BrandDesign/product" component= {CreatebandDesign}/>
            <PrivateRote path = "/create/comic/symphoni/studios" component= {CreatContent}/>
            <PrivateRote path="/product/index/symphonii/:uid" component={ProductIndexpage} />
            <PrivateRote path="/Animated/selected/customize/:id" component={AnimatedCustomize} />

          
           
          
            
          </Switch>
          <a
            href="https://wa.me/2348140297987"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp whatsapp-icon"></i>
          </a>

          </AuthProvider>
          </DataProvider>
        </Router>

      )}
    </div>
  );
}

export default App;
