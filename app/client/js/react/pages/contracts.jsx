goog.provide('app.react.pages.Contracts');

/**
  @param {app.react.ContractsSearch} contractsSearch
  @constructor
*/
app.react.pages.Contracts = function(contractsSearch) {

  this.component = React.createClass({

   render: function() {
     return (
       <div className="home">
         <p>TODO: Search and listing.</p>
         <contractsSearch.component />
       </div>
     );
   }

 });

};
