import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app';

const root = createRoot(
    document.getElementById("root") as HTMLDivElement
);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);