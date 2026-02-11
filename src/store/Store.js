import { create } from 'zustand';
const useModalStore = create((set) => ({
    // Initial states
    isCheckoutModalOpen: false,
    isLoginModalOpen: false,
    isAnotherModalOpen: false,
    isCourseModalOpen: false,
    isBuyNowClicked: false,
    clicked: false,
    // Toggle clicked state
    toggleClicked: () => set((state) => ({ clicked: !state.clicked })),
    // Buy Now Controls
    openBuyNow: () => set({ isBuyNowClicked: true }),
    closeBuyNow: () => set({ isBuyNowClicked: false }),
    toggleBuyNow: () => set((state) => ({ isBuyNowClicked: !state.isBuyNowClicked })),
    // Checkout Modal Controls
    openCheckoutModal: () => set({ isCheckoutModalOpen: true }),
    closeCheckoutModal: () => set({ isCheckoutModalOpen: false }),
    toggleCheckoutModal: () => set((state) => ({ isCheckoutModalOpen: !state.isCheckoutModalOpen })),
    changeCheckoutModal: () => set((state) => ({ isCheckoutModalOpen: !state.isCheckoutModalOpen })), // Additional method
    // Login Modal Controls
    openLoginModal: () => set({ isLoginModalOpen: true }),
    closeLoginModal: () => set({ isLoginModalOpen: false }),
    toggleLoginModal: () => set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
    // Another Modal Controls
    openAnotherModal: () => set({ isAnotherModalOpen: true }),
    closeAnotherModal: () => set({ isAnotherModalOpen: false }),
    toggleAnotherModal: () => set((state) => ({ isAnotherModalOpen: !state.isAnotherModalOpen })),
    // Course Modal Controls
    openCourseModal: () => set({ isCourseModalOpen: true }),
    closeCourseModal: () => set({ isCourseModalOpen: false }),
    toggleCourseModal: () => set((state) => ({ isCourseModalOpen: !state.isCourseModalOpen })),
}));
export default useModalStore;
