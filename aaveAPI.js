import axios from 'axios';

const API_URL = 'https://aave-api-v2.aave.com/';

export const aaveAPI = {
  async getAIPs() {
    try {
      const response = await axios.get(`${API_URL}/aips`);
      const aips = response.data.map((aip) => ({
        id: aip.id,
        title: aip.title,
        proposal: aip.proposal
      }));
      return aips;
    } catch (error) {
      console.error('Error when obtaining the AIPs:', error);
      return [];
    }
  },
  async getDelegates() {
    try {
      const response = await axios.get(`${API_URL}/delegates`);
      return response.data;
    } catch (error) {
      console.error('Error getting delegates:', error);
      return [];
    }
  },
  async getDelegateVotingHistory(delegateAddress) {
    try {
      const response = await axios.get(
        `${API_URL}/delegates/${delegateAddress}/voting-history`
      );
      const votingHistory = response.data.map((vote) => ({
        aipId: vote.aip_id,
        vote: vote.vote,
      }));
      return votingHistory;
    } catch (error) {
      console.error("Error getting voting history:", error);
      return [];
    }
  },
  async getProposals() {
    try {
      const response = await axios.get(`${API_URL}/proposals`);
      return response.data;
    } catch (error) {
      console.error("Error getting proposals:", error);
      return [];
    }
  },
  
  async getGovernanceEvents() {
    try {
      const response = await axios.get(`${API_URL}/governance-events`);
      return response.data;
    } catch (error) {
      console.error("Failed to get governance events:", error);
      return [];
    }
  },
};

