import React from 'react';

const RecentActivity = () => {
  return (
    <div className="bg-navy-blue text-white rounded-[20px] p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recently Activity</h2>
        <span className="text-sm opacity-60">10.40 AM, Fri 10 Sept 2021</span>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">You Posted a New Job</h3>
      <p className="text-sm opacity-80 mb-4">
        Kindly check the requirements and terms of work and make sure everything is right.
      </p>
      
      <div className="flex justify-between items-center">
        <span className="text-sm opacity-60">Today you makes 12 Activity</span>
        <button className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;