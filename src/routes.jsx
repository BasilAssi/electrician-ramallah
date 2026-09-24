import LanguageProvider from './context/LanguageProvider';
import Home from './pages/Home';

// العربي على "/" (اللغة الأساسية)، الإنجليزي على "/en/"
export const routes = [
  {
    path: '/',
    element: (
      <LanguageProvider lang="ar">
        <Home />
      </LanguageProvider>
    ),
  },
  {
    path: '/en',
    element: (
      <LanguageProvider lang="en">
        <Home />
      </LanguageProvider>
    ),
  },
];
