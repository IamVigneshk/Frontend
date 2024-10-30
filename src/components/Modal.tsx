import React from 'react';
import { X, Shield, Network, Cloud, Server, Globe, Database } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  const aspects = [
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Scanning of all exposed network services, open ports, and network protocols'
    },
    {
      icon: Cloud,
      title: 'Cloud Assets',
      description: 'Assessment of cloud-hosted resources, storage buckets, and serverless functions'
    },
    {
      icon: Server,
      title: 'Web Applications',
      description: 'Analysis of web applications, APIs, and associated endpoints'
    },
    {
      icon: Globe,
      title: 'Domain Security',
      description: 'Evaluation of DNS configurations, SSL certificates, and domain security'
    },
    {
      icon: Database,
      title: 'Data Exposure',
      description: 'Detection of sensitive data exposure and misconfigured access controls'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={onClose} />
        
        <div className="relative inline-block w-full max-w-4xl p-6 overflow-hidden text-left align-middle transition-all transform bg-gray-800 rounded-lg shadow-xl">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-2">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-cyan-500" />
              <h3 className="text-2xl font-bold text-white">
                Attack Surface Analysis Overview
              </h3>
            </div>
            
            <p className="text-gray-300 mb-8">
              Our comprehensive attack surface analysis provides a complete view of your organization's security posture by identifying and evaluating all potential entry points that could be exploited by malicious actors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aspects.map((aspect, index) => (
                <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <aspect.icon className="w-6 h-6 text-cyan-500" />
                    <h4 className="text-lg font-semibold text-white">{aspect.title}</h4>
                  </div>
                  <p className="text-gray-300">{aspect.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
              <h4 className="text-lg font-semibold text-cyan-500 mb-2">Why It Matters</h4>
              <p className="text-gray-300">
                Understanding your attack surface is crucial for maintaining a strong security posture. It helps identify vulnerabilities before they can be exploited, ensures compliance with security standards, and provides actionable insights for improving your security infrastructure.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={onClose}
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-cyan-500 border border-transparent rounded-md hover:bg-cyan-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}