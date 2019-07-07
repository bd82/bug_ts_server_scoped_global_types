/**
 * Strange hack to ensure ts-server will watch changes in the
 * node_modules/@openui5/ts-types-dir when running in VSCode.
 * - See: TBD create issue.
 */

// Remove the "star" comment below to apply the "fix"
// If this triple dash reference is located in some file in the project
// Then the TS-Server will "watch" the node_modules/@openui5/ts-type folder for changes.
/* /// <reference types="@openui5/ts-types" /> # */
