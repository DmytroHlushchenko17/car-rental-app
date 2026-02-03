import css from "./Home.module.css";
import Hero from "@/components/Hero/Hero";

const Home = () => {
  return (
    <div className={css["page"]}>
      <Hero />
    </div>
  );
};

export default Home;
