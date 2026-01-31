import React from 'react';

const StepProgress = ({ currentStep }) => {
  const steps = ['cart', 'address', 'payment'];
  
  const getStepIndex = (step) => steps.indexOf(step);
  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="px-4 py-3 flex items-center gap-2 bg-gray-800/30">
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <div 
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
              ${currentIndex >= i ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-400'}`}
          >
            {i + 1}
          </div>
          {i < steps.length - 1 && (
            <div className={`flex-1 h-0.5 ${currentIndex > i ? 'bg-orange-500' : 'bg-gray-700'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepProgress;
