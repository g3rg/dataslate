(this.webpackJsonpdataslate=this.webpackJsonpdataslate||[]).push([[0],{210:function(e,t,n){},225:function(e,t){},227:function(e,t){},237:function(e,t){},239:function(e,t){},265:function(e,t){},266:function(e,t){},271:function(e,t){},273:function(e,t){},280:function(e,t){},299:function(e,t){},373:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n(52),a=n.n(r),i=(n(210),n(32)),c=n.n(i),o=n(53),l=n(202),d=n(11),h=n(201),j=n(378),u=n(0);var b=function(){return Object(u.jsxs)(j.a,{children:[Object(u.jsx)("h1",{children:"Dataslate"}),Object(u.jsx)("p",{className:"lead",children:"Easy-to-use datasheets for Warhammer 40,000: Kill Team"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"All the info you need, when you need it"}),Object(u.jsx)("li",{children:"Stats and abilities organised by phase"}),Object(u.jsx)("li",{children:"No wasted space for identical models"}),Object(u.jsx)("li",{children:"Designed for print or screen"}),Object(u.jsx)("li",{children:"Clear, uncluttered layout for easy reference"})]})]})},m=n(379),p=n(380),x=n(389),O=n(387);var g=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(m.a,{children:[Object(u.jsx)(p.a,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Header,{as:"h3",children:"Step 1"}),Object(u.jsxs)(x.a.Body,{style:{minHeight:"12em"},children:[Object(u.jsxs)(x.a.Text,{children:["Build your force in"," ",Object(u.jsx)("a",{href:"https://battlescribe.net/",children:"Battlescribe"}),"."]}),Object(u.jsx)(x.a.Text,{children:"Currently only Kill Team rosters are supported."})]})]})}),Object(u.jsx)(p.a,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Header,{as:"h3",children:"Step 2"}),Object(u.jsx)(x.a.Body,{style:{minHeight:"12em"},children:Object(u.jsx)(h.a,{onDrop:e.onUpload,accept:".ros,.rosz",children:function(e){var t=e.getRootProps,n=e.getInputProps;return Object(u.jsxs)(O.a,Object(d.a)(Object(d.a)({variant:"primary"},t()),{},{style:{textAlign:"center"},children:[Object(u.jsx)("input",Object(d.a)({},n())),Object(u.jsx)("p",{children:"Drop your roster file here, or click to select one."}),Object(u.jsx)("p",{children:Object(u.jsx)("em",{children:"(*.rosz and *.ros accepted)"})})]}))}})})]})}),Object(u.jsx)(p.a,{children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Header,{as:"h3",children:"Step 3"}),Object(u.jsxs)(x.a.Body,{style:{minHeight:"12em"},children:[Object(u.jsx)(x.a.Text,{children:"Print your datasheets out, and never forget an ability again!"}),Object(u.jsx)(x.a.Text,{children:"Prepare to dominate your foes!"})]})]})})]}),Object(u.jsxs)("footer",{children:["Built with ",Object(u.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and ",Object(u.jsx)("a",{href:"https://getbootstrap.com",children:"Bootstrap"}),". Icons courtesy of ",Object(u.jsx)("a",{href:"https://killteam.app/",children:"Companion for Kill Team"}),". Released as ",Object(u.jsx)("a",{href:"https://github.com/floppy/dataslate",children:"Open Source"}),", report problems ",Object(u.jsx)("a",{href:"https://github.com/floppy/dataslate/issues/new",children:"on GitHub"}),". Version: ",Object(u.jsx)("em",{children:Object(u.jsx)("a",{href:"https://github.com/floppy/dataslate/tree/".concat("f20a269b"),children:"f20a269b"})})]})]})};var f=function(e){return Object(u.jsxs)("div",{style:{pageBreakAfter:"always"},children:[Object(u.jsxs)("h1",{style:{background:"black",color:"white",padding:"10px",width:"100%",textTransform:"capitalize",display:"flex"},children:[Object(u.jsxs)(p.a,{children:[e.name," Phase"]}),Object(u.jsx)(p.a,{style:{flexGrow:0,textAlign:"right"},children:e.note&&Object(u.jsx)("small",{children:e.note})})]}),e.children]})},v=n(381),y=n(9),w=n.n(y);var k=function(e){var t=e.phase?e.abilities.filter((function(t){return t.phases&&t.phases.indexOf(e.phase)>=0})):e.abilities.filter((function(e){return e.phases&&0===e.phases.length})),n=e.highlight?"primary":"";return 0===t.length?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)(v.a,{striped:!0,bordered:!0,size:"sm",variant:n,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Ability"}),Object(u.jsx)("th",{children:"Description"})]})}),Object(u.jsx)("tbody",{children:w.a.sortBy(t,["name"]).map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.description})]})}))})]})};var S=function(e){return Object(u.jsxs)(v.a,{striped:!0,bordered:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"M"}),Object(u.jsx)("th",{children:"WS"}),Object(u.jsx)("th",{children:"BS"}),Object(u.jsx)("th",{children:"S"}),Object(u.jsx)("th",{children:"T"}),Object(u.jsx)("th",{children:"W"}),Object(u.jsx)("th",{children:"A"}),Object(u.jsx)("th",{children:"Ld"}),Object(u.jsx)("th",{children:"Sv"}),Object(u.jsx)("th",{children:"Points"})]})}),Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[e.movement,'"']}),Object(u.jsxs)("td",{children:[e.weapon_skill,"+"]}),Object(u.jsx)("td",{children:isNaN(e.ballistic_skill)?"-":e.ballistic_skill+"+"}),Object(u.jsx)("td",{children:e.strength}),Object(u.jsx)("td",{children:e.toughness}),Object(u.jsx)("td",{children:e.wounds}),Object(u.jsxs)("td",{children:[e.attacks,e.additional_attacks?Object(u.jsxs)("strong",{children:[" +",e.additional_attacks]}):null]}),Object(u.jsx)("td",{children:e.leadership}),Object(u.jsxs)("td",{children:[e.save,"+",e.invulnerable_save?Object(u.jsxs)(u.Fragment,{children:[" / ",Object(u.jsxs)("strong",{children:[e.invulnerable_save,"++"]})]}):null]}),Object(u.jsx)("td",{children:e.points})]})})]})},A=n(382);function N(e){return e.specialism?Object(u.jsx)("img",{className:"specialism",style:{height:"1em",marginRight:"10px"},alt:e.specialism,src:"/icons/".concat(e.specialism.toLowerCase(),".svg")}):Object(u.jsx)(u.Fragment,{})}function C(e){return e.category&&"specialist"!==e.category.toLowerCase()&&"specialist retainer"!==e.category.toLowerCase()?Object(u.jsx)("img",{className:"category",style:{height:"1em",marginRight:"10px"},alt:e.category,src:"/icons/".concat(e.category.toLowerCase(),".svg")}):Object(u.jsx)(u.Fragment,{})}var R=n(197),F=n.n(R);function T(e){var t=w.a.without([e.name,e.type,"Specialist"===e.category||"Specialist Retainer"===e.category?e.specialism:e.category],null,void 0,"");return Object(u.jsxs)("h2",{style:{background:"lightgrey",color:"black",padding:"5px",display:"flex",width:"100%",justifyContent:"space-between"},children:[Object(u.jsxs)(p.a,{children:[e.category&&e.specialism&&("Specialist"===e.category||"Specialist Retainer"===e.category)&&Object(u.jsx)(N,{specialism:e.specialism}),e.category&&Object(u.jsx)(C,{category:e.category}),e.selected>1&&Object(u.jsxs)("small",{children:[e.selected," x "]}),Object(u.jsxs)("strong",{children:[t[0]," "]}),Object(u.jsx)("small",{children:w.a.join(w.a.slice(t,1),", ")})]}),e.showSelector&&Object(u.jsx)(p.a,{style:{flexGrow:0},children:Object(u.jsx)(F.a,{value:e.selected,slideStop:function(t){return e.onSelectionChanged&&e.onSelectionChanged(e.uuid,t.target.value)},step:1,max:e.count,min:0})})]})}function P(e){return Object(u.jsxs)(m.a,{className:e.model.selected>0?"included":"excluded",children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)(Object(d.a)({},e.model),{},{showSelector:!0,onSelectionChanged:e.onSelectionChanged})),"Commander"===e.model.category&&Object(u.jsxs)("div",{children:["Commander specialism: ",Object(u.jsx)("strong",{children:e.model.specialism})]}),Object(u.jsx)("p",{children:e.model.weapons.map((function(e){return e.name})).concat(e.model.wargear.map((function(e){return e.name}))).join(", ")}),Object(u.jsx)(S,Object(d.a)(Object(d.a)({},e.model.stats),{},{points:e.model.points})),Object(u.jsx)(k,{abilities:e.model.abilities,phase:""})]}),Object(u.jsx)(p.a,{sm:"auto",children:Object(u.jsxs)("div",{children:[Object(u.jsx)(A.a,{pill:!0,variant:"primary",className:"mb-2",style:{textTransform:"uppercase",marginRight:"10px",display:"block"},children:e.model.faction}),e.model.keywords.map((function(e){return Object(u.jsx)(A.a,{pill:!0,variant:"secondary",className:"mb-2",style:{textTransform:"uppercase",marginRight:"10px",display:"block"},children:e})}))]})})]})}var W=function(e){return Object(u.jsxs)("div",{className:"statbadge mb-4",style:{paddingTop:".2vw",border:"1px solid black",width:"5vw",height:"5vw",background:"black",color:"white",display:"flex",flexDirection:"column",textAlign:"center",borderRadius:"50%"},children:[Object(u.jsx)("div",{className:"name",style:{fontSize:"1vw",fontWeight:"bold",lineHeight:"1vw"},children:e.name}),Object(u.jsxs)("div",{className:"value",style:{fontSize:"3vw",lineHeight:"3vw",fontWeight:"bold"},children:[e.value,e.secondaryValue?Object(u.jsx)("small",{children:e.secondaryValue}):Object(u.jsx)(u.Fragment,{})]})]})};function B(e){return Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)({},e.model)),Object(u.jsx)(k,{abilities:e.model.abilities,phase:"movement"})]}),Object(u.jsx)(p.a,{sm:"auto",children:Object(u.jsx)(W,{name:"M",value:"".concat(e.model.stats.movement)})})]})}function I(e){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)({},e.model)),Object(u.jsx)(k,{abilities:e.model.abilities,phase:"scouting"})]})})}function _(e){return e.abilities.filter((function(e){return e.phases&&e.phases.indexOf("scouting")>=0})).length>0}function D(e){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)({},e.model)),Object(u.jsx)(k,{abilities:e.model.abilities,phase:"deployment"})]})})}function V(e){return e.abilities.filter((function(e){return e.phases&&e.phases.indexOf("deployment")>=0})).length>0}function M(e){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)({},e.model)),Object(u.jsx)(k,{abilities:e.model.abilities,phase:"initiative"})]})})}function H(e){return e.abilities.filter((function(e){return e.phases&&e.phases.indexOf("initiative")>=0})).length>0}var L=function(e){return 0===e.powers.length?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)(v.a,{striped:!0,bordered:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Power"}),Object(u.jsx)("th",{children:"Warp Charge"}),Object(u.jsx)("th",{children:"Description"})]})}),Object(u.jsx)("tbody",{children:w.a.sortBy(e.powers,["name"]).map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.charge}),Object(u.jsx)("td",{children:e.description})]})}))})]})};function z(e){return Object(u.jsx)(m.a,{children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)({},e.model)),Object(u.jsx)(L,{powers:e.model.psychicPowers}),Object(u.jsx)(k,{abilities:e.model.abilities,phase:"psychic"})]})})}function G(e){return e.psychicPowers.length>0||e.abilities.filter((function(e){return e.phases&&e.phases.indexOf("psychic")>=0})).length>0}var K=function(e){var t="shooting"===e.phase?e.weapons.filter((function(e){return"Melee"!==e.type})):e.weapons.filter((function(e){return"Melee"===e.type}));return 0===t.length?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)(v.a,{striped:!0,bordered:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Weapon"}),"shooting"===e.phase&&Object(u.jsx)("th",{children:"Range"}),"shooting"===e.phase&&Object(u.jsx)("th",{children:"Type"}),"shooting"===e.phase&&Object(u.jsx)("th",{children:"Shots"}),Object(u.jsx)("th",{children:"S"}),Object(u.jsx)("th",{children:"AP"}),Object(u.jsx)("th",{children:"D"}),Object(u.jsx)("th",{children:"Abilities"})]})}),Object(u.jsx)("tbody",{children:w.a.sortBy(t,["name"]).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{style:{whiteSpace:"nowrap"},children:t.name}),"shooting"===e.phase&&Object(u.jsxs)("td",{children:[t.range,'"']}),"shooting"===e.phase&&Object(u.jsx)("td",{style:{whiteSpace:"nowrap"},children:t.type}),"shooting"===e.phase&&Object(u.jsx)("td",{style:{whiteSpace:"nowrap"},children:t.shots}),Object(u.jsx)("td",{children:t.strength}),Object(u.jsx)("td",{children:t.armourPiercing}),Object(u.jsx)("td",{children:t.damage}),Object(u.jsx)("td",{children:t.abilities})]})}))})]})};function E(e){return Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)({},e.model)),U(e.model)&&Object(u.jsx)(K,{weapons:e.model.weapons,phase:"shooting",userStrength:e.model.stats.strength}),Object(u.jsx)(k,{abilities:e.model.abilities,phase:"shooting"})]}),Object(u.jsxs)(p.a,{sm:"auto",children:[U(e.model)&&Object(u.jsx)(W,{name:"BS",value:"".concat(e.model.stats.ballistic_skill),secondaryValue:"+"}),Object(u.jsx)(W,{name:"T",value:"".concat(e.model.stats.toughness)})]}),Object(u.jsxs)(p.a,{sm:"auto",children:[Object(u.jsx)(W,{name:"Sv",value:"".concat(e.model.stats.save),secondaryValue:"+"}),e.model.stats.invulnerable_save?Object(u.jsx)(W,{name:"Inv",value:"".concat(e.model.stats.invulnerable_save),secondaryValue:"+"}):Object(u.jsx)(u.Fragment,{})]})]})}function U(e){return!isNaN(e.stats.ballistic_skill)&&e.weapons.filter((function(e){return"Melee"!==e.type})).length>0}function J(e){return Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)({},e.model)),Object(u.jsx)(K,{weapons:e.model.weapons,phase:"fight",userStrength:e.model.stats.strength}),Object(u.jsx)(k,{abilities:e.model.abilities,phase:"fight"})]}),Object(u.jsxs)(p.a,{sm:"auto",children:[Object(u.jsx)(W,{name:"A",value:"".concat(e.model.stats.attacks),secondaryValue:e.model.stats.additional_attacks?"+".concat(e.model.stats.additional_attacks):null}),Object(u.jsx)(W,{name:"T",value:"".concat(e.model.stats.toughness)})]}),Object(u.jsxs)(p.a,{sm:"auto",children:[Object(u.jsx)(W,{name:"WS",value:"".concat(e.model.stats.weapon_skill),secondaryValue:"+"}),Object(u.jsx)(W,{name:"Sv",value:"".concat(e.model.stats.save),secondaryValue:"+"}),e.model.stats.invulnerable_save?Object(u.jsx)(W,{name:"Inv",value:"".concat(e.model.stats.invulnerable_save),secondaryValue:"+"}):Object(u.jsx)(u.Fragment,{})]})]})}function $(e){return Object(u.jsxs)(m.a,{children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)({},e.model)),Object(u.jsx)(k,{abilities:e.model.abilities,phase:"morale"})]}),Object(u.jsx)(p.a,{sm:"auto",children:Object(u.jsx)(W,{name:"Ld",value:"".concat(e.model.stats.leadership)})})]})}var q=n(383);function Q(e){return Object(u.jsx)(q.a,{variant:"primary",className:"d-print-none",onClick:e.onClose,children:"Close"})}function X(e){var t=w.a.sortBy(e.models,(function(e){return[null==e.category,e.category,e.type]})),n=w.a.filter(t,(function(e){return e.selected>0}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{style:{background:"black",color:"white",padding:"10px",width:"100%",textTransform:"capitalize",display:"flex"},children:[Object(u.jsx)(p.a,{children:e.name}),Object(u.jsx)(p.a,{style:{flexGrow:0,textAlign:"right"},children:Object(u.jsxs)("small",{children:[w.a.sumBy(e.models,(function(e){return e.selected*e.points})),"pts"]})}),Object(u.jsx)(p.a,{style:{flexGrow:0,textAlign:"right"},children:Object(u.jsx)(Q,{onClose:e.onClose})})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{abilities:e.forceRules,phase:"",highlight:!0}),t.map((function(t){return Object(u.jsx)(P,{model:t,onSelectionChanged:e.onSelectionChanged})}))]}),w.a.some(n,_)&&Object(u.jsx)(f,{name:"scouting",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{abilities:e.forceRules,phase:"scouting",highlight:!0}),n.map((function(e){return _(e)&&Object(u.jsx)(I,{model:e})}))]})}),w.a.some(n,V)&&Object(u.jsx)(f,{name:"deployment",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{abilities:e.forceRules,phase:"deployment",highlight:!0}),n.map((function(e){return V(e)&&Object(u.jsx)(D,{model:e})}))]})}),w.a.some(n,H)&&Object(u.jsx)(f,{name:"initiative",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{abilities:e.forceRules,phase:"initiative",highlight:!0}),n.map((function(e){return H(e)&&Object(u.jsx)(M,{model:e})}))]})}),Object(u.jsx)(f,{name:"movement",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{abilities:e.forceRules,phase:"movement",highlight:!0}),n.map((function(e){return Object(u.jsx)(B,{model:e})}))]})}),w.a.some(n,G)&&Object(u.jsx)(f,{name:"psychic",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{abilities:e.forceRules,phase:"psychic",highlight:!0}),n.map((function(e){return G(e)&&Object(u.jsx)(z,{model:e})}))]})}),Object(u.jsx)(f,{name:"shooting",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{abilities:e.forceRules,phase:"shooting",highlight:!0}),n.map((function(e){return Object(u.jsx)(E,{model:e})}))]})}),Object(u.jsx)(f,{name:"fight",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{abilities:e.forceRules,phase:"fight",highlight:!0}),n.map((function(e){return Object(u.jsx)(J,{model:e})}))]})}),Object(u.jsx)(f,{name:"morale",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{abilities:e.forceRules,phase:"morale",highlight:!0}),n.map((function(e){return Object(u.jsx)($,{model:e})}))]})})]})}function Y(e){return Object(u.jsxs)(v.a,{striped:!0,bordered:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"M"}),Object(u.jsx)("th",{children:"APL"}),Object(u.jsx)("th",{children:"GA"}),Object(u.jsx)("th",{children:"DF"}),Object(u.jsx)("th",{children:"SV"}),Object(u.jsx)("th",{children:"W"})]})}),Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.movement}),Object(u.jsx)("td",{children:e.actionPointLimit}),Object(u.jsx)("td",{children:e.groupActivation}),Object(u.jsx)("td",{children:e.defence}),Object(u.jsxs)("td",{children:[e.save,"+",e.invulnerable_save?Object(u.jsxs)(u.Fragment,{children:[" / ",Object(u.jsxs)("strong",{children:[e.invulnerable_save,"++"]})]}):null]}),Object(u.jsx)("td",{children:e.wounds})]})})]})}function Z(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(v.a,{striped:!0,bordered:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Weapon"}),Object(u.jsx)("th",{children:"Attacks"}),Object(u.jsx)("th",{children:"Hit"}),Object(u.jsx)("th",{children:"Damage"}),Object(u.jsx)("th",{children:"Critical"}),Object(u.jsx)("th",{children:"Rules"}),Object(u.jsx)("th",{children:"Critical"})]})}),Object(u.jsx)("tbody",{children:e.weapons.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.name}),Object(u.jsx)("td",{children:e.attacks}),Object(u.jsxs)("td",{children:[e.hit,"+"]}),Object(u.jsx)("td",{children:e.damage}),Object(u.jsx)("td",{children:e.criticalDamage}),Object(u.jsx)("td",{children:e.specialRules}),Object(u.jsx)("td",{children:e.criticalRules})]})}))})]})})}function ee(e){return Object(u.jsxs)(m.a,{className:e.model.selected>0?"included":"excluded",children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)(T,Object(d.a)({},e.model)),Object(u.jsx)(Y,Object(d.a)({},e.model.stats)),Object(u.jsx)(Z,{weapons:e.model.weapons}),Object(u.jsx)(k,{abilities:e.model.abilities,phase:""}),Object(u.jsx)(k,{abilities:e.model.rules,phase:""})]}),Object(u.jsxs)(p.a,{sm:"2",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)(A.a,{pill:!0,variant:"primary",className:"mb-2",style:{textTransform:"uppercase",marginRight:"10px",display:"block"},children:[e.model.faction," \ud83d\udc80"]}),e.model.keywords.map((function(e){return Object(u.jsx)(A.a,{pill:!0,variant:"secondary",className:"mb-2",style:{textTransform:"uppercase",marginRight:"10px",display:"block"},children:e})}))]}),Object(u.jsxs)(x.a,{children:[Object(u.jsx)(x.a.Header,{children:"Wound Track"}),Object(u.jsx)(x.a.Body,{children:"\ud83e\ude78 ".repeat(e.model.stats.wounds)})]})]})]})}function te(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{style:{background:"black",color:"white",padding:"10px",width:"100%",textTransform:"capitalize",display:"flex"},children:[Object(u.jsx)(p.a,{children:e.name}),Object(u.jsx)(p.a,{style:{flexGrow:0,textAlign:"right"},children:Object(u.jsx)(Q,{onClose:e.onClose})})]}),e.models.map((function(e){return Object(u.jsx)(ee,{model:e})}))]})}var ne=n(384),se=n(63),re=n(388),ae=n(78),ie=n.n(ae),ce=n(51),oe={scouting:[/ scouting /],deployment:[/ before the first battle round /,/ set up /,/ cult ambush /],initiative:[/ start of each battle round /,/ beginning of each battle round /,/ at the beginning of the battle round /],movement:[/ movement phase /,/ climbs? /,/ normal move /,/ advances? /,/ charges? /,/ falls? back /,/ reacts? /,/ overwatch /,/ retreats? /,/ fly /,/ after this model has charged /,/ from reserves? /,/ can move across /,/ setup within /],psychic:[/ psychic /,/ deny the witch /,/ perils of the warp /,/ psychich /],shooting:[/ shooting phase /,/ shots? /,/ ballistic skill /,/ ranged /,/ range characteristic /,/ half range /,/ long range /,/ short range /,/ grenades? /,/ shoots? /,/ shooting /,/ fire[sd]+ /,/ firing /,/ obscured /,/ obcured /,/ order(ed)? /,/ voice of command /,/ invulnerable save /,/ demolition charges? /,/ liberator autostubs /,/ obscurred /,/ look out sir! /,/ pistol /,/ heavy weapons?/,/ add [0-9] to saving throws /],fight:[/ fight phase /,/ fights? /,/ weapon skill /,/ attacks characteristics? /,/ strength characteristics? /,/ piles? in /,/ consolidates? /,/ melee /,/ close combat /,/ death to the false emperor /,/ additional attacks? /,/ invulnerable save /,/ look out sir! /,/ intervening terrain /,/ terrain that is between the two models /,/ damage characteristic is [0-9] in a battle round in which this model charged /,/ add [0-9] to saving throws /],morale:[/ nerve /,/ leadership /]},le=[/ weapon /,/ hit rolls? /,/ attack(s|ing)? /,/ saves? /,/ saving throws? /,/ injury rolls? /,/ wound rolls? /,/ loses? a wound /,/ fall(ing)? damage /,/ the bearer is taken out of action /,/ toughness characteristic /,/ suffers? a mortal wound /,/ taken out of action /,/ this weapon/,/ reduced to 0 wounds /],de={deployment:[/ from reserve /],movement:[/ previous movement phase /,/ preceding movement phase /,/ if the firing model moved /,/ moved during the movement phase /,/ round in which it charges or is charged /,/ in which it made a successful charge /,/ even if it fell back in the movement phase /,/ model that can fly /,/ as if it were the movement phase /,/ stunned /,/ penalty for moving /,/ as if the model had remained stationary /,/ demolition charge /],psychic:[/ after all of this weapon's attacks have been resolved /],shooting:[/ when (it|this model) fires overwatch /,/ invulnerable save (against attacks made )?in the fight phase /,/ as if it were your shooting phase /,/ tactical support turret /,/ out of action in the shooting phase /,/ mordian /],fight:[/ the ordered model immediately fights /,/ shots equal to its attacks characteristic /,/ stunned /,/ target enemies at [0-9]{1,2}" or less /,/ within half range /,/ tactical support turret /],morale:[/ target model's leadership /,/ weapon against a model which has a leadership /,/ subtract 1 from its leadership /]},he=function(e){var t=" "+e.toLowerCase().replace(/[.,)(]/g,"")+" ",n=[];return w.a.forIn(oe,(function(e,s){w.a.some(e,(function(e){return e.test(t)}))&&n.push(s)})),n.includes("fight")||n.includes("shooting")||w.a.some(le,(function(e){return e.test(t)}))&&n.push("fight","shooting"),w.a.forIn(de,(function(e,s){w.a.some(e,(function(e){return e.test(t)}))&&w.a.remove(n,(function(e){return e===s}))})),n},je=function(e){var t=[/models with this ability have a ([1-6]{1})\+ invulnerable save/,/has a ([1-6]{1})\+ invulnerable save($|\.|,| and| instead of)/,/has an invulnerable save of ([1-6]{1})\+/],n=w.a.map(e,(function(e){return w.a.min(w.a.map(t,(function(t){var n=e.description.match(t);return n?parseInt(n[1]):null})))}));return w.a.min(n)},ue=ce.useNamespaces({roster:"http://www.battlescribe.net/schema/rosterSchema"}),be=function(e,t){var n=ue("roster:profiles/roster:profile[@typeName='Model']//roster:characteristic[@name='".concat(e,"']"),t);return n.length>0?parseInt(n[0].childNodes[0].nodeValue):""},me=function(e,t,n){var s=ue("roster:characteristics/roster:characteristic[@name='".concat(e,"']"),t);return s.length>0?n?parseInt(s[0].childNodes[0].nodeValue):s[0].childNodes[0].nodeValue:""},pe=function(e){var t=ue(".//roster:costs/roster:cost[@name='pts']",e);return w.a.sumBy(t,(function(e){return parseInt(e.getAttribute("value"))}))},xe=function(e){var t=ue("roster:description",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:he(t)}},Oe=function(e){var t=ue(".//roster:characteristic[@name='Description']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:he(t)}},ge=function(e){var t=ue(".//roster:characteristic[@name='Ability']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:he(t)}},fe=function(e){var t=ue(".//roster:characteristic[@name='Psychic Power']",e)[0].childNodes[0].nodeValue,n=t.match(/warp charge value of ([0-9]+)\.(.*)/),s=null;return n.length>2&&(s=parseInt(n[1]),t=n[2]),{name:e.getAttribute("name"),charge:s,description:t}},ve=function(e,t){var n=w.a.map(e,(function(e){return e.abilities})).concat(w.a.map(t,(function(e){return e.description}))),s=w.a.map(n,(function(e){return function(e){var t=[/if a model/,/if the bearer/,/unless/];return w.a.sum(w.a.map([/Add ([1-9]{1}) to this model's Attacks characteristic/,/ ([1-9]|an|one|two) additional attack/,/(one) \(and only one\) attack with this weapon./],(function(n){var s=e.match(n);return s?w.a.some(t,(function(t){return t.test(e)}))?0:"an"===s[1]||"one"===s[1]?1:"two"===s[1]?2:parseInt(s[1]||s[2]):0})))}(e)}));return w.a.sum(s)},ye=function(e){var t=ue(".//roster:profile[@typeName='Wargear']",e).map(ge),n=ue("roster:selections/roster:selection[roster:selections/roster:selection/roster:profiles/roster:profile/@typeName='Ability']",e),s=ue(".//roster:profile[@typeName='Ability']",e).map(Oe).concat(t),r={movement:be("M",e),weapon_skill:be("WS",e),ballistic_skill:be("BS",e),strength:be("S",e),toughness:be("T",e),wounds:be("W",e),attacks:be("A",e),leadership:be("Ld",e),save:be("Sv",e),invulnerable_save:je(s)},a={name:"Bare fists",range:"-",type:"Melee",strength:r.strength,armourPiercing:0,damage:1,abilities:"Default close combat weapon available to all models"},i=ue(".//roster:profile[@typeName='Weapon']",e).map((function(e){return function(e,t){var n=me("S",e,!1);"User"===n&&(n=t);var s=/x([0-9]+)/i.exec(n);s&&(n=t*parseInt(s[1])),(s=/\+([0-9]+)/i.exec(n))&&(n=t+parseInt(s[1]));var r=me("Type",e,!1);return"Melee"!==r&&(r=r.split(" ").slice(0,-1).join(" ")),{name:e.getAttribute("name"),range:me("Range",e,!0),type:r,shots:me("Type",e,!1).split(" ").slice(-1)[0],strength:n,armourPiercing:me("AP",e,!0),damage:me("D",e,!1),abilities:me("Abilities",e,!1)}}(e,r.strength)})).concat([a]);r.additional_attacks=ve(i,s);var c=ue("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Psychic Power']",e).map(fe),o=ue("roster:categories/roster:category[@primary='true']",e)[0].getAttribute("name"),l=ue("roster:categories/roster:category[@primary='false' and starts-with(@name,'Faction: ')]",e),h=ue("roster:categories/roster:category[@primary='false' and not(starts-with(@name,'Faction: '))]",e).map((function(e){return e.getAttribute("name")}));w.a.remove(h,(function(e){return"Model"===e}));var j={name:e.getAttribute("customName"),type:e.getAttribute("name"),category:"Non-specialist"===o?null:o,stats:r,abilities:s,weapons:i,wargear:t,psychicPowers:c,specialism:n.length>0?n[0].getAttribute("name"):null,faction:l.length>0?l[0].getAttribute("name").split(": ",2)[1]:null,keywords:h,points:pe(e)};return Object(d.a)(Object(d.a)({},j),{},{hash:ie()([]).hash(j)})},we=ce.useNamespaces({bs:"http://www.battlescribe.net/schema/rosterSchema"}),ke=function(e,t){var n=we("bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='".concat(e,"']/text()"),t,!0);return n?parseInt(n.toString()):0},Se=function(e){return{name:we("string(@name)",e,!0).toString(),melee:we("string(@name)",e,!0).toString().startsWith("\u2694"),attacks:parseInt(we(".//bs:characteristic[@name='A']/text()",e,!0).toString()),hit:parseInt(we(".//bs:characteristic[@name='WS/BS']/text()",e,!0).toString()),damage:parseInt(we(".//bs:characteristic[@name='D']/text()",e,!0).toString().split("/")[0]),specialRules:(we(".//bs:characteristic[@name='SR']/text()",e,!0)||"-").toString(),criticalDamage:parseInt(we(".//bs:characteristic[@name='D']/text()",e,!0).toString().split("/")[1]),criticalRules:(we(".//bs:characteristic[@name='!']/text()",e,!0)||"-").toString()}},Ae=function(e){return{name:we("string(@name)",e,!0).toString(),description:(we(".//bs:characteristic[@name='Ability']/text()",e,!0)||"-").toString(),phases:[]}},Ne=function(e){return{name:we("string(@name)",e,!0).toString(),description:(we(".//bs:description/text()",e,!0)||"-").toString(),phases:[]}},Ce=["Brood Coven","Cadre Mercenary","Chaos Daemons","Commorrite","Craftworld","Death Guard","Ecclesiarchy","Forge World","Greenskin","Grey Knight","Hive Fleet","Hunter Cadre","Hunter Clade","Imperial Guard","Kommando","Space Marine","Talons of the Emperor","Thousand Sons","Tomb World","Traitor Space Marine","Troupe","Veteran Guardsmen"],Re=function(e){var t=we("bs:categories/bs:category[@primary='false']/@name",e).map((function(e){return(e.textContent||"").replace("\ud83d\udc80","")})),n=w.a.intersection(t,Ce).pop()||null,s=w.a.remove(t,(function(e){return e!==n})),r={name:we("string(@customName)",e,!0).toString(),type:we("string(@name)",e,!0).toString(),stats:{movement:ke("M",e)+"\u2b24",actionPointLimit:ke("APL",e),groupActivation:ke("GA",e),defence:ke("DF",e),save:ke("SV",e),invulnerable_save:null,wounds:ke("W",e)},weapons:we(".//bs:profile[@typeName='Weapons']",e).map(Se),abilities:we(".//bs:profile[@typeName='Abilities']",e).map(Ae),rules:we(".//bs:rules/bs:rule",e).map(Ne),keywords:s,faction:n,uuid:"",count:0,selected:0};return Object(d.a)(Object(d.a)({},r),{},{hash:ie()().hash(r)})},Fe=n(198),Te=n.n(Fe),Pe=n(199),We=ce.useNamespaces({bs:"http://www.battlescribe.net/schema/rosterSchema"}),Be=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("P"===t.charAt(0)){e.next=4;break}return e.abrupt("return",t);case 4:return n=new Te.a,e.next=7,n.loadAsync(t);case 7:return s=e.sent,e.abrupt("return",s.file(/[^/]+\.ros/)[0].async("string"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ie=function(e){var t=(new Pe.DOMParserImpl).parseFromString(e);switch(We("/bs:roster/@gameSystemId",t,!0).nodeValue){case"a467-5f42-d24c-6e5b":return function(e){var t,n=[],s=ue("/roster:roster",e)[0].getAttribute("name"),r=ue("//roster:force/roster:rules/roster:rule",e).map(xe),a=Object(se.a)(ue("//roster:force/roster:categories/roster:category",e));try{for(a.s();!(t=a.n()).done;){var i,c=t.value.getAttribute("entryId"),o=Object(se.a)(ue("//roster:selection[@type='model' and roster:categories/roster:category/@entryId='".concat(c,"']"),e));try{for(o.s();!(i=o.n()).done;){var l=i.value;n.push(ye(l))}}catch(j){o.e(j)}finally{o.f()}}}catch(j){a.e(j)}finally{a.f()}var h=w.a.groupBy(n,(function(e){return e.hash}));return{system:"KillTeam2018",name:s,forceRules:r,models:w.a.map(h,(function(e){return Object(d.a)(Object(d.a)({},e[0]),{},{uuid:Object(re.a)(),count:e.length,selected:e.length})}))}}(t);case"3b7e-7dab-f79f-2e74":return function(e){var t,n=[],s=we("string(/bs:roster/@name)",e,!0).toString(),r=Object(se.a)(we("//bs:selection[@type='model']",e));try{for(r.s();!(t=r.n()).done;){var a=t.value;n.push(Re(a))}}catch(c){r.e(c)}finally{r.f()}var i=w.a.groupBy(n,(function(e){return e.hash}));return{system:"KillTeam2021",name:s,models:w.a.map(i,(function(e){return Object(d.a)(Object(d.a)({},e[0]),{},{uuid:Object(re.a)(),count:e.length,selected:e.length})}))}}(t);default:throw new Error("Unsupported game system!")}},_e=function(){var e=Object(o.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FileReader,e.abrupt("return",new Promise((function(e,s){n.onerror=function(){n.abort(),s(new DOMException("Problem parsing input file."))},n.onloadend=Object(o.a)(c.a.mark((function t(){var s,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.result,t.next=3,Be(s);case 3:r=t.sent,e(Ie(r));case 5:case"end":return t.stop()}}),t)}))),n.readAsBinaryString(t)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function De(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(o.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e(t[0]);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){r(null)},d=function(e){return"KillTeam2018"===e.system};return Object(u.jsxs)(ne.a,{fluid:"lg",children:[null===n?Object(u.jsx)(g,{onUpload:a}):Object(u.jsx)(u.Fragment,{}),n&&d(n)?Object(u.jsx)(X,{name:n.name,models:n.models,onClose:i,forceRules:n.forceRules,onSelectionChanged:function(e,t){n&&d(n)&&r(Object.assign({models:n.models.map((function(n){return n.uuid!==e?n:Object.assign(n,{selected:t})}))},n))}}):Object(u.jsx)(u.Fragment,{}),n&&function(e){return"KillTeam2021"===e.system}(n)?Object(u.jsx)(te,{name:n.name,models:n.models,onClose:i}):Object(u.jsx)(u.Fragment,{})]})}var Ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(386).a({dsn:"https://6fe3e632b45a44c086068e13f3b1a783@o464596.ingest.sentry.io/5473956"}),a.a.render(Object(u.jsx)(De,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ve?(!function(e,t){fetch(e).then((function(n){var s=n.headers.get("content-type");404===n.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Me(t,e)}))}}()}},[[373,1,2]]]);
//# sourceMappingURL=main.86c927a1.chunk.js.map