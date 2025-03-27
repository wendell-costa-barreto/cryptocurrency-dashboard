import Image from "next/image";
import Section from "@/components/section";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";
import { Metadata } from next

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export const Metadata = {
  title: "Nexus - Stay updated on cryptocurrencies market",
  description: "Utilise our dashboard to visualise cryptocurrency data",
  keywords: "Nexus, cryptocurrency, market, data, visualisation",
};

export default function Home() {
  return (
    <>

      <main className={`flex flex-col items-center ${robotoCondensed.className}`}>
        <div className="h-screen lg:h-[65vh] w-full flex justify-center items-center mb-10 object-cover overflow-hidden relative">
        <Image
              src="/home.jpg"
              alt="Home image showcasing a dashboard with information on cryptocurrencies"
              width={0}
              height={0}
              title
              sizes="100vw"
              style={{ width: '100%', height: '100%', zIndex: -1, objectFit: 'cover' }}
            />

            <div className="w-full h-full bg-black bg-opacity-60 z-1 absolute left-0 top-0">
              <div className="flex flex-col items-center justify-center h-full w-full *:z-10 gap-6">
                <h1 className="text-white p-2 lg:p-0 text-center font-bold text-4xl">Stay updated on cryptocurrencies market</h1>
                  <p className="text-white text-lg p-2 lg:p-0">Utilise our dashboard to visualise the cryptocurrencies data</p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 w-[70%] lg:w-[40%] mt-4 rounded-sm transition ease-in-out duration-300">
              <Link href="/dashboard">Check out real time data</Link>
            </button>
              </div>
            </div>
                  </div>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-4 sm:mb-[15%] lg:mb-0">
          <div className="bg-white p-4 flex flex-col justify-between lg:justify-normal items-start gap-2 lg:gap-6 lg:h-full mb-24">
            <h3 className="text-2xl font-semibold text-gray-900">Market Insights </h3>
            <p className="text-gray-600">Stay up to date with the latest cryptocurrency prices and market trends. Our dashboard provides real-time updates on thousands of digital assets, giving you accurate and timely data to make informed investment decisions. Track price fluctuations, market capitalizations, and trading volumes in an easy-to-read interface.
            </p>
          </div>
          <div className="bg-white p-4 flex flex-col justify-between lg:justify-normal items-start gap-2 lg:gap-6 lg:h-full mb-24">
            <h3 className="text-2xl font-semibold text-gray-900">Ease of use and UX oriented Design</h3>
            <p className="text-gray-600">Visualize the data in a user-friendly way, making it easy to understand and navigate. Our dashboard provides a clean and visually appealing interface, with a focus on simplicity and ease of use.</p>
          </div>
          <div className="bg-white p-4 flex flex-col justify-between lg:justify-normal items-start gap-2 lg:gap-6 lg:h-full mb-24">
            <h3 className="text-2xl font-semibold text-gray-900">Advanced Analytics & Data Visualization</h3>
            <p className="text-gray-600">Gain deeper insights into the crypto market with powerful analytics and interactive charts. Our dashboard features historical data trends, real-time price charts, and predictive indicators that help you analyze market movements. Customize your data visualization to suit your trading or research needs, and stay ahead of the curve in the fast-paced world of digital assets.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full mt-6">
              <Link href="/dashboard">Check out</Link>
            </button>
          </div>
        </section>

      </main >

      <section className={`flex flex-col justify-end items-end ${robotoCondensed.className}`}>
          <div className="lg:h-[60vh] h-[70vh] w-full justify-center items-center flex flex-col lg:flex-row">
            <div className="lg:w-[50%] w-full bg-slate-700 h-full flex justify-center items-center">
            <Image
              src="/home2.jpg"
              alt="Home image showcasing a dashboard with information on cryptocurrencies"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%', zIndex: 1, objectFit: 'cover', margin: ' 0 auto' }}
            />
            </div>
            <div className="lg:w-[50%] w-full h-full bg-slate-800 flex flex-col justify-center items-center gap-8">
              <h1 className="lg:text-justify text-white font-bold font-serif text-4xl px-4 pt-4 lg:px-0 lg:pt-0 text-center">Be updated on the market</h1>
              <p className="text-justify text-white font lg:max-w-[45%] max-w-[80%]">Aggregating information specially for you to stay in touch with the changes ongoing in the market</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 transition-all duration-600 ease-in-out lg:w-1/2 w-2/3 mb-16">
                <Link href="/dashboard">See for yourself</Link>
              </button>
            </div>
          </div>


        <div className="h-[100vh] lg:h-[35vh] w-full flex lg:flex-row flex-col justify-start items-start">
          <div className="lg:w-[25%] w-full h-full bg-orange-400 flex justify-center items-start flex-col *:mx-[5%] gap-3 mt-3 lg:mt-0">
            <h1 className="text-2xl text-white font-bold flex items-center gap-3 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="1.1em" height="1.1em" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1"><path d="M24,12A12,12,0,0,1,0,12a1,1,0,0,1,2,0A10,10,0,1,0,12,2a1,1,0,0,1,0-2A12.013,12.013,0,0,1,24,12ZM10.277,11H8a1,1,0,0,0,0,2h2.277A1.994,1.994,0,1,0,13,10.277V7a1,1,0,0,0-2,0v3.277A2,2,0,0,0,10.277,11ZM1.827,8.784a1,1,0,1,0-1-1A1,1,0,0,0,1.827,8.784ZM4.221,5.207a1,1,0,1,0-1-1A1,1,0,0,0,4.221,5.207ZM7.779,2.841a1,1,0,1,0-1-1A1,1,0,0,0,7.779,2.841Z"/></svg>
            Real time and updated data

            </h1>
            <p className="text-white text-lg font-semibold pb-12">Data that updates each 25 seconds, providing you with real-time insights into the market</p>
          </div>

          <div className="lg:w-[25%] w-full h-full bg-pink-600 flex justify-center items-start flex-col *:mx-[5%] gap-3">
          <h1 className="text-2xl text-white font-bold flex items-center gap-3 p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 -0.5 25 25" fill="#fff">
<path xmlns="http://www.w3.org/2000/svg" d="M5.11413 8.35688C4.75894 8.56999 4.64377 9.03069 4.85688 9.38587C5.06999 9.74106 5.53069 9.85623 5.88587 9.64312L5.11413 8.35688ZM10.5 6L10.95 5.4C10.7061 5.21704 10.3756 5.19999 10.1141 5.35688L10.5 6ZM14.5 9L14.05 9.6C14.3236 9.80522 14.7014 9.79932 14.9685 9.58565L14.5 9ZM19.9685 5.58565C20.292 5.32689 20.3444 4.85493 20.0857 4.53148C19.8269 4.20803 19.3549 4.15559 19.0315 4.41435L19.9685 5.58565ZM17.75 19C17.75 19.4142 18.0858 19.75 18.5 19.75C18.9142 19.75 19.25 19.4142 19.25 19H17.75ZM19.25 11C19.25 10.5858 18.9142 10.25 18.5 10.25C18.0858 10.25 17.75 10.5858 17.75 11H19.25ZM9.75 19C9.75 19.4142 10.0858 19.75 10.5 19.75C10.9142 19.75 11.25 19.4142 11.25 19H9.75ZM11.25 11C11.25 10.5858 10.9142 10.25 10.5 10.25C10.0858 10.25 9.75 10.5858 9.75 11H11.25ZM13.75 19C13.75 19.4142 14.0858 19.75 14.5 19.75C14.9142 19.75 15.25 19.4142 15.25 19H13.75ZM15.25 14C15.25 13.5858 14.9142 13.25 14.5 13.25C14.0858 13.25 13.75 13.5858 13.75 14H15.25ZM5.75 19C5.75 19.4142 6.08579 19.75 6.5 19.75C6.91421 19.75 7.25 19.4142 7.25 19H5.75ZM7.25 14C7.25 13.5858 6.91421 13.25 6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14H7.25ZM5.88587 9.64312L10.8859 6.64312L10.1141 5.35688L5.11413 8.35688L5.88587 9.64312ZM10.05 6.6L14.05 9.6L14.95 8.4L10.95 5.4L10.05 6.6ZM14.9685 9.58565L19.9685 5.58565L19.0315 4.41435L14.0315 8.41435L14.9685 9.58565ZM19.25 19V11H17.75V19H19.25ZM11.25 19V11H9.75V19H11.25ZM15.25 19V14H13.75V19H15.25ZM7.25 19V14H5.75V19H7.25Z" fill="#fff"/>
</svg>
            Advanced data analysis
            </h1>
            <p className="text-white text-lg font-semibold pb-12">The platform features interactive charts, historical price trends, and predictive indicators, allowing traders and investors to analyze market movements efficiently</p>

          </div>

          <div className="lg:w-[25%] w-full h-full bg-purple-700 flex justify-center items-start flex-col *:mx-[5%] gap-3">
          <h1 className="text-2xl text-white font-bold flex items-center gap-3 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" id="Layer_3" version="1.1"><path xmlns="http://www.w3.org/2000/svg" d="M46.25,0H2.875H0v8v32h20v8h20v-8h8V8V0H46.25z M36,3c1.104,0,2,0.896,2,2s-0.896,2-2,2s-2-0.896-2-2  S34.896,3,36,3z M6,3h24c1.104,0,2,0.896,2,2s-0.896,2-2,2H6C4.896,7,4,6.104,4,5S4.896,3,6,3z M30,46.594c-1.104,0-2-0.896-2-2  s0.896-2,2-2s2,0.896,2,2S31.104,46.594,30,46.594z M36,40.969H24V40v-4V18.083h12V36v4V40.969z M44,36h-4V14.083H20V36H4V10h40V36z   M42,7c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2S43.104,7,42,7z" fill="#fff"/></svg>
              User-Friendly & Responsive Design
              
              </h1>
            <p className="text-white text-lg font-semibold pb-12">Built with Next.js and Tailwind CSS, our dashboard offers a clean, modern, and responsive interface that adapts to all screen sizes for a seamless experience.</p>

          </div>

          <div className="lg:w-[25%] w-full h-full bg-blue-700 flex justify-center items-start flex-col *:mx-[5%] gap-3">
          <h1 className="text-2xl text-white font-bold flex items-center gap-3 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="1.1em" height="1.1em" viewBox="0 0 32 32" version="1.1">
<title>lightning-bolt</title>
<path d="M23.5 13.187h-7.5v-12.187l-7.5 17.813h7.5v12.187l7.5-17.813z"/>
</svg>
              Fast & Optimized Performance

            </h1>
            <p className="text-white text-lg font-semibold pb-12">Built with Next.js, our dashboard ensures lightning-fast loading times and smooth navigation, offering a seamless experience for crypto enthusiasts.</p>

          </div>
        </div>

      </section>

      <Section isInverted={true} 
      h1Text={"Versatility and diversity"}
      h3Text={"Nexus dashboards provides advanced data visualisation gathered from multiple sources in order to provide a wide range of information to the user."}
      src={"/home.jpg"}
      alt={"home"}
      pText={"With information on Bitcoin and altcoins, as well as in the prices, changes, OHLC, and more in different currencies"}
      />
    </>
  )
}
