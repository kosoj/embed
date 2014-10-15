goog.provide('app.react.page.contract.ContractSearch');

goog.require('app.model.entity.ContractFilter');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.ui.InputDatePicker');

/**
  @param {app.model.store.ContractStore} store
  @constructor
*/
app.react.page.contract.ContractSearch = function(store) {

  var filter = new app.model.entity.ContractFilter;

  this.component = React.createClass({

    getInitialState: function() {
      return {
        errors: [],
        searching: false
      }
    },

    render: function() {
      var isError = this.state.errors.length > 0;

      return (
        <div>
          <form onSubmit={this.onFormSubmit} role="form" className="contracts-search">
            <div className="form-group">
              <label htmlFor="contract-number-id">Contract number</label>
              <input
                className="form-control"
                id="contract-number-id"
                name="number"
                onChange={this.onFieldChange}
                type="text"
                value={filter.number}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contract-ident-id">Ident</label>
              <input
                onChange={this.onFieldChange}
                name="ident"
                type="text"
                className="form-control"
                id="contract-ident-id"
                value={filter.ident}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contract-date">Date</label>
              <input
                name="date"
                ref="date"
                type="text"
                className="form-control"
                id="contract-date-id"
                value={filter.date}
              />
            </div>
            <button
              disabled={this.state.searching}
              type="submit" className="btn btn-default"
            >{this.state.searching ? 'searching...' : 'Submit'}</button>
          </form>
          {isError ?
            <div>
              <br/>
              <h4 className="bg-danger">Validation errors</h4>
              <table className="table table-condensed table-striped errors">
                  <tr>
                    <th>Attribute</th>
                    <th>Messsage</th>
                  </tr>
                  {this.state.errors.map(function(error, index) {
                    return (
                      <tr>
                        <td>{error.prop}</td>
                        <td><small>{error.message}</small></td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          : ""}
        </div>
      );
    },

    componentDidMount: function() {
      var PATTERN = "MM'/'dd'/'yyyy";
      var formatter = new goog.i18n.DateTimeFormat(PATTERN);
      var parser = new goog.i18n.DateTimeParse(PATTERN);
      this.inputDatePicker = new goog.ui.InputDatePicker(formatter, parser);
      this.inputDatePicker.decorate(this.refs['date'].getDOMNode());
    },

    componentWillUnmount: function() {
      this.inputDatePicker.dispose()
    },

    onFormSubmit: function(e) {
      e.preventDefault();
      if (!this.validate()) {
        return;
      }
      this.setSubmitButtonEnabled(false);
      store.search(filter)
        // .thenCatch(this.onContractsError)
        .thenAlways(function() {
          this.setSubmitButtonEnabled(true);
        }, this);
    },

    // Note: Even this error can be handled by ContractStore.
    // onContractsError: function(reason) {
    //   console.log(reason);
    // },

    onFieldChange: function(e) {
      var name = e.target.name;
      var value = e.target.value;
      filter[name] = value;
      this.forceUpdate();
    },

    /**
      @return {boolean}
    */
    validate: function() {
      var errors = filter.validate();
      this.setState({errors: errors});
      return !errors.length;
    },

    /**
      @param {boolean} enabled
    */
    setSubmitButtonEnabled: function(enabled) {
      this.setState({searching: !enabled});
    }

 });

};
