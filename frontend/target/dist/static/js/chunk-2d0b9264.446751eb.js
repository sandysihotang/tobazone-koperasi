(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9264"],{"325d":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-layout",{attrs:{view:"hhh LpR fFf"}},[e("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[e("q-toolbar",[e("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(t){a.left=!a.left}}}),a.image?e("q-avatar",[e("img",{attrs:{src:a.dataUrl(a.image),alt:""}})]):e("q-avatar",{attrs:{icon:"person"}}),e("q-toolbar-title",[a._v(" "+a._s(a.title)+" ")]),e("q-btn",{staticClass:"q-ml-md",attrs:{dense:"",color:"primary",round:"",icon:"info"},on:{click:a.notif}},[a.existNotif?e("q-badge",{attrs:{color:"red",floating:""}},[a._v(a._s(a.totalNotif))]):a._e()],1),e("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"fa fa-sign-out-alt"},on:{click:a.logOut}})],1)],1),e("q-drawer",{attrs:{"show-if-above":"",side:"left",bordered:""},model:{value:a.left,callback:function(t){a.left=t},expression:"left"}},[e("q-scroll-area",{staticClass:"fit"},[e("q-list",{attrs:{padding:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/dashboardkoperasiksu"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{color:"primary",name:"fa fa-chart-bar"}})],1),e("q-item-section",[a._v("Dashboard")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/anggotakoperasiksu"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{color:"primary",name:"person"}})],1),e("q-item-section",[a._v("Anggota Koperasi")])],1),e("q-expansion-item",{attrs:{"expand-separator":"",icon:"fas fa-piggy-bank",label:"Pinjaman"}},[e("q-list",{attrs:{padding:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/pengajuanpinjamanksu"}},[e("q-item-section",[a._v("Pengajuan Pinjaman")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/transaksipinjamanksu"}},[e("q-item-section",[a._v("Transaksi Pinjaman")])],1)],1)],1),e("q-expansion-item",{attrs:{"expand-separator":"",icon:"inventory",label:"Produk"}},[e("q-list",{attrs:{padding:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/daftarproduk"}},[e("q-item-section",[a._v("Daftar Produk")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/daftarprodukmasuk"}},[e("q-item-section",[a._v("Produk Masuk")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/pengkasiran"}},[e("q-item-section",[a._v("Pengkasiran")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/produkterjual"}},[e("q-item-section",[a._v("Produk Terjual")])],1)],1)],1),e("q-expansion-item",{attrs:{"expand-separator":"",icon:"money",label:"Simpanan"}},[e("q-list",{attrs:{padding:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/transaksisimpananksu"}},[e("q-item-section",[a._v("Transaksi Simpanan")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/aktivasisimpananksu"}},[e("q-item-section",[a._v("Aktivasi Simpanan")])],1)],1)],1),e("q-expansion-item",{attrs:{"expand-separator":"",icon:"settings",label:"Pengaturan"}},[e("q-list",{attrs:{padding:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/pengaturanpendaftarananggotaksu"}},[e("q-item-section",[a._v("Form Pendaftaran Anggota")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/pengaturanpinjamanksu"}},[e("q-item-section",[a._v("Pinjaman")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/pengaturansimpananksu"}},[e("q-item-section",[a._v("Simpanan")])],1)],1)],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/laporanksu"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{color:"primary",name:"report"}})],1),e("q-item-section",[a._v("Laporan")])],1),e("q-expansion-item",{attrs:{"expand-separator":"",icon:"send",label:"Kirim Laporan Ke Dinas Koperasi Toba"}},[e("q-list",{attrs:{padding:""}},[e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/kirimlaporanksu"}},[e("q-item-section",[a._v("Kirim Laporan")])],1),e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:"/laporanterkirimksu"}},[e("q-item-section",[a._v("Laporan Terkirim")])],1)],1)],1)],1)],1)],1),e("q-page-container",[e("router-view")],1)],1)},r=[],n=(e("99af"),e("d3b7"),e("25f0"),e("1276"),{data:function(){return{left:!1,title:"Selamat datang Koperasi ",image:null,existNotif:!1,totalNotif:0}},methods:{dataUrl:function(a){return"data:image/jpeg;base64,".concat(a)},logOut:function(){window.localStorage.clear(),window.location.href="/"},getStateKoperasi:function(){var a=this;this.$http.get("/api/getstatekoperasi",{headers:this.$auth.getHeader()}).then((function(t){a.title="".concat(a.title," ").concat(t.data.nama),a.image=t.data.logoKoperasi,a.getNotif()}))},getNotif:function(){var a=this;this.$http.get("/api/getnotifikasikoperasi",{headers:this.$auth.getHeader()}).then((function(t){var e=t.data;a.existNotif=e.exist,a.existNotif&&(a.totalNotif=e.total)})).catch((function(){a.$q.notify({type:"negative",message:"Terjadi kesalahan, refresh (F5)"})}))},notif:function(){var a=this;this.$q.loading.show(),this.$http.get("/api/changestatusnotifkoperasi",{headers:this.$auth.getHeader()}).then((function(t){a.getNotif();var e=window.location,i=e.toString().split("/");"notifikasiksu"!==i[i.length-1]?a.$router.push("/notifikasiksu"):a.$q.loading.hide()}))}},created:function(){this.getStateKoperasi()}}),s=n,o=e("2877"),l=Object(o["a"])(s,i,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b9264.446751eb.js.map