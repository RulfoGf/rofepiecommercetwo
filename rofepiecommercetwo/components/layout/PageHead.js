import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Alta Costura"}
                </title>
            </Head>
        </>
    )
}

export default PageHead