General information: The goal of the project is to create a front-end part of a
web application for the car rental company "RentalCar". The web application
should include several pages, including a home page, a catalog page, and a page
for an individual car with details and a rental form.

Project requirements:

1. Framework and libraries: Work done using Next.js and TypeScript. Zustand for
   state management. Next.js App Router for routing. Axios library is used for
   requests. Any CSS library of your choice (e.g. CSS modules,
   styled-components, MUI, etc.).

2. Main pages: Home page: should contain a banner with the main call to action.
   Catalog page: a page where all available vehicles are displayed with the
   ability to filter by certain criteria (brand, price, mileage) and the ability
   to add a car to favorites. Individual car page: a page with a detailed
   description of the selected car, a photo, a rental form.

3. Routing: / - Home page. /catalog - Catalog page. /catalog/:id- Individual car
   page.

4. Application State: Use Zustand to manage state. Create a global state to
   store the vehicle list, filter state, and favorites list. When sending a
   query for filtered vehicles, it is important to first reset the previous
   search results to ensure that the displayed data is relevant and accurate
   according to the new filtering criteria.

5. Functional requirements: Go to the catalog page: The user should be able to
   click on the "View Catalog" button on the main page to go to the catalog
   page. Vehicle filtering (must be done on the backend, not the frontend). The
   user should be able to filter vehicles by: car brand (one brand can be
   selected) price (one price can be selected) vehicle mileage (from and to can
   be selected separately or simultaneously). Favorites: The user should be able
   to add vehicles to the favorites list. The list of selected vehicles should
   be saved when the page is refreshed. The car's mileage should be displayed in
   the UI through a space, i.e. instead of 5000 km it should be 5,000 km. Jump
   to the details page: the user should be able to click on the "Read more"
   button on the vehicle card on the catalog page to go to the page with a
   detailed description of this vehicle. Loading cards: the catalog page should
   have a "Load More" button, when clicked, additional vehicle cards are loaded
   taking into account the selected filters. (pagination should be performed on
   the backend). Booking form: the user should be able to rent a car by filling
   out the form on the individual car page. The result of successfully sending
   the form should be a notification about a successful rental.

6. Design: Adhere to the provided layout. The layout should be made for the
   desktop version. Adaptability can be implemented as desired.

7. Development: Use a component approach. Adhere to the DRY (Don't Repeat
   Yourself) principle. Write clean and readable code with comments where
   necessary. Project deployed on vercel.com
