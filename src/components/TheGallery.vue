<template>
  <div class="photo-grid">
    <div class="gallery">
      <img src="../assets/1.jpg" />
      <img src="../assets/2.jpg" />
      <img src="../assets/3.jpg" />
      <img src="../assets/4.jpg" />
    </div>
    <div class="gallery">
      <img src="../assets/5.jpg" />
      <img src="../assets/6.jpg" />
      <img src="../assets/7.jpg" />
      <p class="isi">
        ayo biar semakin banyak foto kita, mari sering-sering bertemu, hehehehe
      </p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.gallery {
  display: flex;
}
img {
  max-height: 200px;
}
.isi {
  padding-top: 60px;
  padding-left: 5px;
}
@media (max-width: 1024px) {
  .photo-grid {
    margin-left: 50px;
  }
  img {
    max-height: 120px;
  }
  .isi {
    padding-top: 25px;
    font-size: 12px;
    max-width: 110px;
  }
}

@media (max-width: 768px) {
  .photo-grid {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }
  img {
    max-height: 200px;
  }
  .isi {
    padding-top: 60px;
    padding-left: 20px;
    font-size: 14px;
    max-width: 150px;
  }
}

@media (max-width: 426px) {
  .photo-grid{
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .gallery {
    display: block;
  }
  img {
    max-height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .isi {
    display: none;
  }
}

@media (max-width: 376px) {
  .photo-grid{
    width: 70%;}
}

@media (max-width: 321px) {
  .photo-grid{
    width: 85%;}
}

</style>
