import * as React from 'react';

export const CartTractorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="9" cy="19" r="2"/>
    <circle cx="20" cy="19" r="2"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    <circle cx="15" cy="6" r="4"/>
    <line x1="15" y1="2" x2="15" y2="10"/>
    <line x1="11" y1="6" x2="19" y2="6"/>
    <line x1="12.929" y1="3.929" x2="17.071" y2="8.071"/>
    <line x1="12.929" y1="8.071" x2="17.071" y2="3.929"/>
  </svg>
);
