// Import the default export for CommonJS compatibility
import unrsResolver from 'unrs-resolver';

async function main() {
  try {
    // Example 1: Resolve a bare specifier
    const reactPath = await unrsResolver.resolve('react');
    console.log('Resolved react:', reactPath);

    // Example 2: Resolve a relative path
    const relativePath = await unrsResolver.resolve('./utils.js', {
      cwd: process.cwd() + '/src'
    });
    console.log('Resolved relative path:', relativePath);

    // Example 3: Resolve with custom mapping
    const customPath = await unrsResolver.resolve('@components/button', {
      mapping: {
        '@components/*': './src/components/*'
      }
    });
    console.log('Resolved custom mapped path:', customPath);

    // Example 4: Resolve a URL
    const urlPath = await unrsResolver.resolve('https://example.com/module.js');
    console.log('Resolved URL path:', urlPath);
  } catch (error) {
    console.error('Resolution error:', error);
  }
}

main();
