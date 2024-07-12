import React from 'react';
import InfoRow from './InfoRow';

const Overview = () => {
  const data = [
    { label: 'Your wallet balance', value: '0.00', unit: 'ETH' },
    { label: 'Amount deposited', value: '0.00', unit: 'ETH' },
    { label: 'Amount borrowed', value: '0.00', unit: 'ETH' },
    { label: 'Maximum borrow amount', value: '0.00', unit: 'ETH' },
    { label: 'Health factor', value: '0.00', unit: '', tooltipText: 'The health factor represents the safety of your loan derived from the proportion of collateral versus amount borrowed. Keep it above 1 to avoid liquidation.' },
    { label: 'Loan to value', value: '0%', unit: '' },
  ];

  return (
    <div className='flex flex-col gap-y-4'>
      {data.map((item, index) => (
        <InfoRow key={index} label={item.label} value={item.value} unit={item.unit} tooltip={item.tooltipText} />
      ))}
    </div>
  );
};

export default Overview;
