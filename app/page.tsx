import Header from "@/components/Header/Header";
import css from "./Home.module.css";
import Hero from "@/components/Header/Hero/Hero";

const Home = () => {
  return (
    <div className={css["page"]}>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
