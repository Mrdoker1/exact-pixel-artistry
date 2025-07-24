import React from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { ExerciseHeader } from '@/components/ExerciseHeader';
import { InstructionForm } from '@/components/InstructionForm';
import { ResourceBundle } from '@/components/ResourceBundle';

const Index = () => {
  const breadcrumbItems = [
    { label: 'Complete German', isActive: false },
    { label: 'Beginner A1', isActive: false },
    { label: 'Introductions', isActive: false },
    { label: 'Vocabulary', isActive: false },
    { label: 'Flashcard', isActive: true }
  ];

  return (
    <div className="shadow-[0_4px_0_0_#D6DEE6,4px_1px_14px_0_#D6DEE6] overflow-hidden bg-white min-h-screen">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <Sidebar />
        
        <div className="w-4/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <Navbar />
            
            <main className="self-center flex w-[900px] max-w-full flex-col items-stretch mt-10 px-4">
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center gap-2 text-sm mb-8 max-md:max-w-full" aria-label="Breadcrumb">
                <img
                  src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/231403ce72a99c921a181dd36497d4c52f967fb8?placeholderIfAbsent=true"
                  className="w-4 h-4"
                  alt="Home"
                />
                
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={item.label}>
                    {index > 0 && (
                      <img
                        src="https://api.builder.io/api/v1/image/assets/a61b8aff1f9a4d4b8c540558ab06b276/b8ea2fd049215bd10103d2cf8c5b3b52a07f76e7?placeholderIfAbsent=true"
                        className="w-3 h-3"
                        alt=">"
                      />
                    )}
                    <button 
                      className={`${
                        item.isActive 
                          ? 'text-[#252B2F] font-medium' 
                          : 'text-[#116EEE] hover:text-[#0e5bb8] transition-colors'
                      }`}
                    >
                      {item.label}
                    </button>
                  </React.Fragment>
                ))}
              </nav>
              
              <article className="w-full">
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
