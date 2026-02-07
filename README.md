# RentDrive - Car Rental Application

A modern and responsive web application for a car rental company, built with **Next.js**, **TypeScript**, and **Zustand**. This project allows users to browse a catalog of premium vehicles, filter them by various criteria, add detailed information about each car, and book them instantly.

## 🚀 Features

-   **Home Page**: A welcoming landing page with a clear call-to-action to browse the catalog.
-   **Car Catalog**: A comprehensive list of available vehicles with server-side pagination ("Load More").
-   **Advanced Filtering**: Filter cars by:
    -   Brand (e.g., Buick, Volvo, Hummer)
    -   Price per hour
    -   Mileage range (From/To)
-   **Favorites System**: Users can add cars to their favorites list, which persists across sessions.
-   **Car Details**: A dedicated page for each vehicle displaying filtered specifications, rental conditions, and high-quality images.
-   **Booking Form**: An integrated form on the car details page for instant rental inquiries.
-   **Responsive Design**: Optimized for desktop, ensuring a premium user experience.

## 🛠 Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
-   **Styling**: CSS Modules with vanilla CSS, following BEM-like naming.
-   **HTTP Client**: [Axios](https://axios-http.com/)
-   **Components**: Modular component architecture with strict type safety.
-   **Validation**: Custom utility functions for form inputs and strict type checking.

## 📦 Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DmytroHlushchenko17/car-rental-app.git
    cd car-rental-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open the app:**
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📖 Usage

1.  **Browse**: Navigate to the **Catalog** page to see all available cars.
2.  **Filter**: Use the dropdowns to select a **Brand** or **Price**, or enter a mileage range to find your perfect match.
3.  **Favorite**: Click the heart icon ❤️ on any car card to save it to your favorites.
4.  **Details**: Click **"Read more"** on a car card to view full specifications, functionality, and rental conditions.
5.  **Book**: Fill out the booking form on the car details page to request a rental.

## 👤 Author

**Dmytro Hlushchenko**

-   GitHub: [@DmytroHlushchenko17](https://github.com/DmytroHlushchenko17)

---

_This project was developed as a test assignment/project demonstrating modern frontend development practices._
