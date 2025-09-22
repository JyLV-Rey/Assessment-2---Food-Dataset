import AppRoutes from "./AppRoutes";
import Footer from "./global/footer";
import Header from "./global/header";

function App() {
  return (
    <div className="flex flex-col text-center h-min-screen w-min-screen bg-neutral-100 text-neutral-700">
      <Header />
      <div className="w-full h-full mt-20 text-lg">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
