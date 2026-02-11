import React from 'react';
interface LoginOptionsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPhoneLogin: () => void;
    onEmailLogin: () => void;
}
declare const LoginOptionsModal: React.FC<LoginOptionsModalProps>;
export default LoginOptionsModal;
