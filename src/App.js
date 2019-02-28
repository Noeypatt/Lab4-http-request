import React, { Component } from 'react';
import Github from './Github';
import Grid from '@material-ui/core/Grid';
import Wather from './Weather';

class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3}>
              <Github/>
          </Grid>

          <Grid item xs={3}>
            <Wather/>
          </Grid>

        </Grid>
        
      </div>
    );
  }
}

export default App;
