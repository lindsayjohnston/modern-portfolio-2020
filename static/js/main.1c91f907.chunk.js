(this["webpackJsonpmodern-portfolio-2020"]=this["webpackJsonpmodern-portfolio-2020"]||[]).push([[0],[,,function(e,t,n){e.exports={ProjectCard:"ProjectCard_ProjectCard__sLeK-",Hidden:"ProjectCard_Hidden__A_Kym",Shown:"ProjectCard_Shown__rzdWX"}},function(e,t,n){e.exports={Menu:"Menu_Menu__1Vgz1",MenuItems:"Menu_MenuItems__3Ohc0",Top:"Menu_Top__hfKLL",About:"Menu_About__2Hxgs",Projects:"Menu_Projects__3egpR",Contact:"Menu_Contact__H5hC5"}},function(e,t,n){e.exports={Projects:"Projects_Projects__TGI0e",ProjectCards:"Projects_ProjectCards__1vbPS",ProjectCardsToTop:"Projects_ProjectCardsToTop__3L1OX"}},function(e,t,n){e.exports={Home:"Home_Home__1yuZe",HomeContent:"Home_HomeContent__29YC-",Name1:"Home_Name1__3zls5",Title:"Home_Title__3sG4Z"}},function(e,t,n){e.exports={AboutContent:"About_AboutContent__3CGJu"}},,function(e,t,n){e.exports={Contact:"Contact_Contact__1vfN8",Links:"Contact_Links__3Am-n"}},,function(e,t,n){e.exports={App:"App_App__15LM-"}},,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,o,s=n(0),c=n(1),i=n.n(c),r=n(9),d=n.n(r),l=(n(20),n(10)),h=n.n(l),j=n(3),u=n.n(j),m=function(e){return Object(s.jsx)("div",{className:u.a.Menu,children:Object(s.jsxs)("div",{className:u.a.MenuItems,children:[Object(s.jsx)("a",{href:"#Top",className:u.a.Top,children:"TOP"}),Object(s.jsx)("a",{href:"#About",className:u.a.About,children:"ABOUT"}),Object(s.jsx)("a",{href:"#Projects",className:u.a.Projects,children:"PROJECTS"}),Object(s.jsx)("a",{href:"#Contact",className:u.a.Contact,children:"CONTACT"})]})})},p=n.p+"static/media/blue_lindsay.922c78ac.png",b=n(11),f=n(12),_=n(14),x=n(13),O=n(4),g=n.n(O),v=n.p+"static/media/Chipotle_screenshot.bea61c8b.png",w=n.p+"static/media/github_map_screenshot.4bb701bc.png",C=n.p+"static/media/vanna_screenshot.ed1a47ed.png",y=n(2),k=n.n(y),P=function(e){return"none"===e.shown?(o=k.a.Shown,a=k.a.Hidden):e.shown===e.index?(a=k.a.Shown,o=k.a.Shown):(a=k.a.Hidden,o=k.a.Hidden),Object(s.jsxs)("div",{className:k.a.ProjectCard,children:[Object(s.jsx)("h2",{className:o,onClick:e.click,children:e.title}),Object(s.jsxs)("div",{className:a,children:[Object(s.jsx)("a",{href:e.link,target:"blank",children:Object(s.jsx)("img",{src:e.image})}),Object(s.jsxs)("p",{children:[" ",e.caption]})]})]})},N=[["Order Online",v,"Mimicking the style and functionality of the Chipotle website, I used React to create dynamically-populated content cards to showcase each item on the menu. Users can choose ingredients for each item, add or remove items from their cart, and place an order online.","https://www.bocaloud.com/"],["4 APIS-1 Button",w,"By querying four different APIs--from Google, GitHub and Geomaps--I used vanilla JavaScript to display an interactive map of cities with their corresponding numbers of GitHub users. This project features asynchronous functions, Node.js and Heroku\u2019s config variables feature to protect my API keys.","https://github-map-real.herokuapp.com/"],["Responsive Design",C,"The webpage you're looking at was built with React and SASS. In addition to developing websites, I have a knack for writing excellent copy and an eye for design. For another example from my web design portfolio, follow the link above to a site I made with Wix.","https://www.vannaoh.com/"]],T=g.a.ProjectCards,A=function(e){Object(_.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={shown:"none"},e.clickHandler=function(t){e.state.shown===t?e.setState({shown:"none"}):e.setState({shown:t})},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return T="none"!==this.state.shown?g.a.ProjectCardsToTop:g.a.ProjectCards,Object(s.jsxs)("div",{id:"Projects",className:g.a.Projects,children:[Object(s.jsx)("h1",{children:"PROJECTS"}),Object(s.jsx)("div",{className:T,children:N.map((function(t,n){return Object(s.jsx)(P,{title:t[0],image:t[1],caption:t[2],link:t[3],shown:e.state.shown,index:n,click:function(){return e.clickHandler(n)}})}))})]})}}]),n}(c.Component),H=n(5),I=n.n(H),S=function(e){return Object(s.jsx)("div",{className:I.a.Home,children:Object(s.jsxs)("div",{className:I.a.HomeContent,children:[Object(s.jsx)("h1",{className:I.a.Name1,children:"Lindsay K. Johnston"}),Object(s.jsx)("img",{src:p,alt:"Blue Lindsay"}),Object(s.jsx)("h1",{className:I.a.Title,children:"Web Developer"})]})})},L=n(6),M=n.n(L),G=n.p+"static/media/lindsay_guitar_blue.0fec0ee5.png",J=n.p+"static/media/Lindsay_Johnston_WD_resume_2020.5f8506ef.pdf",R=function(e){return Object(s.jsx)("div",{className:M.a.About,id:"About",children:Object(s.jsxs)("div",{className:M.a.AboutContent,children:[Object(s.jsx)("h1",{className:M.a.Name1,children:"About"}),Object(s.jsx)("img",{src:G,alt:"Lindsay with guitar"}),Object(s.jsx)("p",{children:"My work experiences have varied greatly: from the non-profit sector to the service industry, from education to my most current role as creative director for a rock-and-roll band. The common threads that weave through all of my professional experiences are creativity and innovation. Whether I am creating a teaching strategy, an app or a t-shirt design, I am always looking to improve upon prior work and present the project in an engaging and professional way. I strive to communicate directly and honestly, work efficiently, and push for female representation in historically male-dominated fields."}),Object(s.jsx)("a",{href:J,target:"blank",children:"Resume"})]})})},B=n(8),F=n.n(B),W=function(e){return Object(s.jsxs)("div",{className:F.a.Contact,id:"Contact",children:[Object(s.jsx)("h1",{children:"Let's Connect!"}),Object(s.jsxs)("div",{className:F.a.Links,children:[Object(s.jsx)("a",{href:"https://github.com/lindsayjohnston",target:"blank",children:"GitHub"}),Object(s.jsx)("a",{target:"blank",href:"https://www.linkedin.com/in/lindsay-johnston-hello123/",children:"LinkedIn"}),Object(s.jsx)("a",{href:"mailto:lindsaykjohnston@outlook.com",children:"E-mail"})]})]})};var D=function(){return Object(s.jsxs)("div",{className:h.a.App,children:[Object(s.jsx)(m,{}),Object(s.jsx)(S,{}),Object(s.jsx)(A,{}),Object(s.jsx)(R,{}),Object(s.jsx)(W,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),s(e),c(e)}))};d.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root")),E()}],[[21,1,2]]]);
//# sourceMappingURL=main.1c91f907.chunk.js.map