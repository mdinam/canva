import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

function App() {
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>I LOVE FARAH SULTANA
      </h1>
    
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
=======
    <div>
      <h1>I love you Farah Sultana</h1>
    </div>
  );
>>>>>>> bb4f1fc (first commit)
=======
  return <RouterProvider router={router} />;
>>>>>>> 3045874 (app.jsx changed)
}

export default App;
