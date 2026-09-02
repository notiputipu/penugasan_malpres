import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex min-h-[655px] items-center justify-between px-35">

      <div className="max-w-[570px]">
        <h1 className="text-6xl font-bold text-coffee">
          Bean Scene
        </h1>

        <p className="mt-8 text-2xl leading-8 text-black">
          Bean Scene is a coffee shop that provides you with quality coffee
          that helps boost your productivity and helps build your mood.
          Having a cup of coffee is good, but having a cup of real coffee is
          greater. There is no doubt that you will enjoy this coffee more
          than others you have ever tasted.
        </p>

        <button className="mt-8 rounded-full bg-button px-7 py-3 font-bold text-black">
          Learn More
        </button>
      </div>

      <div className="flex justify-center">
        <Image
          src="/coffemug.webp"
          alt="Coffee beans forming a coffee cup"
          width={600}
          height={500}
          className="scale-125"
        />
      </div>

    </section>
  );
};

export default Hero;