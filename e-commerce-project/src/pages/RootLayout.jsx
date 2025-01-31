import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
const RootLayout = () => {
  return (
    <div className="flex flex-col  items-between">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
