goog.provide('app.react.page.contract.ContractDetail');

/**
  @param {app.Routes} routes
  @param {app.model.store.ContractStore} contractStore
  @constructor
*/
app.react.page.contract.ContractDetail = function(routes, contractStore) {

  this.component = React.createClass({

    render: function() {
      var contract = contractStore.getContractByNumber(routes.active.params.id);
      return (
        <div className="contract-detail">
          <h2>Contract detail</h2>
          <dl className="dl-horizontal">
            <dt>Contract&nbsp;number</dt><dd>{contract.number}</dd>
            <dt>Credit&nbsp;type</dt><dd>{contract.type}</dd>
            <dt>Date&nbsp;review</dt><dd>{contract.date}</dd>
            <dt>Credit&nbsp;amount</dt><dd>{contract.amount}</dd>
            <dt>CUID</dt><dd>{contract.customer.cuid}</dd>
            <dt>Ident</dt><dd>{contract.customer.ident}</dd>
            <dt>Lastname</dt><dd>{contract.customer.lastname}</dd>
            <dt>Firstname</dt><dd>{contract.customer.firstname}</dd>
          </dl>
          <a href={routes.contract.url()} className="btn btn-default text-gray">
            <span className="glyphicon glyphicon-circle-arrow-left"/>&nbsp;Back
          </a>
        </div>
      );
    }

 });

};
