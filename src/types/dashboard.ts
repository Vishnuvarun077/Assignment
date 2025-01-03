export interface StatCardData {
  id: string;
  title: string;
  value: string | number;
  subtitle: string;
  trend?: {
    value: string;
    label: string;
  };
  details?: {
    label: string;
    value: number;
  }[];
  showGraph?: boolean;
  className?: string;
}

export interface AnnouncementData {
  id: string;
  title: string;
  time: string;
  pinned?: boolean;
}

export interface ScheduleData {
  id: string;
  title: string;
  time: string;
  priority?: boolean;
}