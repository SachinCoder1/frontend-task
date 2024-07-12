import React from 'react';
import InfoRow from './InfoRow';

const OtherStats = () => {
  const data = [
    { label: 'Max LTV', value: '80%',tooltipText: 'The Maximum Loan-to-Value ratio represents the maximum borrowing power of a specific collateral. For example, if a collateral has a LTV of 75%, the user can borrow up to 0.75 worth of ETH in the principal currency for every 1 ETH worth of collateral.'  },
    { label: 'Liquidation threshold', value: '82.5%',tooltipText: 'When a liquidation occurs, liquidators repay part or all of the outstanding borrowed amount on behalf of the borrower. In return, they can buy the collateral at a discount and keep the difference as a bonus for maintaining a healthy debt-to-collateral ratio for the protocol.' },
    { label: 'Liquidation penalty', value: '15%',tooltipText: 'This represents the threshold at which a borrow position will be considered undercollateralized and subject to liquidation for each collateral. For example, if a collateral has a liquidation threshold of 80%, it means that the loan will be liquidated when the debt value is worth 80% of the collateral value.' },
  ];

  return (
    <div className='flex flex-col gap-y-4'>
      {data.map((item, index) => (
        <InfoRow key={index} label={item.label} value={item.value} tooltip={item.tooltipText} />
      ))}
    </div>
  );
};

export default OtherStats;
