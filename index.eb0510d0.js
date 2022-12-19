document.addEventListener("alpine:init",(()=>{Alpine.data("clock",(()=>({time:new Date,init(){setInterval((()=>{this.time=new Date}),1e3)},padZero(e,t){for(e=e.toString();e.length<t;)e="0"+e;return e},getTime(){return`${this.padZero(this.time.getHours(),2)}:${this.padZero(this.time.getMinutes(),2)}`}})))})),window.openFriend=()=>{};
//# sourceMappingURL=index.eb0510d0.js.map
