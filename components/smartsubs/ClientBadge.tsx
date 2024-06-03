import { ChevronDown, Dot, Users } from "lucide-react";
import { useState } from "react";
import BadgeItem from "./BadgeItem";
import { motion } from "framer-motion";

const variants = {
  blue: "from-indigo-400 to-cyan-400",
  pink: "from-pink-500 to-yellow-500",
  red: "from-rose-700 to-pink-600",
  yellow: "from-emerald-500 to-yellow-400",
  green: "from-green-800 to-green-400",
};

const fadeInOrder = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3 + 0.3,
    },
  }),
  hidden: { opacity: 0 },
};

const ClientBadge = () => {
  const [selectedProduct, setSelectedProduct] = useState(<BadgeItem />);
  const [isOpen, setIsOpen] = useState(false);

  const test = [
    {
      a: "a",
    },
    {
      a: "a",
    },
  ];

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={`relative flex h-[60px] cursor-pointer flex-col items-start justify-between ${isOpen ? 'rounded-md' : 'rounded-t-md'} bg-gradient-to-r transition-all ${variants.red}`}
    >
      <ChevronDown
        size={22}
        className={`absolute right-2 top-[30px] transition-all ${isOpen ? "" : "-rotate-90"}`}
      />
      {selectedProduct}

      <motion.ul
        className={`no-scrollbar flex ${isOpen ? 'min-h-0 -top-4 -z-10' : 'min-h-[70px] h-[200px]'} w-full flex-col gap-y-1 overflow-auto bg-sms_gray py-1 transition-all rounded-b-md`}
      >
        {test.map((element, pos) => (
          <motion.li
            key={1}
            custom={pos}
            variants={fadeInOrder}
            initial="hidden"
            animate="visible"
          >
            <BadgeItem />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ClientBadge;
