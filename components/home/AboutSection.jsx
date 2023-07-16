import PrimaryButton from "../buttons/PrimaryButton"
import SecondaryBlackButton from "../buttons/SecondaryBlackButton"

const AboutSection = () => {
  return (
    <section className="flex flex-col justify-between gap-[20px] sm:px-6 xl:px-12 px-36 pt-24 pb-16 mt-24 items-center">
        <h2 className="h2_text text-text text-center lg:w-full w-[635px]">
          Define Your Business Achievements
          <span className="gradient-text"> with Speed</span>
        </h2>
        <p className="text-description text-text text-center w-[935px] lg:w-fit">
          At <strong>Vitality Digitals</strong>, we understand that time is
          money when it comes to running a business. That’s why we offer
          solutions that are designed to help you define and achieve your 
          <strong>business goals</strong> quickly and efficiently. Our team of
          experts will work with you to create customized strategies that are
          tailored to your specific needs, so you can see <strong>FAST </strong>
          results.
        </p>
        <div className="flex sm:flex-col items-center pt-8 pb-4 gap-4">
          <PrimaryButton buttonText={'GET YOUR OFFER!'}/>
          <SecondaryBlackButton />
        </div>
      </section>
  )
}

export default AboutSection
