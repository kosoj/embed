goog.provide('app.react.ContractsListing');

/**
  @param {app.Routes} routes
  @param {app.contracts.Store} contractsStore
  @constructor
*/
app.react.ContractsListing = function(routes, contractsStore) {

  this.component = React.createClass({

    getInitialState: function() {
      return {
        editedContractNumber: null
      }
    },

    render: function() {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Number</th>
              <th>Ident</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {contractsStore.foundContracts.map(this.createRow)}
          </tbody>
        </table>
      );
    },

    createRow: function(contract) {
      var isEdited = this.state.editedContractNumber == contract.number;

      return (
        <tr key={contract.number}>
          <td>{
            isEdited
              ? <input defaultValue={contract.number} />
              : <a href={
                  routes.contractDetail.url({id: contract.number})
                }>show {contract.number}</a>
          }</td>
          <td>{
              isEdited
                ? <input defaultValue={contract.ident} />
                : contract.ident
            }</td>
          <td>{
            isEdited
              ? <textarea defaultValue={contract.text} />
              : contract.text
          }</td>
          <td>
            <button
              onClick={this.onDeleteClick.bind(this, contract)}
              className="btn btn-danger btn-xs"
            >smazat</button>
          </td>
          <td>
            <button
              onClick={this.onEditToggleClick.bind(this, contract)}
              className="btn btn-danger btn-xs"
            >{isEdited ? 'done' : 'edit'}</button>
          </td>
        </tr>
      );
    },

    onDeleteClick: function(contract, e) {
      if (confirm('Fakt to chcete smazat?'))
        contractsStore.remove(contract);
    },

    onEditToggleClick: function(contract, e) {
      var number = this.state.editedContractNumber ? null : contract.number;
      this.setState({editedContractNumber: number});
    }

 });

};
