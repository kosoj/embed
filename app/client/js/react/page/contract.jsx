goog.provide('app.react.page.Contract');

/**
  @param {app.react.page.contract.ContractSearch} search
  @param {app.react.page.contract.ContractList} list
  @constructor
*/
app.react.page.Contract = function(search, list) {

  this.component = React.createClass({

    render: function() {
      return (
        <div className="contract container">
          <h2>Contract search</h2>
          <search.component />
          <list.component />
        </div>
      );
    }
 });

};
