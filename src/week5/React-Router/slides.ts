import type { Step } from '../../types/slide';
import {
  WhatIsRoutingDiagram,
  RouterTableDiagram,
  PageComponentDiagram,
  RoutingFlowDiagram,
  StateIsolationDiagram,
} from './diagrams';
import { RoutingSwitchDemo, StateIsolationDemo } from './demos';

export const slideTitle = 'React Router';

export const steps: Step[] = [
  // 1. 什麼是路由
  {
    id: 'what-is-routing',
    title: '什麼是路由',
    description: '當使用者切換網址時，網頁內容會對應改變。這就是「路由 (Routing)」的核心概念。',
    preview: {
      type: 'component',
      component: WhatIsRoutingDiagram,
    },
    codeBlocks: [
      {
        language: 'typescript',
        filename: '網址與頁面對應',
        code: `// 傳統網頁：每個網址對應一個 HTML 檔案
mysite.com/           → index.html
mysite.com/about      → about.html
mysite.com/products   → products.html

// SPA 單頁應用：網址對應 React 元件
mysite.com/           → <Home />
mysite.com/about      → <About />
mysite.com/products   → <Products />

// 頁面切換時不需重新載入整個網頁！`,
      },
    ],
  },

  // 2. React Router 結構一：路由表
  {
    id: 'route-table',
    title: '路由表 (Route Table)',
    description: 'React Router 的第一個核心結構：路由表。定義「哪個網址對應哪個元件」。',
    preview: {
      type: 'component',
      component: RouterTableDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'router.tsx',
        code: `import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';

// 建立路由表
export const router = createBrowserRouter([
  {
    path: '/',           // 網址路徑
    element: <Home />,   // 對應的元件
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);`,
        highlightLines: [8, 9, 10, 11, 12],
      },
    ],
  },

  // 3. React Router 結構二：頁面元件
  {
    id: 'page-components',
    title: '頁面元件 (Page Components)',
    description: 'React Router 的第二個核心結構：頁面元件。每個元件負責渲染對應頁面的內容。',
    preview: {
      type: 'component',
      component: PageComponentDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'pages/Home.tsx',
        code: `// 每個頁面都是一個獨立的 React 元件
export function Home() {
  return (
    <div>
      <h1>🏠 首頁</h1>
      <p>歡迎來到我們的網站！</p>
      <button>了解更多</button>
    </div>
  );
}`,
        highlightLines: [2, 3, 4, 5, 6, 7, 8, 9],
      },
      {
        language: 'tsx',
        filename: 'pages/About.tsx',
        code: `export function About() {
  return (
    <div>
      <h1>👤 關於我們</h1>
      <p>我們是一個充滿熱情的團隊</p>
      <ul>
        <li>團隊介紹</li>
        <li>公司歷史</li>
        <li>願景使命</li>
      </ul>
    </div>
  );
}`,
      },
    ],
  },

  // 4. 路由運作流程
  {
    id: 'routing-flow',
    title: '路由運作流程',
    description: '當使用者點擊連結或輸入網址時，React Router 會比對路由表，找到對應的元件並渲染。',
    preview: {
      type: 'component',
      component: RoutingFlowDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'main.tsx',
        code: `import { RouterProvider } from 'react-router-dom';
import { router } from './router';

// 在應用程式根部提供路由
function App() {
  return <RouterProvider router={router} />;
}

// 流程說明：
// 1. 使用者進入 /products
// 2. RouterProvider 接收到網址
// 3. 比對 router 中的路由表
// 4. 找到 path: '/products'
// 5. 渲染對應的 <Products /> 元件`,
        highlightLines: [6],
      },
    ],
  },

  // 5. 實際操作案例（互動示範）
  {
    id: 'routing-demo',
    title: '實際體驗：路由切換',
    description: '試試看：點擊不同的導航按鈕，觀察網址如何變化，以及路由表如何匹配對應的元件！',
    preview: {
      type: 'component',
      component: RoutingSwitchDemo,
    },
    // 省略 codeBlocks，使用滿版預覽模式
  },

  // 6. 狀態獨立性說明
  {
    id: 'state-isolation-explain',
    title: '頁面狀態獨立性',
    description: '重要概念：每個頁面元件都是獨立運作的，切換頁面時舊頁面會被卸載，狀態也會一起消失。',
    preview: {
      type: 'component',
      component: StateIsolationDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'PageA.tsx',
        code: `function PageA() {
  // 這個 state 只存在於 PageA 元件中
  const [input, setInput] = useState('');

  return (
    <div>
      <h1>A 頁面</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

// 當切換到其他頁面時：
// 1. PageA 元件被卸載 (unmount)
// 2. input state 被清除
// 3. 再次回到 A 頁面時，元件重新掛載
// 4. input state 重新初始化為 ''`,
        highlightLines: [2, 3, 16, 17, 18, 19],
      },
    ],
  },

  // 7. 狀態獨立性互動示範
  {
    id: 'state-isolation-demo',
    title: '實際體驗：狀態獨立',
    description: '試試看：在 A 頁面輸入文字，切換到 B 頁面再切回來。你會發現輸入的內容消失了！',
    preview: {
      type: 'component',
      component: StateIsolationDemo,
    },
    // 省略 codeBlocks，使用滿版預覽模式
  },
];
