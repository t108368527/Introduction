import{d as A,r as $,a,o as g,c as h,b as o,w as n,e as m,t as I,u as l,f as e,n as i,p as w,g as k,F as T,h as N}from"./index-07c11682.js";const b=t=>(w("data-v-c7cecd41"),t=t(),k(),t),W=b(()=>e("span",{class:"eng"},"ASUS",-1)),H=b(()=>e("span",{class:"eng"},"PEGATRON",-1)),V=b(()=>e("span",{class:"eng"},"Mirai",-1)),P=b(()=>e("span",{class:"eng"},"Tatung",-1)),B=A({__name:"WorkItem",setup(t){const c=$("Work");let _=$("#2963ff"),s=$(!1);const r=()=>{_.value="orange",s.value=!0},d=()=>{_.value="#2963ff",s.value=!1};return(u,p)=>{const v=a("a-col"),f=a("a-timeline-item"),S=a("a-timeline"),x=a("a-row");return g(),h("div",{class:"work",onMouseenter:p[0]||(p[0]=E=>r()),onMouseleave:p[1]||(p[1]=E=>d())},[o(x,{gutter:64},{default:n(()=>[o(v,{class:"title",span:12},{default:n(()=>[m(I(c.value),1)]),_:1}),o(v,{class:"timeline",span:12},{default:n(()=>[o(S,null,{default:n(()=>[o(f,{color:l(_)},{default:n(()=>[e("div",{class:i(["company",{enter:l(s)}])},[m(" 華碩電腦 "),W],2),e("div",{class:i(["job-title",{enter:l(s)}])},"Web Engineer",2),e("div",{class:i(["since",{enter:l(s)}])},"2023/05 - now",2)]),_:1},8,["color"]),o(f,{color:l(_)},{default:n(()=>[e("div",{class:i(["company",{enter:l(s)}])},[m(" 和碩聯合科技 "),H],2),e("div",{class:i(["job-title",{enter:l(s)}])},"Full Stack Engineer",2),e("div",{class:i(["since",{enter:l(s)}])},"2020/08 - 2023/04",2)]),_:1},8,["color"]),o(f,{color:l(_)},{default:n(()=>[e("div",{class:i(["company",{enter:l(s)}])},[m(" 未來人材 "),V],2),e("div",{class:i(["job-title",{enter:l(s)}])},"Full Stack Engineer",2),e("div",{class:i(["since",{enter:l(s)}])},"2019/12 - 2020/07",2)]),_:1},8,["color"]),o(f,{color:l(_)},{default:n(()=>[e("div",{class:i(["company",{enter:l(s)}])},[m(" 大同公司 "),P],2),e("div",{class:i(["job-title",{enter:l(s)}])},"Software Engineer",2),e("div",{class:i(["since",{enter:l(s)}])},"2018/07 - 2019/11",2)]),_:1},8,["color"])]),_:1})]),_:1})]),_:1})],32)}}});const y=(t,c)=>{const _=t.__vccOpts||t;for(const[s,r]of c)_[s]=r;return _},F=y(B,[["__scopeId","data-v-c7cecd41"]]),L=t=>(w("data-v-dcda6d0f"),t=t(),k(),t),j={class:"degree"},K=L(()=>e("ul",null,[e("li",null,"Angular"),e("li",null,"Vue"),e("li",null,"JavasScript"),e("li",null,"TypeScript"),e("li",null,"Html"),e("li",null,"Tailwind"),e("li",null,"Scss")],-1)),O=L(()=>e("ul",null,[e("li",null,"Java"),e("li",null,"Spring boot"),e("li",null,"Node"),e("li",null,"Nest"),e("li",null,"PHP"),e("li",null,"Laravel")],-1)),M=L(()=>e("ul",null,[e("li",null,"Ant Design"),e("li",null,"Echart"),e("li",null,"Git"),e("li",null,"SVN"),e("li",null,"Photoshop"),e("li",null,"Illustrator")],-1)),G=A({__name:"DegreeItem",setup(t){const c=$("Degree"),_=$(["1"]);return(s,r)=>{const d=a("a-col"),u=a("a-collapse-panel"),p=a("a-collapse"),v=a("a-row");return g(),h("div",j,[o(v,{gutter:64},{default:n(()=>[o(d,{class:"title",span:12},{default:n(()=>[m(I(c.value),1)]),_:1}),o(d,{class:"content",span:12},{default:n(()=>[o(p,{activeKey:_.value,"onUpdate:activeKey":r[0]||(r[0]=f=>_.value=f)},{default:n(()=>[o(u,{key:"1",header:"Frontend"},{default:n(()=>[K]),_:1}),o(u,{key:"2",header:"Backend"},{default:n(()=>[O]),_:1}),o(u,{key:"3",header:"Others"},{default:n(()=>[M]),_:1})]),_:1},8,["activeKey"])]),_:1})]),_:1})])}}});const J=y(G,[["__scopeId","data-v-dcda6d0f"]]),C=t=>(w("data-v-249ce86b"),t=t(),k(),t),U={class:"about"},z=C(()=>e("div",null,[e("strong",null,"Name:"),m(" Philip Chinag")],-1)),R=C(()=>e("div",null,[e("strong",null,"Sign:"),m(" Archer")],-1)),q=A({__name:"AboutItem",setup(t){const c=$("About");return(_,s)=>{const r=a("a-col"),d=a("a-row");return g(),h("div",U,[o(d,{gutter:64},{default:n(()=>[o(r,{class:"title",span:12},{default:n(()=>[m(I(c.value),1)]),_:1}),o(r,{class:"content",span:12},{default:n(()=>[z,R]),_:1})]),_:1})])}}});const Q=y(q,[["__scopeId","data-v-249ce86b"]]),X={data(){return{navList:["About","Degree","Work"]}},methods:{redirectLink(t){this.$router.push("/"+t)},scrollTo(t){this.$emit("scrollTo",t.toLocaleLowerCase())}}},Y="/introduction/assets/logo-f5f0370b.png",Z="/introduction/assets/internet-9c8e1e8c.png";const D=t=>(w("data-v-835fdc83"),t=t(),k(),t),ee={class:"header"},te=D(()=>e("img",{src:Y,width:"60"},null,-1)),oe={class:"nav-bar"},ne=["onClick"],se=D(()=>e("div",{class:"language"},[e("img",{src:Z,width:"30"})],-1));function le(t,c,_,s,r,d){return g(),h("div",ee,[e("div",{class:"title",onClick:c[0]||(c[0]=u=>t.$router.push("/"))},[te,m(" Philip Chiang")]),e("div",oe,[(g(!0),h(T,null,N(r.navList,(u,p)=>(g(),h("div",{class:"nav",key:p},[e("span",{onClick:v=>d.scrollTo(u)},I(u),9,ne)]))),128))]),se])}const ae=y(X,[["render",le],["__scopeId","data-v-835fdc83"]]),ce={components:{WorkItem:F,DegreeItem:J,AboutItem:Q,HeaderLayout:ae},methods:{scrollTo(t){let c=document.getElementById(t);c==null||c.scrollIntoView({behavior:"smooth"})}}};function _e(t,c,_,s,r,d){const u=a("HeaderLayout"),p=a("AboutItem"),v=a("a-col"),f=a("DegreeItem"),S=a("WorkItem"),x=a("a-row");return g(),h(T,null,[o(u,{onScrollTo:d.scrollTo},null,8,["onScrollTo"]),o(x,null,{default:n(()=>[o(v,{span:24},{default:n(()=>[o(p,{id:"about"})]),_:1}),o(v,{span:24},{default:n(()=>[o(f,{id:"degree"})]),_:1}),o(v,{span:24},{default:n(()=>[o(S,{id:"work"})]),_:1})]),_:1})],64)}const ie=y(ce,[["render",_e]]);export{ie as default};