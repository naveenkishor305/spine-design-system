import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseUrl =
  process.env.SPINE_CAPTURE_URL ?? "http://127.0.0.1:3000";

const outputDirectory = path.resolve("docs/renders");

const renders = [
  {
    file: "spine-overview.png",
    sectionId: "overview",
    label: "Overview",
  },
  {
    file: "spine-foundations.png",
    sectionId: "foundations",
    label: "Foundations",
  },
  {
    file: "spine-components.png",
    sectionId: "components",
    label: "Components",
  },
  {
    file: "spine-clinical-patterns.png",
    sectionId: "clinical-patterns",
    label: "Clinical patterns",
  },
  {
    file: "spine-information-architecture.png",
    sectionId: "information-architecture",
    label: "Information architecture",
  },
  {
    file: "spine-privacy-audit.png",
    sectionId: "privacy",
    label: "Privacy, access and audit",
  },
];

await mkdir(outputDirectory, { recursive: true });

const browser = await chromium.launch({ headless: true });

const context = await browser.newContext({
  viewport: {
    width: 1600,
    height: 1000,
  },
  deviceScaleFactor: 1,
  colorScheme: "light",
});

const page = await context.newPage();

for (const render of renders) {
  await page.goto(`${baseUrl}/#${render.sectionId}`, {
    waitUntil: "networkidle",
  });

  const section = page.locator(`#${render.sectionId}`);
  await section.waitFor({ state: "visible" });
  await section.scrollIntoViewIfNeeded();

  await page.addStyleTag({
    content: `
      html {
        scroll-behavior: auto !important;
      }

      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
      }

      nextjs-portal {
        display: none !important;
      }
    `,
  });

  await page.evaluate(
    ({ sectionId }) => {
      const element = document.getElementById(sectionId);

      if (!element) {
        throw new Error(`Section not found: ${sectionId}`);
      }

      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        72;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "auto",
      });
    },
    { sectionId: render.sectionId },
  );

  await page.waitForTimeout(400);

  await page.screenshot({
    path: path.join(outputDirectory, render.file),
    fullPage: false,
    animations: "disabled",
    caret: "hide",
  });

  console.log(`Captured ${render.label}: ${render.file}`);
}

await browser.close();

console.log(`Saved ${renders.length} renders to docs/renders.`);
