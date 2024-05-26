import Header from "../../../components/headerFooterContent/Header";
import { RootLayoutProps } from "../interface";
import { Footer } from "@/components/headerFooterContent/Footer";
import { getSession } from "@auth0/nextjs-auth0";

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  const session = await getSession();

  return (
    <>
      <Header session={session?.user} />
      {children}
      <Footer />
    </>
  );
};
export default RootLayout;
