import React from "react";
import { AiTwotonePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <footer
      className="bg-white rounded-lg shadow dark:bg-gray-900 mt-4"
      id="contact"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" class="flex items-center mb-4 sm:mb-0">
            <img src="/img/Logo v1.png" class="h-8 mr-3" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://flair2k22.vercel.app"
                className="mr-4 hover:underline md:mr-6 "
              >
                Flair2k22
              </a>
            </li>
            <li>
              <a
                href="mailto:flairit@licet.ac.in"
                className="mr-4 hover:underline md:mr-6"
              >
                Mail us
              </a>
            </li>
            <li>
              <a
                href="tel:+917871123619"
                className="flex mr-4 hover:underline md:mr-6 "
              >
                Kabilan <AiTwotonePhone className="ms-1 mt-[0.2rem]" />
              </a>
            </li>
            <li>
              <a href="tel:+916385796779" className="flex hover:underline">
                Akash Nebi <AiTwotonePhone className="ms-1 mt-[0.2rem]" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://licet.ac.in" className="hover:underline">
            LICET
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Contact;