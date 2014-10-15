goog.provide('app.react.page.contract.ContractList');

/**
  @param {app.Routes} routes
  @param {app.model.store.ContractStore} contractStore
  @constructor
*/
app.react.page.contract.ContractList = function(routes, contractStore) {

  this.component = React.createClass({

    getInitialState: function() {
      return {
        editedContract: null
      }
    },

    render: function() {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Number</th>
              <th>Amount</th>
              <th>Ident</th>
              <th>Lastname</th>
              <th>Firstname</th>
            </tr>
          </thead>
          <tbody>
            {contractStore.foundContracts.map(this.createRow)}
          </tbody>
        </table>
      );
    },

    createRow: function(contract) {
      var isEdited = (this.state.editedContract && this.state.editedContract.number == contract.number);

      return (
        <tr key={contract.number}>
          <td>
            <a className="btn btn-default btn-xs text-gray" href={routes.contractDetail.url({id: contract.number})} title="Detail smlouvy">
              <span className="glyphicon glyphicon-folder-open"/>
            </a>
          </td>
          <td>{
            isEdited ?
              <input id="contract-number"
                     onChange={this.onFieldChange.bind(this, contract)}
                     name="number"
                     ref="number"
                     defaultValue={contract.number} />
              : contract.number
          }</td>
          <td>{
            isEdited ?
              <input id="contract-amount"
                     onChange={this.onFieldChange.bind(this, contract)}
                     name="amount"
                     ref="amount"
                     defaultValue={contract.amount} />
              : contract.amount
          }</td>
          <td>{
            isEdited ?
              <input id="customer-ident"
                     onChange={this.onFieldChange.bind(this, contract.customer)}
                     name="ident"
                     ref="ident"
                     defaultValue={contract.customer.ident} />
              : contract.customer.ident
            }</td>
          <td>{
            isEdited ?
              <input id="customer-lastname"
                     onChange={this.onFieldChange.bind(this, contract.customer)}
                     name="lastname"
                     ref="lastname"
                     defaultValue={contract.customer.lastname} />
              : contract.customer.lastname
          }</td>
          <td>{
            isEdited ?
              <input id="customer-firstname"
                     onChange={this.onFieldChange.bind(this, contract.customer)}
                     name="firstname"
                     ref="firstname"
                     defaultValue={contract.customer.firstname} />
              : contract.customer.firstname
          }</td>
          <td>
            <button onClick={this.onEditToggleClick.bind(this, contract)} className="btn btn-default btn-xs"
            >{isEdited ? 'Done' : 'Edit'}</button>
          </td>
          <td>
            <button onClick={this.onDeleteClick.bind(this, contract)} className="btn btn-danger btn-xs"
            >Delete</button>
          </td>
        </tr>
      );
    },

    onFieldChange: function(entity, e) {
      var name = e.target.name;
      var value = e.target.value;
      entity[name] = value;
      // console.log(entity);
    },

    onDeleteClick: function(contract, e) {
      if (confirm('Fakt to chcete smazat?')) {
        contractStore.remove(contract);
        this.setState({editedContract: null});
      }
    },

    onEditToggleClick: function(contract, e) {
      //console.log("Edited contract: ", contract);
      var ec = this.state.editedContract ? null : contract;
      this.setState({editedContract: ec});
    }

 });

};
