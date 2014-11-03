goog.provide('app.react.layout.Header');

/**
 @constructor
 */
app.react.layout.Header = function () {

  this.component = React.createClass({

    render: function () {
      return (
        <header className="page-header">
          <h1>EmbedIT <small> REACT application example</small></h1>
        </header>
        );
    }

  });

};
