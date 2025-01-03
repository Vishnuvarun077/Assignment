import React from 'react';
import { cn } from '@/lib/utils';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  className?: string;
  trend?: {
    value: string;
    label: string;
  };
  details?: {
    label: string;
    value: number;
  }[];
  showGraph?: boolean;
}

const StatsCard = ({
  title,
  value,
  subtitle,
  className,
  trend,
  details,
  showGraph = false,
}: StatsCardProps) => {
  const data = [
    { value: 30 },
    { value: 40 },
    { value: 35 },
    { value: 50 },
    { value: 45 },
    { value: 60 },
    { value: 55 },
  ];

  return (
    <div 
      className={cn(
        "p-6 rounded-[20px] transition-all h-full", 
        className
      )}
    >
      <h3 className="text-xl font-semibold text-navy-blue mb-4">{title}</h3>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <span className="text-4xl md:text-5xl leading-none font-bold text-navy-blue block mb-2">{value}</span>
          <p className="text-sm md:text-base text-accent-red">{subtitle}</p>
        </div>
        {trend && (
          <div className="flex flex-col items-end">
            <span className="text-accent-red text-sm md:text-base font-medium">
              {trend.value}
            </span>
            <span className="text-xs md:text-sm text-text-secondary mt-1">
              {trend.label}
            </span>
          </div>
        )}
      </div>
      
      {showGraph && (
        <div className="h-12 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#FF5151"
                fill="#FFE6E6"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
      
      {details && (
        <div className="mt-4 space-y-2">
          {details.map((detail) => (
            <div key={detail.label} className="flex justify-between text-sm md:text-base">
              <span className="text-text-secondary">{detail.label}</span>
              <span className="font-medium text-navy-blue">{detail.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatsCard;