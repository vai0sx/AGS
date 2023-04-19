<template>
  <div class="delegate">
    <h3>{{ delegate.name }}</h3>
    <p>Voting Power: {{ delegate.votingPower }}</p>
    <p>Participation: {{ delegate.participation }}%</p>
    <h4>Historial de votación:</h4>
    <ul>
      <li v-for="vote in votingHistory" :key="vote.id">
        AIP {{ vote.aipId }}: {{ vote.vote }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { aaveAPI } from '../services/aaveAPI';

export default {
  name: 'DelegateInfo',
  props: {
    delegate: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const votingHistory = ref([]);

    async function fetchVotingHistory() {
      votingHistory.value = await aaveAPI.getDelegateVotingHistory(
        props.delegate.address
      );
    }

    onMounted(fetchVotingHistory);

    return {
      votingHistory,
    };
  },
};
</script>

<style scoped>
.delegate {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

h3 {
  margin: 0;
  margin-bottom: 0.5rem;
}

h4 {
  margin-bottom: 0.5rem;
}
</style>
