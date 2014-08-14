goog.provide('app.react.Header');

/**
  @param {app.Routes} routes
  @constructor
*/
app.react.Header = function(routes) {

  this.component = React.createClass({

    render: function() {
      return (
        <header>Header
          <ul>
            <li><a href={routes.home.createUrl()}>Home</a></li>
            <li><a href={routes.contracts.createUrl()}>Contracts</a></li>
          </ul>
        </header>
      );
    }

  });

};
