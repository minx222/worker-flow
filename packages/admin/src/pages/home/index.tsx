import { Side } from './components'

const Home = () => {
	return (
		<div className="flex w-full h-full">
			<Side />
			<div className='panel flex flex-1 w-0'>
					控制面板
			</div>
		</div>
	)
}

export default Home
