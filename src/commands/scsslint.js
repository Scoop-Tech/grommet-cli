/**
* Node dependencies
**/
import path from 'path';
import fs from 'fs';

/**
* NPM dependencies
**/
import lint from 'sass-lint';

process.on('message', (assets) => {
  let scssLintPath = path.resolve(process.cwd(), '.sass-lint.yml');
  try {
    fs.accessSync(scssLintPath, fs.F_OK);
  } catch (e) {
    console.warn('.sass-lint.yml not found. skipping lint.');
    process.exit(0);
  }

  const result = lint.lintFiles(assets, {}, scssLintPath);
  lint.outputResults(result, {}, scssLintPath);
  const failed = lint.resultCount(result);

  if (failed) {
    process.exit(1);
  } else {
    process.exit(0);
  }
});
