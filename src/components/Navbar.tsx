
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-xl font-bold text-primary">
            VideoScribe
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Log in
          </Button>
          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
