(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0db0e3"],{"6ddc":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"q-pa-md"},[e("q-card",{staticClass:"full-height full-height"},[e("q-card-section",{staticClass:"text-h6"},[a._v("Menu Transaksi")]),e("q-separator"),e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticStyle:{"max-height":"50%"},attrs:{filled:"",disable:"",label:"Kode Transaksi","input-class":"text-right"},model:{value:a.kodeTransaksi,callback:function(t){a.kodeTransaksi=t},expression:"kodeTransaksi"}}),e("br"),e("q-input",{staticStyle:{"max-height":"50%"},attrs:{filled:"",disable:"",value:a.tanggal,label:"Tanggal Transaksi","input-class":"text-right"}}),e("br"),e("q-input",{staticStyle:{"max-height":"50%"},attrs:{filled:"",disable:"",value:a.pukul,label:"Waktu","input-class":"text-right"}}),e("br"),e("q-checkbox",{attrs:{label:"Untuk Anggota",disable:!0===a.anggota,color:"teal"},model:{value:a.anggota,callback:function(t){a.anggota=t},expression:"anggota"}})],1),e("div",{staticClass:"col"})])]),e("div",{staticClass:"col"},[e("div",{staticClass:"row"},[e("q-form",{staticClass:"full-width",on:{submit:function(t){return t.preventDefault(),a.searchBarang(t)}}},[e("q-input",{staticClass:"full-width",attrs:{filled:"",label:"Kode Barang","input-class":"text-right"},model:{value:a.barcode,callback:function(t){a.barcode=t},expression:"barcode"}})],1)],1),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{attrs:{filled:"",disable:"",label:"Jumlah Barang","input-class":"text-right"},model:{value:a.jumlahBarang,callback:function(t){a.jumlahBarang=t},expression:"jumlahBarang"}})],1),e("div",{staticClass:"col"}),e("div",{staticClass:"col"},[e("q-input",{attrs:{filled:"",disable:"",label:"Harga Barang","input-class":"text-right"},model:{value:a.hargaBarang,callback:function(t){a.hargaBarang=t},expression:"hargaBarang"}})],1)]),e("br"),e("div",{staticClass:"row"},[e("q-input",{staticClass:"full-width",attrs:{filled:"",label:"Jumlah Beli","input-class":"text-right"},model:{value:a.jumlahBeli,callback:function(t){a.jumlahBeli=t},expression:"jumlahBeli"}})],1),e("br"),e("div",{staticClass:"row"},[e("q-btn",{attrs:{color:"primary",label:"Tambah Keranjang",disable:a.jumlahBeli>a.jumlahBarang||0===a.jumlahBeli},on:{click:a.tambahKeranjang}})],1)])])]),e("q-separator"),e("q-card-section",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("q-table",{attrs:{dense:a.$q.screen.lt.md,title:"Daftar Barang Beli",data:a.data,columns:a.columns,"row-key":"id",selection:"single",selected:a.selected},on:{"update:selected":function(t){a.selected=t}},scopedSlots:a._u([{key:"top-right",fn:function(){return[e("q-btn",{attrs:{size:"xs",color:"red",label:"Hapus Semua",icon:"fa fa-window-close"},on:{click:a.hapusSemua}}),a._v(" "),e("q-btn",{attrs:{size:"xs",color:"orange",label:"Hapus",disable:0===a.selected.length,icon:"fa fa-window-close"},on:{click:a.hapus}}),a._v(" "),e("q-btn",{attrs:{size:"xs",color:"green",label:"Ubah stok",disable:0===a.selected.length,icon:"update"},on:{click:function(t){a.update=!0}}})]},proxy:!0}])})],1),e("div",{staticClass:"col-md-1"}),e("div",{staticClass:"col-md-3"},[e("q-input",{staticClass:"full-width",attrs:{filled:"",disable:"",label:"Total","input-class":"text-right"},model:{value:a.totalBeli,callback:function(t){a.totalBeli=t},expression:"totalBeli"}}),e("br"),e("q-input",{staticClass:"full-width",attrs:{filled:"",label:"Konfirmasi Harga","input-class":"text-right"},model:{value:a.uangBeli,callback:function(t){a.uangBeli=t},expression:"uangBeli"}}),e("br"),e("q-btn",{attrs:{disable:a.tot>a.uangBeli||0===a.data.length,color:"primary",label:"Simpan"},on:{click:a.saveTransaksi}})],1)])])],1),e("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:a.update,callback:function(t){a.update=t},expression:"update"}},[e("q-card",{staticStyle:{width:"700px","max-width":"80vw"}},[e("q-card-section",[a._v(" Ubah ")]),e("q-separator"),e("q-card-section",[e("q-form",{on:{submit:function(t){return t.preventDefault(),a.ubahProduk(t)}}},[e("q-input",{attrs:{square:"",clearable:"",filled:"",label:"Jumlah Barang"},model:{value:a.jumlahBeli,callback:function(t){a.jumlahBeli=t},expression:"jumlahBeli"}}),e("br"),e("br"),e("center",[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Tutup",color:"red"}}),a._v(" "),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Simpan",color:"primary",type:"submit"}})],1)],1)],1)],1)],1)],1)},l=[],n=(e("99af"),e("e25e"),e("c1df")),s=e.n(n),o={data:function(){var a=this;return{totalBeli:0,uangBeli:0,id:null,selected:[],kodeTransaksi:null,tanggal:null,pukul:null,jumlahBarang:0,hargaBarang:0,jumlahBeli:0,data:[],columns:[{name:"barcode",label:"Kode Barang",align:"center",field:function(a){return a.kode_produk},sortable:!0},{name:"nama",label:"Nama Barang",align:"center",field:function(a){return a.nama_produk},sortable:!0},{name:"harga",label:"Harga Barang",align:"center",field:function(t){return a.anggota?a.toIDR(parseInt(t.harga_jual_anggota)):a.toIDR(parseInt(t.harga_jual_non_anggota))},sortable:!0},{name:"jumlahBeli",label:"Jumlah Beli",align:"center",field:function(a){return a.jumlah_beli},sortable:!0},{name:"subTotal",label:"SubTotal",align:"center",field:function(t){return a.toIDR(parseInt(t.jumlah_beli*(a.anggota?t.harga_jual_anggota:t.harga_jual_non_anggota)))},sortable:!0}],anggota:!1,barcode:null,tot:0,update:!1}},methods:{ubahProduk:function(){var a=this;this.$q.loading.show(),this.$http.put("/api/ubahprod/".concat(this.selected[0].id),{jumlahBeli:this.jumlahBeli},{headers:this.$auth.getHeader()}).then((function(t){a.getDataProduk(),a.$q.notify({type:"positive",message:"Berhasil mengubah dari keranjang"}),a.$q.loading.hide()})).catch((function(){a.$q.loading.hide()}))},hapus:function(){var a=this;this.$q.loading.show(),this.$http.delete("/api/deleteprod/".concat(this.selected[0].id),{headers:this.$auth.getHeader()}).then((function(t){a.getDataProduk(),a.$q.notify({type:"positive",message:"Berhasil menghapus dari keranjang"}),a.$q.loading.hide()})).catch((function(){a.$q.loading.hide()}))},hapusSemua:function(){var a=this;this.$q.loading.show(),this.$http.delete("/api/deleteallprod",{headers:this.$auth.getHeader()}).then((function(t){a.getDataProduk(),a.getData(),a.$q.notify({type:"positive",message:"Berhasil menghapus dari keranjang"}),a.$q.loading.hide()})).catch((function(){a.$q.loading.hide()}))},saveTransaksi:function(){var a=this;this.$q.loading.show(),this.$http.post("/api/savetransaksi",{uangBeli:this.uangBeli,anggota:this.anggota},{headers:this.$auth.getHeader()}).then((function(){a.getDataProduk(),a.getData()})).catch((function(){a.$q.loading.hide()}))},getDataProduk:function(){var a=this;this.$http.get("/api/getprodukbeli",{headers:this.$auth.getHeader()}).then((function(t){a.data=t.data,a.tot=0;for(var e=0;e<a.data.length;e++)a.tot+=a.data[e].jumlah_beli*(a.anggota?a.data[e].harga_jual_anggota:a.data[e].harga_jual_non_anggota);a.totalBeli=a.toIDR(parseInt(a.tot)),a.$q.loading.hide()})).catch((function(){a.$q.loading.hide()}))},tambahKeranjang:function(){var a=this;this.$q.loading.show(),this.$http.post("/api/tambahkerangjang",{id:this.id,jumlahBeli:this.jumlahBeli,anggota:this.anggota},{headers:this.$auth.getHeader()}).then((function(){a.jumlahBeli=0,a.id=null,a.barcode=null,a.jumlahBarang=0,a.hargaBarang=0,a.getDataProduk()})).catch((function(){a.$q.loading.hide()}))},toIDR:function(a){for(var t="".concat(a),e="",i=0,l=t.length-1;l>=0;l--)e="".concat(e).concat(t[l]),2===i&&0!==l?(e="".concat(e,","),i=0):i++;for(var n="Rp ",s=e.length-1;s>=0;s--)n="".concat(n).concat(e[s]);return n},searchBarang:function(){var a=this;this.$q.loading.show(),this.$http.post("/api/getprodukbybarcode",{barCode:this.barcode,anggota:this.anggota},{headers:this.$auth.getHeader()}).then((function(t){var e=t.data;!1===e.exist?(a.$q.notify({type:"negative",message:"Barang Tidak Ditemukan"}),a.id=null,a.jumlahBarang=0,a.hargaBarang=0):(a.id=e.id,a.jumlahBarang=e.jumlah,a.hargaBarang=a.toIDR(parseInt(e.harga))),a.$q.loading.hide()})).catch((function(){a.$q.loading.hide()}))},getData:function(){var a=this;this.$http.get("/api/getkodetransaksiproduk",{headers:this.$auth.getHeader()}).then((function(t){a.kodeTransaksi=t.data,s.a.lang("id"),a.tanggal=s()(new Date).format("dddd, Do MMMM YYYY"),a.pukul=s()(new Date).format("hh:mm"),a.$q.loading.hide()})).catch((function(){a.$q.loading.hide()}))}},created:function(){this.$q.loading.show(),this.getData(),this.getDataProduk()}},r=o,c=e("2877"),d=Object(c["a"])(r,i,l,!1,null,"2bb14d5a",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0db0e3.ac6ea221.js.map