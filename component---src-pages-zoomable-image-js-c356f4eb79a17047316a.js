(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{205:function(t,e,i){"use strict";i.r(e);var s=i(31),a=i.n(s),o=i(56),n=i.n(o),h=i(1),c=i.n(h),d=i(208),r=i.n(d),u=function(t){function e(e){var i;return(i=t.call(this,e)||this).zoom=i.zoom.bind(n()(n()(i))),i.imageLoaded=i.imageLoaded.bind(n()(n()(i))),i.image=c.a.createRef(),i.state={x:0,y:0,width:null,aspectRatio:null},i}a()(e,t);var i=e.prototype;return i.imageLoaded=function(){var t=this.image.current.getBoundingClientRect(),e=t.width,i=t.height;this.setState({width:window.innerWidth,aspectRatio:i/e})},i.mousePositionRelativeToImage=function(t){var e=this.state.width*this.state.aspectRatio,i=t.clientX,s=t.clientY,a=t.clientX/this.state.width,o=t.clientY/e,n=this.state.width,h=this.state.width*this.state.aspectRatio;return{mouseOffsetX:i-this.state.x,mouseOffsetY:s-this.state.y,mouseXPercent:a-this.state.x/n,mouseYPercent:o-this.state.y/h}},i.zoom=function(t){var e=this.mousePositionRelativeToImage(t),i=e.mouseOffsetX,s=e.mouseOffsetY,a=e.mouseXPercent,o=e.mouseYPercent,n=this.state.width+t.deltaY,h=a*n-i,c=o*(n*this.state.aspectRatio)-s,d=this.state.x-h,r=this.state.y-c;this.setState({width:n,x:d,y:r}),t.preventDefault()},i.render=function(){return c.a.createElement("img",{onWheel:this.zoom,onLoad:this.imageLoaded,ref:this.image,src:r.a,alt:"",style:{position:"absolute",left:this.state.x+"px",top:this.state.y+"px",width:this.state.width+"px"}})},e}(c.a.Component);e.default=u},208:function(t,e,i){t.exports=i.p+"static/Image-2b53529881376dce99124cc24d92994f.jpg"}}]);
//# sourceMappingURL=component---src-pages-zoomable-image-js-c356f4eb79a17047316a.js.map