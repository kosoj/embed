goog.provide('app.react.pages.Contracts');

/**
  @param {app.react.ContractsSearch} contractsSearch
  @param {app.react.ContractsListing} contractsListing
  @constructor
*/
app.react.pages.Contracts = function(contractsSearch, contractsListing) {

  this.component = React.createClass({

    getInitialState: function() {
      return {
        contracts: []
      }
    },

    render: function() {
      return (
        <div className="home">
          <contractsSearch.component
            onContractsFound={this.onContractsFound}  />
          <contractsListing.component
            contracts={this.state.contracts} />
        </div>
      );
    },

    onContractsFound: function(contracts) {
      this.setState({contracts: contracts})
    }

 });

};
