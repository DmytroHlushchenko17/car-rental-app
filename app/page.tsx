import Hero from "@/components/Hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RentDrive | Premium Car Rental & Instant Booking",
  description:
    "Experience the best car rental service. Instant booking, wide vehicle range, and top-tier support for your next road trip or business travel.",
};

const Home = () => {
  return (
    <div className="container">
      <Hero />
    </div>
  );
};

export default Home;
