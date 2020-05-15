(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf888"],{"63b7":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"q-pa-md"},[t("q-table",{attrs:{dense:a.$q.screen.lt.md,title:"Daftar Aktivasi Simpanan",data:a.data,columns:a.columns,filter:a.filter},scopedSlots:a._u([{key:"top-right",fn:function(){return[t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("q-btn",{attrs:{size:"xs",color:"green",label:"Pengajuan Simpanan",icon:"table"},on:{click:function(e){a.pengajuanBaru=!0}}})],1),t("div",{staticClass:"col"},[t("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:a.filter,callback:function(e){a.filter=e},expression:"filter"}})],1)])]},proxy:!0}])}),t("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:a.pengajuanBaru,callback:function(e){a.pengajuanBaru=e},expression:"pengajuanBaru"}},[t("q-card",{staticStyle:{width:"700px","max-width":"80vw"}},[t("form-pengajuan-simpanan",{on:{call:a.getData}})],1)],1)],1)},i=[],l=(t("99af"),t("e25e"),t("c1df")),s=t.n(l),r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"q-pa-md"},[t("q-card-section",[a._v(" Pengajuan Baru ")]),t("q-card-section",[t("q-input",{attrs:{square:"",clearable:"",filled:"",label:"Nama Pemohon"},on:{input:a.showNama},model:{value:a.nama,callback:function(e){a.nama=e},expression:"nama"}}),t("br"),t("q-select",{attrs:{filled:"",options:a.options,label:"Jenis Simpanan","emit-value":"","map-options":""},on:{input:a.setAturan},model:{value:a.select,callback:function(e){a.select=e},expression:"select"}}),t("br"),t("q-input",{attrs:{filled:"",mask:"date",label:"Tanggal Mulai",rules:["date"]},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{on:{input:function(){return a.$refs.qDateProxy.hide()}},model:{value:a.date,callback:function(e){a.date=e},expression:"date"}})],1)],1)]},proxy:!0}]),model:{value:a.date,callback:function(e){a.date=e},expression:"date"}}),t("br"),t("q-input",{attrs:{square:"",clearable:"",type:"text",label:"Jumlah Simpanan",mask:"Rp #,###,###,###","fill-mask":"0","reverse-fill-mask":"","unmasked-value":"","input-class":"text-right"},scopedSlots:a._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"money"}})]},proxy:!0}]),model:{value:a.jumlahSimpanan,callback:function(e){a.jumlahSimpanan=e},expression:"jumlahSimpanan"}}),t("br"),t("center",[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"red",label:"Close"}}),a._v(" "),t("q-btn",{attrs:{color:"primary",label:"Ajukan"},on:{click:a.ajukan}})],1)],1),t("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:a.namaPengaju,callback:function(e){a.namaPengaju=e},expression:"namaPengaju"}},[t("q-card",[t("q-card-section",[t("q-table",{attrs:{dense:a.$q.screen.lt.md,title:"Daftar Nama Anggota",data:a.data,columns:a.columns,"row-key":"id",selection:"single",selected:a.selected,filter:a.filter},on:{"update:selected":function(e){a.selected=e}},scopedSlots:a._u([{key:"top-right",fn:function(){return[t("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:a.filter,callback:function(e){a.filter=e},expression:"filter"}})]},proxy:!0}])})],1),t("q-card-section",[t("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Close"},on:{click:a.deleteName}}),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Pilih",disable:0===a.selected.length},on:{click:a.setNama}})],1)],1)],1)],1)],1)},o=[],c={data:function(){return{closeUp:!1,nama:null,namaPengaju:!1,filter:"",data:[],columns:[{name:"nama",label:"Nama",align:"center",field:function(a){return"".concat(a.userDetail.firstName," ").concat(a.userDetail.lastName)},sortable:!0},{name:"alamat",label:"Alamat",align:"center",field:function(a){return a.userDetail.address},sortable:!0},{name:"notelepon",label:"No Telepon",align:"center",field:function(a){return a.userDetail.noTelepon},sortable:!0}],selected:[],select:null,options:[{label:"Simpanan Pokok",value:1},{label:"Simpanan Wajib",value:2},{label:"Simpanan Sukarela",value:3}],date:null,maxSimpanan:null,aturan:[],jumlahSimpanan:null}},methods:{call:function(){this.$emit("call")},ajukan:function(){var a=this;null!==this.select&&null!==this.date&&null!==this.jumlahSimpanan&&0!==this.selected.length?(this.$q.loading.show(),this.$http.post("/api/aktivasisimpanan/".concat(this.selected[0].id,"/").concat(this.select),{date:this.date,jumlahSimpanan:this.jumlahSimpanan},{headers:this.$auth.getHeader()}).then((function(e){400===e.data.errCode?(a.$q.notify({type:"negative",message:"Pengajuan aktivasi dengan user yang sama sudah pernah dilakukan"}),a.$q.loading.hide()):(a.$emit("call"),a.$q.notify({type:"positive",message:"Pengajuan Berhasil Dilakukan"}),a.select=null,a.selected=[],a.jumlahSimpanan=null,a.nama=null)})).catch((function(){a.$q.loading.hide()}))):this.$q.notify({type:"negative",message:"Isi Semua field"})},res:function(){parseInt(this.jumlahSimpanan)<parseInt(this.maxSimpanan)&&(this.jumlahSimpanan=parseInt(this.maxSimpanan))},setAturan:function(){for(var a=0;a<this.aturan.length;a++)if(this.aturan[a].jenisSimpanan===this.select)return this.maxSimpanan=this.aturan[a].minimalSimpanan,void(this.jumlahSimpanan=this.maxSimpanan)},setNama:function(){this.nama="".concat(this.selected[0].userDetail.firstName," ").concat(this.selected[0].userDetail.lastName)},deleteName:function(){this.nama=null},showNama:function(){this.namaPengaju=!0,this.loadData()},loadData:function(){var a=this;this.$q.loading.show(),this.$http.get("/api/getdatapengajusimpanan",{headers:this.$auth.getHeader()}).then((function(e){a.data=e.data,a.$q.loading.hide()})).catch((function(){a.$q.loading.hide()}))},getAturan:function(){var a=this;this.$http.get("/api/getaturansimpanan",{headers:this.$auth.getHeader()}).then((function(e){a.aturan=e.data}))}},created:function(){this.getAturan()}},u=c,d=t("2877"),m=Object(d["a"])(u,r,o,!1,null,"15d6966c",null),p=m.exports,h={components:{FormPengajuanSimpanan:p},data:function(){var a=this;return{filter:"",pengajuanBaru:!1,data:[],columns:[{name:"nama",label:"Nama Nasabah",align:"center",field:function(a){return"".concat(a.user.userDetail.firstName," ").concat(a.user.userDetail.lastName)},sortable:!0},{name:"status",label:"Status",align:"center",field:function(a){return a.aktif?"Aktif":"Tidak Aktif"},sortable:!0},{name:"produksimpanan",label:"Produk Simpanan",align:"center",field:function(a){return 1===a.jenisSimpanan?"Simpanan Pokok":2===a.jenisSimpanan?"Simpanan Wajib":"Simpanan Sukarela"},sortable:!0},{name:"jumlahsetoran",label:"Jumlah Setoran",align:"center",field:function(e){return a.toIDR(parseInt(e.totalSimpanan))},sortable:!0},{name:"tanggalmulai",label:"Tanggal Mulai",align:"center",field:function(a){return s.a.lang("id"),s()(a.tanggalMulai).format("dddd, Do MMMM YYYY")},sortable:!0},{name:"tanggalaktivasi",label:"Tanggal Aktivasi",align:"center",field:function(a){return s.a.lang("id"),s()(a.createdAt).format("dddd, Do MMMM YYYY")},sortable:!0}]}},methods:{toIDR:function(a){for(var e="".concat(a),t="",n=0,i=e.length-1;i>=0;i--)t="".concat(t).concat(e[i]),2===n&&0!==i?(t="".concat(t,","),n=0):n++;for(var l="Rp ",s=t.length-1;s>=0;s--)l="".concat(l).concat(t[s]);return l},getData:function(){var a=this;this.$http.get("/api/getanggotasimpananaktivasi",{headers:this.$auth.getHeader()}).then((function(e){a.data=e.data,a.$q.loading.hide()})).catch((function(){a.$q.loading.hide()}))}},created:function(){this.$q.loading.show(),this.getData()}},f=h,g=Object(d["a"])(f,n,i,!1,null,"55e732ca",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0cf888.ba7ffab9.js.map