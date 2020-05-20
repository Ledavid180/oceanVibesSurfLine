import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Surfboardmodels from './Surfboardmodels';
import Rseries from './Rseries';
import Blog from './Blog';
import BlogSingle from './BlogSingle';
import Error from './Error';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" compontent={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/surfboardmodels" component={Surfboardmodels} /> {/* Made mistake in creating files, crashes site when repalced with a js file*/}
        <Route path="/rseries" component={Rseries} />
        <Route path="/blog/:id" component={BlogSingle} />
        <Route path="/blog" component={Blog} />
        <Route path="/error" component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
