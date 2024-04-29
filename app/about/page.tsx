import Image from "next/image";
import headshot from "../../public/Shoemaker_Meg-28544.jpg";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center w-full md:flex-row-reverse md:justify-end md:w-1/2">
        {/* Text Container */}
        <div className="md:ml-8">
          <h3 className="text-3xl font-semibold text-left dark:text-white">
            Welcome!
          </h3>
          <p className="text-left mt-2 dark:text-gray-300">
            Here's a little bit about me.
          </p>
        </div>
        {/* Image */}
        <div className="mt-4 md:mt-0">
          <Image
            src={headshot}
            alt="Meg Shoemaker headshot"
            className="rounded-lg"
            width={200}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}
