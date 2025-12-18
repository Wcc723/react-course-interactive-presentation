import type { Step } from '../../types/slide';
import {
  TraditionalDOMDiagram,
  MultiAccessProblemDiagram,
  SeparationOfConcernsDiagram,
  DataSyncBenefitDiagram,
} from './diagrams';
import { TraditionalDemo, SeparationDemo } from './demos';

export const slideTitle = '關注點分離 Separation of Concerns';

export const steps: Step[] = [
  // 第 1 頁：傳統 DOM 操作說明
  {
    id: 'traditional-dom',
    title: '傳統 JavaScript 直接操作 DOM',
    description:
      '在原始的 JavaScript 開發中，我們習慣直接操作 DOM 元素來更新畫面。這種方式非常直覺，程式碼直接對應到畫面上的元素。',
    preview: {
      type: 'component',
      component: TraditionalDOMDiagram,
    },
    codeBlocks: [
      {
        language: 'html',
        filename: 'index.html',
        code: `<h1 id="title">歡迎</h1>
<button id="btn">點擊</button>
<ul id="list"></ul>
<input id="input" />`,
      },
      {
        language: 'javascript',
        filename: 'app.js',
        code: `// 直接取得 DOM 元素
const title = document.getElementById('title');
const btn = document.getElementById('btn');
const list = document.getElementById('list');
const input = document.getElementById('input');

// 直接操作 DOM 更新畫面
btn.addEventListener('click', () => {
  title.textContent = '已點擊！';
  list.innerHTML = '<li>新項目</li>';
  input.value = '';
});`,
        highlightLines: [2, 3, 4, 5, 9, 10, 11],
      },
    ],
  },

  // 第 2 頁：多處存取的困境
  {
    id: 'multi-access-problem',
    title: '多處存取的困境',
    description:
      '當應用程式變複雜，多個功能需要存取同一份資料時，直接操作 DOM 的方式會變得難以維護。每個功能都需要知道 DOM 結構，修改時容易產生錯誤。',
    preview: {
      type: 'component',
      component: MultiAccessProblemDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: 'problem.js',
        code: `// 功能 A: 更新使用者名稱
function updateUserNameA() {
  document.getElementById('userName').textContent = 'Alice';
  document.getElementById('header-user').textContent = 'Alice';
  document.getElementById('sidebar-user').textContent = 'Alice';
}

// 功能 B: 也需要更新使用者名稱
function updateUserNameB() {
  document.getElementById('userName').textContent = 'Bob';
  // 糟糕！忘記更新 header-user 了...
  document.getElementById('sidebar-user').textContent = 'Bob';
}

// 問題：
// 1. 同樣的邏輯散落在多處
// 2. 容易遺漏某些 DOM 更新
// 3. 難以追蹤資料的真實狀態`,
        highlightLines: [3, 4, 5, 10, 11, 12, 16, 17, 18],
      },
    ],
  },

  // 第 3 頁：傳統方式互動示範（新增）
  {
    id: 'traditional-demo',
    title: '實際體驗：傳統方式的繁瑣',
    description:
      '試試看：你需要點擊多少個按鈕，才能讓所有 UI 區域都顯示新的使用者名稱？',
    preview: {
      type: 'component',
      component: TraditionalDemo,
    },
    // 無 codeBlocks，使用滿版預覽
  },

  // 第 4 頁：關注點分離概念
  {
    id: 'separation-of-concerns',
    title: '關注點分離：資料與畫面分離',
    description:
      '關注點分離的核心概念是：將「資料狀態」與「畫面呈現」分開管理。資料集中存放在一個地方（State），畫面根據資料來渲染，而不是直接操作 DOM。',
    preview: {
      type: 'component',
      component: SeparationOfConcernsDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: 'state.js',
        code: `// 資料狀態：單一資料來源
const state = {
  userName: 'Guest',
  count: 0,
  items: []
};`,
        highlightLines: [1, 2, 3, 4, 5],
      },
      {
        language: 'javascript',
        filename: 'render.js',
        code: `// 畫面呈現：根據資料渲染
function render() {
  // 所有 UI 都從 state 取得資料
  document.getElementById('title').textContent = state.userName;
  document.getElementById('list').textContent = state.userName;
  document.getElementById('stats').textContent = state.userName;
}

// 更新資料後，重新渲染畫面
function updateUserName(newName) {
  state.userName = newName;  // 只更新資料
  render();                   // 畫面自動同步
}`,
        highlightLines: [4, 5, 6, 11, 12],
      },
    ],
  },

  // 第 5 頁：資料聯動優點
  {
    id: 'data-sync-benefit',
    title: '優點：資料更新，畫面同步聯動',
    description:
      '採用關注點分離後，只需要更新資料狀態，所有使用該資料的 UI 都會自動同步更新。這正是 React 等現代框架的核心設計理念。',
    preview: {
      type: 'component',
      component: DataSyncBenefitDiagram,
    },
    codeBlocks: [
      {
        language: 'tsx',
        filename: 'App.tsx (React)',
        code: `import { useState } from 'react';

function App() {
  // 資料狀態：單一來源
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 多個 UI 使用同一份資料 */}
      <Header count={count} />
      <Sidebar count={count} />
      <Card count={count} />
      <Footer count={count} />

      {/* 更新資料，所有 UI 自動同步 */}
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </>
  );
}`,
        highlightLines: [5, 10, 11, 12, 13, 16],
      },
      {
        language: 'tsx',
        filename: 'components.tsx',
        code: `// 每個組件只負責「呈現」資料
function Header({ count }) {
  return <header>數量：{count}</header>;
}

function Sidebar({ count }) {
  return <aside>目前：{count}</aside>;
}

function Card({ count }) {
  return <div className="card">計數：{count}</div>;
}

function Footer({ count }) {
  return <footer>總計：{count}</footer>;
}`,
        highlightLines: [2, 3, 6, 7, 10, 11, 14, 15],
      },
    ],
  },

  // 第 6 頁：關注點分離互動示範（新增）
  {
    id: 'separation-demo',
    title: '實際體驗：關注點分離的便利',
    description:
      '試試看：只需要在輸入框中修改資料，所有 UI 區域就會自動同步更新！',
    preview: {
      type: 'component',
      component: SeparationDemo,
    },
    // 無 codeBlocks，使用滿版預覽
  },
];
