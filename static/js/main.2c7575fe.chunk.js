(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/aneka-makanan.87b5f04a.png"},31:function(e,t,a){e.exports=a(63)},36:function(e,t,a){},42:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(28),l=a.n(c),s=(a(36),a(8)),i=a(9),o=a(12),m=a(10),u=a(13),d=a(11),E=function(){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top"},n.a.createElement(d.b,{className:"navbar-brand",to:"/"},"FoodParadise"))},h=(a(42),function(){return n.a.createElement("footer",{className:"my-footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4 text-center"},n.a.createElement("h5",null,"About FoodParadise"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"About Us")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"Contact Us")))),n.a.createElement("div",{className:"col-sm-4 text-center"},n.a.createElement("h5",null,"Support"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"FAQ")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"Help desk")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"Forums")))),n.a.createElement("div",{className:"col-sm-4 text-center"},n.a.createElement("h5",null,"Download App"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"Google Play")),n.a.createElement("li",null,n.a.createElement("a",{href:"/#"},"App Store")))))),n.a.createElement("div",{className:"social-networks"},n.a.createElement("a",{href:"/#",className:"twitter"},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("a",{href:"/#",className:"facebook"},n.a.createElement("i",{className:"fa fa-facebook-official"})),n.a.createElement("a",{href:"/#",className:"google"},n.a.createElement("i",{className:"fa fa-google-plus"}))),n.a.createElement("div",{className:"text-center footer-copyright"},n.a.createElement("p",null,"Copyright \xa9 2019 FoodParadise ")))}),y=a(30),v=a.n(y),g=function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row",style:{marginBottom:30}},n.a.createElement("img",{src:v.a,width:"100%",alt:"aneka-makanan"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card text-white bg-success mb-3 text-center"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h1",null,"Welcome to FoodParadise")),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},"The Easiest Way to Find Restaurants and Food"),n.a.createElement("p",{className:"card-text"},"You can grab information about restaurants, cafees, cuisines with just a few clicks."),n.a.createElement("p",{className:"card-text"},"Start by choosing the featured cities below, or search the city name."))))))},f=function(e){return n.a.createElement("div",{className:"col-4"},n.a.createElement("div",{className:"card bg-light mb-3"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},e.city.name),n.a.createElement("p",null,e.city.country_name),n.a.createElement(d.b,{to:"/city/".concat(e.city.id),className:"card-text"},"See restaurants in ",e.city.name))))},b=function(e){return e.length>0?e.map(function(e){return n.a.createElement(f,{key:e.id,city:e})}):n.a.createElement("div",{className:"col"},n.a.createElement("p",{className:"text-danger"},"Data not found !"))},N=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,e.title),!0===e.showSubtitle&&""!==e.subtitle&&n.a.createElement("h6",{className:"text-muted"},"Search result for keyword '",e.subtitle,"' "))),n.a.createElement("div",{className:"row"},null==e.cities?n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"Loading . . . ")):b(e.cities)))},p=function(e){return n.a.createElement("div",{className:"row",style:{marginBottom:30}},n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Search City"),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"col-11"},n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Type keyword or city name",value:e.value,onChange:e.onChange})),n.a.createElement("div",{className:"col-1"},n.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:e.onClickSearch},"Search")))))))},w=a(7),k=a.n(w),C={zomato:{baseUrl:"https://developers.zomato.com/api/v2.1",api_key:Object({NODE_ENV:"production",PUBLIC_URL:"/test2"}).REACT_APP_API_KEY_ZOMATO}},_=[{id:74,name:"Jakarta",country_name:"Indonesia"},{id:11052,name:"Bandung",country_name:"Indonesia"},{id:170,name:"Bali",country_name:"Indonesia"}],S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).changeKeywordHandler=function(t){e.setState({keyword:t.target.value})},e.getFeaturedCities=function(){var t="".concat(C.zomato.baseUrl,"/cities");k.a.get(t,{headers:{"user-key":C.zomato.api_key},params:{city_ids:"74,11052,170"}}).then(function(t){var a=t.data;"success"===a.status&&e.setState({featuredCities:a.location_suggestions})}).catch(function(e){return console.log(e)})},e.searchHandler=function(){var t=e.state.keyword,a="".concat(C.zomato.baseUrl,"/cities");k.a.get(a,{headers:{"user-key":C.zomato.api_key},params:{q:t}}).then(function(a){var r=a.data;"success"===r.status&&e.setState({citiesResultSearch:r.location_suggestions,keyword:"",cityKeywordSearch:t})}).catch(function(e){return console.log(e)})},e.state={featuredCities:_,citiesResultSearch:null,keyword:"",cityKeywordSearch:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement("div",{className:"container",style:{marginTop:30,marginBottom:30}},n.a.createElement(N,{title:"Featured Cities",cities:this.state.featuredCities}),n.a.createElement(p,{value:this.state.keyword,onChange:this.changeKeywordHandler,onClickSearch:this.searchHandler}),""!==this.state.cityKeywordSearch&&n.a.createElement(N,{title:"Search Result",showSubtitle:!0,subtitle:this.state.cityKeywordSearch,cities:this.state.citiesResultSearch})))}}]),t}(r.Component),x=a(15),O=function(e){return e.categories?n.a.createElement("div",{className:"list-group"},e.categories.map(function(t){return n.a.createElement("button",{key:t.id,className:"list-group-item list-group-item-action "+(e.categorySelected&&t.id===e.categorySelected.id?"active":""),onClick:function(){return e.categoryClickHandler(t)}},t.name)})):n.a.createElement("p",null,"Loading...")},j=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h5",null,"Keyword"),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"col-10"},n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Type keyword i.e : restaurant's name, location, cuisine, etc.",value:e.keyword,onChange:e.changeKeywordHandler})),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:e.onClickAddToCriteria},"Add to criteria"))))))},R=function(e){return n.a.createElement("div",{className:"card bg-light mb-3",style:{marginTop:20}},n.a.createElement("div",{className:"card-body"},n.a.createElement("p",{className:"card-title"},"Find Restaurants based on criteria : "),n.a.createElement("table",{className:"table table-hover"},n.a.createElement("tbody",null,e.criteria.map(function(t,a){return n.a.createElement("tr",{key:a,className:"table-active"},n.a.createElement("td",{width:"40%"},t.criteriaName),n.a.createElement("td",{width:"50%"},t.data.name),n.a.createElement("td",null,"City"!==t.criteriaName&&n.a.createElement("i",{className:"fa fa-times","aria-hidden":"true",style:{color:"red"},onClick:function(){return e.removeCriteriaHandler(a)}})))}))),n.a.createElement("div",{className:"pull-right"},n.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:e.onClickSearch},"Search"))))},H=function(e){return n.a.createElement("div",{className:"btn btn-sm",style:{color:"white",backgroundColor:"#".concat(e.labelColor),borderColor:"#".concat(e.labelColor)}},e.text)},D=function(e){return n.a.createElement("div",{className:"col-6",style:{marginBottom:20}},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("img",{className:"img-responsive",src:e.restaurant.thumb,alt:"",style:{borderRadius:5,width:100}})),n.a.createElement("div",{className:"col-9"},n.a.createElement("h4",{className:"text-success",style:{fontWeight:800}},e.restaurant.name),n.a.createElement("h6",null,e.restaurant.location.locality),n.a.createElement("h6",{className:"text-muted"},e.restaurant.location.address)))),n.a.createElement("div",{className:"card-body"},n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Rating"),n.a.createElement("td",null,n.a.createElement(H,{labelColor:e.restaurant.user_rating.rating_color,text:"".concat(e.restaurant.user_rating.aggregate_rating," (").concat(e.restaurant.user_rating.rating_text,")")}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Cuisines"),n.a.createElement("td",null,e.restaurant.cuisines)),n.a.createElement("tr",null,n.a.createElement("td",null,"Cost for two"),n.a.createElement("td",null,e.restaurant.currency+" "+e.restaurant.average_cost_for_two))))),n.a.createElement("div",{className:"card-footer"},n.a.createElement(d.b,{to:"/restaurant/".concat(e.restaurant.id),style:{textDecoration:"none"}},n.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-block"},"View Restaurant Details")))))};function A(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return z(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){s=!0,c=e},f:function(){try{l||null==a.return||a.return()}finally{if(s)throw c}}}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getCityData=function(t){var a="".concat(C.zomato.baseUrl,"/cities");k.a.get(a,{headers:{"user-key":C.zomato.api_key},params:{city_ids:"".concat(t)}}).then(function(t){var a=t.data.location_suggestions[0],r={criteriaName:"City",data:a},n=Object(x.a)(e.state.criteria);n.push(r),e.setState({city:a,criteria:n})}).catch(function(e){return console.log(e)})},e.getCategoriesData=function(){var t="".concat(C.zomato.baseUrl,"/categories");k.a.get(t,{headers:{"user-key":C.zomato.api_key}}).then(function(t){var a=t.data,r=e.transformCategoriesData(a.categories);e.setState({categories:r})}).catch(function(e){return console.log(e)})},e.categoryClickHandler=function(t){var a=Object(x.a)(e.state.criteria),r={criteriaName:"Category",data:t};(a=a.filter(function(e){return"Category"!==e.criteriaName})).push(r),e.setState({categorySelected:t,criteria:a})},e.changeKeywordHandler=function(t){e.setState({keyword:t.target.value})},e.addToCriteriaHandler=function(){var t=Object(x.a)(e.state.criteria);t=t.filter(function(e){return"Keyword"!==e.criteriaName});var a={criteriaName:"Keyword",data:{name:e.state.keyword}};t.push(a),e.setState({keyword:"",criteria:t})},e.removeCriteriaHandler=function(t){var a=Object(x.a)(e.state.criteria);a.splice(t,1),e.setState({criteria:a})},e.searchHandler=function(){e.setState({restaurants:null});var t,a="".concat(C.zomato.baseUrl,"/search"),r={},n=A(e.state.criteria);try{for(n.s();!(t=n.n()).done;){var c=t.value;switch(c.criteriaName){case"City":r.entity_id=c.data.id,r.entity_type="city";break;case"Category":r.category=c.data.id;break;case"Keyword":r.q=c.data.name}}}catch(l){n.e(l)}finally{n.f()}k.a.get(a,{headers:{"user-key":C.zomato.api_key},params:r}).then(function(t){var a=t.data;e.setState({restaurants:a.restaurants})}).catch(function(e){return console.log(e)})},e.renderRestaurantList=function(){return null==e.state.restaurants?n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"Loading...")):e.state.restaurants.length>0?e.state.restaurants.map(function(e){var t=e.restaurant;return n.a.createElement(D,{key:t.id,restaurant:t})}):n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"No Data available. Please select criteria, and click Search"))},e.state={city:null,categories:null,categorySelected:null,keyword:"",criteria:[],restaurants:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.city_id;this.getCityData(e),this.getCategoriesData()}},{key:"transformCategoriesData",value:function(e){return e.map(function(e){return e.categories})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid",style:{marginTop:30,marginBottom:30}},this.state.city&&n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h4",{className:"text-success"},"Restaurant in ",this.state.city.name,", ",this.state.city.country_name))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},n.a.createElement("h5",null,"Categories"),n.a.createElement(O,{categories:this.state.categories,categorySelected:this.state.categorySelected,categoryClickHandler:function(t){return e.categoryClickHandler(t)}})),n.a.createElement("div",{className:"col"},n.a.createElement(j,{keyword:this.state.keyword,changeKeywordHandler:this.changeKeywordHandler,onClickAddToCriteria:this.addToCriteriaHandler}),n.a.createElement(R,{criteria:this.state.criteria,removeCriteriaHandler:function(t){return e.removeCriteriaHandler(t)},onClickSearch:this.searchHandler}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col",style:{marginBottom:10}},n.a.createElement("h4",{className:"text-success"},"Restaurant List"))),n.a.createElement("div",{className:"row"},this.renderRestaurantList()))))}}]),t}(r.Component),F=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},e.restaurant?n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"text-success",style:{fontWeight:800}},e.restaurant.name),n.a.createElement("h6",{style:{fontWeight:600}},e.restaurant.location.locality),n.a.createElement("h6",{className:"text-muted"},e.restaurant.location.address)):n.a.createElement("p",null,"Loading...")))),n.a.createElement("div",{className:"card-body"},e.restaurant?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("img",{class:"img-responsive",src:e.restaurant.featured_image,alt:"",style:{borderRadius:5,width:500}})),n.a.createElement("div",{className:"col-6"},n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Rating"),n.a.createElement("td",null,n.a.createElement(H,{labelColor:e.restaurant.user_rating.rating_color,text:"".concat(e.restaurant.user_rating.aggregate_rating," (").concat(e.restaurant.user_rating.rating_text,")")}),n.a.createElement("h6",null,e.restaurant.user_rating.votes," Votes"))),n.a.createElement("tr",null,n.a.createElement("td",null,"Cuisines"),n.a.createElement("td",null,e.restaurant.cuisines)),n.a.createElement("tr",null,n.a.createElement("td",null,"Cost for two"),n.a.createElement("td",null,e.restaurant.currency+" "+e.restaurant.average_cost_for_two)))))):n.a.createElement("p",null,"Loading...")))},K=function(e){return n.a.createElement("div",{className:"card border-success",style:{marginBottom:5}},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row",style:{marginBottom:20}},n.a.createElement("div",{className:"col-1",style:{border:"0px solid black"}},n.a.createElement("img",{class:"img-responsive",src:e.review.user.profile_image,alt:"",style:{borderRadius:"50%",width:80}})),n.a.createElement("div",{className:"col-11",style:{border:"0px solid black"}},n.a.createElement("h6",{className:"font-weight-bold"},e.review.user.name),n.a.createElement(H,{text:"".concat(e.review.user.foodie_level_num," (").concat(e.review.user.foodie_level,")"),labelColor:"".concat(e.review.user.foodie_color)}))),n.a.createElement("h6",{className:"card-text text-muted"},e.review.review_time_friendly),n.a.createElement(H,{text:"".concat(e.review.rating," (").concat(e.review.rating_text,")"),labelColor:"".concat(e.review.rating_color)}),n.a.createElement("p",{className:"card-text"},e.review.review_text)))},T=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getRestaurantData=function(t){var a="".concat(C.zomato.baseUrl,"/restaurant");k.a.get(a,{headers:{"user-key":C.zomato.api_key},params:{res_id:t}}).then(function(t){var a=t.data;e.setState({restaurant:a})}).catch(function(e){return console.log(e)})},e.getReviewsData=function(t){var a="".concat(C.zomato.baseUrl,"/reviews");k.a.get(a,{headers:{"user-key":C.zomato.api_key},params:{res_id:t}}).then(function(t){var a=t.data;e.setState({reviews:a.user_reviews})}).catch(function(e){return console.log(e)})},e.state={restaurant:null,reviews:null},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.getRestaurantData(e.restaurant_id),this.getReviewsData(e.restaurant_id)}},{key:"render",value:function(){return n.a.createElement("div",{className:"container",style:{marginTop:30,marginBottom:30}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12",style:{marginBottom:20}},n.a.createElement(F,{restaurant:this.state.restaurant})),n.a.createElement("div",{className:"col-12",style:{marginBottom:20}},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"text-success",style:{fontWeight:800}},"Reviews"),this.state.reviews?this.state.reviews.map(function(e){var t=e.review;return n.a.createElement(K,{key:t.id,review:t})}):n.a.createElement("p",null,"Loading..."))))))}}]),t}(r.Component),U=a(1),L=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(E,null),n.a.createElement(U.a,{path:"/",exact:!0,component:S}),n.a.createElement(U.a,{path:"/city/:city_id",component:B}),n.a.createElement(U.a,{path:"/restaurant/:restaurant_id",component:T}),n.a.createElement(h,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(60).config(),l.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.2c7575fe.chunk.js.map