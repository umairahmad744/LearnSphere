export type Course = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: number; // in hours
  thumbnailId: string;
  isPremium: boolean;
  videoTranscript: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  duration: number; // in minutes
  videoUrl: string;
  isFree: boolean;
};

export const courses: Course[] = [
  {
    id: 'web-development-101',
    title: 'Modern Web Development Bootcamp',
    description: 'Master HTML, CSS, JavaScript, React, and Node.js from scratch. Build real-world projects and become a full-stack developer.',
    instructor: 'Alex Doe',
    duration: 45,
    thumbnailId: 'course-thumb-1',
    isPremium: true,
    videoTranscript: `In this course, we'll cover the fundamentals of web development. We will start with HTML structure, move on to CSS for styling, and then dive deep into JavaScript for interactivity. A key part of JavaScript is understanding variables, functions, and loops. We will also explore modern frameworks like React for building dynamic user interfaces. By the end, you'll have built a complete web application.`,
    lessons: [
      { id: 'l1', title: 'Introduction to Web Development', duration: 15, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l2', title: 'HTML & CSS Basics', duration: 45, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l3', title: 'Deep Dive into JavaScript', duration: 90, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
      { id: 'l4', title: 'Building with React', duration: 120, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
      { id: 'l5', title: 'Backend with Node.js & Express', duration: 110, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
    ],
  },
  {
    id: 'data-science-foundations',
    title: 'Data Science Foundations',
    description: 'Learn Python, Pandas, NumPy, and Matplotlib. Understand data analysis, visualization, and the basics of machine learning.',
    instructor: 'Jane Smith',
    duration: 30,
    thumbnailId: 'course-thumb-2',
    isPremium: true,
    videoTranscript: `Welcome to Data Science Foundations. This course will teach you how to analyze data using Python. We'll use libraries like Pandas for data manipulation and Matplotlib for creating insightful visualizations. You'll learn about different data types and how to clean and prepare data for analysis. The final module introduces basic machine learning concepts like linear regression.`,
    lessons: [
      { id: 'l1', title: 'Introduction to Data Science', duration: 10, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l2', title: 'Python for Data Analysis', duration: 60, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
      { id: 'l3', title: 'Data Visualization with Matplotlib', duration: 50, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
    ],
  },
  {
    id: 'graphic-design-principles',
    title: 'Graphic Design Principles',
    description: 'A comprehensive guide to color theory, typography, layout, and composition. Perfect for aspiring designers.',
    instructor: 'Chris Lee',
    duration: 15,
    thumbnailId: 'course-thumb-3',
    isPremium: false,
    videoTranscript: `This is a free course on Graphic Design Principles. We will discuss color theory, including the color wheel and harmonies. We will also cover typography, focusing on readability and pairing fonts. Finally, layout and composition rules like the rule of thirds will be explained to help you create balanced designs.`,
    lessons: [
      { id: 'l1', title: 'The Core of Design', duration: 20, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l2', title: 'Understanding Color Theory', duration: 45, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l3', title: 'Mastering Typography', duration: 55, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
    ],
  },
  {
    id: 'digital-marketing-mastery',
    title: 'Digital Marketing Mastery',
    description: 'Learn SEO, social media marketing, and content strategy to grow any business online.',
    instructor: 'Maria Garcia',
    duration: 25,
    thumbnailId: 'course-thumb-4',
    isPremium: true,
    videoTranscript: `Digital marketing is crucial for modern businesses. This course covers Search Engine Optimization (SEO) to improve your visibility on Google. We'll also craft a Social Media Marketing strategy for platforms like Instagram and TikTok. Content is king, so we'll learn how to create engaging content that converts.`,
    lessons: [
      { id: 'l1', title: 'Intro to Digital Marketing', duration: 15, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l2', title: 'SEO Fundamentals', duration: 70, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
      { id: 'l3', title: 'Social Media Strategy', duration: 60, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
    ],
  },
  {
    id: 'machine-learning-zero-to-hero',
    title: 'Machine Learning: Zero to Hero',
    description: 'Go from beginner to advanced with this in-depth course on machine learning algorithms, models, and real-world applications.',
    instructor: 'Dr. Emily Carter',
    duration: 60,
    thumbnailId: 'course-thumb-5',
    isPremium: true,
    videoTranscript: `This Machine Learning course is for everyone. We start with supervised learning algorithms like decision trees. Then we move to unsupervised learning, including clustering. We will use Python and Scikit-learn to implement these models. The course also covers neural networks and deep learning basics.`,
    lessons: [
      { id: 'l1', title: 'What is Machine Learning?', duration: 12, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l2', title: 'Supervised Learning', duration: 120, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
      { id: 'l3', title: 'Unsupervised Learning', duration: 110, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
      { id: 'l4', title: 'Introduction to Neural Networks', duration: 90, videoUrl: 'https://www.youtube.com/embed/example', isFree: false },
    ]
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development with React Native',
    description: 'Build beautiful, native-like mobile apps for both iOS and Android using a single JavaScript codebase.',
    instructor: 'David Kim',
    duration: 40,
    thumbnailId: 'course-thumb-6',
    isPremium: false,
    videoTranscript: `Learn to build mobile apps with React Native. This free course covers setting up your environment, creating components, and managing state. We will explore how to use native device features like the camera. By the end, you'll have built a simple but functional mobile application.`,
    lessons: [
      { id: 'l1', title: 'Getting Started with React Native', duration: 30, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l2', title: 'Building Layouts and Components', duration: 70, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l3', title: 'State Management and Navigation', duration: 80, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
      { id: 'l4', title: 'Accessing Native Device Features', duration: 60, videoUrl: 'https://www.youtube.com/embed/example', isFree: true },
    ]
  }
];

export const faqs = [
  {
    question: 'What is the difference between free and premium membership?',
    answer: 'Free members get access to all our introductory courses and the first few lessons of premium courses. Premium members unlock all content, including in-depth tutorials, live classes, assignment submissions, and interactive AI-powered quizzes.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your monthly or annual subscription at any time from your dashboard. You will retain premium access until the end of your current billing period.'
  },
  {
    question: 'Do you offer certificates upon course completion?',
    answer: 'Yes, upon successful completion of any premium course, including all assignments and quizzes, you will receive a verifiable certificate that you can add to your resume or LinkedIn profile.'
  },
  {
    question: 'How do the interactive quizzes work?',
    answer: 'Our interactive quizzes are powered by generative AI. For premium courses, you can take a quiz to test your knowledge. Our AI assesses your responses, provides a score, and gives you detailed feedback to help you understand your mistakes and learn more effectively.'
  }
];

export const user = {
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
    enrolledCourses: ['web-development-101', 'graphic-design-principles'],
    grades: [
        { courseId: 'web-development-101', courseTitle: 'Modern Web Development Bootcamp', grade: 'A', completed: '85%' },
        { courseId: 'graphic-design-principles', courseTitle: 'Graphic Design Principles', grade: 'B+', completed: '100%' },
    ],
    recentActivity: [
        { type: 'comment', details: 'Commented on "HTML & CSS Basics"', time: '2 hours ago' },
        { type: 'quiz', details: 'Scored 92% on the "JavaScript Fundamentals" quiz', time: '1 day ago' },
        { type: 'lesson', details: 'Completed "Building with React"', time: '3 days ago' },
    ]
};
