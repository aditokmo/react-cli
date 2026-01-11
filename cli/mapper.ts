import { fontAwesomeIconsInstaller, reactHotToastInstaller, reactIconsInstaller, reactQueryInstaller, reactRouterInstaller, reactToastifyInstaller, shadcnInstaller, sonnerInstaller, tailwindInstaller } from './packages.js';
import { PackageInstaller } from './types.js';

export const installers: Record<string, PackageInstaller> = {
    'reactQuery': reactQueryInstaller,
    'react-router': reactRouterInstaller,
    'tailwind': tailwindInstaller,
    'react-icons': reactIconsInstaller,
    'font-awesome': fontAwesomeIconsInstaller,
    'react-hot-toast': reactHotToastInstaller,
    'react-toastify': reactToastifyInstaller,
    'sonner': sonnerInstaller,
}