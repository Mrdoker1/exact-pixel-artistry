import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="shadow-[0_2px_8px_0_rgba(0,0,0,0.10)] flex w-full items-center justify-between bg-white px-6 py-4 max-md:px-4 max-md:flex-col max-md:gap-4">
      {/* Left section - Course info */}
      <div className="flex flex-col text-sm text-[#666E7E]">
        <div className="font-bold">Complete English</div>
        <div className="flex items-center gap-1 font-medium mt-1">
          <span>English ·</span>
          <span>All languages</span>
        </div>
      </div>
      
      {/* Right section - Actions */}
      <div className="flex items-center gap-4 max-md:w-full max-md:justify-center">
        {/* Divider */}
        <div className="w-px h-8 bg-[#D6DEE6] max-md:hidden" />
        
        {/* Status buttons */}
        <button className="flex items-center gap-2 bg-[#E8FEF5] px-4 py-2 rounded-full hover:bg-[#d4f7eb] transition-colors">
          <img
            src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/20b849d993d970d69eea33716b8a45ce9af83f85?placeholderIfAbsent=true"
            className="w-5 h-5"
            alt="Success icon"
          />
          <span className="text-[#252B2F] font-medium">No issues found</span>
        </button>
        
        <button className="flex items-center gap-2 bg-[#F6FAFD] px-4 py-2 rounded-full hover:bg-[#e8f2fb] transition-colors">
          <img
            src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/2f6efe6c295995dbbed7527ae5d45563e991f698?placeholderIfAbsent=true"
            className="w-5 h-5"
            alt="Changes icon"
          />
          <span className="text-[#252B2F] font-medium">Pending changes</span>
        </button>
        
        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-[#87B6F6] font-medium border-2 border-[#87B6F6] rounded-full hover:bg-[#87B6F6] hover:text-white transition-colors">
            Save
          </button>
          
          <button className="px-4 py-2 bg-[#87B6F6] text-white font-medium rounded-full hover:bg-[#6ba3f3] transition-colors">
            Publish exercise
          </button>
        </div>
      </div>
    </header>
  );
};
