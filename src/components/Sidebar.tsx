import React from 'react';
import { NavigationItem } from './NavigationItem';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/5 max-md:w-full max-md:ml-0">
      <div className="bg-[rgba(243,248,254,1)] relative flex w-full flex-col mx-auto pt-6 pb-[412px] px-6 max-md:pb-[100px] max-md:px-5">
        <div className="z-0 flex min-h-12 w-12" />
        
        <div className="self-stretch z-0 w-full max-w-60 text-sm text-[#116EEE] font-bold text-center mt-6">
          <div className="flex w-full">
            <div className="justify-center items-center flex min-h-9 w-full flex-1 shrink basis-[0%] px-6 py-2 rounded-3xl border-2 border-solid border-[#116EEE] max-md:px-5">
              <div className="self-stretch flex items-center gap-1 justify-center my-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/26ccd05a11f52fa2fc7b6874664a22e142bd0012?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="text-[#116EEE] self-stretch my-auto">
                  Grammar Review
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-2">
            <div className="justify-center items-center flex min-h-9 w-full flex-1 shrink basis-[0%] px-6 py-2 rounded-3xl border-2 border-solid border-[#116EEE] max-md:px-5">
              <div className="self-stretch flex items-center gap-1 justify-center my-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/a64acc729c7f57db3982515adfa8290a701f1b66?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="text-[#116EEE] self-stretch my-auto">
                  Placement Test
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="self-stretch z-0 w-full overflow-hidden mt-6">
          <NavigationItem
            icon="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/f850b76348db8d63352fd1f7597ce5878f878952?placeholderIfAbsent=true"
            text="Complete German"
            isActive={true}
            hasLiveIndicator={true}
          >
            <div className="flex w-full flex-col overflow-hidden items-center pl-4">
              <NavigationItem
                icon="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/f850b76348db8d63352fd1f7597ce5878f878952?placeholderIfAbsent=true"
                text="Beginer A1"
                isActive={true}
                hasLiveIndicator={true}
              >
                <div className="w-full max-w-[228px] pl-4">
                  <NavigationItem
                    icon="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/f850b76348db8d63352fd1f7597ce5878f878952?placeholderIfAbsent=true"
                    text="Introductions"
                    isActive={true}
                    hasLiveIndicator={true}
                  >
                    <div className="w-full pl-4">
                      <NavigationItem
                        icon="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/f850b76348db8d63352fd1f7597ce5878f878952?placeholderIfAbsent=true"
                        text="Hallo!"
                        isActive={true}
                        hasLiveIndicator={true}
                      >
                        <div className="w-full pl-4">
                          <NavigationItem
                            icon="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/f850b76348db8d63352fd1f7597ce5878f878952?placeholderIfAbsent=true"
                            text="Vocabulary"
                            isActive={true}
                            hasLiveIndicator={true}
                          >
                            <div className="w-full pl-8 max-md:pl-5">
                              <div className="flex w-full max-w-40 items-center gap-1 pl-2 py-2">
                                <div className="self-stretch flex w-[152px] items-center gap-1 overflow-hidden my-auto">
                                  <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center w-4 my-auto p-0.5">
                                    <div className="bg-[#0FD683] flex w-3 shrink-0 h-3 fill-[#0FD683] rounded-[50%]" />
                                  </div>
                                  <div className="text-[#116EEE] text-ellipsis text-sm font-bold self-stretch flex-1 shrink basis-[0%] my-auto">
                                    Flashcard
                                  </div>
                                </div>
                              </div>
                              
                              {[...Array(6)].map((_, index) => (
                                <div key={index} className="flex w-full max-w-40 items-center gap-1 pl-2 py-2">
                                  <div className="self-stretch flex w-[152px] items-center gap-1 overflow-hidden my-auto">
                                    <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center w-4 my-auto p-0.5">
                                      <div className="bg-[#0FD683] flex w-3 shrink-0 h-3 fill-[#0FD683] rounded-[50%]" />
                                    </div>
                                    <div className="text-[#252B2F] text-ellipsis text-sm font-bold self-stretch flex-1 shrink basis-[0%] my-auto">
                                      {index % 2 === 0 ? 'Fillgap' : 'Flashcard'}
                                    </div>
                                  </div>
                                </div>
                              ))}

                              {['Introducing yourself', 'Asking for a name', 'Practising introductions', 'Speaking - Speaking', 'Developing fluency'].map((text, index) => (
                                <div key={index} className="flex w-full max-w-[180px] items-center gap-1 overflow-hidden pl-2 py-2 rounded-2xl">
                                  <img
                                    src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/2c2810802d8789d9877b141486f7ecfc91f34595?placeholderIfAbsent=true"
                                    className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                                    alt=""
                                  />
                                  <div className="self-stretch flex items-center gap-1 overflow-hidden w-[152px] my-auto">
                                    <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center w-4 my-auto p-0.5">
                                      <div className="bg-[#0FD683] flex w-3 shrink-0 h-3 fill-[#0FD683] rounded-[50%]" />
                                    </div>
                                    <div className="text-[#252B2F] text-ellipsis text-sm font-bold self-stretch flex-1 shrink basis-[0%] my-auto">
                                      {text}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </NavigationItem>
                          
                          <div className="flex w-full items-center gap-1 overflow-hidden text-sm text-[#252B2F] font-bold pl-2 py-2 rounded-lg">
                            <img
                              src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/8b09ab8307e732585d48da247bbafe1bab85e09a?placeholderIfAbsent=true"
                              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                              alt=""
                            />
                            <div className="self-stretch flex items-center gap-1 overflow-hidden w-[168px] my-auto">
                              <div className="text-[#252B2F] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
                                Review - Untitled ...
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationItem>
                    </div>
                  </NavigationItem>
                  
                  <div className="flex w-full items-center gap-1 text-sm text-[#252B2F] font-bold pl-2 py-2 rounded-xl">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/48b7bab4c39802ef3347bcbce04d86d7d20c1967?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                      alt=""
                    />
                    <div className="text-[#252B2F] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
                      Chapter
                    </div>
                  </div>
                  
                  <div className="flex w-full items-center gap-1 text-sm text-[#252B2F] font-bold pl-2 py-2 rounded-xl">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/48b7bab4c39802ef3347bcbce04d86d7d20c1967?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                      alt=""
                    />
                    <div className="text-[#252B2F] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
                      2 - Chapter
                    </div>
                  </div>
                </div>
              </NavigationItem>
              
              <div className="flex w-full max-w-56 items-center gap-1 overflow-hidden text-sm text-[#252B2F] font-bold pl-2 py-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/48b7bab4c39802ef3347bcbce04d86d7d20c1967?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="self-stretch flex items-center gap-1 overflow-hidden w-[198px] my-auto">
                  <div className="text-[#252B2F] self-stretch w-[198px] my-auto">
                    Intermediate B1
                  </div>
                </div>
              </div>
            </div>
          </NavigationItem>
        </nav>

        <div className="bg-[rgba(243,248,254,1)] shadow-[0px_-1px_0px_rgba(214,222,230,1)] absolute z-0 w-[292px] max-w-[292px] text-xs text-white font-normal whitespace-nowrap px-6 py-4 right-0 bottom-0 max-md:px-5">
          <div className="flex items-center gap-6">
            <div className="self-stretch w-8 my-auto">
              <div className="stroke-[1px] border bg-[#0E58BE] flex flex-col items-center w-8 justify-center h-8 fill-[#0E58BE] px-[3px] rounded-[50%] border-[rgba(0,0,0,0.1)] border-solid">
                <div>TL</div>
              </div>
            </div>
            <img
              src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/0d44dbe8a3c22303f567ac4e0619298fdcfec9af?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              alt=""
            />
          </div>
        </div>

        <button className="absolute z-0 flex w-9 gap-2.5 h-9 bg-[#F3F8FE] p-2.5 rounded-[0_8px_8px_0] -right-9 top-24">
          <img
            src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/a09f255e442ff9051a38659faddb4011ae0b2b7c?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4"
            alt="Collapse"
          />
        </button>
      </div>
    </aside>
  );
};
