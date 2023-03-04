// lib
import type { ReactNode } from "react";
import Head from "next/head";

// SEO Wrappers
import BlogSEOWrapper from "./BlogSEOWrapper";

type Props = {
    title: string;
    description: string;
    keywords: string[];
    children: ReactNode;
}

const SEOWrapper = (props: Props) => {
  return (
    <> 
        <Head>
            <title>{`Algowiz | ${props.title}`}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords.join(', ')} />
        </Head>

        {props.children}
    </>
  )
}

export default SEOWrapper