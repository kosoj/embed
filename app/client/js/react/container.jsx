goog.provide('app.react.Container');

/**
 @param {app.Routes} routes
 @param {app.react.layout.Header} header
 @param {app.react.layout.Menu} menu
 @param {app.react.layout.Footer} footer
 @param {app.react.page.Home} home
 @param {app.react.page.Contract} contract
 @param {app.react.page.contract.ContractDetail} contractDetail
 @constructor
 */
app.react.Container = function (routes, header, menu, footer, home, contract, contractDetail) {
;
  this.component = React.createClass({

    render: function () {
      return (
        <div className="container">
          <header.component />
          <menu.component />
          {this.getActivePage()}
          <footer.component />
        </div>
        );
    },

    getActivePage: function () {
      switch (routes.active) {
        case routes.home:
          return <home.component />
        case routes.contract:
          return <contract.component />
        case routes.contractDetail:
          return <contractDetail.component />
      }
    }

  });

};
