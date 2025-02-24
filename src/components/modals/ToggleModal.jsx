import ReactDOM from 'react-dom';
import { X } from 'lucide-react';

function ToggleModal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-primary-alpha backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-blue/20 relative max-w-lg w-full mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text hover:text-text/80"
        >
          <X />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default ToggleModal;