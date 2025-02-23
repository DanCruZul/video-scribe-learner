
import React from 'react';
import { Button } from '../ui/button';
import { HelpCircle } from 'lucide-react';

const DashboardFooter = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Version 1.0.0
        </p>
        <Button variant="ghost" size="sm" className="gap-2">
          <HelpCircle className="h-4 w-4" />
          Support
        </Button>
      </div>
    </footer>
  );
};

export default DashboardFooter;
