# Spyne Design System

A comprehensive React design system built with TypeScript, providing reusable components, design tokens, and utilities for building consistent user interfaces.

## Features

- 🎨 **Design Tokens** - Colors, typography, spacing, and more
- 🧩 **React Components** - Button, Input, Card, and more
- 📖 **Storybook** - Interactive component documentation
- 🔧 **TypeScript** - Full type safety and IntelliSense
- 🧪 **Testing** - Jest and React Testing Library
- 📦 **Tree Shakeable** - Import only what you need
- 🎯 **Accessible** - Built with accessibility in mind

## Installation

### From Git Repository (Recommended for Development)

```bash
# Install directly from Git repository
npm install git+https://github.com/spyne/design-system.git
# or
yarn add git+https://github.com/spyne/design-system.git
# or  
pnpm add git+https://github.com/spyne/design-system.git

# Install from specific branch
npm install git+https://github.com/spyne/design-system.git#main
# or
npm install git+https://github.com/spyne/design-system.git#develop
```

### From NPM (When Published)

```bash
npm install @spyne/design-system
# or
yarn add @spyne/design-system
# or
pnpm add @spyne/design-system
```

## Usage

### Components

```tsx
import { Button, Input, Card } from '@spyne/design-system';

function App() {
  return (
    <Card>
      <Input label="Email" placeholder="Enter your email" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Design Tokens

```tsx
import { colors, typography, spacing } from '@spyne/design-system';

const customStyles = {
  backgroundColor: colors.primary[500],
  fontSize: typography.fontSize.lg,
  padding: spacing[4],
};
```

## Development

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm
- React 16.8+ (peer dependency)

### Setup

```bash
# Install dependencies
pnpm install

# Start Storybook for development
pnpm storybook

# Run tests
pnpm test

# Build the package
pnpm build
```

### Scripts

- `pnpm dev` - Start Rollup in watch mode
- `pnpm build` - Build the package for production
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm storybook` - Start Storybook
- `pnpm build-storybook` - Build Storybook for deployment
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm type-check` - Run TypeScript type checking

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `loading`: boolean
- `leftIcon`, `rightIcon`: ReactNode

### Input

A flexible input component with label, helper text, and error states.

```tsx
<Input
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  error={hasError}
  errorMessage="Please enter a valid email"
/>
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'default' | 'filled'
- `error`: boolean
- `label`, `helperText`, `errorMessage`: string
- `startIcon`, `endIcon`: ReactNode

### Card

A container component for grouping related content.

```tsx
<Card variant="elevated" padding="lg">
  <CardHeader title="Title" subtitle="Subtitle" />
  <CardBody>Content goes here</CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `interactive`: boolean

## Design Tokens

### Colors

```tsx
import { colors } from '@your-company/design-system';

// Primary colors
colors.primary[50]   // Lightest
colors.primary[500]  // Base
colors.primary[900]  // Darkest

// Semantic colors
colors.success[500]
colors.warning[500]
colors.error[500]
```

### Typography

```tsx
import { typography } from '@your-company/design-system';

typography.fontSize.xs     // 12px
typography.fontSize.base   // 16px
typography.fontSize['4xl'] // 36px

typography.fontWeight.normal   // 400
typography.fontWeight.semibold // 600
```

### Spacing

```tsx
import { spacing } from '@your-company/design-system';

spacing[1]  // 4px
spacing[4]  // 16px
spacing[8]  // 32px
```

## Git Repository Setup

### Prerequisites

1. **Create a Git repository** for your design system:
   ```bash
   # Initialize Git repository
   git init
   git add .
   git commit -m "Initial commit"
   
   # Add remote repository (replace with your actual repository URL)
   git remote add origin https://github.com/spyne/design-system.git
   git branch -M main
   git push -u origin main
   ```

2. **Build the library** before committing:
   ```bash
   npm run build
   git add dist/
   git commit -m "Add built files"
   git push
   ```

### Installing from Git

Once your repository is set up, others can install your design system directly from Git:

```bash
# Install from main branch
npm install git+https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Install from specific branch  
npm install git+https://github.com/YOUR_USERNAME/YOUR_REPO.git#branch-name

# Install from specific commit
npm install git+https://github.com/YOUR_USERNAME/YOUR_REPO.git#commit-hash
```

### Development Workflow

1. **Make changes** to components
2. **Test locally** with Storybook: `npm run storybook`
3. **Build the library**: `npm run build`
4. **Commit changes** including the `dist/` folder
5. **Push to repository**
6. **Update consuming projects** by reinstalling from Git

## Publishing

Before publishing, make sure to:

1. Set up your npm registry authentication
2. Ensure you have publishing rights to the @spyne organization on npm
3. Test the package locally

```bash
# Build the package
pnpm build

# Publish to npm
npm publish
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes and add tests
4. Run the test suite: `pnpm test`
5. Submit a pull request

## License

MIT License - see the [LICENSE](LICENSE) file for details.
