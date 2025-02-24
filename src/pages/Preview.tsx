
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, Edit, Save, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PreviewPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { toast } = useToast();

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    toast({
      title: isPlaying ? "Video paused" : "Video playing",
      duration: 1500,
    });
  };

  const handleEdit = () => {
    toast({
      title: "Edit mode",
      description: "Entering edit mode...",
    });
  };

  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Downloading",
      description: "Your video is being prepared for download.",
    });
  };

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Video <span className="text-accent">Preview</span>
          </h1>
          <p className="text-muted-foreground">Review and edit your generated video</p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video bg-black relative">
              {/* Video Player Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg">Video Preview</p>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>
                  
                  {/* Progress Bar Placeholder */}
                  <div className="flex-1 mx-4 h-1 bg-white/30 rounded-full">
                    <div className="w-1/3 h-full bg-white rounded-full"></div>
                  </div>
                  
                  <span className="text-white text-sm">00:00 / 03:45</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 justify-end">
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleEdit}
              >
                <Edit className="h-4 w-4" />
                Edit Video
              </Button>
              
              <Button
                variant="outline"
                className="gap-2"
                onClick={handleSave}
              >
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
              
              <Button
                className="gap-2"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4" />
                Download Video
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PreviewPage;
