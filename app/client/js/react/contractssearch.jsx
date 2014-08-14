goog.provide('app.react.ContractsSearch');

goog.require('goog.dom.forms');

/**
  @constructor
*/
app.react.ContractsSearch = function() {

  this.component = React.createClass({

    render: function() {
      return (
        <form onSubmit={this.onFormSubmit} role="form" className="contracts-search">
          <div className="form-group">
            <label htmlFor="contract-number-id">Contract number</label>
            <input name="contract-number" type="text" className="form-control" id="contract-number-id" />
          </div>
          <div className="form-group">
            <label htmlFor="contract-ident-id">Ident</label>
            <input name="contract-ident" type="text" className="form-control" id="contract-ident-id" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      );
    },

    onFormSubmit: function(e) {
      e.preventDefault();
      var serialized = goog.dom.forms.getFormDataMap(e.target).toObject();
      console.log(serialized);
    }

 });

};
