import { useState } from 'react';

// Button 元件重用展示（用於說明元件可帶入不同 props 呈現不同樣式）
export function ButtonReusePreview() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 p-6">
      <div className="w-full max-w-md">
        {/* 標題 */}
        <div className="text-center mb-6">
          <div className="text-sm text-stone-500 mb-1">同一個 Button 元件</div>
          <div className="text-lg font-bold text-stone-700">透過 Props 呈現不同樣式</div>
        </div>

        {/* 按鈕展示區 */}
        <div className="space-y-4">
          {/* 不同顏色 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <div className="text-xs text-stone-400 mb-3">不同顏色 (color prop)</div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                主要按鈕
              </button>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                成功
              </button>
              <button className="px-4 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors">
                警告
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
                危險
              </button>
            </div>
          </div>

          {/* 不同尺寸 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <div className="text-xs text-stone-400 mb-3">不同尺寸 (size prop)</div>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                小型
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium">
                中型
              </button>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-xl text-base font-medium">
                大型
              </button>
            </div>
          </div>

          {/* 不同變體 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <div className="text-xs text-stone-400 mb-3">不同變體 (variant prop)</div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium">
                實心
              </button>
              <button className="px-4 py-2 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg font-medium">
                外框
              </button>
              <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium">
                淡色
              </button>
              <button className="px-4 py-2 text-blue-500 rounded-lg font-medium hover:bg-blue-50">
                文字
              </button>
            </div>
          </div>

          {/* 帶圖示 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <div className="text-xs text-stone-400 mb-3">帶圖示 (icon prop)</div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium flex items-center gap-2">
                <span>💾</span> 儲存
              </button>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg font-medium flex items-center gap-2">
                <span>✓</span> 確認
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium flex items-center gap-2">
                <span>🗑️</span> 刪除
              </button>
            </div>
          </div>
        </div>

        {/* 底部說明 */}
        <div className="mt-4 text-center text-sm text-stone-500">
          所有按鈕都使用同一個 <code className="px-1.5 py-0.5 bg-stone-200 rounded text-stone-700">&lt;Button /&gt;</code> 元件
        </div>
      </div>
    </div>
  );
}

