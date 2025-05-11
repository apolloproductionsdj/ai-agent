'use client';

import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useNavigation } from '@/lib/NavigationProvider';
import { useEffect } from 'react';

export default function Header() {
  const { setIsMobileNavOpen, isMobileNavOpen } = useNavigation();

  // Log state changes
  useEffect(() => {
    console.log('Navigation state changed:', isMobileNavOpen);
  }, [isMobileNavOpen]);

  // Modified click handler with explicit logging
  const handleNavToggle = () => {
    console.log('Button clicked, current state:', isMobileNavOpen);
    const newState = !isMobileNavOpen;
    console.log('Setting new state to:', newState);
    setIsMobileNavOpen(newState);
  };

  return (
    <header className='border-b border-gray-200/50 bg-white/80 backdrop-blur-xl sticky top-0 z-50'>
      <div className='flex items-center justify-between px-4 py-3'>
        <div className='flex items-center gap-3'>
          <Button
            variant='ghost'
            size='icon'
            onClick={handleNavToggle}
            className='md:hidden text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
          >
            <HamburgerMenuIcon className='h-5 w-5' />
          </Button>
          <div className='font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
            Chat with an AI Agent
          </div>
        </div>

        {/* Debug display */}
        <div className='text-xs text-gray-500'>
          Nav state: {isMobileNavOpen ? 'Open' : 'Closed'}
        </div>
      </div>
    </header>
  );
}
