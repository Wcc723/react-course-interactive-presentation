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
];

export function getCoursesByWeek(week: number): Course[] {
  return courses.filter((course) => course.week === week);
}

export function getAllWeeks(): number[] {
  const weeks = [...new Set(courses.map((course) => course.week))];
  return weeks.sort((a, b) => a - b);
}
