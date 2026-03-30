// import Products from "./ImplementationDemo/Products";
// import Login from "./ImplementationDemo/Login";
// import SearchFilter from "./ImplementationDemo/SearchFilter";
// import ToDo from "./ImplementationDemo/ToDo";
// import BasicFormValidation from "./ImplementationDemo/BasicFormValidation";
// import Modal from "./ImplementationDemo/Modal";
// import Counter from "./ImplementationDemo/Counter";
// import Carousel from "./ImplementationDemo/Carousel";
// import Debouncing from "./ImplementationDemo/Debouncing";
// import HOCDemo from "./ImplementationDemo/HOCDemo";
// import LazyLoading from "./ImplementationDemo/LazyLoading";
// import UnmountingDemo from "./ImplementationDemo/UnmountingDemo";
// import LiftingStateUp from "./ImplementationDemo/LiftingStateUp";
// import ClassCounter from "./ImplementationDemo/ClassCounter.jsx";
// import SignupForm from "./ImplementationDemo/SignupForm.jsx";
// import MovieState from "./ImplementationDemo/MovieState.jsx";
// import DragAndDrop from "./DragAndDrop/DragAndDrop";
// import ResponsiveLayout from "./Responsive/ResponsiveLayout";

// import UseStateExample from "./HooksDemo/UseStateExample";
// import UseEffectExample from "./HooksDemo/UseEffectExample";
// import UseRefExample from "./HooksDemo/UseRefExample";
// import UseMemoExample from "./HooksDemo/UseMemoExample";
// import UseReducerExample from "./HooksDemo/UseReducerExample";
// import UseContextExample from "./HooksDemo/UseContextExample";
// import UseCallbackExample from "./HooksDemo/UseCallbackExample";

// import LoginTest from "./TestingDemo/LoginTest.jsx";

// function App() {
//   return (
//     <>
//       {/* <Login /> */}
//       {/* <Products /> */}
//       {/* <SearchFilter /> */}
//       {/* <ToDo /> */}
//       {/* <BasicFormValidation /> */}
//       {/* <Modal /> */}
//       {/* <DragAndDrop /> */}
//       {/* <Counter /> */}
//       {/* <Carousel /> */}
//       {/* <ResponsiveLayout /> */}
//       {/* <UnmountingDemo /> */}
//       {/* <HOCDemo /> */}
//       {/* <LiftingStateUp /> */}
//       {/* <Debouncing /> */}
//       {/* <LazyLoading /> */}
//       {/* <ClassCounter /> */}
//       {/* <SignupForm /> */}
//       {/* <MovieState /> */}

//       {/* -------------------------------------------------------------------- */}

//       {/* <UseStateExample /> */}
//       {/* <UseEffectExample /> */}
//       {/* <UseRefExample /> */}
//       {/* <UseMemoExample /> */}
//       {/* <UseReducerExample /> */}
//       {/* <UseContextExample /> */}
//       {/* <UseCallbackExample /> */}

//       {/* -------------------------------------------------------------------- */}
//       {/* <LoginTest /> */}
//       {/* -------------------------------------------------------------------- */}
//     </>
//   );
// }

// export default App;

// ---------------------------------------------------------------------------------------------------------

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./RoutingDemo/About.jsx";
import Documentation from "./RoutingDemo/Documentation.jsx";
import Pricing from "./RoutingDemo/Pricing.jsx";
import Home from "./RoutingDemo/Home.jsx";
import Contacts from "./RoutingDemo/Contacts.jsx";
import Contact from "./RoutingDemo/Contact.jsx";
import Dashboard from "./RoutingDemo/Dashboard.jsx";
import Profile from "./RoutingDemo/Profile.jsx";

// Nested routes
// Dynamic routes - passing parameters - navigate function or Link component has dynamic parameters
// Using url parameters - useParams()
// Guarded routes
// Redirect
// Navigating programmatically - useNavigate

// Routes array
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]);

// Not found
const Notfound = () => {
  return <h3>Not found</h3>;
};

const SignIn = () => {
  return <h3>Please sign in</h3>;
};

function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/docs">Documentation</Link> |{" "}
          <Link to="/pricing">Pricing</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/contacts">Contacts</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/:contactID" element={<Contact />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <SignIn />}
          />
          <Route
            path="/profile/:username"
            element={isAuthenticated ? <Profile /> : <SignIn />}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// ---------------------------------------------------------------------------------------------------------

// import React from "react";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import {
//   increment,
//   decrement,
//   incrementAsync,
// } from "./ToolkitDemo/features/counterSlice";
// import store from "./ToolkitDemo/store";

// function App() {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter.value);
//   return (
//     <Provider store={store}>
//       <div>
//         <h1>Counter: {counter}</h1>
//         <button onClick={() => dispatch(increment())}>Increment</button>
//         <button onClick={() => dispatch(decrement())}>Decrement</button>
//         <button onClick={() => dispatch(incrementAsync())}>
//           Increment Async
//         </button>
//       </div>
//     </Provider>
//   );
// }
// export default App;

// ---------------------------------------------------------------------------------------------------------
