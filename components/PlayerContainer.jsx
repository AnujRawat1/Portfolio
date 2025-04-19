import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Image from "next/image"; // ✅ Default import
import { PlayerCanvas } from "./canvas";

function PlayerContainer({ isMobile }) {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="md:w-1/3 w-full md:h-auto h-[440px] cursor-pointer"
    >
      <PlayerCanvas isMobile={isMobile} />
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src="/assets/logo.png"
          alt="Anuj Rawat"
          fill
          className="rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export default PlayerContainer;
