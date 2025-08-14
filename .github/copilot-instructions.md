# SinapsiaLab Landing Flyer - Shopping Cart AI Instructions

## Project Overview
This is a **3-step shopping cart** for SinapsiaLab's landing page publication service, transformed from an insurance quoter. It offers two tiers: Standard ($15) and Premium ($35+) hosting solutions with 1-year service periods.

## Architecture & Key Patterns

### Component Structure
- **Single-page application** with state-driven step navigation (no routing)
- **App.jsx**: Main orchestrator with `useState` for `step` (1-3) and `showSummary` toggle
- **3-step flow**: `PublicationTypeSelection` → `ServiceConfiguration` → `ExtrasAndAddons` → `OrderSummary`
- **Shared state**: `formData` object passed down with specific shape: `{ publicationType, customDomain, modifications, deliveryTime, extras }`

### Brand Identity (SinapsiaLab)
- **Never reference external providers** (no "Netlify", etc.) - everything is "SinapsiaLab powered"
- **Color palette**: `portfolio-*` prefix (deep #0c070f to text #c8b8d8) - see `tailwind.config.js`
- **Typography**: Poppins font family (loaded via Google Fonts in `index.html`)
- **Brand voice**: "Soluciones digitales a medida" - professional, quality-focused

### State Management Pattern
```javascript
// Always follow this formData structure:
{
  publicationType: 'basic' | 'premium',
  customDomain: string,
  domainExtension: '.com' | '.net' | '.org' | '.io',
  modifications: ['ecommerce', 'forms', 'blog', 'gallery', 'testimonials'],
  deliveryTime: 'standard' | 'priority' | 'express',
  extras: ['analytics', 'maintenance', 'support']
}
```

### Pricing Logic (`calculatePrice.js`)
- **Base prices**: Standard $15, Premium $35 (1-year hosting included)
- **Domain costs**: .com (+$12), .net (+$10), .org (+$8), .io (+$25)
- **Modifications**: One-time fees (e-commerce +$15, forms +$8, etc.)
- **Delivery**: Priority +$10, Express +$25
- **Monthly services**: Analytics $15/mo, Maintenance $20/mo, Support $12/mo

## Critical Development Patterns

### Layout & Responsive Design
- **Viewport fitting**: Use `h-screen` with `flex flex-col` and `min-h-0` for proper scrolling containers
- **Custom scrollbars**: Apply `.custom-scrollbar` class for styled webkit scrollbars
- **Button positioning**: Navigation buttons need `h-20` spacer div to prevent content overlap
- **Flexbox hierarchy**: `flex-1 overflow-y-auto min-h-0` pattern for scrollable content areas

### Form Validation & Flow
- **Progressive disclosure**: Only show domain fields for premium, only show summary after step 3
- **Conditional rendering**: Use `showSummary` state to toggle between ExtrasAndAddons and OrderSummary
- **Toggle patterns**: Use `ToggleButton` component for service add-ons with `handleToggleChange` pattern

### Styling Conventions
- **Interactive elements**: Use `hover-lift` class for subtle hover effects
- **Color semantics**: `portfolio-gradient-4` for primary actions, `portfolio-accent` for borders
- **Size hierarchy**: `text-xs` for details, `text-sm` for body, `text-lg` for headings
- **Spacing**: Prefer `space-y-3` for tight sections, `gap-3` for grids

## Development Workflow

### Commands
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint validation
```

### File Structure Conventions
- **Components**: Single responsibility, accept `formData` and `setFormData` props
- **Utils**: Pure functions for calculations (`calculatePrice.js`)
- **Modals**: Portal-based components in `/modals` subdirectory
- **No routing**: State-driven navigation only (step-based)

### Common Tasks
- **Adding new services**: Update arrays in `ServiceConfiguration.jsx` and pricing logic
- **Price changes**: Modify base prices in `calculatePrice.js` and component displays
- **New steps**: Extend step indicator, add components, update navigation logic
- **Brand updates**: Modify `tailwind.config.js` color palette and component text

## Integration Points
- **Font loading**: Google Fonts Poppins via `index.html` preconnect + Tailwind config
- **Icons**: Lucide React for consistent iconography (`Globe`, `Crown`, `CheckCircle`, etc.)
- **Responsive**: Mobile-first with `md:` breakpoints for desktop adaptations
- **Accessibility**: Form labels, proper contrast with portfolio color palette

## Debugging Notes
- **Viewport issues**: Check flex container hierarchy and `min-h-0` properties
- **State inconsistencies**: Verify `formData` shape matches expected structure
- **Styling conflicts**: Ensure portfolio color prefixes are used consistently
- **Font loading**: Confirm Poppins loads before Tailwind applies font-family
