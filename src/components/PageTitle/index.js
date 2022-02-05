import Head from "next/head";

export default function PageTitle(props){
    return(
        <Head>
            <title>{props.titulo}</title>
        </Head>
    )
}