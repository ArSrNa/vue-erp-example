<template>
    <h1>财务</h1>
    <ElRow>
        <ElCol :span="12">
            <ElSelect v-model="department" placeholder="选择部门">
                <ElOption value="production" label="生产" />
                <ElOption value="hr" label="人力" />
                <ElOption value="advertisement" label="营销" />
            </ElSelect>
        </ElCol>
        <ElCol :span="8">
            <ElInputNumber v-model="count" style="width: 100%;" />
        </ElCol>
        <ElCol :span="2">
            <ElButton @click="addBudget">确认</ElButton>
        </ElCol>
    </ElRow>


</template>

<script lang="ts" setup>

import { financeState } from '@/states'
import type { departmentType } from '~/types';
const finance = financeState();
const department = ref<departmentType>('production');
const count = ref(0);

function addBudget() {
    const current = finance[department.value];
    /**判断预算不足处理 */
    if (finance.cash.total < current.used + count.value) {
        ElMessage.error('预算不足');
        return;
    }
    finance.add(department.value, count.value);
}

</script>