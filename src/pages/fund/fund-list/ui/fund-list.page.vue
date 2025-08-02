<template>
  <div>
    <h1>Fund List</h1>
    <p v-if="canAccess('Fund')">
      you are lucky to can see the list of the funds
    </p>
    <button v-if="canPerform('FundAdd')" @click="goToAddFund">Add Fund</button>
    <p v-if="canPerform('FundEdit')">Edit fund buttons would appear here...</p>
    <p v-if="canPerform('FundDelete')">
      Delete fund buttons would appear here...
    </p>
    <button v-if="canPerform('FundView')" @click="goToViewFund">
      View Fund
    </button>
    <button v-if="canPerform('FundEdit')" @click="goToEditFund">
      Edit Fund
    </button>
    <button v-if="canPerform('FundDelete')" @click="goToDeleteFund">
      Delete Fund
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAbility } from '@/shared/composables/useAbility';
const { canAccess, canPerform } = useAbility();

const router = useRouter();
const goToAddFund = () => router.push({ name: 'Todo' });
const goToDeleteFund = () => {
  if (canPerform('FundDelete')) alert('Delete Fund action triggered');
};
const goToViewFund = () => {
  if (canPerform('FundView')) alert('View Fund action triggered');
};
const goToEditFund = () => {
  if (canPerform('FundEdit')) alert('Edit Fund action triggered');
};
</script>
