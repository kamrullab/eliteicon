import React, { useEffect } from 'react';
import { Check, Terminal } from 'lucide-react';

interface CopyNotificationProps {
  show: boolean;
  message: string;
  onHide: () => void;
}

const CopyNotification: React.FC<CopyNotificationProps> = ({ show, message, onHide }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-600 text-black px-4 py-3 rounded-lg shadow-lg shadow-green-600/25 flex items-center gap-2 z-50 animate-slide-in font-mono font-semibold border border-green-400">
      <Terminal className="w-5 h-5" />
      <span>{message} copied!</span>
      <Check className="w-5 h-5" />
    </div>
  );
};

export default CopyNotification;