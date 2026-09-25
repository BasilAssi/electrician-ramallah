// يحوّل صفحة HTML لصورة باستخدام Chrome/Edge headless (بدون مكتبات إضافية)
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const BROWSERS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
];

export function renderHtml(htmlPath, outPath, { width, height, scale = 1 }) {
  const browser = BROWSERS.find((p) => existsSync(p));
  if (!browser) {
    console.log(`No Chrome/Edge found — open ${htmlPath} and screenshot it manually.`);
    return false;
  }
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    `--force-device-scale-factor=${scale}`,
    `--window-size=${width},${height}`,
    '--virtual-time-budget=20000',
    `--screenshot=${outPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: 'ignore' });
  return true;
}
