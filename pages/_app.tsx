import type { AppProps } from 'next/app';
// Global Styles
import '@styles/style.scss';

// MUI Theme
import { ThemeProvider } from '@mui/material';
import Theme from '@config/theme';

// Recoil Root
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <ThemeProvider theme={Theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default MyApp;
