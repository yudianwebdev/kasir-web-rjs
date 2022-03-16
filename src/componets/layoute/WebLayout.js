import Footer from "./Footer";
import Header from "./Header";

function WebLayoute({ children }) {
  return (
    <div className="w-full h-full bg-blue-300">
      <div className="mx-auto bg-red-300 container">
        <Header />
        <div className="pl-16 pr-16">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default WebLayoute;
