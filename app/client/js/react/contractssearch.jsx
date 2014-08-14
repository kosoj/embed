goog.provide('app.react.ContractsSearch');

goog.require('app.contracts.Contract')

/**
  @constructor
*/
app.react.ContractsSearch = function() {

  var contract = new app.contracts.Contract;

  this.component = React.createClass({

    getInitialState: function() {
      return {
        formSubmitted: false,
        errors: []
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
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          <div className="errors">
            {this.state.errors.map(function(error) {
              return <p>{error.message}</p>;
            })}
          </div>
        </div>
      );
    },

    componentDidMount: function() {
      console.log('komponenta se vykreslila');
    },

    componentWillUnmount: function() {
      console.log('komponenta je pryc');
    },

    onFormSubmit: function(e) {
      e.preventDefault();
      this.setState({formSubmitted: true})
      this.validate();
    },

    onFieldChange: function(e) {
      var state = {}
      var name = e.target.name;
      var value = e.target.value;
      contract[name] = value;
      this.validate();
      this.forceUpdate();
    },

    validate: function() {
      var errors = contract.validate();
      this.setState({errors: errors});
    }

 });

};
