
//import Signup from "./Components/Signu;
import Navigation from "./Components/Navigation"
import Anavigation from "./Components/Anavigation"
import Home from "./Components/Home"
import PP from "./Components/PP"
import Sample from "./Components/Sample"
import Sample1 from "./Components/Sample1"
import ViewEvents from "./Components/ViewEvents"    
 import CreateEvents from "./Components/CreateEvents"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Aboutus from "./Components/Aboutus"
import Signup from "./Components/Signup"
import SigninPage from "./Components/Login"
import UserDetailPage from "./Components/userdet"
import File from "./Components/Alogin"
import PaymentCard from "./Components/pays"
import PaymentPage from "./Components/payments"
// import Slideshow from './Components/Components/imagesliders';
import Slideshow from './Components/sliders'
function App() {
      return (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<SigninPage />} />
              <Route path="/Login" element={<SigninPage />} />
              <Route path="/Alogin" element={<File />} />
              {/* <Route path="/Home" element={<Home />} /> */}
              <Route path="/Anavigation" element={<Anavigation />} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/PP" element={<PP />} />
              <Route path="/payments" element={<PaymentPage/>} />
              <Route path="/pays" element={<PaymentCard/>} />
              <Route path="/Sample" element={<Sample />} />
              <Route path="/Sample1" element={<Sample1 />} />
              <Route path="/ViewEvents" element={<ViewEvents />} />
              <Route path="/Aboutus" element={<Aboutus />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/userdet" element={<UserDetailPage />} />
              {/* Uncomment the line below if you have a component for CreateEvents */}
              <Route path="/CreateEvents" element={<CreateEvents />} />
            </Routes>
          </Router>
        </>
  );
}
export default App