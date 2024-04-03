import{h as b,a2 as m,l as y,o as a,c as d,G as v,H as g,z as t,F as w,L as k,t as h,O as q,a as p,a3 as r,a4 as _,a5 as f,C as x}from"./chunks/framework.a1822666.js";import{D}from"./chunks/Datepicker.16746ac2.js";const T=q("",62),P={key:0},V=t("code",null,"currentColor",-1),S=["onUpdate:modelValue"],C=["onUpdate:modelValue"],z={key:1},F=["onUpdate:modelValue"],A=t("summary",null,"Copy serialized object with these settings",-1),I={class:"language-json"},U=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"config.md","filePath":"config.md"}'),L={name:"config.md"},j=Object.assign(L,{setup(N){const c=b(new Date),n=m({"--vdp-bg-color":{value:"#ffffff",type:"color"},"--vdp-text-color":{value:"#000000",type:"color"},"--vdp-box-shadow":{value:"0 4px 10px 0 rgba(128, 144, 160, 0.1), 0 0 1px 0 rgba(128, 144, 160, 0.81)",type:"shadow"},"--vdp-border-radius":{value:"3px",type:"size"},"--vdp-heading-size":{value:"2.5em",type:"size"},"--vdp-heading-weight":{value:"bold",type:"weight"},"--vdp-heading-hover-color":{value:"#eeeeee",type:"color"},"--vdp-arrow-color":{value:"currentColor",type:"color"},"--vdp-elem-color":{value:"currentColor",type:"color"},"--vdp-disabled-color":{value:"#d5d9e0",type:"color"},"--vdp-hover-color":{value:"#ffffff",type:"color"},"--vdp-hover-bg-color":{value:"#0baf74",type:"color"},"--vdp-selected-color":{value:"#ffffff",type:"color"},"--vdp-selected-bg-color":{value:"#0baf74",type:"color"},"--vdp-current-date-outline-color":{value:"#888888",type:"color"},"--vdp-current-date-font-weight":{value:"bold",type:"weight"},"--vdp-elem-font-size":{value:"0.8em",type:"size"},"--vdp-elem-border-radius":{value:"3px",type:"size"},"--vdp-divider-color":{value:"#d5d9e0",type:"color"}}),s=y(()=>Object.entries(n).map(([l,{value:o}])=>[l,o]).reduce((l,[o,e])=>(l[o]=e,l),{}));return(l,o)=>(a(),d("div",null,[T,v(D,{style:g({...s.value,padding:"4px"}),modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=e=>c.value=e)},null,8,["style","modelValue"]),t("table",null,[(a(!0),d(w,null,k(n,(e,u)=>(a(),d("tr",{key:u},[t("td",null,[t("code",null,h(u),1)]),e.type==="color"?(a(),d("td",P,[t("label",null,[V,p(),r(t("input",{type:"checkbox","onUpdate:modelValue":i=>e.value=i,"true-value":"currentColor","false-value":"#000000"},null,8,S),[[_,e.value]])]),p("   "),e.value!=="currentColor"?r((a(),d("input",{key:0,type:"color","onUpdate:modelValue":i=>e.value=i},null,8,C)),[[f,e.value]]):x("",!0)])):(a(),d("td",z,[r(t("input",{type:"text","onUpdate:modelValue":i=>e.value=i},null,8,F),[[f,e.value]])]))]))),128))]),t("details",null,[A,t("div",I,[t("pre",null,[t("code",null,h(s.value),1)])])])]))}});export{U as __pageData,j as default};