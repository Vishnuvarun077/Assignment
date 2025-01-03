import React from 'react';
import Layout from '@/components/Layout';
import StatsCard from '@/components/dashboard/StatsCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import UpcomingSchedule from '@/components/dashboard/UpcomingSchedule';
import Announcements from '@/components/dashboard/Announcements';
import { statsCardsData, employeeStatsData, announcementsData, schedulesData } from '@/data/mockData';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-bold text-navy-blue">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* First row - Stats cards */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statsCardsData.map((stat) => (
              <StatsCard key={stat.id} {...stat} />
            ))}
          </div>

          {/* Recent Activity - Desktop */}
          <div className="hidden md:block md:col-span-4">
            <RecentActivity />
          </div>

          {/* Second row - Employee Stats and Upcoming Schedule */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {employeeStatsData.map((stat) => (
              <StatsCard key={stat.id} {...stat} />
            ))}
          </div>

          {/* Upcoming Schedule */}
          <div className="md:col-span-4">
            <UpcomingSchedule schedules={schedulesData} />
          </div>

          {/* Recent Activity - Mobile/Tablet */}
          <div className="md:hidden col-span-full">
            <RecentActivity />
          </div>

          {/* Announcements Section */}
          <div className="col-span-full">
            <Announcements announcements={announcementsData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;