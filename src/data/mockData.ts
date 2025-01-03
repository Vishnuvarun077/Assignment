import { StatCardData, AnnouncementData, ScheduleData } from "@/types/dashboard";

export const statsCardsData: StatCardData[] = [
  {
    id: "1",
    title: "Available Position",
    value: "24",
    subtitle: "4 Urgently needed",
    className: "bg-soft-pink",
  },
  {
    id: "2",
    title: "Job Open",
    value: "10",
    subtitle: "4 Active hiring",
    className: "bg-soft-blue",
  },
  {
    id: "3",
    title: "New Employees",
    value: "24",
    subtitle: "4 Department",
    className: "bg-soft-purple",
  },
];

export const employeeStatsData: StatCardData[] = [
  {
    id: "4",
    title: "Total Employees",
    value: "216",
    subtitle: "120 Men",
    trend: { value: "+2%", label: "Past month" },
    details: [
      { label: "Men", value: 120 },
      { label: "Women", value: 96 },
    ],
    showGraph: true,
    className: "bg-white shadow-sm",
  },
  {
    id: "5",
    title: "Talent Request",
    value: "16",
    subtitle: "6 Men",
    trend: { value: "+5%", label: "Past month" },
    details: [
      { label: "Men", value: 6 },
      { label: "Women", value: 10 },
    ],
    showGraph: true,
    className: "bg-white shadow-sm",
  },
];

export const announcementsData: AnnouncementData[] = [
  {
    id: "1",
    title: "Outing schedule for every department",
    time: "5 Minutes ago",
    pinned: true,
  },
  {
    id: "2",
    title: "Meeting HR Department",
    time: "Yesterday, 12:30 PM",
  },
  {
    id: "3",
    title: "IT Department needs two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
  },
];

export const schedulesData: ScheduleData[] = [
  {
    id: "1",
    title: "Review candidate applications",
    time: "Today - 11:30 AM",
    priority: true,
  },
  {
    id: "2",
    title: "Interview with candidates",
    time: "Today - 10:30 AM",
  },
  {
    id: "3",
    title: "Short meeting with product designer",
    time: "Today - 09:15 AM",
  },
];