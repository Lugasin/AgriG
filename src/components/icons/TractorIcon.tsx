import * as React from 'react';

export const TractorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 15h1" />
    <path d="M12 15h8" />
    <path d="m11.5 6-5 4-2.5-1.5" />
    <path d="M11 11v6" />
    <path d="M15 11v6" />
    <path d="M9 17H7A5 5 0 0 0 7 7h2" />
    <circle cx={7.5} cy={17.5} r={2.5} />
    <circle cx={17.5} cy={17.5} r={2.5} />
  </svg>
);
