(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(33);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(153),l=a(160),c=a(157),d=a(158),u=a(154),A=a(168),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(d.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("h1",null,e.frontmatter.title),s.a.createElement("p",{style:Object.assign({},Object(u.b)(-.25),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-2/3)})},Object(A.a)(e)),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),s.a.createElement(l.a,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginTop:Object(u.a)(2)}},s.a.createElement("li",null,r&&s.a.createElement(o.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),s.a.createElement("li",null,i&&s.a.createElement(o.a,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(s.a.Component);t.default=f;var p="2550096813"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(155);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(165),i=a.n(r),n=a(166),s=a.n(n);s.a.overrideThemeStyles=function(){return{h2:{borderBottom:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,c=o.scale},155:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},156:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},157:function(e,t,a){"use strict";a(33);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(153),l=a(154),c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h2",{style:Object.assign({},Object(l.b)(1.2),{marginTop:0,color:"#696969"})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,i))},t}(s.a.Component);t.a=c},158:function(e,t,a){"use strict";var r=a(159),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(167),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,defaultTitle:l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string},t.a=d},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Eric Pelz",description:"Eric Pelz is a software engineer",author:"Eric Pelz"}}}}},160:function(e,t,a){"use strict";a(161);var r=a(163),i=a(0),n=a.n(i),s=a(153),o=a(164),l=a.n(o),c=a(154);var d="4120859956";t.a=function(){return n.a.createElement(s.b,{query:d,render:function(e){return n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"I'm a software engineer at"," ",n.a.createElement("a",{href:"https://www.asana.com/"},"Asana"),". I manage a few engineers and am the program & tech lead on a product team. I spend a lot of time thinking about running effective teams, fostering growth, product+engineering collaboration, and engineering design patterns."))},data:r})}},161:function(e,t,a){"use strict";a(162)("fixed",function(e){return function(){return e(this,"tt","","")}})},162:function(e,t,a){var r=a(11),i=a(17),n=a(18),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},163:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAwX/xAAXAQEAAwAAAAAAAAAAAAAAAAADAAEC/9oADAMBAAIQAxAAAAGjjZOSbVqnj4HOwHr/xAAbEAEBAQACAwAAAAAAAAAAAAABAgADERITIv/aAAgBAQABBQKnoPZLuQ+ZBrx1rppwqf/EABcRAAMBAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8Bd0//xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oACAECAQE/AclyCQv/xAAaEAEAAgMBAAAAAAAAAAAAAAABADEQESEy/9oACAEBAAY/Aq7NqJPOA5KzbP/EABsQAQEAAwEBAQAAAAAAAAAAAAEAESFBMWGh/9oACAEBAAE/IUoXwJyp1E5uNbvcRspjO/JSc7qOP7X/2gAMAwEAAgADAAAAEA/Xf//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBWysLL/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQETH/2gAIAQIBAT8QDGgE1cn/xAAeEAEBAQEAAAcAAAAAAAAAAAABEQAhMVFxkaHB0f/aAAgBAQABPxCjSrhfCutkU4gx5zOT5zIKDp746FHI+XfrV/WsqYpgLkAInXIQvTP/2Q==",width:50,height:50,src:"/static/4374dba29272687f08ad00b7ab820636/7e494/ericpelz.jpg",srcSet:"/static/4374dba29272687f08ad00b7ab820636/7e494/ericpelz.jpg 1x,\n/static/4374dba29272687f08ad00b7ab820636/36cc2/ericpelz.jpg 1.5x,\n/static/4374dba29272687f08ad00b7ab820636/0a3a6/ericpelz.jpg 2x,\n/static/4374dba29272687f08ad00b7ab820636/75d16/ericpelz.jpg 3x"}}}}}},164:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(34)),o=r(a(74)),l=r(a(75)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=new WeakMap;var g=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+r+"<img "+o+l+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.Tag,E=e.itemProp,w="boolean"==typeof b?"lightgray":b,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),j={title:t,alt:this.state.isVisible?"":a,style:v,className:f};if(p){var B=p;return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),w&&c.default.createElement(y,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),B.base64&&c.default.createElement(m,(0,l.default)({src:B.base64},j)),B.tracedSVG&&c.default.createElement(m,(0,l.default)({src:B.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,B.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),c.default.createElement(m,{alt:a,title:t,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},B))}}))}if(g){var x=g,O=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete O.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},w&&c.default.createElement(y,{title:t,style:{backgroundColor:w,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),x.base64&&c.default.createElement(m,(0,l.default)({src:x.base64},j)),x.tracedSVG&&c.default.createElement(m,(0,l.default)({src:x.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement(m,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=b;t.default=w},168:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a(0),i=a.n(r);function n(e){return i.a.createElement(i.a.Fragment,null,e.frontmatter.date," ▪ ",e.fields.readingTime.text)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7c9d6e9eabeae30c4a07.js.map