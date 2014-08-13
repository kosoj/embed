window.app = window.app || {};
app.main = function(serverData) {

  var App = React.createClass({
    getInitialState: function() {
      return {
        name: 'nikdo'
      };
    },

    render: function() {
      return React.DOM.div(null,
        React.DOM.h1({ref: 'mojeH1'}, 'Ahoj!, ', this.state.name, React.DOM.i(null, '!!!')),
        React.DOM.textarea({onChange: this.onTextareaChange}),
        app.react.User({user: serverData.loggedUser})
      );
    },

    onTextareaChange: function(e) {
      // Example of refs.
      // console.log(this.refs.mojeH1.getDOMNode())
      this.setState({name: e.target.value});
    }

  });

  React.renderComponent(App(), document.body);
};
