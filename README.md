# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Build troubleshooting

If you see an error like `Cannot find native binding` / `@rolldown/binding-*` when running `npm run build`, it is usually caused by stale dependencies from a previous `rolldown-vite` install.

Please run a clean install:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

This project now uses the official `vite` package (not `rolldown-vite`) to avoid that optional native binding issue.
