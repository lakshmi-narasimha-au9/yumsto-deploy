(this.webpackJsonpyumsto=this.webpackJsonpyumsto||[]).push([[0],{102:function(e,t){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(24),r=a.n(i),l=(a(69),a(14)),o=a(16),d=a(4),j=a(20),u=a(5),h=a.n(u),b=a(2),m=a(17),p=a(6),O=a(7),x=a(26),g=a(9),f=a(8),v=(a(75),"f11e24dd85014c9b8f335799a637beec"),k="https://api.spoonacular.com",C=function(e){return{type:"SEARCH",payload:fetch("".concat(k,"/recipes/complexSearch?apiKey=").concat(v,"&query=").concat(e,"&number=20")).then((function(e){return e.json()}))}},y=function(){var e=Object(m.a)(h.a.mark((function e(t){var a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.join(","),s=fetch("".concat(k,"/recipes/informationBulk?ids=").concat(a,"&apiKey=").concat(v)).then((function(e){return e.json()})),e.next=4,s;case 4:return e.t0=e.sent,e.abrupt("return",{type:"ITEM_DETAILBULK",payload:e.t0});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e,t,a,s,c,n,i,r){return{type:"HOMEPAGEFILTERS",payload:fetch("".concat(k,"/recipes/complexSearch?cuisine=").concat(e,"&diet=").concat(t,"&type=").concat(a,"&number=20&maxReadyTime=").concat(s,"&minProtein=").concat(c,"&minCalories=").concat(n,"&maxCalories=").concat(i,"&maxProtein=").concat(r,"&apiKey=").concat(v)).then((function(e){return e.json()}))}},S=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).componentDidMount=function(){document.addEventListener("mousedown",e.handleClickOutside)},e.componentWillUnmount=function(){document.removeEventListener("mousedown",e.handleClickOutside)},e.searchQuery=function(){var t=Object(m.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState(Object(b.a)(Object(b.a)({},e.state),{},{query:a.target.value,selected:!1}));case 2:if(""!==e.state.query){t.next=6;break}e.setState(Object(b.a)(Object(b.a)({},e.state),{},{suggestions:[]})),t.next=18;break;case 6:return t.next=8,e.props.dispatch(C(e.state.query));case 8:return t.t0=e,t.t1=b.a,t.t2=Object(b.a)({},e.state),t.t3={},t.next=14,e.props.searchresults.results;case 14:t.t4=t.sent,t.t5={suggestions:t.t4},t.t6=(0,t.t1)(t.t2,t.t3,t.t5),t.t0.setState.call(t.t0,t.t6);case 18:0===e.state.suggestions.length?e.setState(Object(b.a)(Object(b.a)({},e.state),{},{suggestionsUl:"suggestionsUlHide"})):e.setState(Object(b.a)(Object(b.a)({},e.state),{},{suggestionsUl:"suggestionsUl"}));case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.suggestions=function(){return e.state.suggestions.slice(0,5).map((function(e,t){return Object(s.jsxs)("li",{value:t,children:[e.title," ",Object(s.jsx)("img",{src:e.image,alt:" "})]},e.id)}))},e.clearInput=function(){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{query:"",selected:!1,selectedQuery:"",clear:"inputClear1",suggestionsUl:"suggestionsUl"}))},e.suggestionSelected=function(){var t=Object(m.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState(Object(b.a)(Object(b.a)({},e.state),{},{selectedQuery:e.state.suggestions[a.target.value].title,selected:!0,clear:"inputClear"}));case 2:e.setState(Object(b.a)(Object(b.a)({},e.state),{},{suggestions:[],query:e.state.selectedQuery}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.searchTermDispatcher=Object(m.a)(h.a.mark((function t(){var a,s,c,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.dispatch({type:"SEARCH_TERM",payload:e.state.query});case 2:return t.next=4,e.props.dispatch(C(e.state.query));case 4:a=[],s=Object(j.a)(e.props.searchresults.results);try{for(s.s();!(c=s.n()).done;)n=c.value,a.push(n.id)}catch(i){s.e(i)}finally{s.f()}e.props.dispatch(y(a)),e.props.history.push("/searchresults");case 9:case"end":return t.stop()}}),t)}))),e.componentWillUnmount=function(){if(e.props.searchresults){var t,a=[],s=Object(j.a)(e.props.searchresults.results);try{for(s.s();!(t=s.n()).done;){var c=t.value;a.push(c.id)}}catch(n){s.e(n)}finally{s.f()}e.props.dispatch(y(a))}},e.state={query:"",suggestions:[],selectedQuery:"",selected:!1,clear:"inputClear1",suggestionsUl:"suggestionsUl"},e.setWrapperRef=e.setWrapperRef.bind(Object(x.a)(e)),e.handleClickOutside=e.handleClickOutside.bind(Object(x.a)(e)),e}return Object(O.a)(a,[{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.setState(Object(b.a)(Object(b.a)({},this.state),{},{suggestionsUl:"suggestionsHide",suggestions:[]}))}},{key:"render",value:function(){return this.state.selected||""===this.state.query?Object(s.jsxs)("div",{className:"searchBar",children:[Object(s.jsx)("input",{type:"text",className:"searchInput",value:this.state.selectedQuery,onChange:this.searchQuery}),Object(s.jsx)("span",{className:"searchImg",children:Object(s.jsx)("img",{src:"./images/home/search.png",alt:"search"})}),Object(s.jsx)("span",{className:this.state.clear,onClick:this.clearInput,children:"\u2715"})]}):Object(s.jsxs)("div",{className:"searchBar",children:[Object(s.jsx)("input",{type:"text",className:"searchInput",value:this.state.query,onChange:this.searchQuery}),Object(s.jsx)("span",{className:"searchImg",onClick:this.searchTermDispatcher,children:Object(s.jsx)("img",{src:"./images/home/search.png",alt:"search"})}),Object(s.jsx)("span",{className:"inputClear",onClick:this.clearInput,children:"\u2715"}),Object(s.jsx)("ul",{ref:this.setWrapperRef,className:this.state.suggestionsUl,onClick:this.suggestionSelected,children:this.suggestions()})]})}}]),a}(n.a.Component),H=Object(l.b)((function(e){return{searchresults:e.home_reducer.searchResults}}))(Object(d.e)(S)),w=(a(77),a(59)),R=a.n(w),I=function(e){return Object(s.jsxs)("div",{className:"searchCard",children:[Object(s.jsx)("div",{className:"cardImageContainer",children:Object(s.jsx)("img",{src:function(){if(e.details)return e.details.image}(),alt:"item"})}),Object(s.jsxs)("div",{className:"cardDetailContainer",children:[Object(s.jsx)("div",{className:"item-title",children:e.item.title}),Object(s.jsxs)("div",{className:"item-detail",children:[function(){if(e.details){var t=document.createElement("p");t.innerHTML=e.details.summary;var a,s=Object(j.a)(t.childNodes);try{for(s.s();!(a=s.n()).done;){var c=a.value;"A"===c.nodeName&&c.setAttribute("target","_blank")}}catch(n){s.e(n)}finally{s.f()}return R()(t.outerHTML)}}(),Object(s.jsx)("button",{className:"readMoreBtn",children:"Make Recipe"})]})]})]})},F=(a(120),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).searchResultsRenderer=function(){if(!e.props.searchResults)return Object(s.jsx)("div",{children:"Search For recipes"});if(e.props.searchResults.results){if(0===e.props.searchResults.results.length)return Object(s.jsx)("div",{children:"No results found"});var t=e.props.searchResults.results;if(e.props.itemDetailBulk){var a=e.props.itemDetailBulk;return t.map((function(e,t){return Object(s.jsx)(I,{item:e,details:a[t]},t)}))}}},e.loadMore=Object(m.a)(h.a.mark((function t(){var a,s,c,n,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.searchResults.offset+e.props.searchResults.number,t.next=3,e.props.dispatch(C("".concat(e.props.searchterm,"&offset=").concat(a,"&number=20")));case 3:s=[],c=Object(j.a)(e.props.searchResults.results);try{for(c.s();!(n=c.n()).done;)i=n.value,s.push(i.id)}catch(r){c.e(r)}finally{c.f()}e.props.dispatch(y(s));case 7:case"end":return t.stop()}}),t)}))),e}return Object(O.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"searchResultCards",children:this.searchResultsRenderer()}),Object(s.jsx)("button",{onClick:this.loadMore,className:"loader",children:"Load More Results"})]})}}]),a}(n.a.Component)),D=Object(l.b)((function(e){return{searchResults:e.home_reducer.searchResults,searchterm:e.home_reducer.searchTerm,itemDetailBulk:e.search_reducer.itemDetailBulk}}))(F),T=(a(121),a(122),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).toggleMenu=function(){!1===e.state.isOpen?e.setState({isOpen:!0}):e.setState({isOpen:!1})},e.conditionalRender=function(){var t=sessionStorage.getItem("_ltk");return void 0===t||null==t?Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/login",className:"links",children:"Login"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/login",className:"links",children:"Register"})})]}):Object(s.jsx)(n.a.Fragment,{children:Object(s.jsx)("li",{children:Object(s.jsxs)(o.b,{className:"links",children:["Welcome ",e.props.username.name]})})})},e.state={isOpen:!0},e}return Object(O.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("nav",{class:"navbar",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("h1",{children:Object(s.jsx)(o.b,{to:"/",children:"YUMSTO"})})}),Object(s.jsxs)("div",{class:"hamburger",onClick:this.toggleMenu,children:[Object(s.jsx)("div",{class:"line"}),Object(s.jsx)("div",{class:"line"}),Object(s.jsx)("div",{class:"line"})]}),Object(s.jsx)("ul",{class:this.state.isOpen?"nav-links":"nav-links open",children:this.conditionalRender()})]})}}]),a}(n.a.Component)),M=Object(l.b)((function(e){return{isLogged:e.auth_reducer.is_authenticated,username:e.auth_reducer.userdata}}))(T),L=function(){var e={backgroundImage:"url(".concat("/yumsto-deploy./images/home/header-bg.jpg",")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundAttachment:"fixed",height:"50vh"};return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsxs)("header",{style:e,children:[Object(s.jsx)(M,{}),Object(s.jsx)(H,{className:"searchBar"})]}),Object(s.jsxs)("main",{children:[Object(s.jsx)("h1",{children:"search results"}),Object(s.jsx)(D,{})]})]})},E=a(60),P=a.n(E),A=(a(123),function(){var e=function(e){console.log(e)};return Object(s.jsx)("div",{children:Object(s.jsx)(P.a,{clientId:"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",render:function(e){return Object(s.jsxs)("button",{className:"glogin",onClick:e.onClick,disabled:e.disabled,children:[Object(s.jsx)("i",{class:"fab fa-google"})," Login"]})},buttonText:"Login",onSuccess:e,onFailure:e,cookiePolicy:"single_host_origin"})})}),_=a(61),B=a.n(_),V=(a(124),function(){return Object(s.jsx)(B.a,{appId:"227822988925453",fields:"name,email,picture",callback:function(e){console.log(e)},render:function(e){return Object(s.jsxs)("button",{className:"fbLogin",onClick:e.onClick,children:[" ",Object(s.jsx)("i",{class:"fab fa-facebook-f"})," Login"]})}})}),U=(a(125),function(e){return{type:"USERDATA",payload:e}}),G=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).nameChange=function(e){s.setState(Object(b.a)(Object(b.a)({},s.state),{},{name:e.target.value}))},s.emailChange=function(e){s.setState(Object(b.a)(Object(b.a)({},s.state),{},{email:e.target.value}))},s.passwordChange=function(e){s.setState(Object(b.a)(Object(b.a)({},s.state),{},{password:e.target.value}))},s.registrationFormHandler=function(){var e=Object(m.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c=s.state,fetch("https://yumsjwt.herokuapp.com/register",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return e}));case 3:"success"!==(a=e.sent)&&s.setState(Object(b.a)(Object(b.a)({},s.state),{},{error:a}));case 5:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),s.loginFormHandler=function(){var e=Object(m.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c=s.state,fetch("https://yumsjwt.herokuapp.com/auth/login",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return sessionStorage.setItem("_ltk",e.access_token),e.userdetails})).catch((function(e){return e}));case 3:a=e.sent,s.props.dispatch(U(a)),s.props.dispatch({type:"ISLOGGEDIN",payload:!0});case 6:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={name:"",email:"",password:"",error:""},s}return Object(O.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"loginRow",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("img",{src:"https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg",alt:"bgimg"})}),Object(s.jsx)("div",{className:"col loginCol",children:Object(s.jsx)("div",{className:"contentRow",children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsxs)("div",{className:"regGrp",children:[Object(s.jsx)("h4",{className:"regtitle ".concat(this.props.register&&"extregtitle"),onClick:this.props.registerHandler,children:"REGISTER"}),Object(s.jsx)("h4",{className:"logtitle ".concat(this.props.login&&"extlogtitle"),onClick:this.props.loginHandler,children:"LOGIN"})]}),Object(s.jsx)("div",{className:"flip-container",children:Object(s.jsxs)("div",{className:"flipper ".concat(this.props.login&&"flip"," "),id:"flipper",children:[this.props.register&&Object(s.jsxs)("form",{className:"register",onSubmit:this.registrationFormHandler,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"name",children:"NAME"}),Object(s.jsx)("input",{type:"text",name:"name",onChange:this.nameChange,value:this.state.name})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"email",children:"EMAIL"}),Object(s.jsx)("input",{type:"email",name:"email",onChange:this.emailChange,value:this.state.email}),Object(s.jsx)("span",{children:this.state.error})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"password",children:"PASSWORD"}),Object(s.jsx)("input",{type:"password",name:"password",onChange:this.passwordChange,value:this.state.password})]}),Object(s.jsx)("button",{className:"regbutt",value:"submit",children:"SIGN UP"})]}),this.props.login&&Object(s.jsxs)("form",{className:"login",onSubmit:this.loginFormHandler,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"email",children:"EMAIL"}),Object(s.jsx)("input",{type:"email",name:"email",onChange:this.emailChange,value:this.state.email})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"password",children:"PASSWORD"}),Object(s.jsx)("input",{type:"password",name:"password",onChange:this.passwordChange,value:this.state.password})]}),Object(s.jsx)("button",{className:"logbutt",value:"submit",children:"SIGN IN"}),Object(s.jsx)("p",{children:Object(s.jsx)("center",{children:"OR"})}),Object(s.jsxs)("div",{className:"gfbButtGrp",children:[Object(s.jsx)(A,{className:"googlelogin"}),Object(s.jsx)(V,{className:"facebooklogin"})]})]})]})})]})})})]})}}]),a}(n.a.Component),q=Object(l.b)()(Object(d.e)(G)),W=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).registerHandler=function(){console.log("register"),e.setState(Object(b.a)(Object(b.a)({},e.state),{},{register:!0,login:!1}))},e.loginHandler=function(){console.log("login"),e.setState(Object(b.a)(Object(b.a)({},e.state),{},{register:!1,login:!0}))},e.state={login:!0,register:!1},e}return Object(O.a)(a,[{key:"render",value:function(){return Object(s.jsx)(n.a.Fragment,{children:Object(s.jsxs)("header",{children:[Object(s.jsx)(M,{}),Object(s.jsx)(q,{registerHandler:this.registerHandler,loginHandler:this.loginHandler,login:this.state.login,register:this.state.register})]})})}}]),a}(n.a.Component),Q=a(62),K=a.n(Q),J=a(18),z=(a(144),function(e){var t,a=e.dietSelectHandler,c=e.apiData,i=e.searchInputHandler,r=e.searchClickHandler,l=e.searchInputVal,o=e.receipechooseHandler,d=e.choosenReceipe;return Object(s.jsx)("div",{className:"addMealRow",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("h1",{children:"Plan receipes that in your life"}),Object(s.jsx)("p",{children:"Decide when you would like to eat your recipes by placing them on your calendar"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"mealBox",children:"Choose Meal Box"}),Object(s.jsxs)("select",{id:"mealBox",defaultValue:"Choose",children:[Object(s.jsx)("option",{disabled:!0,children:"Choose"}),Object(s.jsx)("option",{children:"Breakfast"}),Object(s.jsx)("option",{children:"Lunch"}),Object(s.jsx)("option",{children:"Dinner"}),Object(s.jsx)("option",{children:"Snack"})]}),Object(s.jsx)("label",{htmlFor:"diet",children:"Choose Diet Plan"}),Object(s.jsxs)("select",{onChange:a,id:"diet",defaultValue:"Choose",children:[Object(s.jsx)("option",{disabled:!0,children:"Choose"}),Object(s.jsx)("option",{children:"Gluten Free"}),Object(s.jsx)("option",{children:"Vegetarian"}),Object(s.jsx)("option",{children:"Lacto-Vegetarian"}),Object(s.jsx)("option",{children:"Vegan"}),Object(s.jsx)("option",{children:"Ketogenic"})]}),Object(s.jsx)("input",{className:"searchBar",value:l,onChange:i}),Object(s.jsx)("span",(t={className:"searchIcon",onClick:r},Object(J.a)(t,"className","material-icons"),Object(J.a)(t,"children","search"),t)),function(e){if(e&&e.length>0)return e.slice(0,5).map((function(e){return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsxs)("div",{className:"searchResults",onClick:function(){return o(e.id,e.title)},children:[Object(s.jsx)("p",{children:e.title}),Object(s.jsx)("img",{className:"searchImg",src:e.image})]}),Object(s.jsx)("img",{className:"resultlargeImg",src:e.image})]},e.id)}))}(c),Object(s.jsx)("label",{children:"Choosen Receipe"}),Object(s.jsx)("h4",{children:d}),Object(s.jsx)("input",{type:"date"})]})]})})}),Y=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).dietSelectHandler=function(t){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{diet:t.target.value}))},e.searchInputHandler=function(t){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{searchInputVal:t.target.value}))},e.searchClickHandler=function(){K.a.get("".concat("https://api.spoonacular.com/recipes/complexSearch","?diet=").concat(e.state.diet,"&query=").concat(e.state.searchInputVal,"&apiKey=").concat("97405f6dd7504936bc7cc61c0adbae96")).then((function(t){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{searchInputVal:"",apiData:t.data.results}))}))},e.receipechooseHandler=function(t,a){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{receipeId:t,receipeTitle:a,choosenReceipe:a,apiData:""}))},e.state={apiData:"",searchInputVal:"",diet:"",choosenReceipe:""},e}return Object(O.a)(a,[{key:"render",value:function(){return console.log(this.state),Object(s.jsx)("div",{children:Object(s.jsx)(z,{dietSelectHandler:this.dietSelectHandler,apiData:this.state.apiData,searchInputVal:this.state.searchInputVal,searchInputHandler:this.searchInputHandler,searchClickHandler:this.searchClickHandler,receipechooseHandler:this.receipechooseHandler,choosenReceipe:this.state.choosenReceipe})})}}]),a}(n.a.Component),X=(a(145),function(e){var t=e.data,a=e.clickHandler,c=e.changeHandler,i=e.goHandler,r=e.imageMouseOver,l=e.imageMouseLeave,d=e.imageId,j=e.cusinesClickHandler,u=e.cusineClick,h=e.dietClickHandler,b=e.dietClick,m=e.mealClickHandler,p=e.mealClick,O=e.maxreadyClickHandler,x=e.maxreadyClick,g=e.calorieClickHandler,f=e.calorieClick,v=e.protienClickHandler,k=e.protienClick,C=function(e,t,a,c,n){if(n===d)return Object(s.jsxs)("div",{className:"caloriValues",children:[Object(s.jsxs)("div",{className:"calorie",children:[Object(s.jsx)("span",{children:"Calories"}),Object(s.jsx)("span",{children:"".concat(Math.round(e)," ").concat(t)})]}),Object(s.jsxs)("div",{className:"protein",children:[Object(s.jsx)("span",{children:"Proteins"}),Object(s.jsx)("span",{children:"".concat(Math.round(a)," \n              ").concat(c)})]})]})};return Object(s.jsxs)("div",{className:"mainrow",children:[Object(s.jsxs)("div",{className:"Filtercol",children:[Object(s.jsx)("h3",{className:"filtersLabel",children:"Filters"}),Object(s.jsxs)("div",{className:"filters",children:[Object(s.jsxs)("div",{className:"filtercol",children:[Object(s.jsxs)("button",{className:"btn",onClick:j,children:["Cusines ",Object(s.jsx)("span",{className:"material-icons"})]}),u?Object(s.jsxs)("div",{className:"cusine",children:[Object(s.jsx)("input",{onClick:a,type:"radio",value:"Indian",name:"cuisine",id:"ind"}),Object(s.jsx)("label",{htmlFor:"ind",className:"label",children:"Indian"}),Object(s.jsx)("input",{onClick:a,type:"radio",value:"American",name:"cuisine",id:"ame"}),Object(s.jsx)("label",{htmlFor:"ame",children:"American"}),Object(s.jsx)("input",{onClick:a,type:"radio",value:"Caribbean",name:"cuisine",id:"car"}),Object(s.jsx)("label",{htmlFor:"car",children:"Caribbean"}),Object(s.jsx)("input",{type:"radio",onClick:a,value:"Chinese",name:"cuisine",id:"chi"}),Object(s.jsx)("label",{htmlFor:"chi",children:"Chinese"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{onClick:a,type:"radio",value:"Southern",name:"cuisine",id:"sou"}),Object(s.jsx)("label",{htmlFor:"sou",children:"Southern"})]})]}):""]}),Object(s.jsxs)("div",{className:"filtercol",children:[Object(s.jsxs)("button",{className:"btn",onClick:h,children:["Diet Food ",Object(s.jsx)("span",{className:"material-icons"})]}),b?Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"diet",children:[Object(s.jsxs)("div",{className:"option",children:[Object(s.jsx)("input",{onClick:a,type:"radio",id:"glu",value:"Gluten Free",name:"diet"}),Object(s.jsx)("label",{htmlFor:"glu",children:"Gluten Free"})]}),Object(s.jsxs)("small",{children:["Avoid wheat,barley",Object(s.jsx)("br",{})," and other grain foods"]})]}),Object(s.jsxs)("div",{className:"diet",children:[Object(s.jsxs)("div",{className:"option",children:[Object(s.jsx)("input",{onClick:a,type:"radio",id:"vegi",value:"Vegetarian",name:"diet"}),Object(s.jsx)("label",{htmlFor:"vegi",children:"Vegetarian"})]}),Object(s.jsx)("small",{children:"Pure Veg"})]}),Object(s.jsxs)("div",{className:"diet",children:[Object(s.jsxs)("div",{className:"option",children:[Object(s.jsx)("input",{onClick:a,type:"radio",id:"lact",value:"Lacto-Vegetarian",name:"diet"}),Object(s.jsx)("label",{htmlFor:"lact",children:"Lacto-Vegetarian"})]}),Object(s.jsx)("small",{children:"Avoid Egg"})]}),Object(s.jsxs)("div",{className:"diet",children:[Object(s.jsxs)("div",{className:"option",children:[Object(s.jsx)("input",{onClick:a,type:"radio",id:"vegan",value:"Vegan",name:"diet"}),Object(s.jsx)("label",{htmlFor:"vegan",children:"Vegan"})]}),Object(s.jsx)("small",{children:"Avoid Meat"})]})]}):""]}),Object(s.jsxs)("div",{className:"filtercol",children:[Object(s.jsxs)("button",{className:"btn",onClick:m,children:["Meal Types ",Object(s.jsx)("span",{className:"material-icons"})]}),p?Object(s.jsxs)("div",{className:"cusine",children:[Object(s.jsx)("input",{onClick:a,type:"radio",id:"sidedish",value:"Side Dish",name:"mealType"}),Object(s.jsx)("label",{htmlFor:"sidedish",children:"Side Dish"}),Object(s.jsx)("input",{onClick:a,type:"radio",id:"dessert",value:"Dessert",name:"mealType"}),Object(s.jsx)("label",{htmlFor:"dessert",children:"Dessert"}),Object(s.jsx)("input",{onClick:a,type:"radio",id:"breakfast",value:"Breakfast",name:"mealType"}),Object(s.jsx)("label",{htmlFor:"breakfast",children:"Breakfast"}),Object(s.jsx)("input",{onClick:a,type:"radio",id:"snack",value:"Snack",name:"mealType"}),Object(s.jsx)("label",{htmlFor:"snack",children:"Snack"})]}):""]}),Object(s.jsxs)("div",{className:"filtercol",children:[Object(s.jsxs)("button",{className:"btn",onClick:O,children:["Max Ready Time",Object(s.jsx)("small",{children:"(in min)"})," ",Object(s.jsx)("span",{className:"material-icons"})]}),x?Object(s.jsxs)("div",{className:"cusine",children:[Object(s.jsxs)("div",{className:"readytime",children:[Object(s.jsx)("input",{onClick:a,type:"radio",id:"40",value:"40",name:"readyTime"}),Object(s.jsx)("label",{htmlFor:"40",children:"40"})]}),Object(s.jsxs)("div",{className:"readytime",children:[Object(s.jsx)("input",{value:"60",onClick:a,type:"radio",id:"60",name:"readyTime"}),Object(s.jsx)("label",{htmlFor:"60",children:"60"})]}),Object(s.jsxs)("div",{className:"readytime",children:[Object(s.jsx)("input",{value:"100",onClick:a,type:"radio",id:"100",name:"readyTime"}),Object(s.jsx)("label",{htmlFor:"100",children:"100"})]}),Object(s.jsxs)("div",{className:"readytime",children:[Object(s.jsx)("input",{value:"150",onClick:a,type:"radio",id:"150",name:"readyTime"}),Object(s.jsx)("label",{htmlFor:"150",children:"150"})]})]}):""]}),Object(s.jsxs)("div",{className:"filtercol",children:[Object(s.jsxs)("button",{className:"btn",onClick:g,children:["Calories ",Object(s.jsx)("span",{className:"material-icons"})]}),f?Object(s.jsxs)("div",{className:"calories",children:[Object(s.jsxs)("div",{onChange:c,children:[Object(s.jsx)("input",{placeholder:"min 0",type:"number",name:"minCalories"}),Object(s.jsx)("input",{placeholder:"max 800",type:"number",name:"maxCalories"})]}),Object(s.jsx)("button",{onClick:i,children:"Go"})]}):""]}),Object(s.jsxs)("div",{className:"filtercol",children:[Object(s.jsxs)("button",{className:"btn",onClick:v,children:["Protiens ",Object(s.jsx)("span",{className:"material-icons"})]}),k?Object(s.jsxs)("div",{className:"calories",children:[Object(s.jsxs)("div",{onChange:c,children:[Object(s.jsx)("input",{placeholder:"min 0",type:"number",name:"minProtein"}),Object(s.jsx)("input",{placeholder:"max 100",type:"number",name:"maxProtein"})]}),Object(s.jsx)("button",{onClick:i,children:"Go"})]}):""]})]})]}),Object(s.jsx)("div",{className:"displaycol",children:t.results?t.results.length?t.results.map((function(e){return Object(s.jsx)(n.a.Fragment,{children:Object(s.jsxs)(o.b,{style:{textDecoration:"none"},to:"/".concat(e.id),className:"col",children:[Object(s.jsx)("img",{onMouseOver:function(){return r(e.id)},onMouseLeave:l,src:e.image,alt:"item"}),Object(s.jsx)("p",{children:e.title}),C(e.nutrition.nutrients[0].amount,e.nutrition.nutrients[0].unit,e.nutrition.nutrients[1].amount,e.nutrition.nutrients[1].unit,e.id)]})},e.id)})):Object(s.jsx)("div",{className:"nomatchingrow",children:Object(s.jsx)("div",{className:"nomatchingcol",children:"No Matching Data Found"})}):Object(s.jsx)("div",{className:"nodatarow",children:Object(s.jsx)("div",{className:"nodatacol",children:Object(s.jsx)("img",{src:"https://motiongraphicsphoebe.files.wordpress.com/2018/10/tumblr_nurhzkukqo1syz1nro1_500.gif"})})})})]})}),Z=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).clickHandler=function(t){var a=t.target.name;e.setState(Object(b.a)(Object(b.a)({},e.state),{},Object(J.a)({dummy:"some"},a,t.target.value)))},e.goHandler=function(){e.state.minCalories||e.setState(Object(b.a)(Object(b.a)({},e.state),{},{minCalories:0})),e.state.minProtein||e.setState(Object(b.a)(Object(b.a)({},e.state),{},{minProtein:0})),e.state.maxCalories||e.setState(Object(b.a)(Object(b.a)({},e.state),{},{maxCalories:800})),e.state.maxProtein||e.setState(Object(b.a)(Object(b.a)({},e.state),{},{maxProtein:800})),e.setState(Object(b.a)(Object(b.a)({},e.state),{},{dummy:"some"}))},e.changeHandler=function(t){var a=t.target.name;e.setState(Object(b.a)(Object(b.a)({},e.state),{},Object(J.a)({},a,t.target.value)))},e.imageMouseOver=function(t){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{imageId:t}))},e.imageMouseLeave=function(){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{imageId:""}))},e.cusinesClickHandler=function(){e.state.cusineClick?e.setState(Object(b.a)(Object(b.a)({},e.state),{},{cusineClick:!1})):e.setState(Object(b.a)(Object(b.a)({},e.state),{},{cusineClick:!0}))},e.dietClickHandler=function(){e.state.dietClick?e.setState(Object(b.a)(Object(b.a)({},e.state),{},{dietClick:!1})):e.setState(Object(b.a)(Object(b.a)({},e.state),{},{dietClick:!0}))},e.mealClickHandler=function(){e.state.mealClick?e.setState(Object(b.a)(Object(b.a)({},e.state),{},{mealClick:!1})):e.setState(Object(b.a)(Object(b.a)({},e.state),{},{mealClick:!0}))},e.maxreadyClickHandler=function(){e.state.maxreadyClick?e.setState(Object(b.a)(Object(b.a)({},e.state),{},{maxreadyClick:!1})):e.setState(Object(b.a)(Object(b.a)({},e.state),{},{maxreadyClick:!0}))},e.calorieClickHandler=function(){e.state.calorieClick?e.setState(Object(b.a)(Object(b.a)({},e.state),{},{calorieClick:!1})):e.setState(Object(b.a)(Object(b.a)({},e.state),{},{calorieClick:!0}))},e.protienClickHandler=function(){e.state.protienClick?e.setState(Object(b.a)(Object(b.a)({},e.state),{},{protienClick:!1})):e.setState(Object(b.a)(Object(b.a)({},e.state),{},{protienClick:!0}))},e.state={cuisine:"Indian",diet:"vegetarian",mealType:"desset",readyTime:"190",minCalories:"0",maxCalories:"800",minProtein:"0",maxProtein:"800",dummy:"",imageId:"",cusineClick:!1,dietClick:!1,mealClick:!1,maxreadyClick:!1,calorieClick:!1,protienClick:!1},e}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(N(this.state.cuisine,this.state.diet,this.state.mealType,this.state.readyTime,this.state.minProtein,this.state.minCalories,this.state.maxCalories,this.state.maxProtein))}},{key:"componentDidUpdate",value:function(){this.state.dummy&&(this.props.dispatch(N(this.state.cuisine,this.state.diet,this.state.mealType,this.state.readyTime,this.state.minProtein,this.state.minCalories,this.state.maxCalories,this.state.maxProtein)),this.setState(Object(b.a)(Object(b.a)({},this.state),{},{dummy:""})))}},{key:"render",value:function(){return this.props.apiData?Object(s.jsx)("div",{children:Object(s.jsx)(X,{data:this.props.apiData,clickHandler:this.clickHandler,changeHandler:this.changeHandler,goHandler:this.goHandler,imageMouseOver:this.imageMouseOver,imageMouseLeave:this.imageMouseLeave,isHover:this.state.isHover,imageId:this.state.imageId,cusinesClickHandler:this.cusinesClickHandler,cusineClick:this.state.cusineClick,dietClickHandler:this.dietClickHandler,dietClick:this.state.dietClick,mealClickHandler:this.mealClickHandler,mealClick:this.state.mealClick,maxreadyClickHandler:this.maxreadyClickHandler,maxreadyClick:this.state.maxreadyClick,calorieClickHandler:this.calorieClickHandler,calorieClick:this.state.calorieClick,protienClickHandler:this.protienClickHandler,protienClick:this.state.protienClick})}):Object(s.jsx)("div",{children:"Home"})}}]),a}(n.a.Component),$=Object(l.b)((function(e){return{apiData:e.home_reducer.apiDataStore}}))(Z),ee=(a(146),function(){var e={backgroundImage:"url(".concat("/yumsto-deploy./images/home/header-bg.jpg",")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundAttachment:"fixed",height:"50vh"};return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsxs)("header",{style:e,children:[Object(s.jsx)(M,{}),Object(s.jsx)(H,{className:"searchBar"})]}),Object(s.jsx)("main",{children:Object(s.jsx)($,{className:"homeContent"})})]})}),te=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(d.a,{path:"/yumsto-deploy",exact:!0,component:ee}),Object(s.jsx)(d.a,{path:"/yumsto-deploy/login",exact:!0,component:W}),Object(s.jsx)(d.a,{path:"/yumsto-deploy/addmeal",exact:!0,component:Y}),Object(s.jsx)(d.a,{path:"/yumsto-deploy/searchresults",exact:!0,component:L})]})},ae=a(19),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return Object(b.a)(Object(b.a)({},e),{},{searchResults:t.payload});case"SEARCH_TERM":return Object(b.a)(Object(b.a)({},e),{},{searchTerm:t.payload});case"HOMEPAGEFILTERS":return Object(b.a)(Object(b.a)({},e),{},{apiDataStore:t.payload});default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEM_DETAILBULK":return Object(b.a)(Object(b.a)({},e),{},{itemDetailBulk:t.payload});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERDATA":return Object(b.a)(Object(b.a)({},e),{},{userdata:t.payload});case"ISLOGGEDIN":return Object(b.a)(Object(b.a)({},e),{},{is_authenticated:t.payload});default:return e}},ie=Object(ae.c)({home_reducer:se,search_reducer:ce,auth_reducer:ne}),re=a(63),le=a.n(re),oe=Object(ae.d)(ie,Object(ae.a)(le.a));r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(l.a,{store:oe,children:Object(s.jsx)(te,{})})}),document.getElementById("root"))},69:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){}},[[151,1,2]]]);
//# sourceMappingURL=main.0c61d2aa.chunk.js.map