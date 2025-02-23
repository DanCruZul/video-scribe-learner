
import React from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Edit, Play, Clock } from 'lucide-react';

const quickActions = [
  { icon: Upload, label: 'Upload New', href: '/dashboard/upload' },
  { icon: Edit, label: 'Edit', href: '/dashboard/edit' },
  { icon: Play, label: 'Preview', href: '/dashboard/preview' }
];

const recentVideos = [
  { title: 'Introduction to Biology', duration: '5:30', date: '2024-02-20' },
  { title: 'Chemistry Basics', duration: '8:45', date: '2024-02-19' },
  { title: 'Physics Laws', duration: '6:15', date: '2024-02-18' }
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Here's an overview of your content</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <motion.div
                key={action.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <a href={action.href} className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <action.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-medium">{action.label}</span>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Videos</h2>
          <div className="grid gap-4">
            {recentVideos.map((video) => (
              <Card key={video.title}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Play className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {new Date(video.date).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
