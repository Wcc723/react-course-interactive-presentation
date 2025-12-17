import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courses, getAllWeeks, getCoursesByWeek } from '../data/courses';

export function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const weeks = getAllWeeks();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/20 text-stone-600 hover:text-stone-800"
        aria-label="課程選單"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span>課程</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-amber-200/60 overflow-hidden z-50">
          <div className="p-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 hover:bg-amber-50 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              課程首頁
            </Link>
          </div>

          <div className="border-t border-amber-100">
            {weeks.map((week) => (
              <div key={week} className="p-2">
                <div className="px-3 py-1 text-xs font-semibold text-stone-400 uppercase">
                  Week {week}
                </div>
                {getCoursesByWeek(week).map((course) => (
                  <Link
                    key={course.id}
                    to={course.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm text-stone-700 hover:bg-amber-50 rounded-lg transition-colors"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {courses.length === 0 && (
            <div className="p-4 text-sm text-stone-400 text-center">
              尚無課程
            </div>
          )}
        </div>
      )}
    </div>
  );
}
