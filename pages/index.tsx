import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";

interface HomeProps {
  texts: string[];
}

const Home: NextPage<HomeProps> = ({ texts }) => {
  const router = useRouter();
  const onClick = (id: string) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          text: id,
        },
      },
      `/movies/${id}`
    );
  };
  return (
    <div className={styles.container}>
      <Seo title="Home"></Seo>
      <h1>Home Page</h1>
      {texts.map((text) => (
        <div onClick={() => onClick(text)} className="item">
          <Link
            href={{
              pathname: `/movies/${text}`,
              query: {
                text: text,
              },
            }}
            as="`/movies/${id}`"
            key={text}
          >
            <a>{text}</a>
          </Link>
        </div>
      ))}
      <style jsx>
        {`
          .item {
            margin-bottom: 1rem;
            border: 1px solid green;
          }
        `}
      </style>
    </div>
  );
};

/**
 * export async function getServerSideProps
 *
 * 1. _app.tsx 를 실행
 * 2. getServerSideProps 를 실행
 * 3. 결과 값을 pageProps 에 입력
 * 4. Component 에 전달
 *
 * HTML 에 server side 에서 렌더링 한 내용이 렌더링되어있다.
 */
export function getServerSideProps() {
  const texts = ["server", "side", "code"];
  return {
    props: {
      texts,
    },
  };
}

export default Home;
