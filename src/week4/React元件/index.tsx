import { SlideTemplate } from '../../template';
import { slideTitle, steps } from './slides';

export function ReactComponentSlide() {
  return <SlideTemplate title={slideTitle} steps={steps} />;
}

export { slideTitle, steps } from './slides';