// 模擬的 PersonCard 子元件（用於 Props 示範）
function PersonCard({ person }: { person: { name: string; age: number; job: string } }) {
  return (
    <div className="p-4 bg-white rounded-xl border-2 border-amber-300 shadow-sm">
      <div className="text-xs text-stone-400 mb-2">PersonCard 元件（子元件）</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-stone-500 text-sm">姓名：</span>
          <span className="text-lg font-bold text-stone-800">{person.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-stone-500 text-sm">年齡：</span>
          <span className="text-lg font-bold text-blue-600">{person.age}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-stone-500 text-sm">職業：</span>
          <span className="text-lg font-bold text-emerald-600">{person.job}</span>
        </div>
      </div>
    </div>
  );
}

// Props 傳遞互動示範
export function PropsDemo() {
  const [person, setPerson] = useState({
    name: 'Alice',
    age: 25,
    job: '前端工程師',
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-6 p-4 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>互動說明：</strong>在左側「父元件」修改資料，觀察右側「子元件」如何自動更新。
          這展示了 Props 的單向資料流。
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 父元件區域 */}
        <div className="p-5 rounded-xl bg-blue-50 border-2 border-blue-200">
          <div className="text-xs text-blue-500 mb-3 font-semibold">App 元件（父元件）- 資料來源</div>

          {/* State 資料編輯區 */}
          <div className="p-4 bg-white rounded-lg border border-blue-200 mb-4">
            <div className="text-xs text-stone-400 mb-3">State 資料</div>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-stone-600 block mb-1">姓名：</label>
                <input
                  type="text"
                  value={person.name}
                  onChange={(e) => setPerson({ ...person, name: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-stone-600 block mb-1">年齡：</label>
                <input
                  type="number"
                  value={person.age}
                  onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm text-stone-600 block mb-1">職業：</label>
                <input
                  type="text"
                  value={person.job}
                  onChange={(e) => setPerson({ ...person, job: e.target.value })}
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* 程式碼預覽 */}
          <div className="p-3 bg-stone-800 rounded-lg text-sm font-mono">
            <div className="text-stone-400">// 使用 Props 傳遞資料</div>
            <div className="text-white">
              <span className="text-yellow-400">&lt;PersonCard</span>
              <span className="text-cyan-300"> person</span>
              <span className="text-white">=</span>
              <span className="text-green-400">{'{'}person{'}'}</span>
              <span className="text-yellow-400"> /&gt;</span>
            </div>
          </div>
        </div>

        {/* 子元件區域 */}
        <div className="p-5 rounded-xl bg-amber-50 border-2 border-amber-200">
          <div className="text-xs text-amber-600 mb-3 font-semibold">PersonCard 元件（子元件）- 接收 Props</div>

          {/* 子元件渲染結果 */}
          <PersonCard person={person} />

          {/* 程式碼預覽 */}
          <div className="mt-4 p-3 bg-stone-800 rounded-lg text-sm font-mono">
            <div className="text-stone-400">// 接收 Props</div>
            <div className="text-white">
              <span className="text-purple-400">function</span>
              <span className="text-yellow-400"> PersonCard</span>
              <span className="text-white">(</span>
              <span className="text-green-400">{'{'}person{'}'}</span>
              <span className="text-white">) {'{'}</span>
            </div>
            <div className="text-white pl-4">
              <span className="text-purple-400">return</span>
              <span> &lt;div&gt;{'{'}person.name{'}'}&lt;/div&gt;</span>
            </div>
            <div className="text-white">{'}'}</div>
          </div>
        </div>
      </div>

      {/* 資料流示意 */}
      <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
        <div className="flex items-center justify-center gap-4">
          <div className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold">
            父元件 State
          </div>
          <div className="text-2xl text-amber-500">→</div>
          <div className="px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-semibold">
            Props 傳遞
          </div>
          <div className="text-2xl text-amber-500">→</div>
          <div className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-sm font-semibold">
            子元件渲染
          </div>
        </div>
        <p className="text-center text-sm text-stone-600 mt-3">
          資料永遠是單向流動：從父元件流向子元件，子元件無法直接修改父元件的資料
        </p>
      </div>
    </div>
  );
}

// 元件重用示範
export function ComponentReuseDemo() {
  const [products, setProducts] = useState([
    { id: 1, name: 'React 入門課程', price: 1200, tag: '熱門' },
    { id: 2, name: 'TypeScript 進階', price: 1500, tag: '推薦' },
  ]);

  const [nextId, setNextId] = useState(3);

  const tagOptions = ['熱門', '推薦', '新上架', '特價'];

  const addProduct = () => {
    const randomNames = ['Vue.js 實戰', 'Node.js 後端', 'CSS 動畫', 'Python 入門', 'SQL 資料庫', 'Docker 容器'];
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomPrice = Math.floor(Math.random() * 1000 + 500);
    const randomTag = tagOptions[Math.floor(Math.random() * tagOptions.length)];

    setProducts([...products, { id: nextId, name: randomName, price: randomPrice, tag: randomTag }]);
    setNextId(nextId + 1);
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-4 p-4 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>互動說明：</strong>點擊「新增課程」按鈕或「×」刪除按鈕，觀察元件如何重複使用。
          所有卡片都使用同一個 ProductCard 元件！
        </p>
      </div>

      {/* 操作按鈕 */}
      <div className="mb-4 flex items-center gap-4">
        <button
          onClick={addProduct}
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-semibold flex items-center gap-2"
        >
          <span className="text-lg">+</span> 新增課程
        </button>
        <div className="text-sm text-stone-500">
          目前有 <span className="font-bold text-emerald-600">{products.length}</span> 個 ProductCard 元件
        </div>
      </div>

      {/* 元件定義展示 */}
      <div className="mb-4 p-3 bg-stone-800 rounded-xl">
        <div className="text-xs text-stone-400 mb-1">// 只需要定義一次 ProductCard 元件，可重複使用</div>
        <div className="text-white font-mono text-sm">
          <span className="text-purple-400">function</span>
          <span className="text-yellow-400"> ProductCard</span>
          <span>(</span>
          <span className="text-green-400">{'{'}name, price, tag{'}'}</span>
          <span>) {'{'} ... {'}'}</span>
        </div>
      </div>

      {/* 產品卡片列表 */}
      <div className="grid grid-cols-2 gap-4 min-h-[200px]">
        {products.length === 0 ? (
          <div className="col-span-2 flex items-center justify-center p-8 bg-stone-100 rounded-xl border-2 border-dashed border-stone-300">
            <div className="text-center text-stone-400">
              <div className="text-3xl mb-2">📦</div>
              <div>點擊上方按鈕新增課程卡片</div>
            </div>
          </div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-white rounded-xl border-2 border-stone-200 shadow-sm hover:shadow-md transition-all relative group"
            >
              {/* 刪除按鈕 */}
              <button
                onClick={() => removeProduct(product.id)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-sm font-bold hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
              >
                ×
              </button>

              <div className="flex justify-between items-start mb-3">
                <span className="text-lg font-bold text-stone-800">{product.name}</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-semibold">
                  {product.tag}
                </span>
              </div>
              <div className="text-2xl font-bold text-emerald-600">NT$ {product.price.toLocaleString()}</div>
              <div className="mt-3 text-xs text-stone-400 font-mono">
                &lt;ProductCard name="{product.name}" /&gt;
              </div>
            </div>
          ))
        )}
      </div>

      {/* 好處說明 */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-xl text-center">
          <div className="text-3xl mb-2">📝</div>
          <div className="font-semibold text-blue-700">定義一次</div>
          <div className="text-sm text-stone-600">只需撰寫一個元件</div>
        </div>
        <div className="p-4 bg-emerald-50 rounded-xl text-center">
          <div className="text-3xl mb-2">♻️</div>
          <div className="font-semibold text-emerald-700">重複使用</div>
          <div className="text-sm text-stone-600">多處使用同一元件</div>
        </div>
        <div className="p-4 bg-amber-50 rounded-xl text-center">
          <div className="text-3xl mb-2">🔧</div>
          <div className="font-semibold text-amber-700">統一維護</div>
          <div className="text-sm text-stone-600">改一處全部更新</div>
        </div>
      </div>
    </div>
  );
}

// 路由模擬瀏覽器示範
export function RouterDemo() {
  const [currentPath, setCurrentPath] = useState('/');

  const pages: Record<string, { title: string; color: string; content: React.ReactNode }> = {
    '/': {
      title: '首頁',
      color: 'bg-blue-500',
      content: (
        <div className="text-center">
          <div className="text-6xl mb-4">🏠</div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">歡迎來到首頁</h2>
          <p className="text-stone-600">這是 Home 元件的內容</p>
        </div>
      ),
    },
    '/products': {
      title: '商品列表',
      color: 'bg-emerald-500',
      content: (
        <div className="text-center">
          <div className="text-6xl mb-4">🛍️</div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">商品列表</h2>
          <p className="text-stone-600">這是 Products 元件的內容</p>
          <div className="mt-4 flex justify-center gap-2">
            {['商品A', '商品B', '商品C'].map((item) => (
              <div key={item} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    '/cart': {
      title: '購物車',
      color: 'bg-amber-500',
      content: (
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">購物車</h2>
          <p className="text-stone-600">這是 Cart 元件的內容</p>
          <div className="mt-4 text-amber-600 font-semibold">共 3 件商品</div>
        </div>
      ),
    },
    '/about': {
      title: '關於我們',
      color: 'bg-purple-500',
      content: (
        <div className="text-center">
          <div className="text-6xl mb-4">ℹ️</div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">關於我們</h2>
          <p className="text-stone-600">這是 About 元件的內容</p>
        </div>
      ),
    },
  };

  const navItems = [
    { path: '/', label: '首頁' },
    { path: '/products', label: '商品' },
    { path: '/cart', label: '購物車' },
    { path: '/about', label: '關於' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-4 p-4 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>互動說明：</strong>點擊下方模擬瀏覽器中的導航連結，觀察網址變化與對應的頁面元件切換。
          每個路由對應一個獨立的 React 元件！
        </p>
      </div>

      {/* 模擬瀏覽器 */}
      <div className="rounded-xl overflow-hidden border-2 border-stone-300 shadow-lg">
        {/* 瀏覽器標題列 */}
        <div className="bg-stone-200 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 ml-4">
            {/* 網址列 */}
            <div className="bg-white rounded-lg px-4 py-1.5 flex items-center gap-2 text-sm">
              <span className="text-stone-400">🔒</span>
              <span className="text-stone-500">myshop.com</span>
              <span className={`font-mono font-semibold ${pages[currentPath].color.replace('bg-', 'text-')}`}>
                {currentPath}
              </span>
            </div>
          </div>
        </div>

        {/* 導航列 */}
        <div className="bg-stone-100 px-4 py-2 flex gap-2 border-b border-stone-200">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => setCurrentPath(item.path)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentPath === item.path
                  ? `${pages[item.path].color} text-white`
                  : 'bg-white text-stone-600 hover:bg-stone-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 頁面內容 */}
        <div className="bg-white p-8 min-h-[250px] flex items-center justify-center">{pages[currentPath].content}</div>
      </div>

      {/* 路由對應說明 */}
      <div className="mt-6 p-4 bg-stone-800 rounded-xl">
        <div className="text-xs text-stone-400 mb-2">// React Router 路由設定</div>
        <div className="space-y-1 font-mono text-sm">
          {navItems.map((item) => (
            <div
              key={item.path}
              className={`transition-all ${currentPath === item.path ? 'text-yellow-400' : 'text-stone-500'}`}
            >
              <span className="text-stone-500">{'{ '}</span>
              <span className="text-cyan-400">path</span>
              <span className="text-stone-400">: </span>
              <span className="text-green-400">'{item.path}'</span>
              <span className="text-stone-400">, </span>
              <span className="text-cyan-400">element</span>
              <span className="text-stone-400">: </span>
              <span className={currentPath === item.path ? 'text-yellow-400' : 'text-stone-400'}>
                &lt;{pages[item.path].title.replace(' ', '')}&nbsp;/&gt;
              </span>
              <span className="text-stone-500">{' }'}</span>
              {currentPath === item.path && <span className="text-emerald-400 ml-2">← 目前頁面</span>}
            </div>
          ))}
        </div>
      </div>

      {/* 重點提示 */}
      <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
        <div className="text-sm text-stone-700">
          <strong className="text-emerald-700">重點：</strong>
          使用者造訪不同網址時，React Router 會自動渲染對應的元件。每個頁面都是一個獨立的元件！
        </div>
      </div>
    </div>
  );
}

// 元件層級結構示範
export function ComponentHierarchyDemo() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  // 元件結構定義
  type ComponentName = 'App' | 'Header' | 'Main' | 'Footer' | 'Logo' | 'Navbar' | 'Sidebar' | 'Content';

  const components: Record<ComponentName, { color: string; parent: ComponentName | null; children: ComponentName[] }> = {
    App: { color: 'bg-stone-700', parent: null, children: ['Header', 'Main', 'Footer'] },
    Header: { color: 'bg-blue-500', parent: 'App', children: ['Logo', 'Navbar'] },
    Main: { color: 'bg-emerald-500', parent: 'App', children: ['Sidebar', 'Content'] },
    Footer: { color: 'bg-purple-500', parent: 'App', children: [] },
    Logo: { color: 'bg-blue-400', parent: 'Header', children: [] },
    Navbar: { color: 'bg-blue-400', parent: 'Header', children: [] },
    Sidebar: { color: 'bg-emerald-400', parent: 'Main', children: [] },
    Content: { color: 'bg-emerald-400', parent: 'Main', children: [] },
  };

  // 取得所有相關元件（父層 + 子層）
  const getRelatedComponents = (name: ComponentName): Set<ComponentName> => {
    const related = new Set<ComponentName>([name]);

    // 往上找所有父層
    let current: ComponentName | null = name;
    while (current && components[current].parent) {
      related.add(components[current].parent!);
      current = components[current].parent;
    }

    // 往下找所有子層（遞迴）
    const addChildren = (comp: ComponentName) => {
      components[comp].children.forEach((child) => {
        related.add(child);
        addChildren(child);
      });
    };
    addChildren(name);

    return related;
  };

  // 取得父元件名稱
  const getParentName = (name: ComponentName): string => {
    const parent = components[name].parent;
    return parent || '無（根元件）';
  };

  // 判斷元件是否相關
  const isRelated = (name: ComponentName): boolean => {
    if (!selectedComponent) return false;
    const related = getRelatedComponents(selectedComponent as ComponentName);
    return related.has(name);
  };

  // 判斷元件是否為選中元件的直接父層
  const isDirectParent = (name: ComponentName): boolean => {
    if (!selectedComponent) return false;
    return components[selectedComponent as ComponentName].parent === name;
  };

  // 判斷元件是否為選中元件的直接子層
  const isDirectChild = (name: ComponentName): boolean => {
    if (!selectedComponent) return false;
    return components[selectedComponent as ComponentName].children.includes(name);
  };

  // 取得元件的樣式類別
  const getComponentClasses = (name: ComponentName): string => {
    const baseColor = components[name].color;
    const isSelected = selectedComponent === name;
    const related = selectedComponent ? isRelated(name) : true;
    const directParent = isDirectParent(name);
    const directChild = isDirectChild(name);

    let classes = `${baseColor} text-white cursor-pointer transition-all duration-300 `;

    if (isSelected) {
      // 選中的元件：金色外框 + 脈動動畫
      classes += 'ring-4 ring-amber-400 ring-offset-2 animate-pulse ';
    } else if (directParent) {
      // 直接父層：藍色外框
      classes += 'ring-3 ring-blue-400 ring-offset-1 ';
    } else if (directChild) {
      // 直接子層：綠色外框
      classes += 'ring-3 ring-emerald-400 ring-offset-1 ';
    } else if (!related && selectedComponent) {
      // 不相關的元件：淡化
      classes += 'opacity-30 ';
    }

    return classes;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* 說明區 */}
      <div className="mb-6 p-4 bg-amber-100/50 rounded-xl border border-amber-200">
        <p className="text-sm text-stone-700">
          <strong>互動說明：</strong>點擊任一元件方塊，觀察它的層級關係。
          <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 bg-amber-200 rounded text-xs">金框</span>選中、
          <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 bg-blue-200 rounded text-xs">藍框</span>父層、
          <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 bg-emerald-200 rounded text-xs">綠框</span>子層、
          <span className="inline-flex items-center gap-1 mx-1 px-2 py-0.5 bg-stone-200 rounded text-xs opacity-50">淡化</span>不相關
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* 元件樹狀結構 */}
        <div className="p-5 bg-stone-100 rounded-xl">
          <div className="text-sm font-semibold text-stone-600 mb-4">元件樹狀結構（點擊查看關係）</div>

          {/* App */}
          <div
            className={`p-3 rounded-lg mb-2 ${getComponentClasses('App')}`}
            onClick={() => setSelectedComponent(selectedComponent === 'App' ? null : 'App')}
          >
            App（根元件）
          </div>

          {/* App 的子元件 */}
          <div className="ml-6 space-y-2">
            {/* Header */}
            <div
              className={`p-2 rounded-lg ${getComponentClasses('Header')}`}
              onClick={() => setSelectedComponent(selectedComponent === 'Header' ? null : 'Header')}
            >
              Header
            </div>
            <div className="ml-6 flex gap-2">
              <div
                className={`p-1 px-3 rounded text-sm ${getComponentClasses('Logo')}`}
                onClick={() => setSelectedComponent(selectedComponent === 'Logo' ? null : 'Logo')}
              >
                Logo
              </div>
              <div
                className={`p-1 px-3 rounded text-sm ${getComponentClasses('Navbar')}`}
                onClick={() => setSelectedComponent(selectedComponent === 'Navbar' ? null : 'Navbar')}
              >
                Navbar
              </div>
            </div>

            {/* Main */}
            <div
              className={`p-2 rounded-lg ${getComponentClasses('Main')}`}
              onClick={() => setSelectedComponent(selectedComponent === 'Main' ? null : 'Main')}
            >
              Main
            </div>
            <div className="ml-6 flex gap-2">
              <div
                className={`p-1 px-3 rounded text-sm ${getComponentClasses('Sidebar')}`}
                onClick={() => setSelectedComponent(selectedComponent === 'Sidebar' ? null : 'Sidebar')}
              >
                Sidebar
              </div>
              <div
                className={`p-1 px-3 rounded text-sm ${getComponentClasses('Content')}`}
                onClick={() => setSelectedComponent(selectedComponent === 'Content' ? null : 'Content')}
              >
                Content
              </div>
            </div>

            {/* Footer */}
            <div
              className={`p-2 rounded-lg ${getComponentClasses('Footer')}`}
              onClick={() => setSelectedComponent(selectedComponent === 'Footer' ? null : 'Footer')}
            >
              Footer
            </div>
          </div>
        </div>

        {/* 說明區 */}
        <div className="p-5 bg-white rounded-xl border-2 border-stone-200">
          {selectedComponent ? (
            <>
              <div className="text-lg font-bold text-stone-800 mb-4">
                {selectedComponent} 元件
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <div className="text-sm font-semibold text-blue-700">⬆️ 父元件（Props 來源）</div>
                  <div className="text-sm text-stone-600 mt-1 font-medium">
                    {getParentName(selectedComponent as ComponentName)}
                  </div>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
                  <div className="text-sm font-semibold text-emerald-700">⬇️ 子元件（可傳遞 Props）</div>
                  <div className="text-sm text-stone-600 mt-1 font-medium">
                    {components[selectedComponent as ComponentName].children.length > 0
                      ? components[selectedComponent as ComponentName].children.join(', ')
                      : '無子元件'}
                  </div>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <div className="text-sm font-semibold text-red-700">🚫 不能直接傳遞</div>
                  <div className="text-sm text-stone-600 mt-1">
                    {selectedComponent === 'App'
                      ? 'App 不能直接傳給 Logo（須經 Header）'
                      : selectedComponent === 'Header'
                      ? 'Header 不能傳給 Sidebar（須經 App → Main）'
                      : '不能跨層級傳遞，必須逐層傳遞'}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-stone-400">
              <div className="text-4xl mb-3">👆</div>
              <div>點擊左側元件查看詳情</div>
            </div>
          )}
        </div>
      </div>

      {/* 重點提示 */}
      <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
        <div className="font-semibold text-amber-700 mb-2">Props 傳遞規則</div>
        <ul className="text-sm text-stone-600 space-y-1">
          <li>• <strong>App</strong> 可以傳 Props 給 Header、Main、Footer</li>
          <li>• <strong>Header</strong> 可以傳 Props 給 Logo、Navbar</li>
          <li>• <strong>Main</strong> 可以傳 Props 給 Sidebar、Content</li>
          <li>• 但 App 不能直接傳給 Logo（必須透過 Header 轉傳）</li>
        </ul>
      </div>
    </div>
  );
}
