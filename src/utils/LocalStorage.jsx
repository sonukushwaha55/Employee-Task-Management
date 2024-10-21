
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Implement API Integration",
        description: "Develop API endpoints for data integration in the Development module.",
        date: "2024-10-01",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "UI Design Enhancements",
        description: "Create new UI designs to improve the user experience in the application.",
        date: "2024-10-02",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Fixing",
        description: "Identify and resolve issues in the Testing environment.",
        date: "2024-10-03",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Rahul",
    email: "employee2@example.com",
    password: "123",
    taskSummary: {
      active: 3,
      newTask: 2,
      completed: 4,
      failed: 1,
    },
    tasks: [
      {
        title: "Backend Optimization",
        description: "Optimize server-side code for faster data processing.",
        date: "2024-10-04",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Market Research Analysis",
        description: "Analyze current market trends to enhance product development strategies.",
        date: "2024-10-05",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Database Refactoring",
        description: "Refactor database schema to improve query performance.",
        date: "2024-10-06",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Suman",
    email: "employee3@example.com",
    password: "123",
    taskSummary: {
      active: 0,
      newTask: 3,
      completed: 3,
      failed: 2,
    },
    tasks: [
      {
        title: "Wireframe Design",
        description: "Create wireframes for the new features in the application.",
        date: "2024-10-07",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Frontend Component Creation",
        description: "Build reusable frontend components for user interactions.",
        date: "2024-10-08",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Automated Test Setup",
        description: "Implement automated tests to improve code coverage.",
        date: "2024-10-09",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskSummary: {
      active: 5,
      newTask: 2,
      completed: 3,
      failed: 1,
    },
    tasks: [
      {
        title: "API Security Implementation",
        description: "Implement security measures for API endpoints.",
        date: "2024-10-10",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Responsive Design Updates",
        description: "Update the UI design to be responsive across all devices.",
        date: "2024-10-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Data Collection Strategy",
        description: "Develop a strategy for data collection and analysis.",
        date: "2024-10-12",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 4,
      failed: 0,
    },
    tasks: [
      {
        title: "Feature Development",
        description: "Develop new features for the application based on requirements.",
        date: "2024-10-13",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "QA Test Case Creation",
        description: "Create test cases for quality assurance testing.",
        date: "2024-10-14",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prototype Design",
        description: "Design prototypes for new UI elements.",
        date: "2024-10-15",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Ravi",
    email: "admin@example.com",
    password: "123",
  },
];



  export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () =>{
const employees = JSON.parse(localStorage.getItem("employees"))
const admin = JSON.parse(localStorage.getItem("admin"))

return {employees, admin}

  }
    