import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'; // Use 'structureTool' instead of 'deskTool'
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'SAUDA Couture Admin',

  projectId: 'tonlrryd', 
  dataset: 'production',

  // Update 'deskTool()' to 'structureTool()' here too
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});