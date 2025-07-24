import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="items-stretch shadow-[0_2px_8px_0_rgba(0,0,0,0.10)] flex w-full gap-[40px_91px] flex-wrap bg-white px-[25px] py-3 max-md:max-w-full max-md:pr-5">
      <div className="flex flex-col overflow-hidden text-sm text-[#666E7E] grow-0 shrink-0 basis-0 w-fit">
        <div className="overflow-hidden px-1">
          <div className="text-[#666E7E] font-bold">
            Complete English
          </div>
          <div className="flex items-center gap-1 overflow-hidden font-medium mt-1">
            <div className="text-[#666E7E] self-stretch my-auto">
              English ·
            </div>
            <div className="self-stretch flex h-[18px] items-center gap-2 my-auto">
              <div className="text-[#666E7E] self-stretch my-auto">
                All languages
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-base text-[#252B2F] font-bold flex-wrap grow shrink basis-auto max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/c79b949eedc8dd2b625369d3a0330abc899c5558?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          alt=""
        />
        <div className="self-stretch flex w-px shrink-0 h-[34px] bg-[#D6DEE6] my-auto rounded-sm" />
        
        <div className="self-stretch flex min-w-60 items-center gap-2 flex-wrap my-auto max-md:max-w-full">
          <button className="self-stretch flex items-center gap-4 my-auto">
            <div className="justify-center items-center flex min-h-12 flex-col bg-[#E8FEF5] px-6 py-3 rounded-[32px] max-md:px-5">
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 justify-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/20b849d993d970d69eea33716b8a45ce9af83f85?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt=""
                    />
                    <div className="text-[#252B2F] self-stretch my-auto">
                      No issues found
                    </div>
                  </div>
                  <div className="flex min-h-0 w-16" />
                </div>
              </div>
            </div>
          </button>
          
          <button className="self-stretch flex items-center gap-4 my-auto">
            <div className="justify-center items-center flex min-h-12 flex-col bg-[#F6FAFD] px-6 py-3 rounded-[32px] max-md:px-5">
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 justify-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/2f6efe6c295995dbbed7527ae5d45563e991f698?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt=""
                    />
                    <div className="text-[#252B2F] self-stretch my-auto">
                      Pending changes
                    </div>
                  </div>
                  <div className="flex min-h-0 w-16" />
                </div>
              </div>
            </div>
          </button>
          
          <button className="self-stretch text-[#87B6F6] font-medium whitespace-nowrap w-24 my-auto">
            <div className="justify-center items-center flex min-h-12 w-full max-w-24 flex-col px-4 py-3 rounded-[32px] border-2 border-solid border-[#87B6F6]">
              <div className="flex w-full gap-3">
                <div className="flex w-16 flex-col items-center justify-center">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="text-[#87B6F6] self-stretch my-auto">
                      Save
                    </div>
                  </div>
                  <div className="flex min-h-0 w-full" />
                </div>
              </div>
            </div>
          </button>
          
          <button className="self-stretch text-white font-medium my-auto">
            <div className="justify-center items-center flex min-h-12 flex-col bg-[#87B6F6] px-4 py-3 rounded-[32px]">
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="text-white self-stretch my-auto">
                      Publish exercise
                    </div>
                  </div>
                  <div className="flex min-h-0 w-16" />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
