import { SlideTemplate } from './template';
import { exampleSteps } from './data/exampleSlide';

function App() {
  return (
    <SlideTemplate
      title="React 互動式教學簡報"
      steps={exampleSteps}
    />
  );
}

export default App;
