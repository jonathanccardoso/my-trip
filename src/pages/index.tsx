import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Natal',
          slug: 'natal',
          location: {
            latitude: 0,
            longitude: 0
          }
        },
        {
          id: '2',
          name: 'Mossoró',
          slug: 'mossoro',
          location: {
            latitude: 2,
            longitude: 1
          }
        }
      ]}
    />
  )
}
