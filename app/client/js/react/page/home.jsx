goog.provide('app.react.page.Home');

/**
 @constructor
 */
app.react.page.Home = function () {

  this.component = React.createClass({

    render: function () {
      return (
        <div className="home container">
          <h2>Welcome</h2>
          <p>
            This sample application was built during training with <a href="https://medium.com/@steida">Daniel Steigerwald</a>.
          </p>
          <dl className="dl-horizontal">
            <dt><a href="http://facebook.github.io/react/">REACT</a></dt>
            <dd>A JavaScript library for building user interfaces</dd>
            <dt><a href="http://getbootstrap.com">Bootstrap</a></dt>
            <dd>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web</dd>
            <dt><a href="https://github.com/steida/este">Este</a></dt>
            <dd>Robust and comfortable dev stack for mobile/offline/frontend first isomorphic web apps</dd>
          </dl>
        </div>
        );
    }

  });

};
