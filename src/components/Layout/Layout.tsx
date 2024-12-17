import React from 'react';
import { MainHeader } from './MainHeader';

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export function Layout({ sidebar, children }: LayoutProps) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden max-w-[1500px] mx-auto">
      <MainHeader />
      <div className="flex h-screen bg-white ">
          {sidebar}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}