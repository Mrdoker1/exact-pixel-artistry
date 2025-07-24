import React from 'react';

interface NavigationItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
  hasLiveIndicator?: boolean;
  level?: number;
  children?: React.ReactNode;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  text,
  isActive = false,
  hasLiveIndicator = false,
  level = 0,
  children
}) => {
  const paddingLeft = `pl-${2 + level * 4}`;
  const textColor = isActive ? 'text-[#116EEE]' : 'text-[#252B2F]';
  
  return (
    <div className="w-full">
      <div className={`flex w-full items-center gap-1 overflow-hidden py-2 rounded-lg ${paddingLeft}`}>
        <img
          src={icon}
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt=""
        />
        {hasLiveIndicator && (
          <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center w-4 my-auto p-0.5">
            <div className="bg-[#0FD683] flex w-3 shrink-0 h-3 fill-[#0FD683] rounded-[50%]" />
          </div>
        )}
        <div className={`text-ellipsis text-sm font-bold self-stretch flex-1 shrink basis-[0%] my-auto ${textColor}`}>
          {text}
        </div>
      </div>
      {children && (
        <div className="w-full pl-4">
          {children}
        </div>
      )}
    </div>
  );
};
