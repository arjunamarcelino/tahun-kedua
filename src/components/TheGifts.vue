<template>
  <h3 style="margin-bottom: 30px">
    bukan hadiah sih, tapi ada sedikit video tentang kita satu tahun kebelakang
    hadiahnya nyusul nanti bulan Desember, hehehehe
  </h3>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/x2k21sYDkYA"
    title="selamat dua tahun"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  <h3 style="margin-top: 30px; margin-bottom: 50px">SEMOGA SUKAA!!!</h3>
  <p>Pesan dan kesan:</p>
  <textarea
    v-model="message"
    placeholder="ayo mari berkata sejujur-jujurnya"
    style="min-width: 550px; min-height: 80px"
  ></textarea>
  <button @click="sendMessage">Kirim</button>
</template>
// eslint-disable-next-line prettier/prettier

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage: function () {
      window.open(
        "https://api.whatsapp.com/send?phone=6282239285240&text=" +
          this.message,
        "_blank" // <- This is what makes it open in a new window.
      );
    },
  },
};
</script>

<style scoped>
button {
  position: relative;
  background-color: #65c2f5;
  border: none;
  font-size: 20px;
  color: #ffffff;
  padding: 10px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

button:after {
  content: "";
  background: #f1f1f1;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s;
}
</style>
