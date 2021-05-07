# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
   - A stateful component is a class component that needs to be initialized at first, inside of a constructor.
   - A functional component is different from a class component, they can be set as variables from the outside.
   - Another difference is that for a stateful component you need to use `this`, need to setup `state` and `setState` as well.
   - For a function component you can just call the variable and pass it as a prop, no need to use `this`, and you instead use `setState` for setting data.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   - `componentWillMount` is called at the beginning, right before rendering everything.
   - `componentWillUpdate` is called when a certain state changes.

3. Define stateful logic.
   - React hooks stateful logic is if you want to reuse certain hooks.
   - You create a hook, import it, and use it by calling `useHook`.
   - You are able to use React `useState` and other methods within the hook.
   - You can also pass props through them.

4. What are the three step of creating a successful test? What is done in each phase?
   - Setup `test('', () => {})` so that you can you run tests inside.
   - Render your component `render(</>)` that you will be using.;
   - Create tests and call certain methods from the library.
   - Use `expect()` and include a method afterwards for what you want the outcome to be.
