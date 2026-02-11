interface ModalStore {
    isCheckoutModalOpen: boolean;
    isLoginModalOpen: boolean;
    isAnotherModalOpen: boolean;
    isCourseModalOpen: boolean;
    isBuyNowClicked: boolean;
    clicked: boolean;
    toggleClicked: () => void;
    openBuyNow: () => void;
    closeBuyNow: () => void;
    toggleBuyNow: () => void;
    openCheckoutModal: () => void;
    closeCheckoutModal: () => void;
    toggleCheckoutModal: () => void;
    openLoginModal: () => void;
    closeLoginModal: () => void;
    toggleLoginModal: () => void;
    openAnotherModal: () => void;
    closeAnotherModal: () => void;
    toggleAnotherModal: () => void;
    openCourseModal: () => void;
    closeCourseModal: () => void;
    toggleCourseModal: () => void;
    changeCheckoutModal: () => void;
}
declare const useModalStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ModalStore>>;
export default useModalStore;
