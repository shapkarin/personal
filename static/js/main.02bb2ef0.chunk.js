(this["webpackJsonpshapkarin.me"]=this["webpackJsonpshapkarin.me"]||[]).push([[0],{100:function(e,t,s){},101:function(e,t,s){},102:function(e,t,s){},103:function(e,t,s){},104:function(e,t,s){"use strict";s.r(t);var a=s(2),r=s.n(a),c=s(30),i=s.n(c),n=s(23),h=s(11),l=s(9),o=s.n(l);class j{constructor(e){let{x:t,y:s,row:a,col:r,ctx:c}=e;this.getRandomShape=()=>this.drawMethods[o()(this.drawMethods.length-1)],this.getRandomOpacity=()=>Math.random()<.8?o()(.04,.1):o()(.2,.4),this.getColor=()=>"rgba(255, 255, 255, ".concat(this.opacity,")"),this.draw=()=>{this[this.type]()},this.drawCircle=()=>{this.ctx.beginPath(),this.ctx.strokeStyle=this.getColor(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.stroke(),this.ctx.closePath()},this.drawRect=()=>{this.ctx.beginPath(),this.ctx.strokeStyle=this.getColor(),this.ctx.rect(this.x-this.size/2,this.y-this.size/2,this.size,this.size),this.ctx.stroke(),this.ctx.closePath()},this.animate=()=>{"drawCircle"===this.type?(this.radius+=.05*this.dir,this.radius>=9&&(this.dir=-1,this.type="drawRect"),this.radius<=4&&(this.dir=1)):(this.size+=.05*this.dir,this.size>=16&&(this.dir=-1,this.type="drawCircle"),this.size<=6&&(this.dir=1))},this.randomize=()=>{this.radius=o()(4,9),this.size=o()(6,16),this.type=this.getRandomShape(),this.opacity=this.getRandomOpacity()},this.drawMethods=["drawCircle","drawRect","drawNothing"],this.type=this.getRandomShape(),this.x=t,this.y=s,this.row=a,this.col=r,this.ctx=c,this.radius=o()(4,9),this.size=o()(6,16),this.opacity=this.getRandomOpacity()}drawNothing(){return"heh"}}var d=new class{constructor(){this.createArray=()=>{this.countX=50;const e=[];let t=0,s=0;for(let a=10;a<this.width-10;a+=20){s=0,e.push([]);for(let r=10;r<this.height-10;r+=20)e[t].push(new j({x:a,y:r,ctx:this.ctx,row:t,col:s})),s++;t++}return this.countX=s,e},this.draw=()=>{this.ctx.beginPath(),this.ctx.fillStyle="#17293a",this.ctx.fillRect(0,0,this.width,this.height);for(let t=0;t<this.array2D.length;t++)for(let e=0;e<this.array2D[t].length;e++){this.array2D[t][e].draw()}const e=o()(20,28);for(let t=0;t<e;t++)this.drawCross();this.ctx.closePath()},this.getRandomItem=()=>this.array2D[o()(1,this.array2D.length-1)][o()(1,this.countX-1)],this.drawCross=()=>{const e=this.getRandomItem();this.ctx.strokeStyle="rgba(255, 255, 255, ".concat(o()(.07,.2),")"),this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y);const t=e.col+o()(this.countX-e.col-1),s=this.array2D[e.row][t];this.ctx.lineTo(s.x,s.y);const a=o()(e.col,t),r=this.array2D[o()(0,e.row-1)][a];this.ctx.moveTo(r.x,r.y);const c=this.array2D[o()(0,this.array2D.length-1)][a];this.ctx.lineTo(c.x,c.y),this.ctx.stroke(),this.ctx.closePath()},this.randomizeAll=()=>{for(let e=0;e<this.array2D.length;e++)for(let t=0;t<this.array2D[e].length;t++){this.array2D[e][t].randomize()}},this.randomizeSome=()=>{this.getRandomItem().randomize()},this.animation=()=>{const e=o()(1e3,3e3);setTimeout((()=>{for(let e=0;e<o.a.apply(this,[1,10]);e++)this.randomizeSome();this.draw(),this.animation()}),e)},this.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.canvas=document.createElement("canvas"),this.canvas.id="background",this.canvas.width=this.width,this.canvas.height=this.height,document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.lineWidth=1,this.array2D=this.createArray(),this.draw()}},b=s(16),u=s(24),x=s.n(u),g=s(12);const m={user:()=>"".concat("https://api.github.com","/users/shapkarin"),activity(){return"".concat(this.user(),"/events/public?per_page=100")},repositories(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"".concat(this.user(),"/repos?sort=updated&per_page=").concat(64,"&page=").concat(e)},likes(){return"".concat(this.user(),"/starred")}};var O=Object(g.a)(Object(g.a)({},{about:"/api/about.json",packages:{_root:"/api/packages/packages.json",info:e=>"/api/packages/".concat(e,".json")},sketches:{intro:"/api/sketches/intro.json",collection:"/api/sketches/collection.json"}}),m);const p=x.a.create({headers:{Accept:"application/vnd.github.v3+json"}}),_=()=>x.a.get(O.sketches.intro),k=()=>x.a.get(O.sketches.collection),f=()=>x.a.get(O.packages._root),v=()=>p.get(O.likes());var y=s(1);class w extends a.Component{constructor(){super(...arguments),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?Object(y.jsxs)("div",{style:{color:"red",fontSize:18,padding:10,width:742},children:["Could not fetch :-(",Object(y.jsx)("br",{})]}):this.props.children}}var N=w;var P=function(e){let{children:t}=e;return Object(y.jsx)(N,{children:Object(y.jsx)(a.Suspense,{className:"Suspense",fallback:Object(y.jsx)("div",{style:{fontSize:17},children:"Loading...."}),children:t})})};s(92);function I(){const{data:{data:e}}=Object(h.useQuery)("About",(()=>x.a.get(O.about)));return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"About About_dark",children:[Object(y.jsx)("h1",{children:e.title}),e.intro,Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("a",{href:"https://github.com/shapkarin",target:"_blank",rel:"noreferrer",children:["My Github ",Object(y.jsx)(b.a,{})]}),Object(y.jsx)("br",{}),Object(y.jsxs)("a",{href:"https://github.com/shapkarin/shapkarin.me",target:"_blank",rel:"noreferrer",children:["Website source code",Object(y.jsx)(b.a,{})]}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"The API for this site is generated ",Object(y.jsx)("a",{href:"https://github.com/shapkarin/shapkarin.me/tree/master/src/Generate-Backend",target:"_blank",rel:"noreferrer",children:"by this code"}),Object(y.jsx)(b.a,{})," and stored as ",Object(y.jsx)("a",{href:"https://github.com/shapkarin/shapkarin.me/tree/gh-pages/api",target:"_blank",rel:"noreferrer",children:"JSON files"}),Object(y.jsx)(b.a,{})," on ",Object(y.jsx)("a",{href:"https://github.com/shapkarin/shapkarin.me/tree/main/.github/workflows/deploy.yml",children:"GitHub Pages"}),Object(y.jsx)("br",{}),"semver: ",Object(y.jsx)("a",{href:"https://github.com/shapkarin/shapkarin.me/tree/main/.env#L1",children:"6.1.0"})]})})}function C(){return Object(y.jsx)(P,{children:Object(y.jsx)(I,{})})}var S=s(31),z=s(57);s(93);const G=["children"];var R=e=>{let{children:t}=e,s=Object(z.a)(e,G);return Object(y.jsx)("div",Object(g.a)(Object(g.a)({onClick:function(){d.randomizeAll(),d.draw()}},s),{},{children:t}))},D=s(8);s(94);var L=()=>Object(y.jsx)(n.b,{to:"/",className:"CloseButton",children:Object(y.jsx)(S.b,{})});var F=()=>Object(y.jsx)("div",{className:"Page",children:Object(y.jsxs)(D.d,{children:[$.reduce(((e,t)=>{let{name:s,path:r,Page:c,redirect:i,redirects:n}=t;return[...e,Object(y.jsx)(D.b,{exact:!0,path:r,children:Object(y.jsxs)(P,{children:[Object(y.jsx)(L,{}),Object(y.jsx)(c,{})]})},"Route_".concat(s)),i&&Object(a.createElement)(D.a,Object(g.a)(Object(g.a)({},i),{},{key:"Redirect_".concat(s)})),n&&n.map(((e,t)=>Object(a.createElement)(D.a,Object(g.a)(Object(g.a)({},e),{},{key:"Redirect_".concat(s,"_").concat(t)}))))]}),[]),Object(y.jsx)(D.b,{exact:!0,path:"/github",render:()=>(window.location="https://github.com/shapkarin","Congrats! Redirecting to my GitHub profile...")})]})}),M=s(13);class E extends a.PureComponent{render(){const{open:e,children:t}=this.props;return e?Object(y.jsx)("div",{children:t}):null}}var B=function(e){let{children:t}=e;return(null===t||void 0===t?void 0:t.split("\n").map(((e,t)=>Object(y.jsxs)(a.Fragment,{children:[e,Object(y.jsx)("br",{})]},t))))||null};function A(e){let{id:t}=e;const{data:{data:{description:s,badges:a}={}}={}}=Object(h.useQuery)(["PackageIntro",t],(()=>(e=>x.a.get(O.packages.info(e)))(t)));return Object(y.jsxs)("div",{className:"Package__Info",children:[Object(y.jsx)(B,{children:s}),Object(y.jsx)("div",{className:"Package__Badges",children:a.map((e=>{let{title:s,link:a}=e;return Object(y.jsx)("img",{alt:s,src:a,className:"Package__Badges__Item"},"".concat(t,"_").concat(s))}))})]})}function Q(e){let{id:t}=e;const[s,r]=Object(a.useState)(!1),c=Object(a.useMemo)((()=>s),[s]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"toggle_info",onClick:()=>r(!s),children:["package info ",s?Object(y.jsx)(M.a,{}):Object(y.jsx)(M.b,{})]}),Object(y.jsx)(P,{children:Object(y.jsx)(E,{open:c,children:Object(y.jsx)(A,{id:t})})})]})}function T(){return Object(y.jsx)("div",{children:Object(y.jsxs)("a",{className:"PagePackages__Item_more",style:{width:"185px"},href:"https://www.npmjs.com/~shapkarin",target:"_blank",rel:"noreferrer",children:["Npm packages"," ",Object(y.jsx)(b.a,{})]})})}s(99);function W(){const{data:{data:{packages:e}}}=Object(h.useQuery)("Packages",f);return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"PagePackages Page__Inner",children:[Object(y.jsx)("div",{children:e.map((e=>{let{title:t,url:s,id:a}=e;return Object(y.jsxs)("div",{className:"PagePackages__Item",children:[Object(y.jsxs)("a",{target:"_blank",rel:"noreferrer",href:s,children:[t," ",Object(y.jsx)(b.a,{})]}),Object(y.jsx)(Q,{id:a})]},a)}))}),Object(y.jsx)(T,{})]})})}var H=s(32),X=s(33);s(100);function J(){const{data:{data:e}}=Object(h.useQuery)(["Repositories",1],(()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return p.get(O.repositories(e))}(1)));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(H.a,{place:"left"}),Object(y.jsxs)("div",{className:"Page__Github Page__Inner",children:[e.map((e=>{let{id:t,name:s,html_url:a,description:r,open_issues_count:c,homepage:i,fork:n,updated_at:h,language:l,languages_url:o}=e;return Object(y.jsx)("div",{className:"Page__GithubItem",children:Object(y.jsxs)("div",{className:"Page__GithubItemInner",children:[Object(y.jsxs)("a",{className:"GithubItem__Link centered-label",href:a,target:"_blank",rel:"noreferrer",children:[s,n&&Object(y.jsx)(M.f,{"data-tip":"fork"})]}),Object(y.jsx)("div",{className:"centered-label",style:{lineHeight:"20px"},children:r}),Object(y.jsxs)("div",{className:"centered-label",children:[Object(y.jsx)(M.d,{"data-tip":"Last update"})," ",new Date(h).toLocaleDateString("ru-RU")]}),c>0&&Object(y.jsxs)("div",{className:"centered-label",children:[Object(y.jsx)(M.c,{})," ","Open issues:"," ",Object(y.jsx)("a",{className:"IssuesCount",href:"".concat(a,"/issues"),target:"_blank",rel:"noreferrer",children:c})]}),i&&Object(y.jsxs)("div",{className:"centered-label",children:[Object(y.jsx)(X.a,{})," ",Object(y.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:"Website"})]}),l&&Object(y.jsxs)(y.Fragment,{children:["Language:"," ",Object(y.jsx)("a",{href:o,children:l})]})]})},t)})),Object(y.jsx)("div",{className:"Page__GithubItem",style:{flexBasis:"100%"},children:Object(y.jsx)("div",{className:"Page__GithubItemInner",children:Object(y.jsxs)("a",{href:"https://github.com/shapkarin?tab=repositories",target:"_blank",rel:"noreferrer",className:"GithubItem__Link",children:["More ",Object(y.jsx)(b.a,{})]})})})]})]})}var U=s(59);function q(){const{data:{data:e}}=Object(h.useQuery)("Liked",v);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(H.a,{place:"left"}),Object(y.jsxs)("div",{className:"Page__Github Page__Inner",children:[e.map((e=>{let{id:t,full_name:s,html_url:a,description:r,open_issues_count:c,stargazers_count:i,homepage:n,fork:h,updated_at:l,language:o,languages_url:j}=e;return Object(y.jsx)("div",{className:"Page__GithubItem",children:Object(y.jsxs)("div",{className:"Page__GithubItemInner",children:[Object(y.jsxs)("a",{className:"GithubItem__Link centered-label",href:a,target:"_blank",rel:"noreferrer",children:[s,h&&Object(y.jsx)(M.f,{"data-tip":"fork"})]}),Object(y.jsx)("div",{className:"centered-label",style:{lineHeight:"20px",marginBottom:"6px"},children:r}),Object(y.jsxs)("div",{className:"centered-label",children:[Object(y.jsx)(M.d,{"data-tip":"Last update"})," ",new Date(l).toLocaleDateString("ru-RU")]}),!!n&&Object(y.jsxs)("div",{className:"centered-label",children:[Object(y.jsx)(X.a,{})," ",Object(y.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:"Website"})]}),i>0&&Object(y.jsxs)("div",{className:"centered-label",children:[Object(y.jsx)(U.a,{size:"18px"})," ","Stars:"," ",i]}),c>0&&Object(y.jsxs)("div",{className:"centered-label",children:[Object(y.jsx)(M.c,{})," ","Open issues:"," ",Object(y.jsx)("a",{className:"IssuesCount",href:"".concat(a,"/issues"),target:"_blank",rel:"noreferrer",children:c})]}),o&&Object(y.jsxs)(y.Fragment,{children:["Language:"," ",Object(y.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:o})]})]})},t)})),Object(y.jsx)("div",{className:"Page__GithubItem",style:{flexBasis:"100%"},children:Object(y.jsx)("div",{className:"Page__GithubItemInner",children:Object(y.jsxs)("a",{href:"https://github.com/shapkarin?tab=stars",target:"_blank",rel:"noreferrer",className:"GithubItem__Link",children:["More ",Object(y.jsx)(b.a,{})]})})})]})]})}s(101);function K(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"Page__Sketches Page__Inner Page__Inner_dark",children:[Object(y.jsx)(P,{children:Object(y.jsx)(V,{})}),Object(y.jsx)(P,{children:Object(y.jsx)(Y,{})})]})})}function V(){const{data:{data:{title:e,description:t}}}=Object(h.useQuery)("SketchesIntro",_);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{children:e}),Object(y.jsx)("p",{style:{lineHeight:"24px"},children:Object(y.jsx)(B,{children:t})})]})}function Y(){const{data:{data:e}}=Object(h.useQuery)("Sketches",k);return Object(y.jsx)("div",{className:"Gal__Wrapper",children:Object.keys(e).map((t=>Object(y.jsxs)("div",{className:"Gal__Column",children:[Object(y.jsx)("h3",{children:"".concat(t,":")}),e[t].map(((e,s)=>Object(a.createElement)("a",Object(g.a)(Object(g.a)({},e),{},{key:"".concat(t,"-").concat(s),className:"Gal--Item",target:"_blank"}),e.title)))]},t)))})}var Z=s(37);var $=[{name:"Repositories",path:"/github/repositories",redirect:{from:"/repositories",to:"/github/repositories"},icon:()=>Object(y.jsx)(M.e,{}),Page:()=>Object(y.jsx)(J,{})},{name:"Likes",path:"/github/likes",redirects:[{from:"/likes",to:"/github/stars"},{from:"/liked",to:"/github/stars"},{from:"/stars",to:"/github/stars"}],icon:()=>Object(y.jsx)(M.g,{size:"1.2em"}),Page:()=>Object(y.jsx)(q,{})},{name:"Packages",path:"/packages",redirect:{from:"/projects",to:"/packages"},icon:()=>Object(y.jsx)(Z.a,{size:"1.24em"}),Page:e=>Object(y.jsx)(W,Object(g.a)({},e))},{name:"Creative",path:"/sketches",redirect:{from:"/generative",to:"/sketches"},icon:()=>Object(y.jsx)(Z.b,{}),Page:()=>Object(y.jsx)(K,{})}];s(102);var ee=()=>Object(y.jsxs)("nav",{className:"Menu",children:[$.map((e=>{let{name:t,path:s,icon:a}=e;return Object(y.jsxs)(n.c,{to:s,className:"Menu__Item",activeClassName:"Menu__Item--active",children:[a()," ",t]},"Menu_".concat(t))})),Object(y.jsxs)(R,{className:"Menu__Item--bckg",children:[Object(y.jsx)(S.a,{})," Background"]})]});s(103);const te=new h.QueryClient({defaultOptions:{queries:{suspense:!0,staleTime:102e4}}});function se(){return Object(y.jsxs)(h.QueryClientProvider,{client:te,children:[Object(y.jsx)(C,{}),Object(y.jsx)("div",{className:"Wrap",children:Object(y.jsxs)(n.a,{children:[Object(y.jsx)(ee,{}),Object(y.jsx)(F,{})]})})]})}var ae=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,109)).then((t=>{let{getCLS:s,getFID:a,getFCP:r,getLCP:c,getTTFB:i}=t;s(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(se,{})}),document.getElementById("root")),ae()},92:function(e,t,s){},93:function(e,t,s){},94:function(e,t,s){},99:function(e,t,s){}},[[104,1,2]]]);
//# sourceMappingURL=main.02bb2ef0.chunk.js.map