


export const BrainIcon = () => {
  return (
    <svg
      viewBox="20 10 160 180"   // 👈 more space on top
      className="lg:size-8 size-6 stroke-indigo-600 fill-none"
      strokeWidth="10"          // 👈 balanced thickness
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer brain */}
      <path d="M100 25
               C70 25, 50 45, 50 75
               C35 80, 30 100, 40 115
               C35 135, 50 155, 70 160
               C80 175, 120 175, 130 160
               C150 155, 165 135, 160 115
               C170 100, 165 80, 150 75
               C150 45, 130 25, 100 25Z" />

      {/* Center split */}
      <line x1="100" y1="30" x2="100" y2="165" />

      {/* Left folds */}
      <path d="M80 55 C60 65, 60 85, 80 95" />
      <path d="M70 95 C50 105, 60 125, 80 130" />
      <path d="M85 65 C75 75, 75 90, 85 100" />
      <path d="M85 115 C70 125, 75 140, 90 145" />

      {/* Right folds */}
      <path d="M120 55 C140 65, 140 85, 120 95" />
      <path d="M130 95 C150 105, 140 125, 120 130" />
      <path d="M115 65 C125 75, 125 90, 115 100" />
      <path d="M115 115 C130 125, 125 140, 110 145" />
    </svg>
  );
};