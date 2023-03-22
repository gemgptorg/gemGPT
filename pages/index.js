import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { Play } from "next/font/google";
import Hero from "@/Containers/Hero";
import About from "@/Containers/About";
import Statistics from "@/Containers/Statistics"
import FAQ from "@/Containers/FAQ";
import Solution from "@/Containers/Solution";


const play = Play({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>GemGPT</title>
        <meta name="description" content="GemGPT AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
      <Hero id="#home"></Hero>
      <About id="#about"></About>
      <Solution></Solution>
      <Statistics id="#statistics"></Statistics>
      <FAQ id="#faq"></FAQ>
      </main>
    </>
  );
}