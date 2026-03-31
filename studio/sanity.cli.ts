// studio/sanity.cli.ts
import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'tonlrryd', // Use the same ID from your config
    dataset: 'production'
  }
});