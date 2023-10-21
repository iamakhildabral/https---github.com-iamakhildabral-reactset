import ReactDOM from "react-dom/client";
//importing style file for using them directly here in js
import "./CSS/style.css";
import { Header, SubHeader } from "./Header";
import { Footer } from "./Footer";
import { Students } from "./Students";
import { MainBody, SecondBody } from "./MainBody";

/*
 * We can create our customised style and use them directly under the style for each component
 */
export const subHeaderStyle = {
  color: "black",
  backgroundColor: "lightgray",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <SubHeader />
    <MainBody />
    <SecondBody />
    <Students />
    <Footer />
  </div>
);
