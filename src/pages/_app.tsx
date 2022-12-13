import Script from 'next/script'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import 'shared/assets/styles/app.sass'

import HeadGlobal from 'components/HeadGlobal'
import { reduxWrapper } from 'providers/redux'
import { AppProviders } from 'providers'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AppProviders>
      <HeadGlobal />
      <Component key={router.asPath} {...pageProps} />

      <Script id="show-banner">
        {`
            (function () {
              // Change these if you use something different in your hook.
              var storageKey = 'darkMode';
              var classNameDark = 'dark-mode';
              var classNameLight = 'light-mode';
          
              function setClassOnDocumentBody(darkMode) {
                document.body.classList.add(darkMode ? classNameDark : classNameLight);
                document.body.classList.remove(darkMode ? classNameLight : classNameDark);
              }
          
              var preferDarkQuery = '(prefers-color-scheme: dark)';
              var mql = window.matchMedia(preferDarkQuery);
              var supportsColorSchemeQuery = mql.media === preferDarkQuery;
              var localStorageTheme = null;
              try {
                localStorageTheme = localStorage.getItem(storageKey);
              } catch (err) { }
              var localStorageExists = localStorageTheme !== null;
              if (localStorageExists) {
                localStorageTheme = JSON.parse(localStorageTheme);
              }
          
              // Determine the source of truth
              if (localStorageExists) {
                // source of truth from localStorage
                setClassOnDocumentBody(localStorageTheme);
              } else if (supportsColorSchemeQuery) {
                // source of truth from system
                setClassOnDocumentBody(mql.matches);
                localStorage.setItem(storageKey, mql.matches);
              } else {
                // source of truth from document.body
                var isDarkMode = document.body.classList.contains(classNameDark);
                localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
              }
            })();
          `}
      </Script>
    </AppProviders>
  )
}
export default reduxWrapper.withRedux(App)
