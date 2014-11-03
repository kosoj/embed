goog.provide('app.react.layout.Menu');

/**
 @param {app.Routes} routes
 @constructor
 */
app.react.layout.Menu = function (routes) {

  this.component = React.createClass({

    render: function () {
      return (
        <nav>
          <ul className="nav nav-pills" role="tablist">
              {routes.getList().map(this.createMenu)}
          </ul>
        </nav>
        );
    },

    createMenu: function (route, index) {
      if (route.main) {
        return (
          <li key={index} className={this.getClassName(route)}>
            <a href={route.url()}>{route.name}</a>
          </li>
          );
      }
      return;
    },

    getClassName: function (route) {
      var active = "active";
      if (routes.isActive(route)) {
        return  active;
      }

      if (route.children && route.children.length) {
        for (var i = 0, j = route.children.length; i < j; i++) {
          if (routes.isActive(route.children[i])) {
            return  active;
          }
        }
      }

      return "";
    }
  });

};
