



/* 
Purpose of this part of program:
 - Create reducer for cart state
 - Create context for it
 - Create provider for context
*/




import { useReducer, createContext, useContext, type ReactElement } from "react"

import { type ProductType } from "./ProductsContext.tsx"



// ————————— Cart Reducer, Cart Context And Provider For —————————

// ——— Types ———

export type CartItemType = ProductType & {
	"quantity": number 
}

type CartStateType = CartItemType[]

export type ReducerActionType = {
	type: REDUCER_ACTION_ENUM,
	payload?: CartItemType
}

export type UseCartContextType = ReturnType<typeof useCartContext>

type ChildrenType = { children?: ReactElement | ReactElement[] }


// ——— Constants ———

const CART_INITIAL_STATE: CartStateType = []

const CART_CONTEXT_INITIAL_STATE: UseCartContextType = {
	dispatch() {},
	totalItems: 0,
	totalPrice: "",
	cart: []
} 

export const enum REDUCER_ACTION_ENUM {
	ADD,
	REMOVE,
	QUANTITY,
	SUBMIT
}


// ——— Reducer ———

function reducer(state: CartStateType, action: ReducerActionType): CartStateType {
	switch (action.type) {
		case REDUCER_ACTION_ENUM.ADD: {
			if (!action.payload) {
				throw new Error("«action.payload» is missing in reducer")
			}

			const { sku, name, price } = action.payload

			const filteredCart: CartItemType[] = state.filter(item => item.sku !== sku )

			const pickedItem: CartItemType | undefined = state.find(item => sku === item.sku)

			const quantity: number = pickedItem ? pickedItem.quantity + 1 : 1

			return [ ...filteredCart, { sku, 	name, price, quantity }]
		}

		case REDUCER_ACTION_ENUM.REMOVE: {
			if (!action.payload) {
				throw new Error("«action.payload» is missing in reducer")
			}

			const { sku } = action.payload

			const filteredCart: CartItemType[] = state.filter(item => item.sku !== sku )

			return filteredCart
		}

		case REDUCER_ACTION_ENUM.QUANTITY: {
			if (!action.payload) {
				throw new Error("«action.payload» is missing in reducer")
			}

			const { sku, quantity } = action.payload

			const pickedItem: CartItemType | undefined = state.find(item => sku === item.sku)

			if(!pickedItem) {
				// throw new Error("Item must exists in order to update quantity")
				return state
			}

			const updatedItem: CartItemType = { ...pickedItem, quantity }

			const filteredCart: CartItemType[] = state.filter(item => item.sku !== sku )

			return [...filteredCart, updatedItem]

		}

		case REDUCER_ACTION_ENUM.SUBMIT: {
			return CART_INITIAL_STATE
		}

		default:
			throw new Error("Unidentified reducer action type")
	}
}


// ——— Custom Context Hook ———

function useCartContext(cartInitialState: CartStateType) {
		const [state, dispatch] = useReducer(reducer, cartInitialState)

		const totalItems: number = state.reduce((previousValue, cartItem) => {
			return previousValue + cartItem.quantity
		}, 0)

		const totalPrice = new Intl.NumberFormat("en-US", { "style":"currency", "currency": "USD"}).format(
			state.reduce((previousValue, cartItem) => {
				return previousValue + (cartItem.quantity * cartItem.price)
			}, 0)
		)

		const cart = state.sort((itemOne, itemTwo) => {
			return itemOne.price - itemTwo.price
		})

		return { dispatch, totalItems, totalPrice, cart }
}


// ——— Context ———

export const CartContext = createContext<UseCartContextType>(CART_CONTEXT_INITIAL_STATE)


// ——— Context Provider ———

export function CartContextProvider({ children }: ChildrenType): ReactElement {
	return (
		<CartContext.Provider value={useCartContext(CART_INITIAL_STATE)} >
			{ children }
		</CartContext.Provider>
	)
}


// ——— Custom Hook For Quick Context Setup ———

export function useCart(): UseCartContextType {
	return useContext(CartContext)
}