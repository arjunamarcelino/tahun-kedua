import{_ as l,o as d,c as r,f as p,v as u,b as e,p as _,g as h,d as m}from"./index.50482052.js";const f={data(){return{message:""}},methods:{sendMessage:function(){window.open("https://api.whatsapp.com/send?phone=6282239285240&text="+this.message,"_blank")}}},t=s=>(_("data-v-8a019e3d"),s=s(),h(),s),g={class:"gifts"},k=t(()=>e("h3",{style:{"margin-bottom":"30px"}}," bukan hadiah sih, tapi ada sedikit video tentang kita satu tahun kebelakang hadiahnya nyusul nanti bulan Desember, hehehehe ",-1)),b=t(()=>e("iframe",{src:"https://www.youtube.com/embed/x2k21sYDkYA",title:"selamat dua tahun",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)),w=t(()=>e("h3",{class:"suka"},"SEMOGA SUKAA!!!",-1)),y=t(()=>e("p",null,"Pesan dan kesan:",-1));function x(s,a,c,M,o,i){return d(),r("div",g,[k,b,w,y,p(e("textarea",{"onUpdate:modelValue":a[0]||(a[0]=n=>o.message=n),placeholder:"ayo mari berkata sejujur-jujurnya",class:"pesan"},null,512),[[u,o.message]]),e("button",{onClick:a[1]||(a[1]=(...n)=>i.sendMessage&&i.sendMessage(...n))},"Kirim")])}const v=l(f,[["render",x],["__scopeId","data-v-8a019e3d"]]),j={__name:"GiftsView",setup(s){return(a,c)=>(d(),r("main",null,[m(v)]))}};export{j as default};