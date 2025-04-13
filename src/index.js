import { ResolverFactory } from 'unrs-resolver';

async function main() {
  try {
    // Create a resolver instance
    const resolver = new ResolverFactory({
      cwd: process.cwd(),
      // Optional: Add custom mappings if needed
      mapping: {
        '@components/*': './src/components/*'
      }
    });
    
    const modulePath = await resolver.async('unrs-resolver', 'unrs-resolver');
    console.log('Resolved:', modulePath);
    
  } catch (error) {
    console.error('Resolution error:', error);
  }
}

main();
