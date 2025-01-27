import ContentLoader from 'react-content-loader'

interface skeletonProps {
  key: number
}

export const PizzaSkeleton = (props: skeletonProps) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox='0 0 280 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <rect x='502' y='576' rx='3' ry='3' width='140' height='11' />
    <circle cx='126' cy='131' r='113' />
    <rect x='6' y='256' rx='8' ry='8' width='240' height='18' />
    <rect x='10' y='284' rx='7' ry='7' width='234' height='54' />
    <rect x='14' y='352' rx='11' ry='11' width='99' height='29' />
    <rect x='131' y='348' rx='18' ry='18' width='114' height='34' />
  </ContentLoader>
)
