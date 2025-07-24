import React, { useState } from 'react';

export const ResourceBundle: React.FC = () => {
  const [flashcardText, setFlashcardText] = useState('Hello!');
  const [alternativeValue, setAlternativeValue] = useState('');
  const [example, setExample] = useState('');

  return (
    <section className="flex w-full flex-col items-stretch justify-center mt-6">
      <div className="text-sm text-[#6D7783] font-normal">
        <div className="flex min-h-[21px] items-center gap-1">
          <div className="text-[#6D7783] self-stretch my-auto">
            Resource Bundle
          </div>
        </div>
      </div>
      
      <div className="w-full mt-1">
        <div className="justify-center items-stretch flex w-full flex-col overflow-hidden bg-[#F3F8FE] rounded-[8px_8px_0_0] max-md:max-w-full">
          <div className="flex gap-px flex-wrap max-md:max-w-full">
            <div className="items-center shadow-[-1px_0_0_0_#D6DEE6] flex gap-1 overflow-hidden text-sm text-[#5438DC] font-normal w-[189px] bg-[#F3F7FE] p-2">
              <div className="self-stretch flex items-center gap-1 my-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/db9e9eef60d79ee89e64fd53eca73fc9c6e45e1b?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="text-[#5438DC] self-stretch my-auto">
                  Used in 10 locations
                </div>
              </div>
            </div>
            
            <div className="items-center shadow-[-1px_0_0_0_#D6DEE6] flex gap-2 overflow-hidden text-sm text-[#666E7E] font-normal bg-[#F3F7FE] p-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/0a2638955e9f328d66372580c6341dd13e38e51a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                alt=""
              />
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="text-[#666E7E] self-stretch my-auto">
                  Entire bundle
                </div>
              </div>
            </div>
            
            <div className="items-center shadow-[-1px_0_0_0_#D6DEE6] flex min-h-[37px] gap-2 overflow-hidden text-xs text-[#252b2f] font-normal leading-[18px] bg-[#F3F7FE] p-2">
              <div className="self-stretch flex items-center gap-1 my-auto">
                <div className="self-stretch my-auto">
                  <span className="text-sm text-[rgba(102,110,126,1)]">Ent_313..</span>
                </div>
              </div>
            </div>
            
            <button className="items-center shadow-[-1px_0_0_0_#D6DEE6] flex min-h-[37px] gap-2 overflow-hidden w-12 bg-[#F3F7FE] px-4 py-[11px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/138155d6f3687b4c470c8db62613f92d79c73687?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt=""
              />
            </button>
            
            <button className="items-center shadow-[-1px_0_0_0_#D6DEE6] flex min-h-[37px] gap-2 overflow-hidden w-12 bg-[#F3F7FE] px-4 py-[11px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/3e539497344a6db43ec3d51e75150e6d59853b27?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt=""
              />
            </button>
          </div>
          <div className="border bg-[#DAE1EA] min-h-px w-full border-[rgba(218,225,234,1)] border-solid max-md:max-w-full" />
        </div>
        
        <div className="items-stretch flex w-full max-w-[900px] flex-col bg-[#F3F8FE] p-4 rounded-[0_0_8px_8px] max-md:max-w-full">
          <div className="w-[426px] max-w-full text-sm text-[#666E7E] font-normal whitespace-nowrap">
            <div className="w-[394px] max-w-full px-1">
              <div className="text-[#666E7E]">Image</div>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/ff06290576810829d426169d55c9d69f3b6ff45f?placeholderIfAbsent=true"
              className="aspect-[1.78] object-contain w-full mt-1"
              alt="Resource bundle image"
            />
          </div>
          
          <div className="w-full max-w-[868px] font-normal mt-4 max-md:max-w-full">
            <div className="flex w-[706px] max-w-full items-stretch text-sm text-[#666E7E]">
              <label htmlFor="flashcard-text" className="text-[#666E7E] w-[706px] max-md:max-w-full">
                Flashcard text
              </label>
            </div>
            <div className="justify-center items-stretch border flex min-h-10 w-full flex-col overflow-hidden text-lg text-[#252B2F] whitespace-nowrap bg-white mt-1 pl-4 py-[7px] rounded-lg border-solid border-[#D6DEE6]">
              <input
                id="flashcard-text"
                type="text"
                value={flashcardText}
                onChange={(e) => setFlashcardText(e.target.value)}
                className="text-[#252B2F] bg-transparent border-none outline-none"
              />
            </div>
          </div>
          
          <div className="w-full font-normal mt-4">
            <div className="flex w-full max-w-[868px] flex-col items-stretch max-md:max-w-full">
              <div className="flex text-sm text-[#666E7E]">
                <label htmlFor="alternative-values" className="text-[#666E7E]">
                  de alternative values
                </label>
              </div>
              <div className="border flex w-full gap-2.5 overflow-hidden text-base text-[#6D7783] bg-white mt-1 p-2 rounded-lg border-solid border-[#DAE1EA] max-md:max-w-full">
                <div className="flex items-center gap-2 rounded-xl">
                  <input
                    id="alternative-values"
                    type="text"
                    value={alternativeValue}
                    onChange={(e) => setAlternativeValue(e.target.value)}
                    placeholder="New value..."
                    className="text-[#6D7783] self-stretch my-auto bg-transparent border-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex w-full items-stretch gap-4 text-sm justify-center flex-wrap mt-4 max-md:max-w-full">
            <div className="min-w-60 overflow-hidden flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="w-full overflow-hidden max-md:max-w-full">
                <div className="flex w-full max-w-[868px] flex-col text-[#666E7E] font-normal whitespace-nowrap max-md:max-w-full max-md:pr-5">
                  <div className="z-10 flex items-center gap-2 px-1">
                    <div className="text-[#666E7E] self-stretch my-auto">
                      Audio
                    </div>
                  </div>
                </div>
                <div className="justify-center items-center border flex w-full flex-col text-[#252B2F] font-bold text-center bg-white mt-2 px-[37px] py-2.5 rounded-lg border-dashed border-[#C8CACB] max-md:max-w-full max-md:px-5">
                  <div className="flex items-center gap-2 overflow-hidden flex-wrap max-md:max-w-full">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/db7e80dfa319e95774283d897fbb98545882bed4?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt=""
                    />
                    <div className="self-stretch my-auto max-md:max-w-full">
                      <span>Drag & drop your audio here, or </span>
                      <span className="text-[rgba(17,110,238,1)]">browse</span>
                      <span> to upload</span>
                      <span className="text-[rgba(17,110,238,1)]">. </span>
                      <span className="font-normal text-xs">(25MB max, .wav and .xwav supported)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-stretch text-[#116EEE] font-bold text-center leading-6 justify-center w-[172px] py-1">
              <button className="flex w-full items-center gap-2.5 justify-center rounded-[32px]">
                <div className="justify-center items-center self-stretch flex gap-2.5 my-auto px-4 py-1.5 rounded-3xl border-2 border-solid border-[#116EEE]">
                  <div className="self-stretch flex items-center gap-2 justify-center my-auto">
                    <div className="text-[#116EEE] self-stretch my-auto">
                      Get audio
                    </div>
                    <div className="bg-[#116EEE] self-stretch w-0 shrink-0 h-6 my-auto border-[rgba(17,110,238,1)] border-solid border-2" />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/1119ce4dfee127c38a2bee1bf61b2098f7ad6a51?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                      alt=""
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
          
          <div className="w-full font-normal mt-4">
            <div className="w-full max-md:max-w-full">
              <div className="flex w-full text-sm text-[#4B5766] whitespace-nowrap max-md:max-w-full">
                <label htmlFor="example" className="text-[#4B5766]">
                  Example
                </label>
              </div>
              <div className="justify-between items-center border flex min-h-11 w-full overflow-hidden text-base text-[#6D7783] bg-white mt-1 px-4 py-2.5 rounded-lg border-solid border-[#DAE1EA] max-md:max-w-full">
                <input
                  id="example"
                  type="text"
                  value={example}
                  onChange={(e) => setExample(e.target.value)}
                  placeholder="Example in English"
                  className="text-[#6D7783] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
          
          <button className="flex items-center gap-2 text-sm text-[#116EEE] font-bold leading-none mt-4">
            <div className="text-[#116EEE] self-stretch my-auto">
              Add Audio
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/f475795a84157a748c413c0f9d29fc6049d3a021?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 fill-[#116EEE] self-stretch shrink-0 my-auto"
              alt=""
            />
          </button>
          
          <button className="flex w-full items-center gap-2 text-sm text-[#116EEE] font-bold leading-none flex-wrap mt-4 max-md:max-w-full">
            <div className="text-[#116EEE] self-stretch my-auto">
              Add Video
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/f475795a84157a748c413c0f9d29fc6049d3a021?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 fill-[#116EEE] self-stretch shrink-0 my-auto"
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};
