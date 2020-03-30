import { configure, addDecorator, addParameters } from '@storybook/react';
// import { DocsPage } from '@storybook/addon-docs/blocks';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';


function loadStories() {
  const req = require.context('../src/components/', true, /.(story|stories).tsx$/);
  // addParameters({docs: DocsPage});
  addDecorator(withInfo);
  addDecorator(withKnobs);
  addParameters({
    info: {
      // styles: {
      //   infoBody: beautifyStory.infoBody,
      //   infoStory: beautifyStory.infoStory,
      // },
      inline: true,
      header: true,
    }
  })
  req.keys().forEach(req);
}

configure(loadStories, module);
