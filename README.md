# React Performance Optimizations

This project demonstrates several techniques to improve performance in React applications. Each optimization is shown in a separate component, and all the examples are combined in the `App.tsx` file.

You can also read the full explanation of these techniques in my Medium article:  
[React Performance Optimizations - Medium](https://fbatuhanr.medium.com/understanding-react-performance-optimizations-techniques-dc38e794d973)

## Components Included

- **`ReactMemoExample.tsx`**: Demonstrates how to use `React.memo` to prevent unnecessary re-renders.
- **`UseMemoExample.tsx`**: Shows how `useMemo` helps with expensive calculations by memoizing values.
- **`UseCallbackExample.tsx`**: Uses `useCallback` to memoize functions, reducing re-renders.
- **`ReactLazyExample.tsx`**: Demonstrates lazy loading components with `React.lazy` and `Suspense`.
- **`AvoidInlineFunctionExample.tsx`**: Shows how to avoid inline functions for better performance.
- **`ImmutableDataExample.tsx`**: Uses immutable data structures to ensure better performance and predictability.
- **`UseFunctionInSetStateExample.tsx`**: Demonstrates how to use a function in `setState` for proper state updates.
- **`KeyCoordinationListRenderingExample.tsx`**: Explains how to use unique keys when rendering lists.
- **`PureComponentExample.tsx`**: Demonstrates how `PureComponent` prevents unnecessary re-renders by doing a shallow comparison of props and state.
- **`LazyLoadingImagesExample.tsx`**: Shows how to use lazy loading for images to improve load time.

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/react-performance-optimizations.git
    ```
2. Navigate to the project folder:
    ```bash
    cd react-performance-optimizations
    ````
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```

## Project Structure

```bash
/src
  /components
    - ReactMemoExample.tsx
    - UseMemoExample.tsx
    - UseCallbackExample.tsx
    - ReactLazyExample.tsx
    - AvoidInlineFunctionExample.tsx
    - ImmutableDataExample.tsx
    - UseFunctionInSetStateExample.tsx
    - KeyCoordinationListRenderingExample.tsx
    - PureComponentExample.tsx
    - LazyLoadingImagesExample.tsx
  - App.tsx
  - main.tsx
  ````

## Conclusion

These examples show different ways to optimize your React apps for better performance. Each technique can help your app run faster, especially as it grows larger. Feel free to explore and use them in your own projects!

![react-performance-optimizations](https://github.com/user-attachments/assets/2ef75d0f-37c3-49b3-8709-ad13fd5a4331)
