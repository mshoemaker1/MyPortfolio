import Image from "next/image";
import headshot from "../../public/Shoemaker_Meg-28544.jpg";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 sm:p-24">
      <div className="flex flex-col items-start w-full md:flex-row md:justify-end md:w-10/12">
        {/* Image */}
        <div className="mt-4 md:mt-0 md:mx-8">
          <Image
            src={headshot}
            alt="Meg Shoemaker headshot"
            className="rounded-lg mb-12"
            placeholder="blur"
          />
        </div>
        {/* Text Container */}
        <div className="md:mx-8">
          <div>
            <p className="text-lg text-left mb-6">About Meg</p>
            <p className="text-3xl text-left mt-2 my-6">I'm a UX Designer.</p>
            <p className="text-3xl text-left mt-2 my-6">
              My greatest strength is my empathy and I have a talent for
              fostering collaboration and focusing on the details.
            </p>
            <p className="text-3xl text-left mt-2 my-6">
              I value harmony and bringing curiosity to every conversation.
            </p>
          </div>
          <div>
            <p className="text-lg text-left mb-6 mt-12">{`HR ⇢ UX`}</p>
            <p className="text-3xl text-left mt-2 my-6">
              In my previous career as an HR Business Partner, I partnered with
              Technology and Design teams for 8+ years. I empathized with
              employee's needs and built seamless employee experiences.
            </p>
            <p className="text-3xl text-left mt-2 my-6">
              I'm ready to bring my collaborative spirit to the iterative and
              creative process of UX Design.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
