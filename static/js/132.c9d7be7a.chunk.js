"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[132],{132:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(434),a=t(791),c=t(700),s=t(184),o=function(){var e=(0,r.v9)((function(e){return e.contacts.contacts})),n=(0,r.I0)();(0,a.useEffect)((function(){n((0,c.yF)())}),[n]);return(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.currentTarget,a=r.elements.name.value,s=r.elements.number.value;return r.reset(),e.map((function(e){return e.name})).includes(a)?alert("".concat(a," is already in contacts.")):n((0,c.uK)({name:a,number:s}))},children:[(0,s.jsxs)("label",{children:[" ","Name",(0,s.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,s.jsxs)("label",{children:[" ","Number",(0,s.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,s.jsx)("button",{type:"submit",children:"Add contact"})]})},i=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.isLoading})),t=(0,r.v9)((function(e){return e.contacts.contacts})),o=(0,r.v9)((function(e){return e.filter}));console.log(o);return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)("b",{children:"Loading contacts..."}),0===t.length?(0,s.jsx)("p",{children:"Add some contact to see them."}):(0,s.jsx)("ul",{children:(void 0===o?t:t.filter((function(e){return e.name.toLowerCase().includes(o)}))).map((function(n){return(0,s.jsxs)("li",{children:[n.name,": ",n.phone," ",(0,s.jsx)("button",{type:"submit",onClick:function(){return e((0,c.zY)(n.id))},children:"Delete"})]},n.id)}))})]})},u=t(367),l=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.filter}));return(0,s.jsxs)(s.Fragment,{children:["Find contacts by name",(0,s.jsx)("input",{name:"filter",onChange:function(t){var r=document.querySelector('input[data-action="setFilter"]');console.log(r.value);var a=r.value.toLowerCase();console.log(a),e((0,u.Tv)(a)),console.log(n)},"data-action":"setFilter"})]})};function d(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"nav text-white justify-content-center",children:"Phonebook"}),(0,s.jsx)(o,{}),(0,s.jsx)(l,{}),(0,s.jsx)(i,{})]})}}}]);
//# sourceMappingURL=132.c9d7be7a.chunk.js.map