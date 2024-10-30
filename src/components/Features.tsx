import React from 'react';
import { Shield, Search, Lock, Cloud, Database, Wifi } from 'lucide-react';

const features = [
  {
    name: 'Network Analysis',
    description: 'Comprehensive port scanning and service detection',
    icon: Wifi,
  },
  {
    name: 'Vulnerability Detection',
    description: 'Identify security weaknesses and potential exploits',
    icon: Shield,
  },
  {
    name: 'Configuration Audit',
    description: 'Analyze security configurations and misconfigurations',
    icon: Database,
  },
  {
    name: 'Cloud Asset Analysis',
    description: 'Premium: Scan cloud infrastructure and services',
    icon: Cloud,
    premium: true,
  },
  {
    name: 'Advanced Threat Detection',
    description: 'Premium: Detect sophisticated attack patterns',
    icon: Search,
    premium: true,
  },
  {
    name: 'Security Compliance',
    description: 'Premium: Verify compliance with security standards',
    icon: Lock,
    premium: true,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Comprehensive Security Analysis
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Advanced tools to identify and analyze potential security threats
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative group bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-700"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-cyan-500 bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-cyan-500" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-white">
                    {feature.name}
                    {feature.premium && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Premium
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}