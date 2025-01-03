import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { ScheduleData } from '@/types/dashboard';

interface UpcomingScheduleProps {
  schedules: ScheduleData[];
}

const UpcomingSchedule: React.FC<UpcomingScheduleProps> = ({ schedules }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#1A1D1F]">Upcoming Schedule</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Today, 13 Sep 2021</span>
          <button className="text-sm text-accent-blue font-medium">
            Create
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <h3 className="font-medium text-[#1A1D1F]">{schedule.title}</h3>
              <p className="text-sm text-[#6F767E] mt-1">{schedule.time}</p>
            </div>
            {schedule.priority && (
              <span className="px-2 py-1 bg-red-100 text-accent-red text-xs rounded-full font-medium">
                Priority
              </span>
            )}
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;