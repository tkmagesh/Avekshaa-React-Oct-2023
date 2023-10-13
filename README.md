# React 

## Schedule
- Commence      : 10:00 AM
- Tea Break     : 11:30 PM (15 mins)
- Lunch Break   : 1:00 PM (45 mins) 
- Tea Break     : 3:30 PM (15 mins)
- Wind up       : 6:00 PM

## Repo
- Github - https://github.com/tkmagesh/avekshaa-react-oct-2023

## Methodology
- No powerpoint
- 100% code driven

## What is React?
- A library for building Rich Internet Application / Single Page Applications

## Why React?
- Less code
- Rendering efficiency (Virtual DOM)

## Reference
- https://bit.ly/react-videos

## HTML vs JSX
### JSX
- Every tag MUST have an close tag
- Use "htmlFor" in place of "for" attribute
- Use "className" in place of "class" attribute

## Component
- Encapsulates Presentation (JSX) + User Interaction logic (events) + State (useState)
- Reusable

## ES Modules
- Everything defined in a js/jsx file is by default considered PRIVATE to the file
- Any public entity has to be explicity EXPORTED
- Any public entity has to be explicity IMPORTED to use them

## State
### UI State
- Primarily deals with the presentational responsibilities of the component
- ONLY the component is interested in any change of this state
- Feel free to maintain this in the component (using useState)
### App State
- Primarily deals with the core domain logic of the application
- Any changes in this might need to be recognized and acted upon by the whole application
- DONOT maintain this in the Component. Use the Store for this state.