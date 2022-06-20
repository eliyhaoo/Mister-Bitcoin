
<template>
  <div v-if="user" class="user-details">
    <h2>Welcome {{ user.name }}</h2>
    <div class="user-balance">
      <h4>
        USD - <span> {{ user.coins }}</span>
      </h4>
      <h4>
        BTC - <span> {{ btcValue }}</span>
      </h4>
    </div>
  </div>

  <form v-else @submit.prevent="onCreateUser">
    <input v-model="name" type="text" />
    <button>Save</button>
  </form>
</template>

<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: null ,
      name: "",
      btcValue: null 
    };
  },

  methods: {
    onCreateUser () {
      const user = userService.createUser(this.name);
      this.user = user;
      this.getBtcValue()
    },
    async getBtcValue(){
      try{
        const btcValue = await bitcoinService.getRate(this.user.coins)
      this.btcValue = btcValue

      }catch (error) {
        console.log('Failed TO get btc value ', error);
      }
    }
  },
  created(){
    const user = userService.getUser()
    if (user) {
      this.user = user
      this.getBtcValue()
    } 
  }

};
</script>

<style lang="scss">

.user-details{
  background-color: lightcoral;
  padding:15px;

  .user-details{
    display:flex;
    flex-direction: column;
    padding:15px
  }
}
</style>