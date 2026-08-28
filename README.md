# Ember Commerce

Yes. I would add a Technology Stack + UI/UX Design System section to the master prompt. For this platform, shadcn/ui is a very good choice, especially for the admin, hotel portal, and B2C interfaces.

For the visual identity, I would also use subtle flame/fire-inspired animations to represent energy, beverages, speed, and delivery — but not make the entire interface look like a gaming website.

Recommended stack

LayerTechnologyFrontendNext.js 15+ App RouterLanguageTypeScriptStylingTailwind CSSUIshadcn/uiIconsLucide ReactAnimationFramer Motion / MotionAdvanced effectsCSS + Canvas where appropriateFormsReact Hook FormValidationZodStateZustandServer stateTanStack Query where usefulBackendNext.js API / Route Handlers or dedicated Node.js serviceDatabasePostgreSQLORMPrismaAuthenticationSecure session-based auth / Auth.js or custom JWT architectureCacheRedisBackground jobsBullMQ + RedisFile storageCloudflare R2 / S3-compatible storagePaymentsPluggable payment gateway architectureSMSPluggable SMS provider architectureMapsMapbox or Google MapsLoggingPinoAPI validationZodTestingVitest + PlaywrightDeploymentUbuntu VPS + Nginx + PM2/DockerCI/CDGitHub ActionsMonitoringSentry + structured logs

Why shadcn/ui?

I would specifically tell the developer not to build every UI component from scratch.

Use shadcn/ui for:

Buttons

Dialogs

Dropdowns

Selects

Tabs

Cards

Tables

Forms

Inputs

Sheets

Drawers

Toasts

Alerts

Command/search

Pagination

Calendar/date picker

Data tables

Then customize them heavily with Tailwind so the platform has its own identity.

The important thing is:

shadcn/ui should be the component foundation, not the final visual design.

Add this to your master prompt

==================================================
46. TECHNOLOGY STACK
==================================================

Build the platform using a modern, scalable, TypeScript-first technology stack.

FRONTEND
---------

Use:

- Next.js 15+ with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Motion / Framer Motion
- React Hook Form
- Zod
- Zustand where client-side global state is required
- TanStack Query where server-state management provides value

Use Server Components by default where appropriate.

Use Client Components only when interactivity requires them.

Do not unnecessarily convert entire pages into Client Components.

==================================================
47. SHADCN/UI DESIGN SYSTEM
==================================================

Use shadcn/ui as the primary UI component foundation.

Use shadcn/ui components for:

- Button
- Input
- Textarea
- Select
- Combobox
- Dialog
- Drawer
- Sheet
- Dropdown Menu
- Tabs
- Card
- Badge
- Alert
- Toast
- Tooltip
- Popover
- Calendar
- Date Picker
- Table
- Data Table
- Pagination
- Command
- Breadcrumb
- Sidebar
- Navigation Menu
- Form components
- Skeleton
- Progress
- Avatar
- Separator

Do not use shadcn/ui with its default appearance without customization.

Create a custom design system on top of shadcn/ui.

Define:

- Typography
- Spacing
- Border radius
- Shadows
- Button styles
- Card styles
- Input styles
- Status badges
- Product cards
- Booking cards
- Order cards
- Dashboard widgets
- Tables
- Navigation
- Mobile navigation

==================================================
48. UI/UX DESIGN DIRECTION
==================================================

The platform must look like a premium modern beverage-commerce company.

The visual language should communicate:

- Energy
- Freshness
- Trust
- Speed
- Hospitality
- Zanzibar
- Modern commerce
- Professional B2B service

Do NOT make the interface look like a generic admin template.

Do NOT overuse animations.

Do NOT make every component move.

Animations should support the user experience rather than distract from it.

==================================================
49. VISUAL DESIGN
==================================================

Use a modern premium color system.

Primary brand colors should be configurable through CSS variables.

Recommended foundation:

- Clean white/light backgrounds
- Deep dark/black text
- Strong primary brand color
- Warm accent color
- Subtle neutral gray system

The exact brand colors must be configurable rather than hard-coded throughout components.

Use CSS variables/design tokens.

Example:

--primary
--primary-foreground
--secondary
--accent
--background
--foreground
--muted
--muted-foreground
--border
--card
--destructive
--success
--warning

