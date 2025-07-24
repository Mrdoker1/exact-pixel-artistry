import React, { useState } from 'react';

export const InstructionForm: React.FC = () => {
  const [instruction, setInstruction] = useState('Look, something new!');
  const [showInEnglish, setShowInEnglish] = useState(false);

  return (
    <section className="flex w-full flex-col items-stretch font-normal max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <label htmlFor="instruction" className="text-[#6D7783] text-sm">
            Instruction
          </label>
          <div className="items-center border flex w-full gap-2 text-base text-[#1E2D40] mt-[5px] px-2 py-2.5 rounded-lg border-solid border-[#DAE1EA] max-md:max-w-full">
            <div className="self-stretch flex min-w-60 w-full items-center gap-2 overflow-hidden flex-1 shrink basis-[0%] my-auto rounded-lg max-md:max-w-full">
              <input
                id="instruction"
                type="text"
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                className="text-[#1E2D40] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full bg-transparent border-none outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-8 text-sm text-[#6D7783] mt-2">
        <label className="self-stretch flex items-center gap-2 my-auto rounded-[40px] cursor-pointer">
          <input
            type="checkbox"
            checked={showInEnglish}
            onChange={(e) => setShowInEnglish(e.target.checked)}
            className="rounded border self-stretch flex w-4 shrink-0 h-4 bg-white my-auto border-solid border-[#D6DEE6]"
          />
          <span className="text-[#6D7783] self-stretch my-auto">
            Show to users in English
          </span>
        </label>
      </div>
    </section>
  );
};
