export default function Hero() {
    return (
        <section className="container mx-auto flex items-center mt-16 relative">
            <img
                src="/Decor.svg"
                alt=""
                className="absolute top-[158px] right-[-158px] w-[766px] h-auto -z-10"
            />
            <div className="w-1/2 text-left mb-0 z-10">
                <p className="font-bold text-xl text-custom-orange uppercase mb-4">
                    Best Destinations around the world
                </p>
                <h1 className="font-volkhov text-[84px] font-bold text-custom-blue leading-[89px] tracking-tight mb-8 relative">
                    Travel, enjoy
                    <br />
                    and live a new
                    <br />
                    and full life
                </h1>
                <p className="font-sans text-base font-medium text-custom-gray leading-8 mb-8 max-w-md">
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                </p>
                <div className="flex justify-start items-center space-x-6">
                    <a
                        href="#"
                        className="bg-custom-yellow text-white font-sans text-lg font-medium py-4 px-8 rounded-[10px] shadow-custom-yellow"
                    >
                        Find out more
                    </a>
                    <button className="flex items-center">
                        <img
                            src="/Play-button.svg"
                            alt=""
                            className="w-[110px] h-[110px] mr-4 mt-8"
                        />
                        <span className="font-sans text-base text-custom-light-gray">
                            Play Demo
                        </span>
                    </button>
                </div>
            </div>

            <div className="w-1/2 flex justify-end z-10">
                <img src="/Traveler.svg" alt="" className="w-[765px] h-auto" />
            </div>
        </section>
    );
}
