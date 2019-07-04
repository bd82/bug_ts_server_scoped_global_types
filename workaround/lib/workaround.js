// Having some random commonjs require seems to enable ts-server to "notice"
// when the node_modules directory is populated.
// Note that this required modifying the tsconfig.json to use { "module" : "commonjs" }
require("fs-extra");