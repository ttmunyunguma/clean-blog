import './App.css';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import {AppHeader} from "./AppHeader";                                //icons
import {Route, Routes} from "react-router-dom";
import {AppFooter} from "./AppFooter";
import {Articles} from "./components/Articles";
import {About} from "./components/About";

const App = () => {
    return (
        <div>
            <AppHeader/>
            <Routes>
                <Route path={"/"} element={<Articles/>}/>
                <Route path={"/about"} element={<About/>}/>
            </Routes>
            <AppFooter/>
        </div>
    );
}

export default App;
