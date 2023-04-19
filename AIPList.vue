<template>
  <div>
    <h1>Aave Improvement Proposals (AIPs)</h1>
    <ul>
      <li v-for="aip in aips" :key="aip.number">
        <h2>{{ aip.title }}</h2>
        <p>{{ aip.description }}</p>
        <p>Author: {{ aip.author }}</p>
        <p>Status: {{ aip.status }}</p>
        <p><a :href="aip.html_url" target="_blank">View AIP</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      aips: [],
    };
  },
  async mounted() {
    const response = await axios.get('https://api.github.com/repos/aave/aip/issues');
    const aips = response.data.filter((aip) => aip.pull_request === undefined);
    this.aips = aips;
  },
};
</script>
