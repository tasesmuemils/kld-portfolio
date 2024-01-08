import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mb-40">
      {/* <!-- Jumbotron --> */}
      <div className="px-6 py-12 text-center md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="grid items-center lg:grid-cols-2">
            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.6 }}
                className="z-30 block rounded-lg bg-[hsl(0,0%,100%)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]"
              >
                <h1 className="mt-2 mb-2 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                  Labākais piedāvājums <br />
                  <span className="text-primary">jūsu biznesam</span>
                </h1>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0.7 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.6 }}
              className="md:mb-12 lg:mb-0"
            >
              <img
                src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/004.jpg"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* <!-- Jumbotron --> */}
    </section>
  );
}
