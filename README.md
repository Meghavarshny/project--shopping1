# Features:
- Real products from Fake Store API
- Shopping cart functionality
- Indian Rupee pricing
- Category filtering
- 10% discount
- Responsive design
- Lightning bolt icon
- 
Key Features Explained:
### 1. Product Display
- Fetches real products from https://fakestoreapi.com/
- Filters to show only clothing and electronics
- Converts USD to INR with custom pricing logic:
  - Clothing items: Under ₹500
  - Electronics: Above ₹10,000

### 2. Shopping Cart
- Add products to cart with quantity controls
- Remove items or adjust quantities
- Persistent cart state (survives page refresh)
- Automatic 10% discount calculation

### 3. Responsive Design
- Desktop: Full navigation with header
- Mobile: Bottom navigation bar
- Responsive product grid layout

### 4. Modern Tech Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Routing**: Wouter (lightweight router)
- **State Management**: Zustand for cart state
- **API Calls**: TanStack Query with error handling
- **Backend**: Express.js server
- **UI Components**: Shadcn/ui component library

