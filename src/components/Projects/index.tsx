import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  return (
    <article
      ref={ref}
      className=" px-[5%] pb-[5rem] overflow-hidden text-white bg-black"
    >
      <section className="flex items-start justify-between">
        <motion.div
          className="w-full "
          initial={inView ? { x: -600 } : { x: 0 }}
          animate={inView ? { x: 0 } : { x: -600 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-between items-start">
            <h2 className="text-[#4F4F4F] text-[115px] font-extrabold">
              Projects
            </h2>
            <div className="expandButtonContainerSecondary mt-12">
              <button
                type="button"
                className="expandButton bg-white px-4 text-black py-2 text-sm font-normal flex gap-4 items-center"
              >
                <p className="text-nowrap">Read More</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={24}
                />
              </button>
            </div>
          </div>

          <p className="ml-[15%] max-w-[1000px] mt-4 pr-[7%] text-[#B9B9B9]">
            We provide a broad spectrum of services because we are a
            multifaceted business that meets the various needs of businesses.
            With this all-inclusive range of services, we enable businesses to
            effectively accomplish their goals, engage their audiences, and
            improve their brand presence.
          </p>
        </motion.div>
      </section>

      <ProjectsGrid />
    </article>
  );
};

const ProjectsGrid = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  return (
    <article ref={ref} className="w-full flex justify-center">
      <motion.div
        className="w-full gap-6 flex justify-center items-center max-w-[1000px] "
        initial={inView ? { y: -1000, x: 0 } : { y: 0, x: 0 }}
        animate={inView ? { y: 0, x: 0 } : { y: 1000, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="w-1/3 max-w-[400px] flex flex-col gap-8 rounded-md">
          <ProjectCard />
          <ProjectCard />
        </section>
        <section className="w-1/3 max-w-[400px]  flex flex-col gap-6 mt-[20vh]">
          <ProjectCard />
          <section className="h-[50vh] px-4 bg-white text-black rounded-md flex flex-col gap-4 justify-center items-center">
            <h4 className="font-extrabold w-full text-center">
              Are You Looking For Something Special Or Different?
            </h4>
            <p className="w-full text-center text-[#777777]">
              Lorem ipsum dolor sit amet consectetur. Egestas accumsan tristique
              sed nibh suspendisse orci. Sed faucibus quis id vitae elementum
              libero.
            </p>
            <div className="expandButtonContainerSecondary mt-16  pl-3">
              <button
                type="button"
                className="expandButton bg-black px-4 text-white py-2 border k font-normal flex gap-4 items-center"
              >
                <p className="text-base text-nowrap">Contact</p>
                <IoIosArrowRoundForward
                  className="expandButtonIcon"
                  size={33}
                />
              </button>
            </div>
          </section>
        </section>
        <section className="w-1/3 max-w-[400px] flex flex-col gap-8 rounded-md">
          <ProjectCard />
          <ProjectCard />
        </section>
      </motion.div>
    </article>
  );
};

export default Projects;
