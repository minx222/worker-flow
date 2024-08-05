import { Segmented } from 'antd'


const Setting = () => {
	return <div className='flex flex-col p-2 w-56 border-l border-solid border-dark-100 '>
		<Segmented options={['配置项', '布局']} />
	</div>
}

export default Setting;
