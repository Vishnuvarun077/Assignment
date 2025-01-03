
# Vasitum Dashboard Project

This project implements a modern, responsive dashboard interface for Vasitum, showcasing various UI components and responsive design patterns.This project implements a modern, responsive dashboard interface for Vasitum, showcasing various UI components and responsive design patterns.This project implements a modern, responsive dashboard interface for Vasitum, showcasing various UI components and responsive design patterns.This project implements a modern, responsive dashboard interface for Vasitum, showcasing various UI components and responsive design patterns.
You can view the deployed website use the following link:
```sh
https://vasitumdashboard-steel-pi.vercel.app/
```

## How Requirements Were Implemented

### Project Setup and Dependencies
- I initialized the project using Vite, a modern build tool that offers better performance and developer experience compared to Create React App
- Set up essential dependencies including React, TypeScript, Tailwind CSS, and shadcn/ui for component development
- Integrated additional libraries like recharts for data visualization and lucide-react for icons

### Reusable Components
I developed several reusable components that are used multiple times throughout the dashboard:

1. **StatsCard Component**
   - Created a versatile stats card that displays various metrics
   - Implemented with multiple instances showing different data:
     - Total Employees
     - Talent Requests
     - Attendance
     - Job Statistics

2. **Activity Cards Component**
   - Developed reusable cards for both Announcements and Upcoming Schedule
   - Each instance displays different sets of mock data
   - Implements consistent styling while allowing for varied content

### Dynamic Data Rendering
- Implemented mock data structures in separate files to simulate real data
- Created multiple instances of components displaying different data sets:
  - Various statistics in StatsCard components
  - Different announcements in the Announcements section
  - Multiple schedule items in the Upcoming Schedule section

### Responsive Design
I ensured the dashboard is fully responsive across different device sizes:

- **Desktop View**: Full layout with expanded sidebar
- **Tablet View**: Condensed sidebar showing only icons
- **Mobile View**: Hidden sidebar with clean, stacked layout

### Styling and Visual Appeal
- Utilized Tailwind CSS for consistent and maintainable styling
- Implemented the design according to provided Figma specifications
- Added subtle animations and transitions for better user experience
- Ensured consistent spacing and alignment across all components

### Code Structure and Quality
- Organized code into modular, reusable components
- Implemented TypeScript for better type safety and code maintainability
- Followed React best practices for component structure and state management
- Created separate utility functions and types for better code organization

## Available Scripts

```sh
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure
```
src/
  ├── components/     # Reusable UI components
  ├── data/          # Mock data files
  ├── types/         # TypeScript type definitions
  ├── utils/         # Utility functions
  └── pages/         # Page components
```

## Deployment
The project is deployed and can be accessed at: [Project URL]

## Repository
The source code is available at: [Repository URL]

## Additional Features
- Implemented interactive charts for data visualization
- Added hover states and animations for better user engagement
- Included error boundaries for better error handling
- Optimized performance through code splitting and lazy loading

This implementation meets all the assignment requirements while providing an intuitive and visually appealing user interface. The code is structured for maintainability and follows React best practices throughout.
