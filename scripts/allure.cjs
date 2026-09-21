const { existsSync, rmSync } = require('node:fs');
const { join } = require('node:path');
const { spawnSync } = require('node:child_process');

const projectRoot = process.cwd();
const resultsDir = join(projectRoot, 'allure-results');
const reportDir = join(projectRoot, 'allure-report');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const allureCommand = process.platform === 'win32' ? 'allure.cmd' : 'allure';
const supportedTestScripts = new Set([
  'test:smoke',
  'test:regression',
  'test:api',
  'test:all'
]);

const run = (command, args) => spawnSync(command, args, {
  cwd: projectRoot,
  stdio: 'inherit'
});

const exitCode = result => result.status ?? 1;

const clean = () => {
  for (const directory of [resultsDir, reportDir]) {
    rmSync(directory, { recursive: true, force: true });
  }
};

const generate = () => run(allureCommand, [
  'generate',
  resultsDir,
  '--output',
  reportDir
]);

const open = () => {
  if (!existsSync(reportDir)) {
    console.error('Allure report is missing. Run "npm run allure:generate" first.');
    return { status: 1 };
  }

  return run(allureCommand, ['open', reportDir]);
};

const printUsage = () => {
  console.error('Usage: node scripts/allure.cjs <clean|generate|open|run> [test script] [--open]');
};

const [action, testScript, ...flags] = process.argv.slice(2);

if (action === 'clean') {
  clean();
  process.exit(0);
}

if (action === 'generate') {
  process.exit(exitCode(generate()));
}

if (action === 'open') {
  process.exit(exitCode(open()));
}

if (action !== 'run' || !supportedTestScripts.has(testScript) || flags.some(flag => flag !== '--open')) {
  printUsage();
  process.exit(1);
}

clean();
const testResult = run(npmCommand, ['run', testScript]);
const reportResult = generate();
let openResult = { status: 0 };

if (flags.includes('--open') && exitCode(reportResult) === 0) {
  openResult = open();
}

process.exit(exitCode(testResult) || exitCode(reportResult) || exitCode(openResult));
