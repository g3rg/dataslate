(this.webpackJsonpscriptorum=this.webpackJsonpscriptorum||[]).push([[0],{132:function(e,t,a){e.exports=a(255)},137:function(e,t,a){},148:function(e,t){},150:function(e,t){},183:function(e,t){},184:function(e,t){},255:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(39),s=a.n(l),o=(a(137),a(120)),i=a(121),c=a(129),m=a(122),u=a(130),p=(a(138),a(257));var h=function(e){return n.a.createElement(p.a,{striped:!0,bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"M"),n.a.createElement("th",null,"WS"),n.a.createElement("th",null,"BS"),n.a.createElement("th",null,"S"),n.a.createElement("th",null,"T"),n.a.createElement("th",null,"W"),n.a.createElement("th",null,"A"),n.a.createElement("th",null,"Ld"),n.a.createElement("th",null,"Sv"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,e.movement,'"'),n.a.createElement("td",null,e.weapon_skill,"+"),n.a.createElement("td",null,isNaN(e.ballistic_skill)?"-":e.ballistic_skill+"+"),n.a.createElement("td",null,e.strength),n.a.createElement("td",null,e.toughness),n.a.createElement("td",null,e.wounds),n.a.createElement("td",null,e.attacks),n.a.createElement("td",null,e.leadership),n.a.createElement("td",null,e.save,"+"))))};var d=function(e){var t=e.phase?e.abilities.filter((function(t){return t.phases.indexOf(e.phase)>=0})):e.abilities.filter((function(e){return 0===e.phases.length}));return 0===t.length?n.a.createElement(n.a.Fragment,null):n.a.createElement(p.a,{striped:!0,bordered:!0},n.a.createElement("tbody",null,t.map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.description))}))))};var g=function(e){var t="shooting"===e.phase?e.weapons.filter((function(e){return!isNaN(e.range)})):e.weapons.filter((function(e){return isNaN(e.range)}));return 0===t.length?n.a.createElement(n.a.Fragment,null):n.a.createElement(p.a,{striped:!0,bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Weapon"),"shooting"===e.phase&&n.a.createElement("th",null,"Range"),"shooting"===e.phase&&n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"S"),n.a.createElement("th",null,"D"),n.a.createElement("th",null,"AP"),n.a.createElement("th",null,"Abilities"))),n.a.createElement("tbody",null,t.map((function(t){return n.a.createElement("tr",null,n.a.createElement("td",null,t.name),"shooting"===e.phase&&n.a.createElement("td",null,t.range,'"'),"shooting"===e.phase&&n.a.createElement("td",null,t.type),n.a.createElement("td",null,isNaN(t.strength)?e.userStrength:t.strength),n.a.createElement("td",null,t.damage),n.a.createElement("td",null,t.armourPiercing),n.a.createElement("td",null,t.abilities))}))))};var E=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{style:{textTransform:"capitalize"}},e.name),e.children)};function f(e){return n.a.createElement("span",{className:"specialism"},{combat:"\ud83e\udd1c",comms:"\ud83d\udcfb",demolitions:"\ud83d\udca3",ferocity:"\ud83e\udd96",fortitude:"\ud83d\udee1\ufe0f",heavy:"\ud83d\udca5",leadership:"\ud83d\udc80",logistics:"\ud83d\ude9a",medic:"\u2695\ufe0f",melee:"\ud83e\udd1c",psyker:"\ud83e\udde0",scout:"\ud83d\udd26",shooting:"\ud83d\udd2b",stealth:"\ud83d\udc7b",strategist:"\ud83d\uddfa\ufe0f",strength:"\ud83d\udcaa",sniper:"\ud83c\udfaf",veteran:"\u2b50",zealot:"\ud83d\ude24"}[e.specialism.toLowerCase()])}function y(e){return n.a.createElement("span",{className:"category"},{commander:"\ud83d\udc51",leader:"\ud83d\udc80",specialist:""}[e.category.toLowerCase()])}var b=a(258);var v=function(e){return n.a.createElement("div",{className:"model",style:{pageBreakAfter:"always"}},n.a.createElement("h1",null,"Commander"===e.model.category||"Leader"===e.model.category?n.a.createElement(b.a,{variant:"warning"},n.a.createElement(y,{category:e.model.category})," ",e.model.category):e.model.specialism&&n.a.createElement(b.a,{variant:"warning"},n.a.createElement(f,{specialism:e.model.specialism})," ",e.model.specialism)," ",e.model.type,e.model.name&&n.a.createElement(n.a.Fragment,null,": ",n.a.createElement("em",null,e.model.name))),n.a.createElement("div",null,n.a.createElement(b.a,{pill:!0,variant:"danger",style:{textTransform:"uppercase",marginRight:"10px"}},e.model.faction),e.model.keywords.map((function(e){return n.a.createElement(b.a,{pill:!0,variant:"primary",style:{textTransform:"uppercase",marginRight:"10px"}},e)}))),n.a.createElement(h,e.model.stats),n.a.createElement(d,{abilities:e.model.abilities,phase:""}),n.a.createElement(E,{name:"movement"},n.a.createElement(d,{abilities:e.model.abilities,phase:"movement"})),n.a.createElement(E,{name:"psychic"},n.a.createElement(d,{abilities:e.model.abilities,phase:"psychic"})),n.a.createElement(E,{name:"shooting"},n.a.createElement(g,{weapons:e.model.weapons,phase:"shooting",userStrength:e.model.stats.strength}),n.a.createElement(d,{abilities:e.model.abilities,phase:"shooting"})),n.a.createElement(E,{name:"fight"},n.a.createElement(g,{weapons:e.model.weapons,phase:"fight",userStrength:e.model.stats.strength}),n.a.createElement(d,{abilities:e.model.abilities,phase:"fight"})),n.a.createElement(E,{name:"morale"},n.a.createElement(d,{abilities:e.model.abilities,phase:"morale"})))},w=a(127),k=a(259),N=a(260),S=a(141),A=a(142)([]),F=a(226).DOMParser,B=a(228).useNamespaces({roster:"http://www.battlescribe.net/schema/rosterSchema"}),x=a(229),O=function(e,t){var a=B("roster:profiles/roster:profile[@typeName='Model']//roster:characteristic[@name='".concat(e,"']"),t);return a.length>0?parseInt(a[0].childNodes[0].nodeValue):""},P=function(e,t,a){var r=B("roster:characteristics/roster:characteristic[@name='".concat(e,"']"),t);return r.length>0?a?parseInt(r[0].childNodes[0].nodeValue):r[0].childNodes[0].nodeValue:""},z=function(e){var t=B("roster:characteristics/roster:characteristic[@name='Description']",e)[0].childNodes[0].nodeValue,a=[];return/attacks/i.test(t)&&a.push("fight"),/charge/i.test(t)&&a.push("movement"),/advance/i.test(t)&&a.push("movement"),/move/i.test(t)&&a.push("movement"),/psychic/i.test(t)&&a.push("psychic"),/shoot/i.test(t)&&a.push("shooting"),/nerve/i.test(t)&&a.push("morale"),{name:e.getAttribute("name"),description:t,phases:a}},R=function(e){return{name:e.getAttribute("name"),range:P("Range",e,!0),type:P("Type",e,!1),strength:P("S",e,!0),armourPiercing:P("AP",e,!0),damage:P("D",e,!1),abilities:P("Abilities",e,!1)}},W=function(e){var t=B("roster:profiles/roster:profile[@typeName='Ability']",e).map(z),a=B("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Weapon']",e).map(R),r=B("roster:selections/roster:selection[roster:selections]",e),n=B("roster:selections/roster:selection/roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Ability']",e).map(z),l=B("roster:categories/roster:category[@primary='true']",e)[0].getAttribute("name");return{name:e.getAttribute("customName"),type:e.getAttribute("name"),category:"Non-specialist"===l?"zzz-so-it-sorts-last-what-a-massive-hack":l,stats:{movement:O("M",e),weapon_skill:O("WS",e),ballistic_skill:O("BS",e),strength:O("S",e),toughness:O("T",e),wounds:O("W",e),attacks:O("A",e),leadership:O("Ld",e),save:O("Sv",e)},abilities:t.concat(n),weapons:a,specialism:r.length>0?r[0].getAttribute("name"):null,faction:B("roster:categories/roster:category[@primary='false' and starts-with(@name,'Faction: ')]",e)[0].getAttribute("name").split(": ",2)[1],keywords:B("roster:categories/roster:category[@primary='false' and not(starts-with(@name,'Faction: '))]",e).map((function(e){return e.getAttribute("name")}))}},D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).unzip=function(e){return"P"!==e[0]?Promise.resolve(e):(new x).loadAsync(e).then((function(e){return e.file(/[^/]+\.ros/)[0].async("string")}))},a.parseFile=function(e){a.unzip(e.target.result).then((function(e){var t=[],r=(new F).parseFromString(e),n=!0,l=!1,s=void 0;try{for(var o,i=B("//roster:force/roster:categories/roster:category",r)[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var c=o.value.getAttribute("entryId"),m=!0,u=!1,p=void 0;try{for(var h,d=B("//roster:selection[@type='model' and roster:categories/roster:category/@entryId='".concat(c,"']"),r)[Symbol.iterator]();!(m=(h=d.next()).done);m=!0){var g=h.value;t.push(W(g))}}catch(E){u=!0,p=E}finally{try{m||null==d.return||d.return()}finally{if(u)throw p}}}}catch(E){l=!0,s=E}finally{try{n||null==i.return||i.return()}finally{if(l)throw s}}a.setState({models:S.uniqBy(t,A.hash)})}))},a.handleDrop=function(e){e.forEach((function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onloadend=a.parseFile,t.readAsBinaryString(e)}))},a.state={models:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(k.a,null,0===this.state.models.length&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Scriptorum"),n.a.createElement("p",{className:"lead"},"Readable datasheets for Warhammer 40k Kill Team"),n.a.createElement("ul",null,n.a.createElement("li",null,"Organises abilities and weapons by phase"),n.a.createElement("li",null,"Merges identical models"),n.a.createElement("li",null,"Prints out as one datasheet per page"),n.a.createElement("li",null,"Clear, readable layout")),n.a.createElement(N.a,{variant:"danger"},"Scriptorum is a work in progress, but it should work, so try it out! If you spot any problems, please create an issue ",n.a.createElement("a",{href:"https://github.com/Floppy/scriptorum/issues"},"on GitHub")," and include your roster file if possible."),n.a.createElement(w.a,{onDrop:this.handleDrop,accept:".ros,.rosz"},(function(e){var t=e.getRootProps,a=e.getInputProps;return n.a.createElement(N.a,Object.assign({variant:"info"},t(),{style:{textAlign:"center"}}),n.a.createElement("input",a()),n.a.createElement("p",null,"Drop a Battlescribe roster file here, or click to select one."),n.a.createElement("p",null,n.a.createElement("em",null,"(*.rosz and *.ros accepted)")))})),n.a.createElement("footer",null,"Built with React and Bootstrap. Released as Open Source, code ",n.a.createElement("a",{href:"https://github.com/floppy/scriptorum"},"on GitHub"),".")),this.state.models.length>0&&n.a.createElement(n.a.Fragment,null,S.sortBy(this.state.models,(function(e){return[null==e.category,e.category,e.type]})).map((function(e){return n.a.createElement(v,{model:e,key:A.hash(e)})})),n.a.createElement("footer",null,"Created by Scriptorum: ",n.a.createElement("a",{href:"https://floppy.org.uk/scriptorum"},"https://floppy.org.uk/scriptorum"))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[132,1,2]]]);
//# sourceMappingURL=main.874dec26.chunk.js.map