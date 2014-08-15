goog.provide('app.react.pages.ContractDetail');

/**
  @param {app.Routes} routes
  @param {app.contracts.Store} contractsStore
  @constructor
*/
app.react.pages.ContractDetail = function(routes, contractsStore) {

  this.component = React.createClass({

    render: function() {
      var contract = contractsStore.getContractByNumber(routes.active.params.id);
      return (
        <div className="contract-detail">
          Number: {contract.number}, <br />
          Ident: {contract.ident}, <br />
          <p>{contract.text}</p>
        </div>
      );
    }

 });

};
