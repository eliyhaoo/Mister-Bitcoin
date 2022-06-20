
<template>
  <h1>Statistic Page</h1>
  <section class="statistic-page">
    <div class="charts-container">
      <MarketPriceChart
        v-if="priceHistory"
        :data="getPriceData"
        :labels="getPriceLabels"
        chartId="Price"
      />
      <MarketPriceChart
        v-if="transactionsHistory"
        :data="getTransactionsData"
        :labels="getTransactionsLabels"
      />
    </div>
    <!-- <button @click="onBack">Back</button> -->
  </section>
</template>

<script>
import { bitcoinService } from "@/services/bitcoin.service.js";
import MarketPriceChart from "@/components/MarketPriceChart.vue";

export default {
  data() {
    return {
      priceHistory: null,
      transactionsHistory: null,
    };
  },
  methods: {
    // onBack() {
    //   this.$router.push("/");
    // },
  },
  async created() {
    const priceHistory = await bitcoinService.getPriceHistory();
    this.priceHistory = priceHistory;
    const transactionsHistory = await bitcoinService.getTransactionsHistory();
    this.transactionsHistory = transactionsHistory;
  },
  computed: {
    getPriceLabels() {
      const labels = [];
      this.priceHistory.forEach((pricePoint) => {
        const newDate = new Date(pricePoint.x * 1000);
        const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate);
        labels.push(dateToDisplay);
      });
      return labels;
    },
    getPriceData() {
      const priceData = [];
      this.priceHistory.forEach((pricePoint) => priceData.push(pricePoint.y));
      return priceData;
    },
    getTransactionsLabels() {
      const labels = [];
      this.transactionsHistory.forEach((pricePoint) => {
        const newDate = new Date(pricePoint.x * 1000);
        const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate);
        labels.push(dateToDisplay);
      });
      return labels;
    },
    getTransactionsData() {
      const priceData = [];
      this.transactionsHistory.forEach((pricePoint) => priceData.push(pricePoint.y));
      return priceData;
    },
  },
  components: {
    MarketPriceChart,
  },
};
</script>

<style lang="scss">
.statistic-page {
  .charts-container {
    display: grid;
    grid-template-columns: repeat(auto-fit,500px);
  }
}
</style>