1. here it is, make a complete roadmap for this project and a complete file structure. make sure that the project is level 3 covering all the features and no mistake and bugs as previous sprint: Theme: Advanced State Architecture (Redux Toolkit or Zustand)...

2. what libraries will be needed in this project

3. tailwind is already installed still showing this:
npx tailwindcss init -p
npm error could not determine executable to run
npm error A complete log of this run can be found in: C:\Users\91746\AppData\Local\npm-cache\_logs\2026-05-25T18_11_10_262Z-debug-0.log

4. explain why no ssr in this project

5. okay tell me one thing, if we do not use this dummy json file, instead what better json we could have for an amazing shopping website. also, is this around the objective or i am just going wild without any use

6. ⨯ Failed to load next.config.mjs, see more info here https://nextjs.org/docs/messages/next-config-error
ReferenceError: module is not defined in ES module scope
    at <unknown> (next.config.mjs:27:1)

7. the file "EmptyState.jsx" do exist still showing:
## Error Type
Build Error

## Error Message
Module not found: Can't resolve '@/components/common/EmptyState'

## Build Output
./Desktop/DESKTOP/PRODESK/Mission10/buyswift/app/page.jsx:11:1
Module not found: Can't resolve '@/components/common/EmptyState'
   9 | ...selectFilters } from "@/redux/selector...
  10 | ...filterProducts } from "@/lib/filterPro...
> 11 | ...ptyState from "@/components/common/Emp...
     |    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  12 | ...rorMessage from "@/components/common/E...
  13 | ...oter from "@/components/common/Footer";
  14 | ...oductGridSkeleton from "@/components/p...

Import map: aliased to relative './components/common/EmptyState' inside of [project]/Desktop/DESKTOP/PRODESK/Mission10/buyswift/src

Import traces:
  Client Component Browser:
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/app/page.jsx [Client Component Browser]
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/app/page.jsx [Server Component]

  Client Component SSR:
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/app/page.jsx [Client Component SSR]
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/app/page.jsx [Server Component]

https://nextjs.org/docs/messages/module-not-found

Next.js version: 16.2.6 (Turbopack)

8. no this was not the error but this is the runtime error here:
## Error Type
Runtime Error

## Error Message
./Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/components/filters/FilterSidebar.jsx:18:1
Export setRatingFilter doesn't exist in target module
  16 | } from "@/redux/selectors/productSelectors";
  17 |
> 18 | import {
     | ^^^^^^^
> 19 |   setCategory,
     | ^^^^^^^^^^^^^^
> 20 |   setPriceRange,
     | ^^^^^^^^^^^^^^^^
> 21 |   setRatingFilter,
     | ^^^^^^^^^^^^^^^^^^
> 22 |   setSortOption,
     | ^^^^^^^^^^^^^^^^
> 23 | } from "@/redux/slices/filterSlice";
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  24 |
  25 | export default function FilterSidebar() {
  26 |   const dispatch = useDispatch();

The export setRatingFilter was not found in module [project]/Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/redux/slices/filterSlice.js [app-client] (ecmascript).
Did you mean to import setRating?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.

Import traces:
  Client Component Browser:
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/components/filters/FilterSidebar.jsx [Client Component Browser]
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/app/page.jsx [Client Component Browser]
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/app/page.jsx [Server Component]

  Client Component SSR:
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/components/filters/FilterSidebar.jsx [Client Component SSR]
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/app/page.jsx [Client Component SSR]
    ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/app/page.jsx [Server Component]




    at <unknown> (Error: ./Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/components/filters/FilterSidebar.jsx:18:1)
    at <unknown> (Error: (./Desktop/DESKTOP/PRODESK/Mission10/buyswift/src/components/filters/FilterSidebar.jsx:18:1)

Next.js version: 16.2.6 (Turbopack)

9. error-boundary-callbacks.ts:90 ReferenceError: menuOpen is not defined
    at Navbar (Navbar.jsx:93:19)
    at Object.react_stack_bottom_frame (react-dom-client.development.js:28241:20)
    at renderWithHooks (react-dom-client.development.js:7925:22)
    at updateFunctionComponent (react-dom-client.development.js:10442:19)
    at beginWork (react-dom-client.development.js:12112:18)
    at runWithFiberInDEV (react-dom-client.development.js:986:30)
    at performUnitOfWork (react-dom-client.development.js:18988:22)
    at workLoopSync (react-dom-client.development.js:18816:41)
    at renderRootSync (react-dom-client.development.js:18797:11)
    at performWorkOnRoot (react-dom-client.development.js:17902:35)
    at performWorkOnRootViaSchedulerTask (react-dom-client.development.js:20471:7)
    at MessagePort.performWorkUntilDeadline (scheduler.development.js:45:48)

The above error occurred in the <Navbar> component. It was handled by the <ErrorBoundaryHandler> error boundary.
onCaughtError @ error-boundary-callbacks.ts:90

10. this is the search filter in filterProducts.js:
if (filters.searchQuery) {
    filteredProducts =
      filteredProducts.filter(
        (product) =>
          product.title
            .toLowerCase()
            .includes(
              filters.searchQuery.toLowerCase()
            )
      );
  }

11. ## Error Type
Runtime ReferenceError

## Error Message
activeCategory is not defined


    at eval (src/components/filters/FilterSidebar.jsx:103:21)
    at Array.map (<anonymous>:null:null)
    at FilterSidebar (src/components/filters/FilterSidebar.jsx:85:30)
    at HomePage (src/app/page.jsx:107:9)

## Code Frame
  101 |
  102 |                   ${
> 103 |                     activeCategory === category.name
      |                     ^
  104 |                       ? "bg-black text-white dark:bg-white d...
  105 |                       : "border-gray-300 dark:border-zinc-700"
  106 |                   }

Next.js version: 16.2.6 (Turbopack)

12. on clicking any product displayed:
## Error Type
Console Error

## Error Message
A param property was accessed directly with `params.id`. `params` is a Promise and must be unwrapped with `React.use()` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis


    at ProductDetailsPage (src/app/products/[id]/page.jsx:50:14)

## Code Frame
  48 |
  49 |     fetchProduct();
> 50 |   }, [params.id]);
     |              ^
  51 |
  52 |   if (loading) {
  53 |     return <Loader />;

Next.js version: 16.2.6 (Turbopack)

13. generate the readme file for my project