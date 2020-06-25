import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src/components/', true, /.(story|stories).tsx$/);

addParameters({
  docs: DocsPage,
  options: {
    docs: {
      inlineStories: true,
    },
  },
});
addDecorator(withKnobs);
configure(req, module);
