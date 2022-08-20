import create from 'zustand'

type BearState = {
  dialog: boolean,
  bears: number,
  setDialog: () => void,
  updateBears: () => void,

  isDrawerOpen: boolean
  setIsDrawerOpen: () => void

  cart: number[]
  isCartOpen: boolean
  setIsCartOpen: (by?: boolean) => void
  setCart: () => void
}


const useStore = create<BearState>()(set => {
// const useStore = create(set => {
  return {
    dialog: false,
    bears: 0,
    updateBears: () => set(state => ({bears: state.bears +1})),
    setDialog: () => set((state) => ({dialog: !state.dialog})),

    // drawer
    isDrawerOpen: false,
    setIsDrawerOpen: () => set((state) => ({
      isDrawerOpen: !state.isDrawerOpen
    })),

    // cart
    cart: [1],
    isCartOpen: false,
    setIsCartOpen: (by?: boolean) => set(state => (
      {isCartOpen: by !== undefined ? by : !state.isCartOpen}
    )),
    setCart: () => set(state => ({
      cart: []
    }))
  }
})
console.log('zustand', useStore)

export default useStore