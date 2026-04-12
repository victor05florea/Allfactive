import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="page-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
