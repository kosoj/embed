goog.provide('app.react.pages.Home');

/**
  @constructor
*/
app.react.pages.Home = function() {

  this.component = React.createClass({

   render: function() {
     return (
       <div className="home">
         <p>Home page.</p>
       </div>
     );
   }

 });

};
