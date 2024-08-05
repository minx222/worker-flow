import { Suspense } from 'react'
export const Home = lazy(() => import('@/pages/flow-chart'))
export const About = lazy(() => import('@/pages/about'))

export const RouterMap =  {
	home: <Home />,
	about: <About />
}

export const  LazyComponent = ({component}: {
	component: keyof typeof RouterMap
}) => {
	return (
		<Suspense fallback="loading">{RouterMap[component]}</Suspense>
	)
}
