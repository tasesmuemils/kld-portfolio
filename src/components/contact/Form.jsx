import emailjs from "@emailjs/browser";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Form() {
  const [emailSent, setEmailSent] = useState(false);
  const [emptyValues, setEmptyValues] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSent(false);
    const obj = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };
    console.log(obj);

    if (
      obj.name.length == 0 ||
      obj.email.length == 0 ||
      obj.message.length == 0
    ) {
      setEmptyValues(true);
    } else {
      setEmptyValues(false);
      emailjs
        .send(
          import.meta.env.PUBLIC_GM_SERVICE_ID,
          import.meta.env.PUBLIC_TEMPLATE_ID,
          obj,
          import.meta.env.EMAIL_KEY
        )
        .then(
          (result) => {
            setEmailSent(true);
            setInputName("");
            setInputEmail("");
            setInputMessage("");
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Strādāsim kopā
            </h2>
            <p className="text-primary-950/70 dark:text-primary-200/70 max-w-lg text-lg sm:text-xl">
              Mēs vēlētos uzzināt vairāk par tevi un ko tu vēlies izstrādāt
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Vārds un Uzvārds
              </label>
              <input
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                type="text"
                id="name"
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                E-pasts
              </label>
              <input
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                type="email"
                id="email"
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tava ziņa
              </label>
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                id="message"
                rows="4"
                className="hover:ring-primary-600 focus:ring-primary-600 dark:hover:ring-primary-400 dark:focus:ring-primary-400 bg-primary-50 dark:bg-primary-950 ring-primary-900/40 dark:ring-primary-200/40 placeholder:text-primary-950/60 dark:placeholder:text-primary-200/60 block w-full appearance-none rounded-md border-0 px-4 py-4 text-base ring-1 transition focus:outline-none focus:ring-2"
                placeholder=" "
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Nosūtīt ziņu
              </button>
            </div>
            {emptyValues && (
              <div className="flex justify-center py-3">
                <p>Aizpildi visus laukus</p>
              </div>
            )}
            {emailSent && (
              <div className="flex justify-center pt-6">
                <IoIosCheckmarkCircle className="w-[24px] h-[24px] fill-primary-600 dark:fill-primary-400 mr-1" />
                <h2>Ziņa veiksmīgi nosūtīta</h2>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
