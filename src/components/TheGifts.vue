<template>
  <div class="gifts">
    <h3 style="margin-bottom: 30px">
      bukan hadiah sih, tapi ada sedikit video tentang kita satu tahun
      kebelakang hadiahnya nyusul nanti bulan Desember, hehehehe
    </h3>
    <iframe
      src="https://www.youtube.com/embed/x2k21sYDkYA"
      title="selamat dua tahun"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <h3 class="suka">SEMOGA SUKAA!!!</h3>
    <p>Pesan dan kesan:</p>
    <textarea
      v-model="message"
      placeholder="ayo mari berkata sejujur-jujurnya"
      class="pesan"
    ></textarea>
    <button @click="sendMessage">Kirim</button>
  </div>
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
iframe {
  width: 560px;
  height: 315px;
}
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

.pesan {
  min-width: 550px;
  min-height: 80px;
}
.suka {
  margin-top: 30px;
  margin-bottom: 50px;
}

@media (max-width: 1025px) {
  .gifts {
    margin-top: 50px;
    margin-left: 60px;
    max-width: 420px;
  }
  iframe {
    width: 360px;
    height: 215px;
  }
  .pesan {
    min-width: 400px;
    min-height: 80px;
  }
  .suka {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .gifts {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 426px) {
  .pesan {
    min-width: 350px;
    min-height: 80px;
  }
}
@media (max-width: 376px) {
  .pesan {
    min-width: 300px;
    min-height: 80px;
  }
  iframe {
    width: 260px;
    height: 165px;
  }
}

@media (max-width: 321px) {
  .pesan {
    min-width: 270px;
  }
}
</style>
