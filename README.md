## Problem

Using a **scoped** package containing **global** type signatures requires **restarting** VSCode
For changes in the node_module directory to be "noticed" and the typing information to become
available for editor services.

## How to reproduce

1. Clone this project.
1. Open this project in VSCode (I used v1.36.0).
1. Open the [test_content_assist.js](./lib/test_content_assist.js) file and note the red squiggles 
   due to missing type information.
1. Open the terminal and run `npm install` to retrieve npm dependencies (including the typing information).
1. Note the [test_content_assist.js](./lib/test_content_assist.js) file still shows red squiggles.
1. **Restart** VSCode.
1. Note the [test_content_assist.js](./lib/test_content_assist.js) file no longer shows red squiggles.

## Workaround 1
It seems if even a single file in the project declares a dependency via a triple slash types directive.
- https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
- Example: [solution.js](./lib/solution.js) (Remove the star comment around the triple slash directive).

Then it is possible to remove and recreate the node_modules dir:
- `rm -rf node_modules`
- `npm install`

As many times as desired while the red squiggles will disappear every time the node_modules directory exists.

## Workaround 2
Defining a `typesRoot: ["./node_modules/@openui5"]` in the tsconfig.json also seems to help with this problem.
However this would delete the default typeRoot behavior and due to the provided path being **relative** it would
also break the compliance with node.js recursive ancestors module lookup. This means this workaround would not combine well
with more complex project structures (e.g mono repos).



