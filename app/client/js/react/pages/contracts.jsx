goog.provide('app.react.pages.Contracts');

/**
  @param {app.react.ContractsSearch} contractsSearch
  @param {app.react.ContractsListing} contractsListing
  @constructor
*/
app.react.pages.Contracts = function(contractsSearch, contractsListing) {

  this.component = React.createClass({

    render: function() {
      return (
        <div className="home">
          <contractsSearch.component />
          <contractsListing.component />
        </div>
      );
    }
 });

};
