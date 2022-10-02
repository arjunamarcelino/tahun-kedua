<script setup></script>

<template>
  <main>
    <div class="home">
      <h1>Hi, Vany Patricia!</h1>
    <h2 style="margin-bottom: 20px">
      Selamat datang di sebuah catatan perjalanan kita, khususnya dalam satu
      tahun ke belakang
    </h2>
    <h2>Semoga suka dan senang. Please jangan ilfeel :(</h2>
    </div>
    
  </main>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 3.6rem;
  top: -10px;
}

@media (min-width: 1024px) {
  .home{
    margin-left: 70px;
  }
  .home h1{
    font-size: 3rem;
  }
  .home h2{
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .home{
    margin-top: 10px;
    text-align: center;
  }
  .home h1{
    font-size: 2.8rem;
  }
  .home h2{
    font-size: 1.5rem;
  }
}

@media (max-width: 425px) {
  .home{
    margin-top: 30px;
    text-align: center;
  }
  .home h1{
    font-size: 2rem;
  }
  .home h2{
    font-size: 1.2rem;
  }
}

</style>
