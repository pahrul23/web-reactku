(this["webpackJsonpweb-reactku"]=this["webpackJsonpweb-reactku"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},63:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(32),r=c.n(s),i=(c(43),c.p,c(44),c(14)),d=c(15),l=c(19),o=c(18),j=c(11),h=c.n(j),b=(c(31),c(63),c(20)),u=c.n(b),m=c(89),x=c(88),v=c(2),O=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this,e)).fetchCountries=function(){h.a.get("https://covid19.mathdro.id/api/countries").then((function(e){a.setState({countries:e.data.countries})}))},a.handleChange=function(e){var t=e.target.value;a.props.handleCountryChange(t)},a.state={countries:[],country:""},a}return Object(d.a)(c,[{key:"componentDidMount",value:function(){this.fetchCountries()}},{key:"render",value:function(){return Object(v.jsx)("center",{children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(x.a,{onChange:this.handleChange,children:[Object(v.jsx)("option",{value:"global",children:"Global"},"global"),this.state.countries.map((function(e){return Object(v.jsx)("option",{value:e.name,children:e.name},e.name)}))]})})})}}]),c}(a.Component),N=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var a;return Object(i.a)(this,c),(a=t.call(this,e)).handleCountryChange=function(e){h.a.get("https://covid19.mathdro.id/api/countries/"+e).then((function(e){a.setState({confirm:e.data.confirmed.value,deaths:e.data.deaths.value,recovered:e.data.recovered.value})}))},a.getData=function(){h.a.get("https://covid19.mathdro.id/api").then((function(e){a.setState({confirmG:e.data.confirmed.value,deathsG:e.data.deaths.value,recoveredG:e.data.recovered.value})})).catch((function(e){console.log(e.response)}))},a.state={confirm:null,deaths:null,recovered:null,country:null,confirmG:null,deathsG:null,recoveredG:null},a}return Object(d.a)(c,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"corona-body",children:[Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("center",{className:"name",children:"Pantau Data Covid-19"}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{children:Object(v.jsx)("center",{className:"name",children:Object(v.jsx)("center",{children:"Pahrul"})})}),Object(v.jsx)("div",{className:"name",children:Object(v.jsx)("center",{children:"Persebaran di Dunia"})})]}),Object(v.jsx)("center",{children:Object(v.jsxs)("div",{className:"card-deck card-decks",children:[Object(v.jsxs)("div",{className:"card confirm box",children:[Object(v.jsx)("div",{className:"card-title c-title",children:Object(v.jsx)("center",{children:"Kasus Aktif"})}),Object(v.jsx)("div",{className:"card-body c-body text-center",children:Object(v.jsx)("div",{className:"number",children:Number(this.state.confirmG).toLocaleString("id")})})]}),Object(v.jsxs)("div",{className:"card recovered box",children:[Object(v.jsx)("div",{className:"card-title c-title",children:Object(v.jsx)("center",{children:"Kasus Sembuh"})}),Object(v.jsx)("div",{className:"card-body c-body text-center",children:Object(v.jsx)("div",{className:"number",children:Number(this.state.recoveredG).toLocaleString("id")})})]}),Object(v.jsxs)("div",{className:"card deaths box",children:[Object(v.jsx)("div",{className:"card-title c-title",children:Object(v.jsx)("center",{children:"Kasus Meninggal"})}),Object(v.jsx)("div",{className:"card-body c-body text-center",children:Object(v.jsx)("div",{className:"number",children:Number(this.state.deathsG).toLocaleString("id")})})]})]})})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"name",children:Object(v.jsx)("center",{children:"Negara"})}),Object(v.jsx)("div",{className:"pencarian",children:Object(v.jsx)(O,{handleCountryChange:this.handleCountryChange})}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"card-deck card-decks",children:[Object(v.jsxs)("div",{className:"card confirm box",children:[Object(v.jsx)("div",{className:"card-title c-title",children:Object(v.jsx)("center",{children:"Kasus Aktif"})}),Object(v.jsx)("div",{className:"card-body c-body text-center",children:Object(v.jsx)(u.a,{start:0,end:this.state.confirm,duration:1,separator:".",className:"number"})})]}),Object(v.jsxs)("div",{className:"card recovered box",children:[Object(v.jsx)("div",{className:"card-title c-title",children:Object(v.jsx)("center",{children:"Kasus Sembuh"})}),Object(v.jsx)("div",{className:"card-body c-body text-center",children:Object(v.jsx)(u.a,{start:0,end:this.state.recovered,duration:1,separator:".",className:"number"})})]}),Object(v.jsxs)("div",{className:"card deaths box",children:[Object(v.jsx)("div",{className:"card-title c-title",children:Object(v.jsx)("center",{children:"Kasus Meninggal"})}),Object(v.jsx)("div",{className:"card-body c-body text-center",children:Object(v.jsx)(u.a,{start:0,end:this.state.deaths,duration:1,separator:".",className:"number"})})]})]}),Object(v.jsx)("br",{})]})]})]})}}]),c}(a.Component);var f=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(N,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.ae4e3907.chunk.js.map