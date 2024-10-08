import { Login } from "../components/auth/Login";
import { Footer } from "../components/common/Footer";

export const LandingPage = () => {
  return (
    <section className="landing-page">
      <Login />
      <Footer />
    </section>
  );
};
