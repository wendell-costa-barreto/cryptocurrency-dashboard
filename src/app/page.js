import Image from "next/image";
import Section from "@/components/section";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Nexus Dashboard",
  description: "A dashboard to visualise IBM data",
  type: "website",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Home() {
  return (
    <>

      <main className="flex flex-col items-center">
        <div className="h-[65vh] w-full flex justify-center items-center mb-10 object-cover overflow-hidden relative">
        <Image
              src="/home.jpg"
              alt="Home image showcasing a dashboard with information on cryptocurrencies"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%', zIndex: -1, objectFit: 'cover' }}
            />

            <div className="w-full h-full bg-black bg-opacity-60 z-1 absolute left-0 top-0">
              <div className="flex flex-col items-center justify-center h-full w-full *:z-10 gap-6">
                <h1 className="text-3xl text-white font-bold mb-4 text-center">Stay updated on cryptocurrencies market</h1>
                  <p className="text-white text-xl">Utilise our dashboard to visualise the IBM data</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 w-[40%] mt-4 rounded-sm transition ease-in-out duration-300">
              Check out real time data
            </button>
              </div>
            </div>
                  </div>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-[5%] lg:gap-4 sm:mb-[15%] lg:mb-0">
          <div className="bg-white p-4 flex flex-col justify-between lg:justify-normal items-start gap-2 lg:gap-6 lg:h-full mb-24">
            <h3 className="text-2xl font-semibold text-gray-900">Lorem 1</h3>
            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum magni ratione corporis, aspernatur, architecto error deleniti accusantium impedit itaque perspiciatis consectetur possimus necessitatibus ullam debitis neque enim maxime voluptas laborum?</p>
          </div>
          <div className="bg-white p-4 flex flex-col justify-between lg:justify-normal items-start gap-2 lg:gap-6 lg:h-full mb-24">
            <h3 className="text-2xl font-semibold text-gray-900">Lorem 2</h3>
            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum magni ratione corporis, aspernatur, architecto error deleniti accusantium impedit itaque perspiciatis consectetur possimus necessitatibus ullam debitis neque enim maxime voluptas laborum?</p>
          </div>
          <div className="bg-white p-4 flex flex-col justify-between lg:justify-normal items-start gap-2 lg:gap-6 lg:h-full mb-24">
            <h3 className="text-2xl font-semibold text-gray-900">Lorem 3</h3>
            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum magni ratione corporis, aspernatur, architecto error deleniti accusantium impedit itaque perspiciatis</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full mt-6">
              Button
            </button>
          </div>
        </section>

      </main >

      <section className="flex flex-col justify-end items-end">
          <div className="lg:h-[60vh] sm:h-[70vh] w-full justify-center items-center flex sm:flex-col lg:flex-row">
            <div className="lg:w-[50%] sm:w-full h-full bg-slate-900 flex justify-center items-center">
              <h1 className="text-2xl text-white font-bold">Replace with associated image</h1>
            </div>
            <div className="lg:w-[50%] sm:w-full h-full bg-slate-800 flex flex-col justify-center items-center gap-8">
              <h1 className="text-justify text-white font-bold font-serif lg:text-5xl sm:text-3xl">Lorem ipsum dolor sit amet</h1>
              <p className="text-justify text-white font max-w-[45%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 transition-all duration-600 ease-in-out lg:w-1/2 sm:w-1/3">
                Button
              </button>
            </div>
          </div>


        <div className="sm:h-[100vh] lg:h-[35vh] w-full flex lg:flex-row sm:flex-col justify-start items-start">
          <div className="lg:w-[25%] sm:w-full h-full bg-orange-400 flex justify-center items-start flex-col *:mx-[5%] gap-3">
            <h1 className="text-2xl text-white font-bold">Title here</h1>
            <p className="text-white text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="lg:w-[25%] sm:w-full h-full bg-pink-600 flex justify-center items-start flex-col *:mx-[5%] gap-3">
            <h1 className="text-2xl text-white font-bold">Title here</h1>
            <p className="text-white text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          </div>

          <div className="lg:w-[25%] sm:w-full h-full bg-purple-700 flex justify-center items-start flex-col *:mx-[5%] gap-3">
            <h1 className="text-2xl text-white font-bold">Title here</h1>
            <p className="text-white text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          </div>

          <div className="lg:w-[25%] sm:w-full h-full bg-blue-700 flex justify-center items-start flex-col *:mx-[5%] gap-3">
            <h1 className="text-2xl text-white font-bold">Title here</h1>
            <p className="text-white text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          </div>
        </div>

      </section>

      <Section isInverted={true} />
      <Section isInverted={false} />

    </>
  )
}
