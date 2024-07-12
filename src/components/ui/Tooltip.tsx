import React, { ReactNode } from 'react';
import { Heading, Typography } from './Typography';

type Props  = {
  children: ReactNode;
  tip: string;
  title: string;
}

const Tooltip = ({ children, title, tip }: Props) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className="absolute bottom-full mb-2 bg-background hidden w-80 rounded shadow-lg p-4 text-sm group-hover:block">
        <Heading variant='h4' className='pb-2'>{title}</Heading>
        <p className='text-muted-foreground text-sm'>{tip}</p>
      </div>
    </div>
  );
};

export default Tooltip;
