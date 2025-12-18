import type { Step } from '../../types/slide';
import { FrontendServerDiagram, AuthenticationDiagram } from './diagrams';
import { HttpMethodsDemo, UserRolesDemo } from './demos';

export const slideTitle = '電商 API 串接';

export const steps: Step[] = [
  // 1. 前端與伺服器的關係
  {
    id: 'frontend-server-relationship',
    title: '前端與後端的關係',
    description:
      '在 Web 應用程式中，前端（瀏覽器）負責呈現畫面與使用者互動，後端（伺服器）負責處理商業邏輯與資料存取。前端透過發送「請求 (Request)」給後端，後端處理完畢後「回應 (Response)」資料給前端。',
    preview: {
      type: 'component',
      component: FrontendServerDiagram,
    },
    // 滿版預覽模式
  },

  // 2. HTTP Methods 互動示範
  {
    id: 'http-methods-demo',
    title: 'HTTP 請求方法',
    description:
      '前端與後端溝通使用 HTTP 協定，不同的「請求方法」代表不同的操作意圖：GET 取得資料、POST 新增資料、PUT 更新資料、DELETE 刪除資料。這就是 RESTful API 的核心概念。',
    preview: {
      type: 'component',
      component: HttpMethodsDemo,
    },
    // 滿版預覽模式
  },

  // 3. 前端與伺服器的授權關係
  {
    id: 'authentication-flow',
    title: '驗證與授權機制',
    description:
      '為了保護敏感資料，伺服器會實作驗證機制。當用戶登入成功後，伺服器會發給一組 Token（通常是 JWT），用戶端需要將 Token 儲存起來，之後每次請求都要帶上 Token 來證明身份。',
    preview: {
      type: 'component',
      component: AuthenticationDiagram,
    },
    // 滿版預覽模式
  },

  // 4. 用戶角色與權限互動示範
  {
    id: 'user-roles-demo',
    title: '用戶角色與權限',
    description:
      '不同角色有不同的權限。一般用戶只能存取公開的 API，而管理者（Admin）擁有 Token 後，可以存取與修改後台資料。試試看以不同身份登入，體驗權限控管的差異！',
    preview: {
      type: 'component',
      component: UserRolesDemo,
    },
    // 滿版預覽模式
  },
];
