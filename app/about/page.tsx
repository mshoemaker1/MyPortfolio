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
            <p className="text-3xl text-left mt-2 my-6">
              I'm a UX Designer and Researcher rethinking consumer apps for
              mature organizations.
            </p>
            <p className="text-3xl text-left mt-2 my-6">
              In my previous career as an HR Business Partner, I partnered with
              Technology and Design teams for 8 years at companies like IDEO and
              NBCUniversal.
            </p>
            <p className="text-3xl text-left mt-2 my-6">
              In 2024 I completed my certificate in UX Design and began
              freelancing with woman-owned and community focused organizations.
              I was drawn to the creative aspect of wireframing and prototyping.
            </p>
          </div>
          <div>
            <p className="text-lg text-left mb-6 mt-12">{`In my free time...`}</p>
            <p className="text-3xl text-left mt-2 my-6">
              I'm also a mom of two little kids. And when I get the chance, I
              love catching up on the newest restaurants and experiences in the
              Twin Cities!
            </p>
            <p className="text-lg text-left mb-6 mt-12">{`What's next?`}</p>
            <p className="text-3xl text-left mt-2 my-6">
              I'm looking for a full-time role that is either fully remote or
              hybrid (Minneapolis) on an established design team that celebrates
              diverse experiences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
