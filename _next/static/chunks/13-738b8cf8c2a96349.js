"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13],{5217:(e,t,r)=>{r.d(t,{UC:()=>ei,Y9:()=>eo,q7:()=>en,bL:()=>er,l9:()=>ea});var n=r(2115),o=r(8166),a=r(9741),i=r(8068),l=r(3610),s=r(1488),c=r(3360),d=r(6611),u=r(7028),f=r(7668),p=r(5155),v="Collapsible",[m,b]=(0,o.A)(v),[h,w]=m(v),x=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:o,defaultOpen:a,disabled:i,onOpenChange:l,...d}=e,[u=!1,v]=(0,s.i)({prop:o,defaultProp:a,onChange:l});return(0,p.jsx)(h,{scope:r,disabled:i,contentId:(0,f.B)(),open:u,onOpenToggle:n.useCallback(()=>v(e=>!e),[v]),children:(0,p.jsx)(c.sG.div,{"data-state":A(u),"data-disabled":i?"":void 0,...d,ref:t})})});x.displayName=v;var g="CollapsibleTrigger",y=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,...n}=e,o=w(g,r);return(0,p.jsx)(c.sG.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":A(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...n,ref:t,onClick:(0,l.m)(e.onClick,o.onOpenToggle)})});y.displayName=g;var R="CollapsibleContent",C=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=w(R,e.__scopeCollapsible);return(0,p.jsx)(u.C,{present:r||o.open,children:e=>{let{present:r}=e;return(0,p.jsx)(j,{...n,ref:t,present:r})}})});C.displayName=R;var j=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:o,children:a,...l}=e,s=w(R,r),[u,f]=n.useState(o),v=n.useRef(null),m=(0,i.s)(t,v),b=n.useRef(0),h=b.current,x=n.useRef(0),g=x.current,y=s.open||u,C=n.useRef(y),j=n.useRef(void 0);return n.useEffect(()=>{let e=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,d.N)(()=>{let e=v.current;if(e){j.current=j.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();b.current=t.height,x.current=t.width,C.current||(e.style.transitionDuration=j.current.transitionDuration,e.style.animationName=j.current.animationName),f(o)}},[s.open,o]),(0,p.jsx)(c.sG.div,{"data-state":A(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!y,...l,ref:m,style:{"--radix-collapsible-content-height":h?"".concat(h,"px"):void 0,"--radix-collapsible-content-width":g?"".concat(g,"px"):void 0,...e.style},children:y&&a})});function A(e){return e?"open":"closed"}var I=r(4256),D="Accordion",N=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[k,F,_]=(0,a.N)(D),[T,E]=(0,o.A)(D,[_,b]),G=b(),S=n.forwardRef((e,t)=>{let{type:r,...n}=e;return(0,p.jsx)(k.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,p.jsx)(O,{...n,ref:t}):(0,p.jsx)(B,{...n,ref:t})})});S.displayName=D;var[M,K]=T(D),[P,L]=T(D,{collapsible:!1}),B=n.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:a=()=>{},collapsible:i=!1,...l}=e,[c,d]=(0,s.i)({prop:r,defaultProp:o,onChange:a});return(0,p.jsx)(M,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:d,onItemClose:n.useCallback(()=>i&&d(""),[i,d]),children:(0,p.jsx)(P,{scope:e.__scopeAccordion,collapsible:i,children:(0,p.jsx)(q,{...l,ref:t})})})}),O=n.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:a=()=>{},...i}=e,[l=[],c]=(0,s.i)({prop:r,defaultProp:o,onChange:a}),d=n.useCallback(e=>c(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[c]),u=n.useCallback(e=>c(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[c]);return(0,p.jsx)(M,{scope:e.__scopeAccordion,value:l,onItemOpen:d,onItemClose:u,children:(0,p.jsx)(P,{scope:e.__scopeAccordion,collapsible:!0,children:(0,p.jsx)(q,{...i,ref:t})})})}),[H,U]=T(D),q=n.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:o,dir:a,orientation:s="vertical",...d}=e,u=n.useRef(null),f=(0,i.s)(u,t),v=F(r),m="ltr"===(0,I.jH)(a),b=(0,l.m)(e.onKeyDown,e=>{var t;if(!N.includes(e.key))return;let r=e.target,n=v().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),o=n.findIndex(e=>e.ref.current===r),a=n.length;if(-1===o)return;e.preventDefault();let i=o,l=a-1,c=()=>{(i=o+1)>l&&(i=0)},d=()=>{(i=o-1)<0&&(i=l)};switch(e.key){case"Home":i=0;break;case"End":i=l;break;case"ArrowRight":"horizontal"===s&&(m?c():d());break;case"ArrowDown":"vertical"===s&&c();break;case"ArrowLeft":"horizontal"===s&&(m?d():c());break;case"ArrowUp":"vertical"===s&&d()}null===(t=n[i%a].ref.current)||void 0===t||t.focus()});return(0,p.jsx)(H,{scope:r,disabled:o,direction:a,orientation:s,children:(0,p.jsx)(k.Slot,{scope:r,children:(0,p.jsx)(c.sG.div,{...d,"data-orientation":s,ref:f,onKeyDown:o?void 0:b})})})}),z="AccordionItem",[V,X]=T(z),Y=n.forwardRef((e,t)=>{let{__scopeAccordion:r,value:n,...o}=e,a=U(z,r),i=K(z,r),l=G(r),s=(0,f.B)(),c=n&&i.value.includes(n)||!1,d=a.disabled||e.disabled;return(0,p.jsx)(V,{scope:r,open:c,disabled:d,triggerId:s,children:(0,p.jsx)(x,{"data-orientation":a.orientation,"data-state":et(c),...l,...o,ref:t,disabled:d,open:c,onOpenChange:e=>{e?i.onItemOpen(n):i.onItemClose(n)}})})});Y.displayName=z;var J="AccordionHeader",Q=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,o=U(D,r),a=X(J,r);return(0,p.jsx)(c.sG.h3,{"data-orientation":o.orientation,"data-state":et(a.open),"data-disabled":a.disabled?"":void 0,...n,ref:t})});Q.displayName=J;var W="AccordionTrigger",Z=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,o=U(D,r),a=X(W,r),i=L(W,r),l=G(r);return(0,p.jsx)(k.ItemSlot,{scope:r,children:(0,p.jsx)(y,{"aria-disabled":a.open&&!i.collapsible||void 0,"data-orientation":o.orientation,id:a.triggerId,...l,...n,ref:t})})});Z.displayName=W;var $="AccordionContent",ee=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,o=U(D,r),a=X($,r),i=G(r);return(0,p.jsx)(C,{role:"region","aria-labelledby":a.triggerId,"data-orientation":o.orientation,...i,...n,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function et(e){return e?"open":"closed"}ee.displayName=$;var er=S,en=Y,eo=Q,ea=Z,ei=ee},9741:(e,t,r)=>{r.d(t,{N:()=>s});var n=r(2115),o=r(8166),a=r(8068),i=r(2317),l=r(5155);function s(e){let t=e+"CollectionProvider",[r,s]=(0,o.A)(t),[c,d]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return(0,l.jsx)(c,{scope:t,itemMap:a,collectionRef:o,children:r})};u.displayName=t;let f=e+"CollectionSlot",p=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,o=d(f,r),s=(0,a.s)(t,o.collectionRef);return(0,l.jsx)(i.DX,{ref:s,children:n})});p.displayName=f;let v=e+"CollectionItemSlot",m="data-radix-collection-item",b=n.forwardRef((e,t)=>{let{scope:r,children:o,...s}=e,c=n.useRef(null),u=(0,a.s)(t,c),f=d(v,r);return n.useEffect(()=>(f.itemMap.set(c,{ref:c,...s}),()=>void f.itemMap.delete(c))),(0,l.jsx)(i.DX,{[m]:"",ref:u,children:o})});return b.displayName=v,[{Provider:u,Slot:p,ItemSlot:b},function(t){let r=d(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(m,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},s]}},4256:(e,t,r)=>{r.d(t,{jH:()=>a});var n=r(2115);r(5155);var o=n.createContext(void 0);function a(e){let t=n.useContext(o);return e||t||"ltr"}},8217:(e,t,r)=>{r.d(t,{UC:()=>J,B8:()=>X,bL:()=>V,l9:()=>Y});var n=r(2115),o=r(3610),a=r(8166),i=r(9741),l=r(8068),s=r(7668),c=r(3360),d=r(1524),u=r(1488),f=r(4256),p=r(5155),v="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[h,w,x]=(0,i.N)(b),[g,y]=(0,a.A)(b,[x]),[R,C]=g(b),j=n.forwardRef((e,t)=>(0,p.jsx)(h.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(h.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,p.jsx)(A,{...e,ref:t})})}));j.displayName=b;var A=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:i=!1,dir:s,currentTabStopId:b,defaultCurrentTabStopId:h,onCurrentTabStopIdChange:x,onEntryFocus:g,preventScrollOnEntryFocus:y=!1,...C}=e,j=n.useRef(null),A=(0,l.s)(t,j),I=(0,f.jH)(s),[D=null,N]=(0,u.i)({prop:b,defaultProp:h,onChange:x}),[F,_]=n.useState(!1),T=(0,d.c)(g),E=w(r),G=n.useRef(!1),[S,M]=n.useState(0);return n.useEffect(()=>{let e=j.current;if(e)return e.addEventListener(v,T),()=>e.removeEventListener(v,T)},[T]),(0,p.jsx)(R,{scope:r,orientation:a,dir:I,loop:i,currentTabStopId:D,onItemFocus:n.useCallback(e=>N(e),[N]),onItemShiftTab:n.useCallback(()=>_(!0),[]),onFocusableItemAdd:n.useCallback(()=>M(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>M(e=>e-1),[]),children:(0,p.jsx)(c.sG.div,{tabIndex:F||0===S?-1:0,"data-orientation":a,...C,ref:A,style:{outline:"none",...e.style},onMouseDown:(0,o.m)(e.onMouseDown,()=>{G.current=!0}),onFocus:(0,o.m)(e.onFocus,e=>{let t=!G.current;if(e.target===e.currentTarget&&t&&!F){let t=new CustomEvent(v,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=E().filter(e=>e.focusable);k([e.find(e=>e.active),e.find(e=>e.id===D),...e].filter(Boolean).map(e=>e.ref.current),y)}}G.current=!1}),onBlur:(0,o.m)(e.onBlur,()=>_(!1))})})}),I="RovingFocusGroupItem",D=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:i=!1,tabStopId:l,...d}=e,u=(0,s.B)(),f=l||u,v=C(I,r),m=v.currentTabStopId===f,b=w(r),{onFocusableItemAdd:x,onFocusableItemRemove:g}=v;return n.useEffect(()=>{if(a)return x(),()=>g()},[a,x,g]),(0,p.jsx)(h.ItemSlot,{scope:r,id:f,focusable:a,active:i,children:(0,p.jsx)(c.sG.span,{tabIndex:m?0:-1,"data-orientation":v.orientation,...d,ref:t,onMouseDown:(0,o.m)(e.onMouseDown,e=>{a?v.onItemFocus(f):e.preventDefault()}),onFocus:(0,o.m)(e.onFocus,()=>v.onItemFocus(f)),onKeyDown:(0,o.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return N[o]}(e,v.orientation,v.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=b().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=v.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>k(r))}})})})});D.displayName=I;var N={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function k(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var F=r(7028),_="Tabs",[T,E]=(0,a.A)(_,[y]),G=y(),[S,M]=T(_),K=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,onValueChange:o,defaultValue:a,orientation:i="horizontal",dir:l,activationMode:d="automatic",...v}=e,m=(0,f.jH)(l),[b,h]=(0,u.i)({prop:n,onChange:o,defaultProp:a});return(0,p.jsx)(S,{scope:r,baseId:(0,s.B)(),value:b,onValueChange:h,orientation:i,dir:m,activationMode:d,children:(0,p.jsx)(c.sG.div,{dir:m,"data-orientation":i,...v,ref:t})})});K.displayName=_;var P="TabsList",L=n.forwardRef((e,t)=>{let{__scopeTabs:r,loop:n=!0,...o}=e,a=M(P,r),i=G(r);return(0,p.jsx)(j,{asChild:!0,...i,orientation:a.orientation,dir:a.dir,loop:n,children:(0,p.jsx)(c.sG.div,{role:"tablist","aria-orientation":a.orientation,...o,ref:t})})});L.displayName=P;var B="TabsTrigger",O=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,disabled:a=!1,...i}=e,l=M(B,r),s=G(r),d=q(l.baseId,n),u=z(l.baseId,n),f=n===l.value;return(0,p.jsx)(D,{asChild:!0,...s,focusable:!a,active:f,children:(0,p.jsx)(c.sG.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":u,"data-state":f?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:d,...i,ref:t,onMouseDown:(0,o.m)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():l.onValueChange(n)}),onKeyDown:(0,o.m)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&l.onValueChange(n)}),onFocus:(0,o.m)(e.onFocus,()=>{let e="manual"!==l.activationMode;f||a||!e||l.onValueChange(n)})})})});O.displayName=B;var H="TabsContent",U=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,forceMount:a,children:i,...l}=e,s=M(H,r),d=q(s.baseId,o),u=z(s.baseId,o),f=o===s.value,v=n.useRef(f);return n.useEffect(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,p.jsx)(F.C,{present:a||f,children:r=>{let{present:n}=r;return(0,p.jsx)(c.sG.div,{"data-state":f?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:u,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:v.current?"0s":void 0},children:n&&i})}})});function q(e,t){return"".concat(e,"-trigger-").concat(t)}function z(e,t){return"".concat(e,"-content-").concat(t)}U.displayName=H;var V=K,X=L,Y=O,J=U},2645:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(4057).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])}}]);