import { NextPage } from "next";
import Head from "next/head";

interface SeoProps {
  title: string
}

const Seo: NextPage<SeoProps> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Aptos Korea</title>
    </Head>
  )
}

export default Seo;