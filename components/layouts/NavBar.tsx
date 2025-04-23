"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = () => {
  const container = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 40 },
  };
  return (
    <div>
      <div className="pt-5 ">
        <div className="flex flex-row items-center justify-between">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Image
              priority={true}
              style={{ width: "196px", height: "auto" }}
              src="/images/logo.png"
              width={196}
              height={20}
              alt="logo"
            />
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={container}
            className="flex flex-row items-center lg:space-x-10 space-x-6 max-md:hidden"
          >
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>Performance</Link>
            </li>
            <li>
              <Link href={""}>Booking</Link>
            </li>
            <li>
              <Link href={""}>Store</Link>
            </li>
            <li>
              <Link href={""}>About Us</Link>
            </li>
          </motion.ul>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 40 },
            }}
            className="cursor-pointer"
          >
            <button className="lg:px-7 py-2 px-5 bg-white text-black">
              Sign In
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
