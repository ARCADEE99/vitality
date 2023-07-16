import Image from "next/image";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Hero = () => {
  return (
    <section className="flex flex-col bg-hero-pattern bg-center bg-cover sm:px-6 xl:px-12 px-36 pt-52 pb-24 -my-24">
        <span className="text-white text-[17px]">
          Your Partner for Digital Success.
        </span>
        <div className="flex items-center pt-12 pb-4 gap-6">
          <h1 className="text-white h1_text w-[825px]">
            Drive Fast Results & Transform Your
            <span className="gradient-text"> Online Presence </span>Today
          </h1>
          <Image
            className="rotate-12 lg:hidden"
            src="/assets/images/arrow.png"
            alt="arrow pointer"
            width={175}
            height={105}
            priority={true}
          />
        </div>
        <p className="text-description text-white w-[1050px] xl:w-fit">
          Achieve your
          <span className="gradient-text">
            <strong> business goals </strong>
          </span>
          with our expert team of digital strategists, designers, and
          developers. Our full-service digital agency offers tailored solutions
          that drive results, from web design and development to Business
          Marketing. Discover how we can elevate your brand online and help you
          succeed in the digital age.
        </p>
        <div className="flex sm:flex-col sm:items-start items-center pt-12 pb-4 gap-4">
          <PrimaryButton buttonText={'REACH NOW'} />
          <SecondaryButton />
        </div>
      </section>
  )
}

export default Hero
