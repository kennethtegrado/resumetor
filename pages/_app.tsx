import '@styles/style.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import Theme from '@material/Theme.config';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
