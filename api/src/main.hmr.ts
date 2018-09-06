import { bootstrap } from "./boot";

declare const module: any;

async function main() {
  const app = await bootstrap();

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

main();
