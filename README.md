# `@swc-node/register` programmatic options issue repro

## Issue

When using `@swc-node/register` with programmatic options, no supplied options are applied.

## Repro

- Observe the contents of `tsconfig.json`, and note that `experimentalDecorators` is set to `false`.
- Examine the contents of `test.ts` and note the explicit usage of _legacy_ decorators.
- See `index.js` for the programmatic usage of `@swc-node/register`, and note that `experimentalDecorators` is set to `true` in the call to `register`.

  - As is, `@swc-node/register` will not apply the programmatically supplied `options` passed to `register`, but will instead use the values from `tsconfig.json`. This will cause the compilation to fail.

- Run the following:

```sh
npm i
node index.js
```

This will fail with something like below:

```sh
Error:
  × Unexpected token `@`. Expected identifier, string literal, numeric literal or [ for the computed key
    ╭─[/Users/******/swc-register-options-repro/test.ts:7:1]
  7 │ };
  8 │
  9 │ class Test {
 10 │   @decorate()
    ·   ─
 11 │   public test() {}
 12 │ }
    ╰────
```

Now run `npx patch-package` and re-run `node index.js`. The above command will now succeed, with the following output:

```sh


hello from decorator!


```
