<script lang="ts">
export default {

}
</script>

<template>
  <section class="about">
    <header>
      <img class="mx-auto" src="@/assets/aquasys_logo1.png" alt="Your Company" width="225" height="225" />
      <h1 class="blue">Aquasys</h1>
      <h3>
        Sistema de controle<br>de abastecimento de água
      </h3>
    </header>

    <div>
      <form action="#" method="post">
        <div>
          <label for="user">Usuário</label>
          <input id="email" name="email" type="email" autocomplete="email" required/>
        </div>

        <div>
          <div class="input">
            <label for="password">Senha</label>
          </div>
          <div>
            <input id="password" name="password" type="password" autocomplete="current-password" required />
          </div>
        </div>
        
        <div class="text-center">
          <button type="submit">Entrar</button>
        </div>
        <div class="text-center">
          <a href="#">Esqueceu a senha?</a>
        </div>
      </form>
    </div>

  </section>
</template>

<style scoped>
.about {
  display: flex;
  background-color: var(--color-block-background);
  color: var(--color-block-text);
  border-radius: 15px;
  padding: 15px;
  flex-direction: column;
}

header {
  line-height: 1.5;
  max-height: 200vh;
  text-align: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 4);
    flex-direction: column;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
