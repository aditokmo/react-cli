import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface Theme {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    toggleTheme: () => void;
}

export const useThemeStore = create<Theme>()(
    devtools(
        persist((set) => ({
            theme: 'light',
            setTheme: (theme) => set({ theme }),
            toggleTheme: () => set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light'
            })),
        }),
            {
                name: 'theme'
            }
        ),
        {
            name: 'ThemeStore'
        }
    )
)