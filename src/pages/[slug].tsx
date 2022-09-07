import client from 'graphql/client'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { GET_PAGE_BY_SLUG, GET_PAGES } from 'graphql/queries'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // retorna loading, enquanto esta criando
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}
export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  // gerando as urls
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

// getStaticPaths - gerar urls build time
// getStaticProps - busca de dados da pagina (props) build time
// getServerSideProps - busca de dados da pagina (props) run time, bundle também no serve
// getInitialProps - mesmo que getStaticProps e getServerSideProps, bundle também no client
