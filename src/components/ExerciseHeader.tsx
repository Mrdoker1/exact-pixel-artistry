import React from 'react';

export const ExerciseHeader: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-3 px-2 py-3 max-md:max-w-full">
      {/* Status and Live indicator */}
      <div className="flex items-center gap-3">
        <img
          src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/b8bb6bb551af3fdeb8482a339c72a07ec99203b8?placeholderIfAbsent=true"
          className="w-6 h-6"
          alt="Exercise icon"
        />
        <div className="flex items-center gap-2 bg-[#0EBE75] px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-wider">
          live
        </div>
      </div>
      
      {/* Exercise ID */}
      <div className="text-sm text-[#6D7783]">
        ID: <span className="font-normal">exercis...</span>
      </div>
      
      {/* Exercise Title */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-[#1E2D40]">
          Flashcard
        </h1>
      </div>
    </section>
  );
};
