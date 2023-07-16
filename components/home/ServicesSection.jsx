import React from "react";
import Card from "./Card";
import PrimaryButton from "../buttons/PrimaryButton";


const ServicesSection = () => {

  const webTitle = <span>Innovative <span className="gradient-text">Web Development</span> Solutions</span>
  const webDesc = 'Elevate your online presence with our expert web development service. Our team full of skilled developers create custom, responsive websites that engage your audience and drive conversions. Let us build your digital foundation and help your business succeed in the online world.'

  const seoTitle = <span>Customized <span className="gradient-text">SEO Strategies</span> for Success</span>
  const seoDesc = 'Drive traffic, improve visibility, and increase conversions with our expert SEO service. Our team of skilled marketers specialize in creating customized strategies that help your business achieve its online goals. With our SEO service, you’ll have a powerful online presence that drives traffic, generates leads, and increases conversions.'
  
  const adsTitle = <span>Generate More Leads with <span className="gradient-text">Business Advertisement</span></span>
  const adsDesc = "Google Ads, Google My Business, Google Guaranteed and all the other similar services can be set up in the most effective way for your business. With our customized advertisement strategies, we'll help you increase your visibility and drive more customers to your business. Choose Vitality Digitals for your Business Advertisement needs and start attracting more leads today."
  return (
    <section className="w-full flex flex-col items-center justify-between gap-12 sm:px-6 xl:px-12 px-36 py-20 bg-dark">
      <Card url={"/assets/images/WebDevelopment.svg"} title={webTitle} description={webDesc} alt={'Web Development Services'}/>
      <Card url={"/assets/images/Search.svg"} title={seoTitle} description={seoDesc} alt={'SEO Services'}/>
      <Card url={"/assets/images/Advertised.svg"} title={adsTitle} description={adsDesc} alt={'Advertisement Services'}/>
      <PrimaryButton buttonText={'REACH NOW'}/>
    </section>
  );
};

export default ServicesSection;
