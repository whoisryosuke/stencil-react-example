import Link from "next/link";
import Layout from "../components/Layout";
import { MyComponent } from "zenny-ui-react";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <MyComponent first="Stencil" last="'Don't call me a framework' JS" />
    </p>
  </Layout>
);

export default IndexPage;