==================================================
50. FLAME / FIRE ANIMATION SYSTEM
==================================================

Introduce a subtle flame-inspired visual identity.

The flame represents:

- Energy
- Speed
- Beverage culture
- Delivery
- Freshness
- Momentum

Do NOT make the entire website look like fire.

Use flame animation selectively.

Possible locations:

1. Hero section
2. Loading animation
3. Product category highlights
4. Delivery status
5. Promotional banners
6. Successful order animation
7. Brand logo animation
8. Empty-state illustrations
9. Dashboard KPI highlights

==================================================
51. FLAME HERO ANIMATION
==================================================

Create a premium animated hero.

Possible concept:

A soft animated flame/glow behind the main beverage imagery.

Animation characteristics:

- Slow movement
- Soft particle movement
- Glow
- Subtle gradient
- Smooth opacity changes
- Very low visual distraction

Avoid aggressive flames covering the screen.

The animation must remain performant on mobile devices.

==================================================
52. ORDER SUCCESS ANIMATION
==================================================

After successful B2C payment:

Display:

Payment Successful
Order Confirmed

Use a short premium animation.

Example:

Checkmark
+
Small flame particles
+
Soft glow

Animation duration should be approximately:

600ms–1200ms

Then transition naturally to the order confirmation page.

Do not force the user to wait for an animation.

==================================================
53. DELIVERY ANIMATION
==================================================

When an order becomes:

OUT_FOR_DELIVERY

use a subtle delivery animation.

Possible concept:

A small delivery vehicle moving along a path with a subtle flame/trail effect.

The animation should communicate:

"Your order is on the way."

Do not use excessive effects.

==================================================
54. PRODUCT CARD ANIMATION
==================================================

Product cards should have subtle interactions.

On hover:

- Small image scale
- Soft shadow
- Slight elevation
- Add-to-cart feedback

On mobile:

Use tap interactions instead of hover-dependent functionality.

Do not make product cards continuously animate.

==================================================
55. B2B BOOKING UX
==================================================

The hotel booking interface must prioritize speed.

A hotel employee should be able to create a booking in a few steps.

Recommended flow:

Select Products
    ↓
Set Quantities
    ↓
Review
    ↓
Delivery Details
    ↓
Submit Booking

Provide:

- Search
- Category filters
- Quantity controls
- Recently ordered products
- Frequently ordered products
- Repeat previous booking
- Custom request

Make "Repeat Booking" highly visible.

==================================================
56. B2C SHOPPING UX
==================================================

The normal customer experience should resemble a modern mobile commerce application.

Home:

Hero
Featured Categories
Popular Products
Recommended Products
Promotions
Quick Categories

Product:

Image
Name
Brand
Price
Availability
Quantity
Add to Cart

Cart:

Products
Quantity
Subtotal
Delivery
Discount
Total

Checkout:

Address
Delivery zone
Payment
Confirmation

==================================================
57. ADMIN UX
==================================================

Admin should use a professional dashboard.

Desktop:

Sidebar
Top navigation
Breadcrumbs
Dashboard widgets
Tables
Filters
Search

Mobile:

Bottom navigation or collapsible sidebar
Responsive cards
Mobile-friendly tables
Bottom sheets for actions

Admin pages:

Dashboard
Orders
Bookings
Products
Inventory
Companies
Customers
Deliveries
Payments
Invoices
Commissions
Settlements
Reports
Notifications
Users
Roles
Settings

==================================================
58. HOTEL DASHBOARD UX
==================================================

Hotel portal should NOT look like the admin panel.

It should be simpler.

Main navigation:

Home
Book Products
My Bookings
Repeat Booking
Invoices
Commission
Account

Primary CTA:

"Create Booking"

Secondary CTA:

"Repeat Last Booking"

Dashboard cards:

Pending Bookings
Confirmed
Out for Delivery
Delivered
Outstanding Balance
Commission

==================================================
59. RESPONSIVE DESIGN
==================================================

The platform must be mobile-first.

Test:

320px
375px
390px
414px
768px
1024px
1280px
1440px+
 
No horizontal overflow.

All important actions must be usable on mobile.

==================================================
60. ACCESSIBILITY
==================================================

Follow accessible UI principles.

Provide:

