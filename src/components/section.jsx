import clsx from "clsx";

export default function Section({ isInverted }) {
    return (
        <section
            className={clsx(
                "h-[80%] overflow-x-hidden w-full flex justify-center items-center my-[5em] lg:my-[10em] flex-col lg:flex-row",
                isInverted ? "flex-col-reverse" : "flex-col"
            )}
        >
            {
                isInverted ? (
                    <>
                        <div className="bg-orange-600 
                        w-full lg:w-[40vw]
                        h-[45vh]
                        z-10 
                        mr-0 lg:mr-[-20%]  
                        mb-[5%]
                        flex 
                        justify-center 
                        items-center"
                        >
                            <h1 className="text-2xl text-white font-bold">Replace with associated image</h1>
                        </div>


                        <div className="bg-black
                        w-full lg:w-[60vw]
                        h-[60vh] lg:h-[65vh]
                        mb-[5%]
                        flex 
                        justify-center lg:justify-end
                        items-center lg:items-start
                        flex-col lg:flex-row
                        gap-6"
                        >
                            <div className="
                        flex
                        justify-center
                        items-center lg:items-end
                        w-[100%] lg:w-[50%]
                        lg:mr-[3em]
                        h-[100%]
                        flex-col  
                        gap-6
                        ">
                                <h1 className="text-white 
                        text-center lg:text-left
                        text-2xl lg:text-4xl
                        z-10 
                        w-[50%] lg:w-[100%]
                        ">
                                    Lorem ipsum dolor sit amet.
                                </h1>

                                <h3 className="text-white
                            text-xl
                            w-[55%] lg:w-[100%]
                            z-10
                        ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>

                                <p className="text-white
                            z-10 
                            w-[55%] lg:w-[100%]
                            "
                                >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum magni ratione corporis, aspernatur, architecto error deleniti accusantium impedit itaque perspiciatis consectetur possimus necessitatibus ullam debitis neque enim maxime voluptas laborum?
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-black
                        w-full lg:w-[60vw]
                        h-[60vh] lg:h-[65vh]
                        mb-[5%]
                        flex 
                        justify-center lg:justify-start
                        items-center
                        flex-col lg:flex-row
                        gap-6"
                        >
                            <div className="
                        flex
                        justify-center
                        items-center lg:items-start
                        w-[100%] lg:w-[50%]
                        h-[100%]
                        flex-col  
                        ml-[5%]
                        lg:ml-[3em]
                        gap-6
                        ">
                                <h1 className="text-white 
                        text-center lg:text-left
                        text-2xl lg:text-4xl
                        z-10 
                        w-[50%] lg:w-[100%]
                        ">
                                    Lorem ipsum dolor sit amet.
                                </h1>
                                <h3 className="text-white
                            text-xl
                            z-10
                            w-[55%] lg:w-[100%]
                        ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>

                                <p className="text-white
                            z-10
                            w-[55%] lg:w-[100%]
                            "
                                >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum magni ratione corporis, aspernatur, architecto error deleniti accusantium impedit itaque perspiciatis consectetur possimus necessitatibus ullam debitis neque enim maxime voluptas laborum?
                                </p>
                            </div>
                        </div>

                        <div className="bg-orange-600 
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
                            <h1 className="text-2xl text-white font-bold">Replace with associated image</h1>
                        </div>
                    </>
                )
            }
        </section >
    );
}
