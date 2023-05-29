import { motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";
import Projects from "~/routes/projects";
import {useLoaderData} from "@remix-run/react";
import {blogList, BlogList} from "~/data/blogList.server";
import {json, LoaderFunction} from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json(blogList);
};

export default function Index() {

  return (
    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center"
      >
        <motion.h1
          variants={textVariants}
          className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl"
        >
          Hi, I'm Mitchell 👋
        </motion.h1>
        <motion.h2
          variants={textVariants}
          className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl"
        >
          I'm a <span className="bg-orange-400 text-black">&nbsp;frontend developer&nbsp;</span>
        </motion.h2>
        <motion.p variants={textVariants} className="text-lg md:text-xl">
          I am a 3rd-year student of Open-ICT at Hogeschool Utrecht. In Open-ICT, you don't learn by memorizing outdated knowledge from books, but by actively seeking current trends and applying this knowledge in projects using an agile approach.<br/> I have experience with React (Native) and Vue.
        </motion.p>
      </motion.div>

      <div className="mx-[1em] my-0 text-center">
        <motion.div {...imageLoadAnimationProps}>
          <picture className="block min-h-[250px] w-full h-full object-cover">
            <source
              srcSet="/assets/images/20191012_142631.jpg"
              media="(min-width: 600px)"
            />
            <img
              className="mb-[1em] w-[300px] h-[300px] rounded-full object-cover object-left"
              alt="Illustration of person reading a book"
              src="/assets/images/20191012_142631.jpg"
              width="400"
              height="400"
            />
          </picture>
        </motion.div>

        {/*<p className="text-left text-[0.8em] italic">*/}
        {/*  Illustration by{" "}*/}
        {/*  <a*/}
        {/*    href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    {" "}*/}
        {/*    Icons 8{" "}*/}
        {/*  </a>{" "}*/}
        {/*  from{" "}*/}
        {/*  <a*/}
        {/*    href="https://icons8.com/illustrations"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Ouch!*/}
        {/*  </a>*/}
        {/*</p>*/}
      </div>
    </div>
  );
}
