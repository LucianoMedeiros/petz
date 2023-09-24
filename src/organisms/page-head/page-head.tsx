import Head from 'next/head'

type Props = {
  title: string
  description: string
}

const PageHead = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title} - Centro Pokémon</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default PageHead
