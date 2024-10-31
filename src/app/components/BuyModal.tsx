import React from 'react';
import Modal from 'react-modal';

interface BuyModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  medicine: {
    image: string;
    price: string;
    name: string;
  };
}

const BuyModal: React.FC<BuyModalProps> = ({ isOpen, onRequestClose, medicine }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (parseFloat(medicine.price) * quantity).toFixed(2);

  const handlePayment = (method: string) => {
    console.log(`Paying ${totalPrice} with ${method}`);
    onRequestClose(); // Close modal after payment
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Buy {medicine.name}</h2>
        <img src={medicine.image} alt={medicine.name} className="w-full h-auto mb-4" />
        <h3 className="text-lg mb-2">Price: ${medicine.price}</h3>
        <div className="flex items-center mb-4">
          <button onClick={handleDecrease} className="border px-4 py-2">-</button>
          <span className="mx-4">{quantity}</span>
          <button onClick={handleIncrease} className="border px-4 py-2">+</button>
        </div>
        <h4 className="text-lg mb-2">Total: ${totalPrice}</h4>
        <div className="flex flex-col space-y-2">
          <button onClick={() => handlePayment('PhonePay')} className="bg-blue-600 text-white py-2 rounded">
            Pay with PhonePay
          </button>
          <button onClick={() => handlePayment('Card')} className="bg-blue-600 text-white py-2 rounded">
            Pay with Card
          </button>
          <button onClick={() => handlePayment('Meta')} className="bg-blue-600 text-white py-2 rounded">
            Pay with Meta
          </button>
        </div>
        <button onClick={onRequestClose} className="mt-4 text-red-500">Close</button>
      </div>
    </Modal>
  );
};

export default BuyModal;
