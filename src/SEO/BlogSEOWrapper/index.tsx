// lib
import type {ReactNode} from 'react';
import Head from 'next/head';

export type BlogSEOWrapperProps = {
    title: string;
    description: string;
    keywords: string[];
}

const BlogSEOWrapper = (props: BlogSEOWrapperProps) => {
  return (
    <>
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords.join(", ")} />
    </Head>
    </>
  )
}

export default BlogSEOWrapper