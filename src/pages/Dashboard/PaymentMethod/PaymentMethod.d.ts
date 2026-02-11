interface PaymentMethodProps {
    amount: number;
    onClose: () => void;
    onSelectMethod: (method: string) => void;
}
export default function PaymentMethod({ amount, onClose, onSelectMethod }: PaymentMethodProps): import("react/jsx-runtime").JSX.Element;
export {};
