import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import Card from "../constants/Card";

const Herosection2 = () => {
  const { scrollYProgress } = useScroll(); // These values are example scroll ranges and translations

  return (
    <div className="flex flex-row w-full bg-white overflow-hidden">
      <motion.div
        className="w-1/3 pl-6 flex flex-col first-div"
        style={{
          // Example of conditional styling based on scroll progress
          position: "sticky",
          top: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className="mt-6"
          style={{ fontSize: "1vw", color: "#ff9a54", fontWeight: "600" }}
        >
          — WE PROVIDE
        </h2>
        <h5 style={{ fontSize: "3.5vw", width: "24vmin", fontWeight: "700" }}>
          Custom software development services
        </h5>
        <p>
          Full-cycle custom software services to develop unique software
          solutions.
        </p>
      </motion.div>
      <motion.div className="flex flex-row w-2/3" style={{ y: y2}}>
        <div className="flex flex-col">
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
        </div>
        <div className="flex flex-col mt-24">
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
          <Card
            title="Custom Software Development"
            para="Building scalable customized software solution by applying innovative technology"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Herosection2;
