import React from 'react';
import { Pin, MoreHorizontal } from 'lucide-react';
import { AnnouncementData } from '@/types/dashboard';

interface AnnouncementsProps {
  announcements: AnnouncementData[];
}

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#1A1D1F]">Announcement</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Today, 13 Sep 2021</span>
          <button className="text-sm text-accent-blue font-medium">
            See All
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer flex gap-3"
          >
            <Pin 
              className={`h-5 w-5 mt-1 flex-shrink-0 ${
                announcement.pinned 
                  ? "text-accent-red" 
                  : "text-gray-300"
              }`} 
            />
            <div className="flex-1">
              <h3 className={`font-medium text-[#1A1D1F] ${
                announcement.pinned ? "font-semibold" : ""
              }`}>
                {announcement.title}
              </h3>
              <p className="text-sm text-[#6F767E] mt-1">{announcement.time}</p>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;