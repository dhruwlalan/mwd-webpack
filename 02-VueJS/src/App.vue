<template>
   <div class="container">
      <div class="header">
         <img class="header__img" src="./assets/images/webpack.png" />
         <h1 class="header__title">Webpack Demo</h1>
      </div>
      <div class="input-group">
         <label class="input-group__label" for="input">Enter your name: </label>
         <input
            class="input-group__input"
            type="text"
            id="input"
            v-model="name"
            autocomplete="off"
         />
      </div>
      <button class="btn" @click="greet">
         Greet<img class="svg-icon" src="./assets/svg/greet.svg" />
      </button>
      <h4 id="output">{{ showName }}</h4>
   </div>
</template>

<script>
export default {
   data() {
      return {
         name: '',
         showName: '',
      };
   },
   methods: {
      greet() {
         if (this.name !== '') {
            this.showName = `Hello, ${this.name}`;
         } else {
            this.showName = '';
         }
      },
   },
};
</script>
