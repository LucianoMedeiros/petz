import PageHead from '@/organisms/page-head/page-head'
import MainTemplate from '@/templates/main/main'
import { HomePageContainer, PageTitleText } from './styles'
import Image from 'next/image'

const HomePage = () => {
  const titlePage = 'Seja bem vindo - Página inicial'
  const descriptionPage = 'Página inicial da maior rede de tratamento pokémon.'

  return (
    <MainTemplate>
      <PageHead title={titlePage} description={descriptionPage} />

      <HomePageContainer>
        <PageTitleText>
          Cuidamos bem do seu pokémon, <br />
          para ele cuidar bem de você
        </PageTitleText>
        <Image
          src='/images/pokemon-hero.jpg'
          alt='Pokeball Logo'
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </HomePageContainer>
    </MainTemplate>
  )
}

export default HomePage
