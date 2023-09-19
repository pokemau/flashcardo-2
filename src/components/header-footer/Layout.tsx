import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-[100vh]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
