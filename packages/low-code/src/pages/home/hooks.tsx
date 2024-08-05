import type { Material } from "@/types";
import { createContext, useContext } from "react";

export interface MaterialContextType {
	/**
	 * @name ast列表
	 */
	materials: Material[],
	/**
	 * @name 修改组件的index
	 * @param index 
	 * @returns 
	 */
	setProps: (index: number) => void

	/**
	 * @name 添加物料
	 * @param material 物料
	 * @param index 插入的index
	 * @default index 0
	 * @returns 
	 */
	addMaterial: (material: Material, index?: number) => void

	/**
	 * @name 交换两个物料的位置
	 * @param index1 
	 * @param index2 
	 * @returns 
	 */
	swapMeterial: (index1: number, index2: number) => void
}
export const ComponentContext = createContext<Partial<MaterialContextType>>({});

export const useMaterialContext = () => {

	const { Provider, Consumer } = ComponentContext;

	const ctx = useContext(ComponentContext);

	return {
		Provider,
		Consumer,
		ctx
	}
}
