import type { Step } from '../../types/slide';
import {
  ComputerComponentsDiagram,
  WhyComponentCodeLengthDiagram,
  WhyComponentLogicSplitDiagram,
  WebpageComponentsDiagram,
  PropsDataFlowDiagram,
  PropsCodeStructureDiagram,
} from './diagrams';
import { PropsDemo, ComponentReuseDemo, ComponentHierarchyDemo, RouterDemo, ButtonReusePreview } from './demos';

export const slideTitle = 'React 元件 Components';

export const steps: Step[] = [
  // 第 1 頁：電腦元件組成說明
  {
    id: 'computer-components',
    title: '認識元件：以電腦為例',
    description:
      'CPU、記憶體、主機板、鍵盤、滑鼠...這些都是電腦的組成元件。每個元件負責專屬的功能，讓電腦能良好地分工運作。',
    preview: {
      type: 'component',
      component: ComputerComponentsDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: '電腦元件比喻',
        code: `// 電腦是由多個元件組成的
const 電腦 = {
  CPU: '負責運算處理',
  記憶體: '暫存執行中的資料',
  主機板: '連接所有元件的橋樑',
  顯示卡: '處理並輸出畫面',
  鍵盤: '接收使用者輸入',
  螢幕: '顯示輸出結果'
};

// 每個元件各司其職
// 透過介面互相連接、傳遞資料`,
        highlightLines: [2, 3, 4, 5, 6, 7],
      },
    ],
  },

  // 第 2 頁：為什麼要用元件 - 程式碼太長
  {
    id: 'why-component-length',
    title: '為什麼需要元件？(1) 程式碼太長',
    description:
      '當所有程式碼都寫在同一個檔案時，檔案會變得非常龐大，難以閱讀和維護。將程式碼拆分成多個元件，可以讓每個檔案保持簡潔。',
    preview: {
      type: 'component',
      component: WhyComponentCodeLengthDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'Before: App.tsx（500+ 行）',
        code: `// 😰 所有程式碼擠在一個檔案
function App() {
  // Header 的邏輯...（50 行）
  // Menu 的邏輯...（80 行）
  // ProductList 的邏輯...（150 行）
  // Cart 的邏輯...（100 行）
  // Footer 的邏輯...（50 行）
  // ...更多更多

  return (
    <div>
      {/* 500+ 行的 JSX */}
    </div>
  );
}`,
        highlightLines: [3, 4, 5, 6, 7],
      },
      {
        language: 'tsx',
        filename: 'After: 拆分成多個檔案',
        code: `// ✓ App.tsx（30 行）
import { Header } from './Header';
import { ProductList } from './ProductList';
import { Cart } from './Cart';
import { Footer } from './Footer';

function App() {
  return (
    <div>
      <Header />       {/* 50 行 */}
      <ProductList />  {/* 150 行 */}
      <Cart />         {/* 100 行 */}
      <Footer />       {/* 50 行 */}
    </div>
  );
}`,
        highlightLines: [2, 3, 4, 5, 10, 11, 12, 13],
      },
    ],
  },

  // 第 4 頁：為什麼要用元件 - 重複使用
  {
    id: 'why-component-reuse',
    title: '為什麼需要元件？(2) 需要重複使用',
    description:
      '網站中常有相同的 UI 元素重複出現（如按鈕、卡片）。使用元件可以「定義一次，到處使用」，透過 Props 呈現不同樣式。',
    preview: {
      type: 'component',
      component: ButtonReusePreview,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'Button.tsx - 定義一次',
        code: `// 只需要定義一次 Button 元件
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {children}
    </button>
  );
}

export { Button };`,
        highlightLines: [2, 6],
      },
      {
        language: 'tsx',
        filename: '多處使用相同元件',
        code: `// 在任何地方都可以使用
import { Button } from './Button';

function App() {
  return (
    <div>
      <Button onClick={handleSave}>儲存</Button>
      <Button onClick={handleEdit}>編輯</Button>
      <Button onClick={handleDelete}>刪除</Button>
      <Button onClick={handleCancel}>取消</Button>
    </div>
  );
}
// 改 Button.tsx，四個按鈕都會更新！`,
        highlightLines: [7, 8, 9, 10, 14],
      },
    ],
  },

  // 第 5 頁：元件重用互動示範
  {
    id: 'component-reuse-demo',
    title: '實際體驗：元件重複使用',
    description:
      '觀察下方四張產品卡片，它們都使用同一個 ProductCard 元件，只是傳入不同的資料（props）。',
    preview: {
      type: 'component',
      component: ComponentReuseDemo,
    },
    // 無 codeBlocks，使用滿版預覽
  },

  // 第 6 頁：為什麼要用元件 - 邏輯拆分
  {
    id: 'why-component-logic',
    title: '為什麼需要元件？(3) 邏輯拆分',
    description:
      '不同功能應該放在不同的元件中，讓每個元件只負責一件事。這樣程式碼更容易理解、測試和維護。',
    preview: {
      type: 'component',
      component: WhyComponentLogicSplitDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: '每個元件負責獨立功能',
        code: `// Header.tsx - 只處理導航相關
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Header 專屬的狀態和邏輯
  return <header>...</header>;
}

// Cart.tsx - 只處理購物車相關
function Cart() {
  const [items, setItems] = useState([]);
  // Cart 專屬的狀態和邏輯
  return <aside>...</aside>;
}

// ProductList.tsx - 只處理商品列表
function ProductList() {
  const [products, setProducts] = useState([]);
  // ProductList 專屬的狀態和邏輯
  return <main>...</main>;
}`,
        highlightLines: [2, 3, 9, 10, 16, 17],
      },
    ],
  },

  // 第 7 頁：為什麼要用元件 - React Router（互動示範）
  {
    id: 'why-component-router',
    title: '實際體驗：頁面路由',
    description:
      '使用 React Router 時，每個網址對應一個元件（頁面）。點擊下方模擬瀏覽器的導航連結，體驗路由切換！',
    preview: {
      type: 'component',
      component: RouterDemo,
    },
    // 無 codeBlocks，使用滿版預覽
  },

  // 第 8 頁：網頁元件結構範例
  {
    id: 'webpage-components',
    title: 'React 元件結構範例',
    description:
      '一個完整的電商網站，可以拆分成多個元件：Header、Sidebar、ProductCard、Cart、Footer 等。元件之間可以嵌套使用。',
    preview: {
      type: 'component',
      component: WebpageComponentsDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'App.tsx',
        code: `function App() {
  return (
    <div className="layout">
      <Header>
        <Navbar />        {/* 嵌套子元件 */}
      </Header>

      <Sidebar>
        <Menu />          {/* 嵌套子元件 */}
        <Filter />
      </Sidebar>

      <Main>
        <ProductCard />   {/* 重複使用 */}
        <ProductCard />
        <ProductCard />
      </Main>

      <Cart>
        <CartItem />      {/* 嵌套子元件 */}
        <CartItem />
        <Total />
      </Cart>

      <Footer />
    </div>
  );
}`,
        highlightLines: [4, 5, 8, 9, 10, 14, 15, 16, 20, 21, 22],
      },
    ],
  },

  // 第 9 頁：元件層級結構互動示範
  {
    id: 'component-hierarchy-demo',
    title: '實際體驗：元件層級結構',
    description:
      '點擊元件方塊，了解父子元件的關係。記住：Props 只能從父元件傳給子元件，不能跨層級傳遞！',
    preview: {
      type: 'component',
      component: ComponentHierarchyDemo,
    },
    // 無 codeBlocks，使用滿版預覽
  },

  // 第 10 頁：Props 資料傳輸概念
  {
    id: 'props-data-flow',
    title: 'Props：元件間的資料傳輸',
    description:
      'React 元件之間透過 Props 傳遞資料。就像電腦元件一樣，只能從外層傳到內層（單向資料流），不能跨層級傳輸。',
    preview: {
      type: 'component',
      component: PropsDataFlowDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'Props 傳遞範例',
        code: `// 父元件：傳遞 Props
function App() {
  const person = { name: 'Alice', age: 25 };

  return (
    // 透過屬性傳遞資料
    <PersonCard person={person} />
  );
}

// 子元件：接收 Props
function PersonCard({ person }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>年齡：{person.age}</p>
    </div>
  );
}`,
        highlightLines: [3, 7, 12, 15, 16],
      },
    ],
  },

  // 第 11 頁：Props 程式碼結構詳解
  {
    id: 'props-code-structure',
    title: 'Props 程式碼結構詳解',
    description:
      '外層用「屬性」傳入資料，內層用「參數」接收。這是 React 元件之間傳遞資料的標準方式。',
    preview: {
      type: 'component',
      component: PropsCodeStructureDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: '傳遞 Props（外層元件）',
        code: `// App.tsx - 外層元件
const person = { name: 'Alice', age: 25 };

// 使用「屬性」傳遞資料
<PersonCard person={person} />
//           ^^^^^^        ^^^^^^^^
//           屬性名稱       傳入的值`,
        highlightLines: [5, 6, 7],
      },
      {
        language: 'tsx',
        filename: '接收 Props（內層元件）',
        code: `// PersonCard.tsx - 內層元件

// 使用「解構」接收 Props
function PersonCard({ person }) {
  //                  ^^^^^^^^
  //                  從 props 解構出 person

  // 等同於：
  // function PersonCard(props) {
  //   const person = props.person;

  return <div>{person.name}</div>;
}`,
        highlightLines: [4, 5, 6, 12],
      },
    ],
  },

  // 第 12 頁：Props 互動示範
  {
    id: 'props-demo',
    title: '實際體驗：Props 資料傳遞',
    description:
      '試試看：在左側「父元件」修改資料，觀察右側「子元件」如何自動接收更新後的 Props 並重新渲染！',
    preview: {
      type: 'component',
      component: PropsDemo,
    },
    // 無 codeBlocks，使用滿版預覽
  },
];
