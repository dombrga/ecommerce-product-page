import create from 'zustand'

interface BearState {
  dialog: boolean
  setDialog: () => void
  updateBears: () => void
}


const useStore = create<BearState>(set => {
  return {
    dialog: false,
    bears: 0,
    updateBears: () => set(state => ({bears: state.bears +1})),
    setDialog: () => set((state) => ({dialog: !state.dialog})),

    isDrawerOpen: false,
    setIsDrawerOpen: () => set((state) => ({
      isDrawerOpen: !state.isDrawerOpen
    }))
  }
})

export default useStore