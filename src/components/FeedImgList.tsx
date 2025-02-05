import newsImg1 from "../assets/images/news/news1.svg";
import newsImg2 from "../assets/images/news/news2.svg";
import newsImg3 from "../assets/images/news/news3.svg";
import newsImg4 from "../assets/images/news/news4.svg";
import newsImg5 from "../assets/images/news/news5.svg";

import { useState } from "react";

import { motion } from "framer-motion";

const FeedImgList = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className=" w-full">
      <section className="flex w-full justify-center relative ">
        <div
          className="w-[750px] relative flex justify-center"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={newsImg1} alt="" className="w-[300px] z-50" />

          <motion.img
            src={newsImg2}
            alt=""
            className="w-[220px] absolute  left-0 "
            style={{
              top: 40,
            }}
            initial={isHovered ? { x: 0 } : { x: -242 }}
            animate={isHovered ? { x: -242 } : { x: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src={newsImg3}
            alt=""
            className="w-[240px] absolute left-0"
            style={{
              top: 30,
              left: "100px",
            }}
            initial={isHovered ? { x: 0 } : { x: -118 }}
            animate={isHovered ? { x: -118 } : { x: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src={newsImg4}
            alt=""
            className="w-[240px]  absolute left-0  z-10"
            style={{
              top: 30,
              left: "420px",
            }}
            initial={isHovered ? { x: 0 } : { x: 108 }}
            animate={isHovered ? { x: 108 } : { x: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src={newsImg5}
            alt=""
            className="w-[220px]  absolute left-0 "
            style={{
              top: 40,
              left: "560px",
            }}
            initial={isHovered ? { x: 0 } : { x: 211 }}
            animate={isHovered ? { x: 211 } : { x: 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </section>
    </article>
  );
};

export default FeedImgList;
