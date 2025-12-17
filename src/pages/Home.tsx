import { Link } from 'react-router-dom';
import { courses, getAllWeeks, getCoursesByWeek } from '../data/courses';

export function Home() {
  const weeks = getAllWeeks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-yellow-50/80 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-stone-800 mb-3">
            React 互動式教學簡報
          </h1>
          <p className="text-stone-600">選擇課程開始學習</p>
        </header>

        {weeks.map((week) => (
          <section key={week} className="mb-8">
            <h2 className="text-lg font-semibold text-stone-700 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm">
                {week}
              </span>
              Week {week}
            </h2>

            <div className="grid gap-4">
              {getCoursesByWeek(week).map((course) => (
                <Link
                  key={course.id}
                  to={course.path}
                  className="block p-5 bg-white/80 rounded-xl border border-amber-200/60 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
                        {course.title}
                      </h3>
                      {course.description && (
                        <p className="mt-1 text-sm text-stone-500">
                          {course.description}
                        </p>
                      )}
                    </div>
                    <svg
                      className="w-5 h-5 text-stone-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {courses.length === 0 && (
          <div className="text-center py-12 text-stone-500">
            目前沒有可用的課程
          </div>
        )}
      </div>
    </div>
  );
}
