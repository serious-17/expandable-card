import React, { useState } from "react";
import "./App.css";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

function App() {
  return (
    <div className="App">
      <LayoutGroup>
        <Card title={`Framer Motion`} />
        <Card title={`Dawood`} />
        <Card title={`VS Code`} />
      </LayoutGroup>
    </div>
  );
}

const Card = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="card"
      style={{
        borderRadius: "1rem",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
      }}
    >
      <motion.h2 layout="position">{title}</motion.h2>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="expand"
          transition={{ duration: 1 }}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            ipsum expedita ipsa laudantium sunt laboriosam non. Ratione mollitia
            fuga nam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, ratione.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default App;
