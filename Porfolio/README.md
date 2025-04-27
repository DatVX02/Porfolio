# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


source_code_structure: 
src/
├── assets/           # Các file tĩnh như ảnh, font, icon
├── components/       # Các UI component tái sử dụng (buttons, cards, modals, v.v.)
├── layouts/          # Các layout tổng quát (ví dụ: SidebarLayout, AuthLayout)
├── pages/            # Các trang ứng với từng route
├── hooks/            # Các custom React hook (ví dụ: useAuth, useFetch)
├── contexts/         # Các Context Provider (ví dụ: AuthContext)
├── services/         # Các service gọi API (ví dụ: authService, userService)
├── utils/            # Các hàm tiện ích (ví dụ: formatDate, calculateTax)
├── types/            # Các kiểu dữ liệu TypeScript (nếu dùng TypeScript)
├── constants/        # Các hằng số cố định (ví dụ: roles, routes, statuses)
├── routes/           # Các định nghĩa route (nếu dùng React Router)
├── store/            # Quản lý state toàn cục (Redux, Zustand, v.v.)
├── styles/           # Các style chung (ví dụ: Tailwind config, file CSS)
├── config/           # Các file cấu hình (ví dụ: API URL, biến môi trường)
├── App.tsx           # Component gốc App
├── index.tsx         # Điểm khởi chạy chính
└── vite.config.ts    # (hoặc webpack.config.js) Cấu hình build tool