import type { Step } from '../../types/slide';
import {
  SyncExecutionDiagram,
  EventQueueDiagram,
  ApiConnectionDiagram,
  AsyncAwaitDiagram,
  PromiseDiagram,
  AsyncPromiseDiagram,
} from './diagrams';
import { BlockingDemo, AsyncAwaitDemo } from './demos';

export const slideTitle = '非同步 JavaScript';

export const steps: Step[] = [
  // 1. JavaScript 同步執行
  {
    id: 'sync-execution',
    title: 'JavaScript 同步執行',
    description:
      'JavaScript 本質上是「同步」的程式語言。程式碼會從上到下，一行一行依序執行，前一行執行完才會執行下一行。',
    preview: {
      type: 'component',
      component: SyncExecutionDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: 'sync-example.js',
        code: `// JavaScript 同步執行範例
console.log("第一行");  // 1. 先執行

const a = 10;           // 2. 接著執行
const b = 20;           // 3. 然後執行

console.log(a + b);     // 4. 再執行 → 輸出 30

console.log("結束");    // 5. 最後執行

// 輸出順序：
// "第一行"
// 30
// "結束"`,
        highlightLines: [2, 4, 5, 7, 9],
      },
    ],
  },

  // 2. 阻塞案例 - Alert
  {
    id: 'blocking-demo',
    title: '同步阻塞示範',
    description:
      '試試看：點擊「執行程式碼」按鈕，觀察 alert() 如何阻塞整個程式執行。在彈出視窗關閉前，後續程式碼都不會執行。',
    preview: {
      type: 'component',
      component: BlockingDemo,
    },
    // 滿版預覽模式
  },

  // 3. setTimeout 與事件佇列
  {
    id: 'event-queue',
    title: 'setTimeout 與事件佇列',
    description:
      '當遇到非同步事件如 setTimeout，JavaScript 會將 callback 加入「事件佇列」，等待所有同步程式碼執行完畢後才執行。即使設定 0ms 延遲也一樣！',
    preview: {
      type: 'component',
      component: EventQueueDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: 'setTimeout-example.js',
        code: `console.log(1);        // 同步 → 立即執行

setTimeout(() => {
  console.log(2);      // 非同步 → 進入事件佇列
}, 0);                 // 即使 0ms 也是非同步！

console.log(3);        // 同步 → 立即執行
console.log(4);        // 同步 → 立即執行

// 輸出順序：1 → 3 → 4 → 2
//
// 為什麼？
// 1. 同步程式碼先全部執行完（1, 3, 4）
// 2. 事件佇列的 callback 才執行（2）`,
        highlightLines: [1, 3, 4, 7, 8, 10],
      },
    ],
  },

  // 4. API 串接概念
  {
    id: 'api-connection',
    title: 'API 串接的挑戰',
    description:
      '在與後端 API 串接時，我們無法預期資料何時回傳。網路延遲可能是 50ms，也可能是 3 秒。程式碼該如何「等待」資料？',
    preview: {
      type: 'component',
      component: ApiConnectionDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: 'api-problem.js',
        code: `// ❌ 這樣寫行不通！
const data = fetch('/api/users');  // 發送請求
console.log(data);  // undefined 或 Promise

// 為什麼？
// fetch() 是非同步的，它不會等待回應
// 程式碼繼續往下執行時，資料還沒回來

// ❓ 如何讓程式碼「等待」資料回來？
// 答案：使用 Promise + Async/Await！`,
        highlightLines: [2, 3, 7, 8],
      },
    ],
  },

  // 5. Async/Await 介紹
  {
    id: 'async-await',
    title: 'Async/Await 語法',
    description:
      'Async/Await 是 ES2017 引入的語法糖，讓非同步程式碼看起來像同步的。await 會「暫停」函式執行，等待 Promise 完成後才繼續。',
    preview: {
      type: 'component',
      component: AsyncAwaitDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: 'async-await.js',
        code: `// async 宣告這是一個非同步函式
async function fetchUserData() {
  // await 會等待 Promise 完成
  const response = await fetch('/api/user');
  const data = await response.json();

  console.log(data);  // 資料已經拿到了！
  return data;
}

// 呼叫 async 函式
fetchUserData();

// 特點：
// 1. 程式碼看起來是「同步」的寫法
// 2. 實際執行是「非同步」的
// 3. 更容易閱讀和維護`,
        highlightLines: [2, 4, 5, 7],
      },
    ],
  },

  // 6. Promise 基礎
  {
    id: 'promise-basics',
    title: 'Promise 基礎',
    description:
      'Async 函式必須搭配 Promise 才能運作。Promise 代表一個「未來會完成」的操作，有三種狀態：Pending（等待中）、Fulfilled（成功）、Rejected（失敗）。',
    preview: {
      type: 'component',
      component: PromiseDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: 'promise-example.js',
        code: `// 建立 Promise
const promise = new Promise((resolve, reject) => {
  // 模擬非同步操作
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve('操作成功！');  // 成功時調用
    } else {
      reject('操作失敗');     // 失敗時調用
    }
  }, 1000);
});

// 使用 Promise
promise
  .then(result => console.log(result))  // 成功
  .catch(error => console.log(error));  // 失敗`,
        highlightLines: [2, 8, 10, 17, 18],
      },
    ],
  },

  // 7. 完整 Async + Promise 程式碼
  {
    id: 'async-promise-complete',
    title: 'Async + Promise 完整範例',
    description:
      '結合 Async/Await 與 Promise，我們可以優雅地處理非同步操作。這是現代 JavaScript 最常用的非同步處理模式。',
    preview: {
      type: 'component',
      component: AsyncPromiseDiagram,
    },
    codeBlocks: [
      {
        language: 'javascript',
        filename: 'complete-example.js',
        code: `// 1. 建立回傳 Promise 的函式（模擬 API）
function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: '小明' });
      } else {
        reject(new Error('ID 無效'));
      }
    }, 1000);
  });
}

// 2. 使用 async/await 調用
async function getUserData() {
  try {
    console.log('開始獲取資料...');

    const user = await fetchData(1);  // 等待 Promise
    console.log('用戶資料:', user);

    return user;
  } catch (error) {
    console.error('錯誤:', error.message);
  }
}

// 3. 執行
getUserData();`,
        highlightLines: [3, 6, 15, 19, 20],
      },
    ],
  },

  // 8. 互動示範
  {
    id: 'interactive-demo',
    title: '實際體驗：Async/Await 流程',
    description:
      '點擊按鈕，觀察完整的 Async/Await + Promise 執行流程。每個步驟會依序顯示，讓你了解非同步程式碼的執行順序。',
    preview: {
      type: 'component',
      component: AsyncAwaitDemo,
    },
    // 滿版預覽模式
  },
];
