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
  // 未來可以在這裡加入更多課程
];

export function getCoursesByWeek(week: number): Course[] {
  return courses.filter((course) => course.week === week);
}

export function getAllWeeks(): number[] {
  const weeks = [...new Set(courses.map((course) => course.week))];
  return weeks.sort((a, b) => a - b);
}
