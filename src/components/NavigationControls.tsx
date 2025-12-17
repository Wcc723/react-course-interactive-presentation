interface NavigationControlsProps {
  currentStep: number;
  totalSteps: number;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export function NavigationControls({
  currentStep,
  totalSteps,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: NavigationControlsProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-amber-100/50 to-orange-100/30 border-t border-amber-200/60">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-white/60 enabled:active:scale-95 text-stone-600 border border-transparent enabled:hover:border-amber-200/60"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>上一步</span>
      </button>

      {/* 步驟指示器 */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-200 ${
              i + 1 === currentStep
                ? 'w-6 bg-amber-500'
                : i + 1 < currentStep
                ? 'w-2 bg-amber-400'
                : 'w-2 bg-amber-200'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:bg-amber-600 enabled:active:scale-95 bg-amber-500 text-white shadow-sm"
      >
        <span>下一步</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
