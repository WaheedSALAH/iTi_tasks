import { useState } from "react";
import { Product } from "./products";

function App() {

  let [state, setToggle] = useState(false);

  let [category, setCategory] = useState(false);

  let hide = () => {

    setToggle(!state);

  };

  let hide_for_cat = (cat) => {
    setCategory(cat);
    setToggle(true);
  };

  let showAllProducts = () => {

    setCategory(false);

    state = true;

  };

  return (
    <>
      <div className="d-flex justify-content-center p-5">

        {!state && (<div onClick={hide} className="btn btn-danger">Show Products</div>)}

        {state && (<div onClick={hide} className="btn btn-danger">Hide Products</div>)}
          
            
          
      </div>

      <div className="d-flex justify-content-center">


      <div onClick={() => hide_for_cat("Accessories")}className="btn btn-primary mx-2">Accessories</div>

        <div onClick={() => hide_for_cat("Computers")}className="btn btn-primary mx-2">Computers</div>

        <div onClick={() => hide_for_cat("Home Appliances")}className="btn btn-primary mx-2">Home Appliances</div>

        <div onClick={showAllProducts}className="btn btn-dark mx-2"> rest filter </div>
          

      </div>

      <div>
        {state && <Product category={category} />}
      </div>

      <div></div>
    </>
  );
}

export default App;
