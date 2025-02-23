
import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">VideoScribe</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transform your learning experience with AI-powered video content creation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                  Terms of Service
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                  Support
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                  Contact Us
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VideoScribe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
