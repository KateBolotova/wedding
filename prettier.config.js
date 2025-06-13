/** @type {import('prettier').Config} */

// prettier.config.js
export default {
    endOfLine: "auto", // Автоматическое определение конца строки, в зависимости от ОС
    semi: true, // Добавление точки с запятой в конце строк
    singleQuote: false, // Использование двойных кавычек вместо одинарных
    tabWidth: 2, // Ширина табуляции — 2 пробела
    printWidth: 120, // Максимальная длина строки — 120 символов
    trailingComma: "es5", // Добавление запятой после последнего элемента в объектах и массивах в стиле ES5
    
    // ================= Конфигурация стиля импортов ================= 

    importOrderSeparation: true, // разделения импортов
    importOrderSortSpecifiers: true, // сортировка спецификаторов внутри импортов
    importOrderBuiltinModulesToTop: true, // Перемещение встроенных модулей наверх
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"], // Плагины для парсера для поддержки TypeScript, JSX и старых декораторов
    importOrderMergeDuplicateImports: true, // Объединение дублирующихся импортов
    importOrderCombineTypeAndValueImports: true, // Объединение импортов типов и значений
    //plugins: ["@trivago/prettier-plugin-sort-imports"], // Плагин для сортировки импортов

    // ================= Порядок сортировки импортов ================= 

    importOrder: [
      "^(react/(.*)$)|^(react$)", // Импорт библиотек React
      "^(react-dom/(.*)$)|^(react-dom$)", // Импорт библиотек React
      "",
      "^(next/(.*)$)|^(next$)", // Импорт библиотек Next.js
      "^(@tanstack/(.*)$)|^(@tanstack$)", 
      "^@/hooks/(.*)$", // Импорт хуков
      "^@/lib/(.*)$", // Импорт библиотек
      "^@/types/(.*)$", // Импорт пользовательских типов
      "^@/env(.*)$", // Импорт окружения
      "^@/config/(.*)$", // Импорт конфигураций
      "^@/app/(.*)$", // Импорт модулей приложения 
      "^types$", // Импорт типов
      "",
      "^(@mui/(.*)$)|^(@mui$)", 
      "^@/components/ui/(.*)$", // Импорт UI-компонентов
      "^@/components/(.*)$", // Импорт других компонентов
      "^[./]", // Импорт относительных путей
      "^@/styles/(.*)$", // Импорт стилей
      "",
      "<THIRD_PARTY_MODULES>", // Импорт сторонних модулей
    ],

  };
  