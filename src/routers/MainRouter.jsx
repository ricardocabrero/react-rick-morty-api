import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from '../pages/Main/Main';
import Detail from '../pages/Detail/Detail';

export default function MainRouter() {
   return(
      <Router>
         <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </Router>
   )
}