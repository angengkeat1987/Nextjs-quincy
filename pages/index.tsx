import { GetStaticProps } from 'next'
import { Layout } from '../components/Layout'
import { Page } from '../components/Page'
import useStoryblok from '../hooks/useStoryblok'
import Storyblok from '../lib/storyblok'
import { HomeStory } from '../lib/types'

type Props = {
  story: HomeStory
}

export default function Home({ story }: Props): React.ReactElement {
  const storyContent = useStoryblok(story)
  return (
    <Layout metaData={{ title: story.name, description: '' }}>
      <Page story={storyContent} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await Storyblok.get(
    `${process.env.STORYBLOK_ENDPOINT_ROOT}/stories/home`,
    {
      version: 'draft',
      cv: Date.now(),
    }
  )
  const story: HomeStory = res.data.story

  return {
    props: {
      story,
    },
    revalidate: 20,
  }
}
