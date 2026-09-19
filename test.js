import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 320, height: 640 });
  await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-black text-white m-0 p-0">
      <nav class="sticky top-[57px] z-30 mb-10 overflow-x-auto border-y border-gray-700 bg-gray-900/90 px-4 sm:px-6">
        <ol class="mx-auto flex max-w-6xl min-w-max gap-2 py-3">
          <li><a class="border px-3 py-2">01 Limgrave</a></li>
          <li><a class="border px-3 py-2">02 Liurnia</a></li>
          <li><a class="border px-3 py-2">03 Caelid</a></li>
          <li><a class="border px-3 py-2">04 Altus</a></li>
          <li><a class="border px-3 py-2">05 Leyndell</a></li>
        </ol>
      </nav>
    </body>
    </html>
  `);

  const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth);
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  
  console.log({ bodyScrollWidth, viewportWidth });
  
  const olLeft = await page.evaluate(() => document.querySelector('ol').getBoundingClientRect().left);
  console.log({ olLeft });
  
  await browser.close();
})();
