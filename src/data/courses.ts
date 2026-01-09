export interface Course {
  id: string;
  week: number;
  title: string;
  path: string;
  description?: string;
}

export const courses: Course[] = [
  {
    id: 'separation-of-concerns',
    week: 1,
    title: '關注點分離',
    path: '/week1/separation-of-concerns',
    description: '了解資料與畫面分離的核心概念',
  },
  {
    id: 'async-javascript',
    week: 2,
    title: '非同步 JavaScript',
    path: '/week2/async-javascript',
    description: '理解 JavaScript 非同步機制與 Async/Await 語法',
  },
  {
    id: 'ecommerce-api',
    week: 2,
    title: '電商 API',
    path: '/week2/ecommerce-api',
    description: '了解前後端溝通與 API 串接的核心概念',
  },
  {
    id: 'react-components',
    week: 4,
    title: 'React 元件',
    path: '/week4/react-components',
    description: '認識 React 元件化開發與 Props 資料傳遞',
  },
  {
    id: 'react-router',
    week: 5,
    title: 'React Router',
    path: '/week5/react-router',
    description: '了解 React 路由機制與頁面切換原理',
  },
];

export function getCoursesByWeek(week: number): Course[] {
  return courses.filter((course) => course.week === week);
}

export function getAllWeeks(): number[] {
  const weeks = [...new Set(courses.map((course) => course.week))];
  return weeks.sort((a, b) => a - b);
}
