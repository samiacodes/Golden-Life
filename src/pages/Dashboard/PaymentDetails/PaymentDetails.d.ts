interface PaymentDetailsProps {
    onClose: () => void;
    type: 'wallet' | 'voucher' | 'recharge';
    amount: number;
}
export default function PaymentDetails({ onClose, type, amount }: PaymentDetailsProps): import("react/jsx-runtime").JSX.Element;
export {};
