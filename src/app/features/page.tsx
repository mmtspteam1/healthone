import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import React from 'react';

const features = [
  {
    name: 'Telemedicine Services',
    description: 'Connect with healthcare professionals through secure video consultations from the comfort of your home.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Patient Health Records',
    description: 'Securely store and manage your health records online, ensuring easy access for both you and your healthcare providers.',
    icon: LockClosedIcon,
  },
  {
    name: 'Appointment Scheduling',
    description: 'Easily schedule and manage appointments with your healthcare providers through our intuitive online platform.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Medication Management',
    description: 'Track your medications, receive reminders, and manage refills to stay on top of your health regimen.',
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">HEALTHONE</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Empowering your health journey with easy care and access.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering your health journey means providing you with seamless access to the care you need, whenever you need it. With our intuitive platform, managing your health is simple and convenient, allowing you to focus on what matters most—your well-being.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
