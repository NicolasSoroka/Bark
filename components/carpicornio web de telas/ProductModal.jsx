import { motion } from "framer-motion";

import ProductDetail from "./ProductDetail";

const ProductModal = ({ article, handleClose }) => {
  return (
    <div
      onClick={() => handleClose()}
      className="flex w-full items-center fixed top-[200px] justify-start flex-col py-4 gap-y-4 h-[calc(100vh-200px)] z-auto bg-[#D9D9D9]">
      <h2 className="text-3xl border-b border-black tracking-widest">{article?.titulo}</h2>
      <motion.img
        className="object-contain w-full h-[300px] md:h-[340px]"
        src={article.articulo}
        alt={article.alt}
        key={article.name}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <ProductDetail details={article} />
    </div>
  );
};

export default ProductModal;
