import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ScanningInterface from './components/ScanningInterface';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [scanInfo, setScanInfo] = useState<{
    isScanning: boolean;
    targetInfo?: { type: 'domain' | 'ip'; value: string };
    isAdmin?: boolean;
  }>({
    isScanning: false
  });
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);

  const handleScanStart = (targetInfo: { type: 'domain' | 'ip'; value: string }, isAdmin: boolean) => {
    setScanInfo({
      isScanning: true,
      targetInfo,
      isAdmin
    });
  };

  if (showAdminDashboard) {
    return <AdminDashboard />;
  }

  if (scanInfo.isScanning && scanInfo.targetInfo) {
    return <ScanningInterface targetInfo={scanInfo.targetInfo} isAdmin={scanInfo.isAdmin || false} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar onScanStart={handleScanStart} onAdminClick={() => setShowAdminDashboard(true)} />
      <Hero onScanStart={handleScanStart} />
      <Features />
    </div>
  );
}