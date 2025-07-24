import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { ExerciseHeader } from '@/components/ExerciseHeader';
import { InstructionForm } from '@/components/InstructionForm';
import { ResourceBundle } from '@/components/ResourceBundle';

const Index = () => {
  return (
    <div className="shadow-[0_4px_0_0_#D6DEE6,4px_1px_14px_0_#D6DEE6] overflow-hidden bg-white">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <Sidebar />
        
        <div className="w-4/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <Navbar />
            
            <main className="self-center flex w-[900px] max-w-full flex-col items-stretch mt-10">
              <nav className="flex items-center gap-2 text-xs text-[rgba(17,110,238,1)] font-normal flex-wrap max-md:max-w-full" aria-label="Breadcrumb">
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/231403ce72a99c921a181dd36497d4c52f967fb8?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/b8ea2fd049215bd10103d2cf8c5b3b52a07f76e7?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="self-stretch my-auto">Complete German</div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/b8ea2fd049215bd10103d2cf8c5b3b52a07f76e7?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="self-stretch my-auto">Beginner A1</div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/b8ea2fd049215bd10103d2cf8c5b3b52a07f76e7?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="self-stretch my-auto">Introductions</div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/b8ea2fd049215bd10103d2cf8c5b3b52a07f76e7?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="self-stretch my-auto">Vocabulary</div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/b8ea2fd049215bd10103d2cf8c5b3b52a07f76e7?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <div className="text-[#252B2F] self-stretch my-auto">Flashcard</div>
              </nav>
              
              <article className="w-full mt-14 max-md:mt-10">
                <ExerciseHeader />
                
                <div className="w-full mt-6">
                  <InstructionForm />
                  <ResourceBundle />
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
