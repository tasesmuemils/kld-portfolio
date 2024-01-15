import { motion } from "framer-motion";
import HeroVideo from "../assets/hero.mp4";

export default function Hero() {
  return (
    <section className="mb-40">
      {/* <!-- Jumbotron --> */}
      <div className="px-6 py-0 text-center lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="grid items-center">
            <div>
              <video
                autoPlay
                loop
                muted
                id="heroVideo"
                className="w-full rounded-lg"
              >
                <source src={HeroVideo} type="video/mp4" />
              </video>
            </div>
            {/* <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                className="block rounded-lg bg-[hsl(0,0%,100%)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]"
              >
                <h1 className="mt-2 mb-2 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                  Tavs sapnis - <br />
                  <span className="text-primary">mūsu realitāte</span>
                </h1>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0.7 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              className="md:mb-12 lg:mb-0"
            >
              <div>
                <video
                  autoPlay
                  loop
                  muted
                  id="heroVideo"
                  className="w-full rounded-lg"
                >
                  <source src="test.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
      {/* <!-- Jumbotron --> */}
    </section>
  );
}
