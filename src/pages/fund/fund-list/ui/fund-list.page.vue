<template>
  <div>
    <h1>Fund List</h1>
    <p v-if="$can('access', 'Fund')">
      you are lucky to can see the list of the funds
    </p>
    <button v-if="$can('perform', 'FundAdd')" @click="goToAddFund">
      Add Fund
    </button>
    <p v-if="$can('perform', 'FundEdit')">
      Edit fund buttons would appear here...
    </p>
    <p v-if="$can('perform', 'FundDelete')">
      Delete fund buttons would appear here...
    </p>
    <button v-if="$can('perform', 'FundView')" @click="goToViewFund">
      View Fund
    </button>
    <button v-if="$can('perform', 'FundEdit')" @click="goToEditFund">
      Edit Fund
    </button>
    <button v-if="$can('perform', 'FundDelete')" @click="goToDeleteFund">
      Delete Fund
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAbility } from '@casl/vue';
const { can } = useAbility();

const router = useRouter();
const goToAddFund = () => router.push({ name: 'Todo' });
const goToDeleteFund = () => {
  if (can('perform', 'FundDelete')) alert('Delete Fund action triggered');
};
const goToViewFund = () => {
  if (can('perform', 'FundView')) alert('View Fund action triggered');
};
const goToEditFund = () => {
  if (can('perform', 'FundEdit')) alert('Edit Fund action triggered');
};
</script>
