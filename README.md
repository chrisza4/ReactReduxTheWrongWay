# React-Redux: The wrong way

Small sample to show how not to use React State

Why you should not do that?

1. If another part of your application want to adjust title show in this component, in `ShouldNotDoThis.js` you have to implement `componentWillReceiveProps` accordingly, while in `ShouldDoThis.js` you can just dispatch change into redux state tree and it should be fine.

2. Even if you implement `componentWillReceiveProps` correctly, you have 2 unconsistent data, in redux state tree and your own component state.

3. For React.js users, this is most the cases they have been faced at least once. Even me kinda messed this up once in a while. Why? Because we kinda want to test component updates/events while we developing frontend, and fastest way to do this is to bind component state directly into `render()`. We are so hot-headed about building something so we can't wait to implement `ActionCreators`, `Reducers`. We want to see the UI event and Lived UI immediately!!! Yeah, at the end of the day we just wasted more time. T_T

Note to self: Don't ever do this again
