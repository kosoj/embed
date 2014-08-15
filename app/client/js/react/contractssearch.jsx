goog.provide('app.react.ContractsSearch');

goog.require('app.contracts.Contract');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.ui.InputDatePicker');

/**
  @param {app.contracts.Store} contractsStore
  @constructor
*/
app.react.ContractsSearch = function(contractsStore) {

  var contract = new app.contracts.Contract;

  this.component = React.createClass({

    getInitialState: function() {
      return {
        errors: [],
        searching: false
      }
    },

    render: function() {
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
                value={contract.number}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contract-ident-id">Ident</label>
              <input
                value={contract.ident}
                onChange={this.onFieldChange}
                name="ident"
                type="text"
                className="form-control"
                id="contract-ident-id"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contract-date">Date</label>
              <input
                name="date"
                ref="date"
                type="text"
                className="form-control"
                id="contract-date"
              />
            </div>
            <button
              disabled={this.state.searching}
              type="submit" className="btn btn-default">Submit</button>
          </form>
          <div className="errors">
            {this.state.errors.map(function(error) {
              return (
                <p key={error.message}>
                  {error.prop + ': ' + error.message}
                </p>
              );
            })}
          </div>
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
      if (!this.validate()) return;
      this.setSubmitButtonEnabled(false);
      contractsStore.search(contract)
        .then(this.onContractsFound)
        .thenCatch(this.onContractsError)
        .thenAlways(function() {
          this.setSubmitButtonEnabled(true);
        }, this);
    },

    onContractsFound: function(contracts) {
      this.props.onContractsFound(contracts);
      // console.log(contracts);
    },

    onContractsError: function(reason) {
      // console.log(reason);
    },

    onFieldChange: function(e) {
      var name = e.target.name;
      var value = e.target.value;
      contract[name] = value;
      this.forceUpdate();
    },

    /**
      @return {boolean}
    */
    validate: function() {
      var errors = contract.validate();
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
