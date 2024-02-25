# Parsing env with zod

When you read someone's code and come across this type of snippet:

```js
import * as z from 'zod';

const scheme = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  // more key
});

scheme.parse(process.env); // or scheme.parse(import.meta.env)
```

Please double-check your build setup to ensure that the entire `process.env` (or `import.meta.env`) object is not bundled in the client code.

This repository provides an example of leaking environment variables while attempting to parse it with zod. Navigate to the JavaScript files in the dist folder. You will find that the entire `import.meta.env` object (you can locate it at the very end of the last line, or search for `var th={`) is included in both fe1 and fe2 apps, except fe3 app.
