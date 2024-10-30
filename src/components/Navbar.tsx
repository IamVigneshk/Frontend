import React, { useState } from 'react';
import { Menu, Shield, X, Lock } from 'lucide-react';
import ScanModal from './ScanModal';

interface NavbarProps {
  onScanStart: (targetInfo: { type: 'domain' | 'ip'; value: string }, isAdmin: boolean) => void;
  onAdminClick: () => void;
}

export default function Navbar({ onScanStart, onAdminClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScanModal, setShowScanModal] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-cyan-500" />
            <span className="ml-2 text-xl font-bold text-white">SecureScanner</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setShowScanModal(true)}
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Start Free Scan
            </button>
            <button
              onClick={onAdminClick}
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Admin
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                setShowScanModal(true);
                setIsMenuOpen(false);
              }}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-md"
            >
              Start Free Scan
            </button>
            <button
              onClick={() => {
                onAdminClick();
                setIsMenuOpen(false);
              }}
              className="w-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2 justify-center"
            >
              <Lock className="w-4 h-4" />
              Admin
            </button>
          </div>
        </div>
      )}

      <ScanModal
        isOpen={showScanModal}
        onClose={() => setShowScanModal(false)}
        onScanStart={onScanStart}
      />
    </nav>
  );
}