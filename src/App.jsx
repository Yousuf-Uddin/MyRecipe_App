import Navbar from "./Components/Navbar";

import Routing from "./utils/Routing";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routing />
      </div>
    </>
  );
};

export default App;
