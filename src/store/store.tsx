import create from 'zustand'
import { Product, CartProduct , Image } from '../models/products'

type BearState = {
  dialog: boolean,
  bears: number,
  setDialog: () => void,
  updateBears: () => void,

  isDrawerOpen: boolean
  setIsDrawerOpen: () => void

  cartProducts: CartProduct[]
  isCartOpen: boolean
  setIsCartOpen: (by?: boolean) => void
  setCart: () => void
}





const useStore = create<BearState>()(set => {
  return {
    dialog: false,
    bears: 0,
    updateBears: () => set(state => ({ bears: state.bears + 1 })),
    setDialog: () => set((state) => ({ dialog: !state.dialog })),

    // drawer
    isDrawerOpen: false,
    setIsDrawerOpen: () => set((state) => ({
      isDrawerOpen: !state.isDrawerOpen
    })),

    // cart
    cartProducts: [
      {
        id: 1,
        pieces: 3
        // name: "Fall Limited Edition Sneakers",
        // description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        // price: 250,
        // discount: .5,
        // images: [
        //   { id: 1, isThumbnail: true, url: '@/assets/image-product-1-thumbnail.jpg' },
        //   { id: 2, isThumbnail: true, url: '@/assets/image-product-2-thumbnail.jpg' },
        //   { id: 3, isThumbnail: true, url: '@/assets/image-product-3-thumbnail.jpg' },
        //   { id: 4, isThumbnail: true, url: '@/assets/image-product-4-thumbnail.jpg' },
        //   { id: 5, isThumbnail: false, url: '@/assets/image-product-1.jpg' },
        //   { id: 6, isThumbnail: false, url: '@/assets/image-product-2.jpg' },
        //   { id: 7, isThumbnail: false, url: '@/assets/image-product-3.jpg' },
        //   { id: 8, isThumbnail: false, url: '@/assets/image-product-4.jpg' }
        // ]
      }
    ],
    isCartOpen: false,
    setIsCartOpen: (by?: boolean) => set(state => (
      { isCartOpen: by !== undefined ? by : !state.isCartOpen }
    )),
    setCart: () => set(state => ({
      cartProducts: []
    }))
  }
})
// console.log('zustand', useStore)

export default useStore