// components/SimpleModal.tsx
import { ReactNode } from "react";

type SimpleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function SimpleModal({ isOpen, onClose, children }: SimpleModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2">
          Close
        </button>
        {children}
      </div>
    </div>
  );
}