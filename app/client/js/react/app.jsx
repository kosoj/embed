goog.provide('app.react.App');

/**
  @param {app.Routes} routes
  @param {app.react.Header} header
  @param {app.react.pages.Home} homePage
  @param {app.react.pages.Contracts} contractsPage
  @constructor
*/
app.react.App = function(routes, header,
    homePage,
    contractsPage) {

  this.component = React.createClass({

    render: function() {
      return (
        <div className="app">
          <header.component />
          <h1>Ahoj</h1>
          {this.getActivePage()}
        </div>
      );
    },

    getActivePage: function() {
      switch(routes.active) {
        case routes.home:
          return <homePage.component />
        case routes.contracts:
          return <contractsPage.component />
      }
    }

  });

};
