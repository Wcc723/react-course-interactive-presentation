import { SlideTemplate } from '../../template';
import { slideTitle, steps } from './slides';

export function ReactRouterSlide() {
  return <SlideTemplate title={slideTitle} steps={steps} />;
}

export { slideTitle, steps } from './slides';
