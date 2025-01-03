import React from 'react';
import { LayoutDashboard, Users, Calendar, UserCircle, Building2, HeadphonesIcon, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Recruitment' },
  { icon: Calendar, label: 'Schedule' },
  { icon: UserCircle, label: 'Employee' },
  { icon: Building2, label: 'Department' },
];

const otherItems = [
  { icon: HeadphonesIcon, label: 'Support' },
  { icon: Settings, label: 'Settings' },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-64 lg:w-64 bg-white border-r border-gray-200 p-6 flex-col md:w-auto md:p-4">
      <div className="flex items-center gap-2 mb-8 lg:justify-start md:justify-center">
        <img 
          src="/lovable-uploads/6beee5dd-0056-44db-905f-88bb38117d47.png" 
          alt="Vasitum Logo" 
          className="w-8 h-8 object-contain"
        />
        <span className="text-xl font-semibold text-primary lg:block md:hidden">Vasitum</span>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-gray-500 mb-4 lg:block md:hidden">MAIN MENU</p>
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 w-full p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors lg:justify-start md:justify-center",
              item.active && "bg-primary/10 text-primary"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="lg:block md:hidden">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-1">
        <p className="text-sm text-gray-500 mb-4 lg:block md:hidden">OTHER</p>
        {otherItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors lg:justify-start md:justify-center"
          >
            <item.icon className="w-5 h-5" />
            <span className="lg:block md:hidden">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;