Keyboard navigation
Focus states
ARIA labels where necessary
Readable contrast
Proper form labels
Error messages
Screen-reader-friendly controls
Reduced-motion support

If the user has:

prefers-reduced-motion: reduce

reduce or disable decorative animations.

==================================================
61. PERFORMANCE
==================================================

Animations must not compromise performance.

Prefer:

CSS transforms
Opacity
GPU-friendly transitions

Avoid expensive continuous JavaScript animations.

Lazy-load:

Large images
Videos
Heavy animations
Maps

Optimize product images.

Use responsive image sizes.

==================================================
62. DESIGN TOKENS
==================================================

Create centralized design tokens.

Do not scatter values throughout the application.

Define:

Colors
Typography
Spacing
Radius
Shadows
Transitions
Animation durations
Breakpoints

Use Tailwind configuration and CSS variables.

==================================================
63. ANIMATION PRINCIPLES
==================================================

Use three levels of animation.

LEVEL 1 — MICRO INTERACTIONS

50–200ms

Examples:

Button hover
Icon movement
Input focus

LEVEL 2 — COMPONENT TRANSITIONS

200–400ms

Examples:

Dialog
Drawer
Card expansion
Tabs

LEVEL 3 — FEATURE ANIMATIONS

400–1200ms

Examples:

Order success
Delivery status
Hero flame
Promotional animations

Never use animation simply because it is technically possible.

==================================================
64. MOTION CONSISTENCY
==================================================

Create reusable animation presets.

Examples:

fadeIn
fadeUp
scaleIn
slideIn
success
pulse
flameGlow
deliveryMove

Do not write random animation values separately in every component.

==================================================
65. FRONTEND ARCHITECTURE
==================================================

Recommended structure:

src/
  app/
    (public)/
    (shop)/
    (customer)/
    (business)/
    (admin)/
    api/

  components/
    ui/
    layout/
    navigation/
    products/
    cart/
    checkout/
    orders/
    bookings/
    inventory/
    delivery/
    payments/
    commissions/
    dashboard/
    animations/

  features/
    auth/
    products/
    orders/
    bookings/
    payments/
    inventory/
    delivery/
    commissions/

  lib/
    auth/
    db/
    payments/
    sms/
    notifications/
    validation/
    permissions/
    pricing/
    inventory/
    commissions/

  hooks/

  types/

  schemas/

  services/

==================================================
66. BACKEND ARCHITECTURE
==================================================

Separate:

Controllers/API
Services
Repositories
Domain logic
Validation
Database access
External integrations

Example:

BookingController
BookingService
BookingRepository

OrderController
OrderService
OrderRepository

PaymentController
PaymentService
PaymentRepository

CommissionController
CommissionService
CommissionRepository

InventoryController
InventoryService
InventoryRepository

External providers must be isolated behind service interfaces.

==================================================
67. EXTERNAL SERVICE ABSTRACTION
==================================================

Do not tightly couple the platform to one provider.

Create interfaces for:

PaymentProvider
SmsProvider
EmailProvider
StorageProvider
MapsProvider

Example:

PaymentProvider
    initiatePayment()
    verifyPayment()
    refundPayment()

SmsProvider
    sendSms()

StorageProvider
    upload()
    delete()
    getUrl()

This allows providers to be changed later without rewriting the core business logic.

==================================================
68. FINAL UX PRINCIPLE
==================================================

The platform should feel:

FAST
CLEAN
PREMIUM
TRUSTWORTHY
MOBILE-FIRST
EASY TO USE

B2C should feel like shopping.

B2B should feel like professional procurement.

Admin should feel like an operations command center.

Animations should create personality without reducing usability.

The flame identity should be subtle, premium, and recognizable rather than overwhelming.

One change I'd make to your original stack

I recommend Next.js + TypeScript + Tailwind + shadcn/ui + Motion + PostgreSQL + Prisma + Redis as the core.

For this particular project, I would not introduce too many technologies unnecessarily. The platform already has enough complexity from payments, B2B bookings, inventory, commissions, delivery, and SMS.

The architecture should be modular first, so later you can add things like a driver app, WhatsApp, multiple warehouses, or additional islands without rebuilding the entire system.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/57b18a85-eb26-4a7a-b5c9-4d1ee4840700).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
