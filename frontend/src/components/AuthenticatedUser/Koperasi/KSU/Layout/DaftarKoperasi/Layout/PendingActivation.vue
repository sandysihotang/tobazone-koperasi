<template>
  <div>
    <div class="container">
      <q-card v-if="!isKirim"
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="text-h6" align="center">Koperasi Belum Diaktifkan</div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col"/>
            <div class="col">
              <q-icon name="warning" class="text-red" style="font-size: 5rem;"/>
            </div>
            <div class="col"/>
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div align="justify">
            Tunggu aktivasi dari Administrator, info akan dikirim melalui e-mail koperasi,
            Jika anda belum mengirim bukti bayar maintenence silahkan kirimkan disini
          </div>
          <q-btn style="width: 100%" color="grey" @click="isKirim = !isKirim">Kirim Bukti Bayar
          </q-btn>
        </q-card-section>
      </q-card>
      <div class="row" v-else>
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <q-stepper
            v-model="step"
            ref="stepper"
            animated
            active-color="purple"
          >
            <q-step
              :name="1"
              prefix="1"
              title="Bukti Bayar"
            >
              <div class="row">
                <div class="col-md-2"/>
                <div class="col-md-8">
                  Silahkan kirimkan biaya maintenence sebesar Rp. 500.000,
                  ke No Rekening: 3492340, A/N Ruth Elvin Harianja. Setelah itu kirim bukti bayar
                  anda
                </div>
                <div class="col-md-2"/>
              </div>
            </q-step>
            <q-step
              :name="2"
              prefix="1"
              title="Bukti Bayar"
            >
              <div class="row">
                <div class="col-md-2"/>
                <div class="col-md-8">
                  <q-uploader
                    :factory="factory"
                    label="Bukti Bayar"
                    style="width: 100%"
                    auto-upload
                  />
                </div>
                <div class="col-md-2"/>
              </div>
            </q-step>

            <template v-slot:navigation>
              <q-stepper-navigation>
                <q-btn color="deep-orange"
                       v-if="step === 2" label="Kirim" @click="kirimbukti"/>
                <q-btn @click="$refs.stepper.next()" color="deep-orange"
                       v-else label="Selanjutnya"/>
                <q-btn v-if="step > 1" flat color="deep-orange" @click="$refs.stepper.previous()"
                       label="Kembali" class="q-ml-sm"/>
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isKirim: false,
        step: 1,
        image: null
      }
    },
    methods: {
      factory(files) {
        this.image = files;
      },
      kirimbukti() {
        this.$q.loading.show()
        if (this.image === null) {
          this.$swal({
            position: 'center',
            type: 'error',
            title: 'Silahkan isi bukti pengiriman anda',
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
        const form = new FormData()
        form.append('image', this.image[0])
        this.$http.post('/api/kirim-bukti', form, {
          headers: this.$auth.getHeader(),
        })
          .then(() => {
            this.isKirim = !this.isKirim
            this.$swal({
              position: 'center',
              type: 'success',
              title: 'Berhasil mengirim gambar.',
              showConfirmButton: false,
              timer: 1500,
            });
            this.$q.loading.hide()
          })
      }
    }
  };
</script>

<style scoped>
  .my-card {
    width: 100%;
    max-width: 250px;
    padding: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }
</style>
