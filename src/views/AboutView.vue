<template>
  <div class="about">
    <div class="profile">
      <img src="../assets/vany.jpg" class="right" />
      <div>
        <p>
          Ini Vany. Vany itu cewe paling baik, paling cantik, paling keren,
          paling manis, paling kuat, paling romantis yang aku kenal.
        </p>
        <p>
          Aku sayang banget sama vany... walaupun kadang vany-nya sedikit
          ngeselin ya guys
        </p>
        <p>
          Vany tuh segalanya deh buat aku, paling bisa ngertiin aku dan tahu aku
          luar dalam
        </p>
        <p>
          Ohya, walaupun kelihatan baik manis dan cantik gini, vany tuh calon
          ibu polisi loh, tau kan bakal segalak apa nanti hehheheh peace
        </p>
        <p>I love you, vany.</p>
      </div>
    </div>
    <div class="profile">
      <div>
        <p>
          Kalau ini namanya Arjuna. Arjuna tuh cowo paling beruntung karena bisa
          punya pacar yang bernama Vany Patricia Thesaura Sinuhaji.
        </p>
        <p>
          Walau arjuna hobinya marah dan cerewet ke pacarnya, tapi sebenarnya
          marah dan cerewetnya itu tanda sayangnya ke pacarnya, lho.
        </p>
        <p>
          Dia sayang banget banget banget sama cewenyaaa. Sesayang itu loh,
          teman-teman. Ga bisa diukur lagi deh
        </p>
        <p>
          Ohiya, arjuna mau ngucapin makasih buat vany karena udah selalu ada
        </p>
      </div>
      <img src="../assets/arjuna.jpg" class="left" />
    </div>
  </div>
</template>

<style>
.about {
  align-items: center;
}

.profile {
  display: flex;
  padding: 20px;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 20px;
}

img {
  max-width: 200px;
  border-radius: 10px;
}

.right{
  margin-right: 15px;
}

.left{
  margin-left: 15px;
}

@media (max-width: 1024px) {
  .about {
    margin-left: 50px;
    display: block;
  }
  .profile {
    max-width: 380px;
    margin-bottom: 10px;
  }

  p {
    font-size: 10px;
  }

  img {
    max-height: 160px;
  }
}

@media (max-width: 768px) {
  .about {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }
  .profile {
    max-width: 300px;
  }
}

@media (max-width: 426px) {
  .about {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .profile {
    display: block;
    padding: 10px;
    border: 1px solid white;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .left{
    display: block;
    margin-left: auto;
    margin-right: auto
  }
  
  .right{
    display: block;
    margin-left: auto;
    margin-right: auto
  }
}
</style>
