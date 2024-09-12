import React from 'react';
import Sidebar from './Sidebar';
import OverviewSection from './OverviewSection';
import EndpointsSection from './EndpointsSection';
import PricingSection from './PricingSection';
import HowToUseSection from './HowToUseSection';
import SearchBar from './SearchBar';
import ParametersSection from './ParametersSection';
import ApiUsageSection from './ApiUsageSection';

const Documentation = () => {
  return (
    <div className="flex dark:bg-gray-900 dark:text-gray-200">
      <Sidebar />
      <div className="flex-1 p-6">
        {/* <SearchBar /> */}
        <div className="bg-gray-100 rounded-lg">
        <OverviewSection />
        <EndpointsSection />
        <ParametersSection />
        <ApiUsageSection />
        </div>
        <PricingSection />
        <HowToUseSection />
      </div>
    </div>
  );
};

export default Documentation;
