import Head from "next/head";
import styles from "./Layout.module.css";
import { Header, Footer, FloatingNav } from "../index";
import { motion } from "framer-motion";
import Divider from "../Divider";
import AppHead from "../AppHead";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <AppHead/>
      <Header />
      <motion.main>{children}</motion.main>
      <Divider/>
      <FloatingNav />
      <Footer />
    </div>
  );
};

export default Layout;
