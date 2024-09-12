import Image from "next/image";
import ServicesCard from "./components/services-card";
import Reviews from "./components/reviews";
import WoodCraftingProcess from "./components/process";
import FAQSection from "./components/faqsection";

const links = [
  { name: "Open works", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our team", href: "#" },
];
const stats = [
  { name: "Delivery Worldwide", value: "12" },
  { name: "Quality", value: "40" },
];

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          alt=""
          src="/background-image.png"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-amber-900 to-amber-500 opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-amber-900 to-amber-500 opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to ALI Ventures wooding services
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Crafting Natural Beauty in Woodwork is our passion and expertise.
              We take pride in transforming raw wood into timeless pieces of art
              that celebrate the inherent beauty of nature. Each creation is a
              testament to our dedication to woodworking craftsmanship.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-[#995542] place-content-center place-items-center px-4 grid md:grid-cols-2 lg:grid-cols-4">
        <ServicesCard
          svgImage="tree.svg"
          title="Nature Inspired"
          description="We draw inspiration from the natural world, incorporating the essence of wood and its surroundings into each project."
        />
        <ServicesCard
          svgImage="saw.svg"
          title="Craftsmanship"
          description="Our skilled artisans bring decades of expertise to every piece, ensuring the highest quality and attention to detail."
        />
        <ServicesCard
          svgImage="sustainability.svg"
          title="Sustainability"
          description="We are committed to sustainable practices, using responsibly sourced materials to protect our environment."
        />
        <ServicesCard
          svgImage="precision.svg"
          title="Precision"
          description="From design to installation, our precision and commitment to excellence set us apart."
        />
      </div>
      <div>
        <WoodCraftingProcess />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <FAQSection />
      </div>

      <div className="bg-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-4">
            Ready to start your custom wood project? Contact us today!
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-amber-900 rounded-md hover:bg-amber-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
