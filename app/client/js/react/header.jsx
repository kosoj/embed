goog.provide('app.react.Header');

app.react.Header = React.createClass({

  render: function() {
    var routes = this.props.routes;

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
