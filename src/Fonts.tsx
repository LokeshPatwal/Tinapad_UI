import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';

export const headingFont = createTheme({
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif',
        ].join(','),
    },
});

