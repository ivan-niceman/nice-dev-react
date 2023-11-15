import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import Privacy from "../Privacy/Privacy";
import ScrollUp from "../ScrollUp/ScrollUp";
import ContactsMessage from "../ContactsMessage/ContactsMessage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
              <Popup />
              <ScrollUp />
              <ContactsMessage />
            </>
          }
        />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
