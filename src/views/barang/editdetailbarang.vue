<template>
  <div>
    <form_barang :body="body" :isEdit="false" @submit="onSimpan"></form_barang>
  </div>
</template>

<script>
import API from "../../services/api.service";

export default {
  data: () => {
    return {
      body: {},
    };
  },
  created() {
    //ambil data by id
    if (this.$route.params.id)
    this.getDataDetailBarang(this.$route.params.id);
  },
  methods: {
    
    //get data by id
    getDataDetailBarang(id) {
      API.get(`masterbarangcontroller/${id}`)
        .then((status, data) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              this.body = data.data;
              //notifikasi ketika berhasil
              this.$notify({
                // ketika data berhasil dihapus maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data telah berhasil dihapus",
              });
              this.getDataDetailBarang();
            } else {
              //gagal
              this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Data gagal untuk dihapus",
              });
            }
          } else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });
          }
        })
        .catch(() => {
          //error
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Data gagal untuk dihapus",
          });
        });
    },
    onSimpan(data) {
      //proses simpan ke back end
      data.id_barang = this.$route.params.id
      API.put("masterbarangcontroller", data)
        .then(({ status, data }) => {
          if (status === 200 || status === 201) {
            if (data.status) {
              //notifikasi ketika berhasil
              this.$notify({
                // ketika data berhasil dihapus maka muncul notif
                group: "notif",
                type: "success",
                title: "Informasi",
                text: "Data telah berhasil dihapus",
              });
              this.getDataDetailBarang();
            } else {
              //gagal
              this.$notify({
                group: "notif",
                type: "error",
                title: "Perhatian",
                text: "Data gagal untuk dihapus",
              });
            }
          } else {
            //gagal
            this.$notify({
              group: "notif",
              type: "error",
              title: "Perhatian",
              text: "Data gagal untuk dihapus",
            });
          }
        })
        .catch(() => {
          //error
          this.$notify({
            group: "notif",
            type: "error",
            title: "Perhatian",
            text: "Data gagal untuk dihapus",
          });
        });
    },
  },
};
</script>
