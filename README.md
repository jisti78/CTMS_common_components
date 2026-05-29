# CTMS Common Components

A reusable React component library that provides custom UI components along with Material UI, Framer Motion, and utility exports.

## Installation

bash npm install ctms-common-components

## Usage

### Custom Components

jsx import {   PoojaCard,   MoreActions,   AdvancedTable,   TokenCard,   StatusCard,   CustomButton } from 'ctms-common-components';

### Material UI Components

jsx import {   Box,   Button,   Typography,   TextField,   Grid,   Card } from 'ctms-common-components';

### Material UI Icons

jsx import {   Add,   Edit,   Delete } from 'ctms-common-components';

### Framer Motion

jsx import {   motion,   AnimatePresence } from 'ctms-common-components';

### Utility Functions

jsx import {   debounce,   throttle,   cloneDeep,   merge,   uniq,   groupBy } from 'ctms-common-components';

### Theme Support

jsx import {   ThemeProvider,   createTheme } from 'ctms-common-components';  const theme = createTheme({});  function App() {   return (     <ThemeProvider theme={theme}>       <YourApplication />     </ThemeProvider>   ); }

## Available Components

| Component | Description |
|------------|------------|
| PoojaCard | Reusable card component |
| MoreActions | Action menu component |
| AdvancedTable | Dynamic table component |
| TokenCard | Token information card |
| StatusCard | Status display card |
| CustomButton | Reusable button component |

## Exports

### Material UI
All commonly used Material UI components are re-exported.

### Icons
All Material UI icons are re-exported.

### Animation
- motion
- AnimatePresence

### Utilities
- debounce
- throttle
- cloneDeep
- merge
- uniq
- groupBy

## License

MIT