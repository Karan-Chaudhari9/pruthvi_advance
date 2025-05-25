"use client";
import { useEffect } from "react";
import AboutUs from "./_components/AboutUs";
import FAQ from "./_components/FAQ";
import Banner from "./_components/Home/Banner";
import TopHealthPackages from "./_components/TopHealthPackages";
import SolutionStep from "./_components/SolutionStep";
import Team from "./_components/Team";
import Testimonial from "./_components/Testimonial";
import ReportListSwiper from "./_components/ReportListSwiper";
import HealthConditions from "./_components/HealthConditions";
import SampleCollection from "./_components/SampleCollection";
import HealthPackage from "./_components/HealthPackages";
import Awards from "./_components/Awards";
import Products from "./_components/Products";
import PackageBanners from "./_components/PackageBanners";
import Accreditations from "./_components/Accreditations.jsx";
import PincodeChecker from "./_components/PincodeChecker.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="container mx-auto px-4 lg:px-8">
          <Banner />
        </div>
      </section>

      {/* Reports and Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <ReportListSwiper />
          <div className="mt-16">
            <SolutionStep />
          </div>
          <div className="mt-16">
            <PincodeChecker />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" id="services">
        <div className="container mx-auto px-4 lg:px-8">
          <SampleCollection />
          <div className="mt-16">
            <PackageBanners />
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <HealthPackage />
          <div className="mt-16">
            <HealthConditions />
          </div>
          <div className="mt-16">
            <TopHealthPackages />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50" id="about">
        <div className="container mx-auto px-4 lg:px-8">
          <Team />
          <div className="mt-16">
            <AboutUs />
          </div>
        </div>
      </section>

      {/* Products and Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Products />
          <div className="mt-16">
            <Awards />
          </div>
          <div className="mt-16">
            <Testimonial />
          </div>
          <div className="mt-16">
            <Accreditations />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <FAQ />
        </div>
      </section>
    </main>
  );
}
