## Installation:
- ```yarn``` for install dependencies
---
## Common scripts
- ```yarn start``` for development
- ```yarn build``` for build
---
## Favicons:
Use [favicon.io](https://favicon.io/favicon-converter/) for convert your image (256x256 and biggest recommended) to favicons. Put generated files to /src/favicons/

---
## Generate component:
You can create a component using cli.

Files will be generated inside the directory:
- [component name].scss
- [component name].tsx
- index.tsx (for default export)

Use ```yarn component [component name]``` command

Component name can be nested path

Example:

```yarn component Header/Logo```

create Logo component files in src/components/Header/Logo