window.app = window.app || {};
app.react = app.react || {};
app.react.User = React.createClass({
  render: function() {
    // this.props.user
    // React.DOM.div(null, "Hello ", this.props.name);
    // React.DOM.div(null, "Hello ", this.props.name);

    return React.DOM.div(null, this.props.user
        ? React.DOM.button(null, 'Logout ' + this.props.user.displayName)
        : React.DOM.button(null, 'Login'));
  }
});
