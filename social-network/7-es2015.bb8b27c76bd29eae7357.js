(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{UIoA:function(l,n,o){"use strict";o.r(n);var t=o("8Y7J");class e{}var r=o("pMnS"),u=o("SVse"),a=o("EXsn"),s=o("NktJ");const i=[{followers:Math.floor(1350*Math.random())+50,photos:Math.floor(60*Math.random())+40,following:Math.floor(1350*Math.random())+50,likes:Math.floor(2290*Math.random()+10),img:"../../assets/randomBackGround/background.jpg"},{followers:Math.floor(1350*Math.random())+50,photos:Math.floor(60*Math.random())+40,following:Math.floor(1350*Math.random())+50,likes:Math.floor(2290*Math.random()+10),img:"../../assets/randomBackGround/background1.jpg"},{followers:Math.floor(1350*Math.random())+50,photos:Math.floor(60*Math.random())+40,following:Math.floor(1350*Math.random())+50,likes:Math.floor(2290*Math.random()+10),img:"../../assets/randomBackGround/background2.jpg"},{followers:Math.floor(1350*Math.random())+50,photos:Math.floor(60*Math.random())+40,following:Math.floor(1350*Math.random())+50,likes:Math.floor(2290*Math.random()+10),img:"../../assets/randomBackGround/background3.jpg"},{followers:Math.floor(1350*Math.random())+50,photos:Math.floor(60*Math.random())+40,following:Math.floor(1350*Math.random())+50,likes:Math.floor(2290*Math.random()+10),img:"../../assets/randomBackGround/background4.jpg"},{followers:Math.floor(1350*Math.random())+50,photos:Math.floor(60*Math.random())+40,following:Math.floor(1350*Math.random())+50,likes:Math.floor(2290*Math.random()+10),img:"../../assets/randomBackGround/background5.jpg"}];let c=(()=>{class l{constructor(){this.userStats=i}getProfileStats(l){return this.userStats[l]}}return l.ngInjectableDef=t.Ob({factory:function(){return new l},token:l,providedIn:"root"}),l})();class f{constructor(l,n,o,t){this.route=l,this.location=n,this.userService=o,this.FakeProfileService=t,this.charge="Follow",this.follow=!1}ngOnInit(){this.getUserProfile(),this.getProfileStats()}getUserProfile(){const l=this.route.snapshot.paramMap.get("name");this.userService.getUserByName(l).subscribe(l=>{this.user=l})}getProfileStats(){const l=Math.floor(Math.random()*(this.FakeProfileService.userStats.length-0)+0);this.userStats=this.FakeProfileService.getProfileStats(l)}Follow(){0==this.follow?(this.userStats.followers++,this.charge="UnFollow",this.follow=!0):(this.userStats.followers--,this.charge="Follow",this.follow=!1)}}var p=o("iInd"),d=t.nb({encapsulation:0,styles:[[".work-profile__user-background[_ngcontent-%COMP%]{width:100%;height:200px;position:relative;display:flex}.work-profile__stats-div[_ngcontent-%COMP%]{position:absolute;width:100%;height:70px;bottom:0;background-color:rgba(0,0,0,.5);display:flex;justify-content:space-between;align-items:center}.work-profile__stats-div-row[_ngcontent-%COMP%]{width:100%;height:100%;font-family:cursive}.work-profile__stats-div-row__info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:#fff}.work-profile__stats-div-row__img[_ngcontent-%COMP%]{display:flex;align-items:flex-end;z-index:100}.work-profile__stats-div-row__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:150px;width:150px;position:absolute;top:85px;left:35px;border:2px solid #fff;border-radius:50%;z-index:100}.paragraph_info[_ngcontent-%COMP%]{text-align:center;font-size:20px}.span_info[_ngcontent-%COMP%]{display:block}.work-profile__title-name[_ngcontent-%COMP%]{font-size:25px;color:#1e4c89;font-family:cursive;margin:0!important}.work-portfolio__follow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.work-portfolio__follow_button[_ngcontent-%COMP%]{padding:.8rem 3rem;cursor:pointer;font-size:20px;font-family:cursive;background-color:#1e4c89;color:#fff;border-radius:8px;border:0;transition:.3s all}.work-portfolio__follow_button[_ngcontent-%COMP%]:hover{background:rgba(30,76,137,.8)}.work-portfolio__follow__block-info[_ngcontent-%COMP%]{display:flex;align-items:center}.work-portfolio__follow__block-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-family:cursive;color:#1e4c89}.work-portfolio__follow__block-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#1e4c89;font-size:3rem!important}.work-portfolio__follow-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.work-portfolio__text-about[_ngcontent-%COMP%]{font-size:23px;font-family:cursive;color:#1e4c89}.f[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.f[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:115px}ul[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}img[_ngcontent-%COMP%]{height:50px}.ii[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:4rem}@media screen and (min-device-width:0px) and (max-device-width:634px){.work-profile__stats-div-row__img[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width:993px){.row[_ngcontent-%COMP%]   .col.offset-l4[_ngcontent-%COMP%]{margin-left:30.333333%}}"]],data:{}});function h(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,50,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,24,"div",[["class","row work-profile__user-background"]],null,null,null,null,null)),t.Fb(512,null,u.s,u.t,[t.k,t.r,t.B]),t.ob(3,278528,null,0,u.m,[u.s],{ngStyle:[0,"ngStyle"]},null),t.Db(4,{background:0,"background-size":1}),(l()(),t.pb(5,0,null,null,18,"div",[["class","work-profile__stats-div"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,17,"div",[["class","row work-profile__stats-div-row"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,16,"div",[["class","col l8 offset-l4 s12 offset-m4 m8 work-profile__stats-div-row__info"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,3,"p",[["class","paragraph_info"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Followers "])),(l()(),t.pb(10,0,null,null,1,"span",[["class","span_info"]],null,null,null,null,null)),(l()(),t.Ib(11,null,[""," "])),(l()(),t.pb(12,0,null,null,3,"p",[["class","paragraph_info"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Following "])),(l()(),t.pb(14,0,null,null,1,"span",[["class","span_info"]],null,null,null,null,null)),(l()(),t.Ib(15,null,["",""])),(l()(),t.pb(16,0,null,null,3,"p",[["class","paragraph_info"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Photos "])),(l()(),t.pb(18,0,null,null,1,"span",[["class","span_info"]],null,null,null,null,null)),(l()(),t.Ib(19,null,["",""])),(l()(),t.pb(20,0,null,null,3,"p",[["class","paragraph_info"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Likes "])),(l()(),t.pb(22,0,null,null,1,"span",[["class","span_info"]],null,null,null,null,null)),(l()(),t.Ib(23,null,["",""])),(l()(),t.pb(24,0,null,null,1,"div",[["class","work-profile__stats-div-row__img"]],null,null,null,null,null)),(l()(),t.pb(25,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(26,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(27,0,null,null,14,"div",[["class","col l10  offset-l2 m11 offset-m1 s12 work-portfolio__follow-wrapper "]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,2,"h1",[["class","work-profile__title-name"]],null,null,null,null,null)),(l()(),t.Ib(29,null,["",""])),t.Eb(30,1),(l()(),t.pb(31,0,null,null,7,"div",[["class","work-portfolio__follow__block-info"]],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,1,"i",[["class","small material-icons"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["person"])),(l()(),t.pb(34,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.Ib(35,null,["",",",", ",""])),t.Eb(36,1),t.Eb(37,1),t.Eb(38,1),(l()(),t.pb(39,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(40,0,null,null,1,"button",[["class","work-portfolio__follow_button"]],null,[[null,"click"]],function(l,n,o){var t=!0;return"click"===n&&(t=!1!==l.component.Follow()&&t),t},null,null)),(l()(),t.Ib(41,null,["",""])),(l()(),t.pb(42,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(43,0,null,null,4,"p",[["class","work-portfolio__text-about"]],null,null,null,null,null)),(l()(),t.Ib(44,null,[" Hello, It\u2019s nice to meet you. My name is ",". I am from ",". I live in "," I\u2019m interested in computer science, music, sport and fantasy literature. Computers first appered in my life when I was seven. Then I had got my first computer. It was Commodore 64 and I remember myself thinking, that it was the best thing in the world. I was playing it whenever I could. Then I had got my first PC. At first, I was just playing computer games, but some time later, I noticed that I could do a lot more things with the computer, for example programming. Now, I can already programue in Pascal, C++ and HTML. I have my own site on the internet and I have done many programues. I hope that in the future I will get a job as a computer scientist. "])),t.Eb(45,1),t.Eb(46,1),t.Eb(47,1),(l()(),t.pb(48,0,null,null,2,"div",[["class","row ii"]],null,null,null,null,null)),(l()(),t.pb(49,0,null,null,1,"div",[["class","col l6 m6 s12 f"]],null,null,null,null,null)),(l()(),t.pb(50,0,null,null,0,"img",[["src","../../assets/signature.png"]],null,null,null,null,null))],function(l,n){var o=l(n,4,0,"#fff url("+n.component.userStats.img+") no-repeat 0 0","cover");l(n,3,0,o)},function(l,n){var o=n.component;l(n,11,0,o.userStats.followers),l(n,15,0,o.userStats.following),l(n,19,0,o.userStats.photos),l(n,23,0,o.userStats.likes),l(n,25,0,o.user.image);var e=t.Jb(n,29,0,l(n,30,0,t.Ab(n.parent,0),o.user.name));l(n,29,0,e);var r=t.Jb(n,35,0,l(n,36,0,t.Ab(n.parent,0),o.user.city)),u=t.Jb(n,35,1,l(n,37,0,t.Ab(n.parent,0),o.user.state)),a=t.Jb(n,35,2,l(n,38,0,t.Ab(n.parent,0),o.user.street));l(n,35,0,r,u,a),l(n,41,0,o.charge);var s=t.Jb(n,44,0,l(n,45,0,t.Ab(n.parent,0),o.user.name)),i=t.Jb(n,44,1,l(n,46,0,t.Ab(n.parent,0),o.user.city)),c=t.Jb(n,44,2,l(n,47,0,t.Ab(n.parent,0),o.user.state));l(n,44,0,s,i,c)})}function g(l){return t.Kb(0,[t.Cb(0,a.a,[]),(l()(),t.eb(16777216,null,null,1,null,h)),t.ob(2,16384,null,0,u.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.user)},null)}function b(l){return t.Kb(0,[(l()(),t.pb(0,0,null,null,1,"app-profile-component",[],null,null,null,g,d)),t.ob(1,114688,null,0,f,[p.a,u.g,s.a,c],null,null)],function(l,n){l(n,1,0)},null)}var m=t.lb("app-profile-component",f,b,{},{},[]);class _{}var w=o("QYs8");o.d(n,"ProfileModuleNgFactory",function(){return M});var M=t.mb(e,[],function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[r.a,m]],[3,t.j],t.v]),t.zb(4608,u.l,u.k,[t.s,[2,u.v]]),t.zb(1073742336,u.c,u.c,[]),t.zb(1073742336,p.o,p.o,[[2,p.t],[2,p.k]]),t.zb(1073742336,_,_,[]),t.zb(1073742336,w.a,w.a,[]),t.zb(1073742336,e,e,[]),t.zb(1024,p.i,function(){return[[{path:"",component:f}]]},[])])})}}]);