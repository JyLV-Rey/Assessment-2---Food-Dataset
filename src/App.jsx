import AppRoutes from "./AppRoutes";
import Header from "./global/header";

function App() {
  return (
    <div className="flex flex-col h-min-screen w-min-screen">
      <Header />
      <div className="w-full mt-20 text-lg h-fit bg-neutral-100 text-neutral-700">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
