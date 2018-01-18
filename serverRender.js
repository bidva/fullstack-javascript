import React from 'react';
import ReactDomServer from 'react-dom/server';
import axios from 'axios';
import config from './config';

import App from './src/components/App';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      return {
        initialMarkup: ReactDomServer.renderToString(
          <App data={resp.data.contests} />
        ),
        initialData: resp.data
      };
    })
    .catch(console.error);


export default serverRender;
