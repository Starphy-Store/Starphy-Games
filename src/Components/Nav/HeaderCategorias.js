import { React, Children } from "react";
import { motion } from "framer-motion";
import { useDisocloure } from "@chakra-ui/react";

function HeaderCategorias() {
  return (
    <div style={{ color: "white" }}>
      HeaderCategorias
      <motion.div animate={{ x: 100 }} />
    </div>
  );
}

export default HeaderCategorias;
