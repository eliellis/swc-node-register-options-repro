const { register } = require("@swc-node/register/register");

register({
  experimentalDecorators: true,
});

require("./test.ts");
