import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row  items-center justify-between sm:px-20 text-white bg-gray-800 ">
        <section className="text-lg">
          Copyright {year} || All rights reserved.
        </section>
        <section className="flex items-center justify-center gap-5 text-2xl text-white">
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-900"
            href="#"
          >
            <BsFacebook />
          </a>
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-900"
            href="#"
          >
            <BsInstagram />
          </a>
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-900"
            href="#"
          >
            <BsLinkedin />
          </a>
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-900"
            href="#"
          >
            <BsTwitterX />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
