import './App.css';
import CardList from './Pages/CardList';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import ShowDetails from './Pages/ShowDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>



      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />}> */}
          <Route index element={<Home />} />
          <Route path="/showDetails/:detailsId" element={<ShowDetails />}>
            {/* <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} /> */}
            {/* </Route> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
