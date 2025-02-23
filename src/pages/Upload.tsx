
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload as UploadIcon, File, Languages, Timer } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const UploadPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setSelectedFile(file);
    toast({
      title: "File selected",
      description: `${file.name} has been selected for conversion.`,
    });
  };

  const handleConvert = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a file before converting.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Starting conversion",
      description: "Your file is being processed...",
    });
    // Implement conversion logic here
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Upload Content</h1>
          <p className="text-muted-foreground">Convert your text content into engaging videos</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div
              className={`relative border-2 border-dashed rounded-lg p-12 transition-colors ${
                dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileInput}
                accept=".txt,.doc,.docx,.pdf"
              />
              
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <UploadIcon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium">
                    {selectedFile ? selectedFile.name : "Drag and drop your file here"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    or
                  </p>
                  <label htmlFor="file-upload">
                    <Button variant="link" className="mt-2" onClick={() => document.getElementById('file-upload')?.click()}>
                      Browse files
                    </Button>
                  </label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Supports: TXT, DOC, DOCX, PDF
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium mb-2 block">Voice-over Language</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en-US">English (US)</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Theme</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="bold">Bold</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            size="lg" 
            onClick={handleConvert}
            disabled={!selectedFile}
            className="gap-2"
          >
            Convert to Video
            <Timer className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UploadPage;
