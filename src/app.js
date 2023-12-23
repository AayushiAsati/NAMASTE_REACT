import React from "react";
import ReactDOM from "react-dom/client" ;
import Header from "./component/Header";
import Body from "./component/Body";



//this heading element is the react element then we render this to html

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)


// const jsxHeading = <h1 id="heading">Hiii</h1>;


// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);


// const Heading = () => (<h1>hii from aayushi</h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));  

// root.render(<Heading/>)

//The tag <heading> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.







const AppLayout = () => {
  return(
    <div className = "app">
<Header/>
<Body/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>)