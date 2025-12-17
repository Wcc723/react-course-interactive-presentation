import { MenuButton } from './MenuButton';

interface SlideHeaderProps {
  title: string;
  currentStep: number;
  totalSteps: number;
  stepTitle?: string;
}

export function SlideHeader({
  title,
  currentStep,
  totalSteps,
  stepTitle,
}: SlideHeaderProps) {
  return (
    <header className="px-6 py-4 bg-gradient-to-r from-amber-100/80 to-orange-100/60 border-b border-amber-200/60">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MenuButton />
          <div className="h-6 w-px bg-amber-300/60" />
          <div>
            <h1 className="text-lg font-semibold text-stone-800">{title}</h1>
            {stepTitle && (
              <p className="mt-0.5 text-sm text-stone-600">{stepTitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-stone-500">步驟</span>
          <span className="px-3 py-1 text-sm font-bold text-stone-700 bg-white/60 rounded-full border border-amber-200/60">
            {currentStep} / {totalSteps}
          </span>
        </div>
      </div>
    </header>
  );
}
