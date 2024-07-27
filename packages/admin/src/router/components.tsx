import { Suspense } from 'react'
export const Home = lazy(() => import('@/pages/home'))

export const RouterMap =  {
	home: <Home />
}

export const  LazyComponent = ({component}: {
	component: keyof typeof RouterMap
}) => {
	return (
		<Suspense fallback="loading">{RouterMap[component]}</Suspense>
	)
}
