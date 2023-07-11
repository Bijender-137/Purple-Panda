import React from "react";
import Contact from "./Contact";
import Hours from "./Hours";
import Footer from "./Footer";
import ContactHero from "./ContactHero";
import BackToTop from "./BackToTop";
const ContactPage = () => {
  return (
    <div className="overflow-hidden">
      <BackToTop/>
      <ContactHero />
      <Contact />
      <Hours />
      <Footer />
    </div>
  );
};

export default ContactPage;
