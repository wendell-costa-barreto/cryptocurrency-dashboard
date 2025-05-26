import clsx from "clsx";
import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

export default function Section({
  isInverted,
  src,
  alt,
  h1Text,
  h3Text,
  pText,
}) {
  return (
    <section
      className={clsx(
        "h-[80%] overflow-x-hidden w-full flex justify-center items-center mt-[80%] lg:my-[10em] flex-col lg:flex-row",
        robotoCondensed.className,
        isInverted ? "flex-col-reverse" : "flex-col"
      )}
    >
      {isInverted ? (
        <>
          <div
            className="bg-orange-600 
                        w-full lg:w-[40vw]
                        h-[45vh]
                        z-10 
                        mr-0 lg:mr-[-20%]  
                        mb-[5%]
                        flex 
                        justify-center 
                        items-center"
          >
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                zIndex: 1,
                objectFit: "cover",
                margin: " 0 auto",
              }}
            />
          </div>

          <div
            className="bg-black
                        w-full lg:w-[60vw]
                        h-[60vh] lg:h-[65vh]
                        mb-[5%]
                        flex 
                        justify-center lg:justify-end
                        items-center lg:items-start
                        flex-col lg:flex-row
                        gap-6"
          >
            <div
              className="
                        flex
                        justify-center
                        items-center lg:items-end
                        w-[100%] lg:w-[50%]
                        lg:mr-[3em]
                        h-[100%]
                        flex-col  
                        gap-6
                        "
            >
              <h1
                className="text-white 
                        text-center lg:text-left
                        text-4xl 
                        z-10 
                        w-[50%] lg:w-[100%]
                        "
              >
                {h1Text}
              </h1>

              <h3
                className="text-white
                            text-xl
                            w-[80%] lg:w-[100%]
                            z-10
                        "
              >
                {h3Text}
              </h3>

              <p
                className="text-white
                            z-10 
                            w-[80%] lg:w-[100%]
                            "
              >
                {pText}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="bg-black
                        w-full lg:w-[60vw]
                        h-[60vh] lg:h-[65vh]
                        mb-[5%]
                        flex 
                        justify-center lg:justify-start
                        items-center
                        flex-col lg:flex-row
                        gap-6
                        m]"
          >
            <div
              className="
                        flex
                        justify-center
                        items-center lg:items-start
                        w-[100%] lg:w-[50%]
                        h-[100%]
                        flex-col  
                        ml-[5%]
                        lg:ml-[3em]
                        gap-6
                        "
            >
              <h1
                className="text-white 
                        text-center lg:text-left
                        text-2xl lg:text-4xl
                        z-10 
                        w-[50%] lg:w-[100%]
                        "
              >
                {h1Text}
              </h1>
              <h3
                className="text-white
                            text-xl
                            z-10
                            w-[55%] lg:w-[100%]
                        "
              >
                {h3Text}
              </h3>

              <p
                className="text-white
                            z-10
                            w-[55%] lg:w-[100%]
                            "
              >
                {pText}{" "}
              </p>
            </div>
          </div>

          <div
            className="bg-orange-600 
                        w-full lg:w-[40vw]
                        h-[45vh]
                        p-4 lg:p-0
                        z-10
                        mr-0 lg:ml-[-20%]  
                        mb-[5%]
                        flex 
                        justify-center 
                        items-center"
          >
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                zIndex: 1,
                objectFit: "cover",
                margin: " 0 auto",
              }}
            />
          </div>
        </>
      )}
    </section>
  );
}
