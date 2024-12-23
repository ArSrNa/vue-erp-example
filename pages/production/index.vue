<template>
    <h1>生产</h1>

    <h2>建造生产线</h2>
    <el-table :data="productionLines" style="width: 100%">
        <el-table-column prop="label" label="类型标签" />
        <el-table-column prop="workers.tradition" label="手工工人" />
        <el-table-column prop="workers.advance" label="高级工人" />
        <el-table-column prop="fee" label="生产费用" />
        <el-table-column prop="efficiency" label="生产效率" />
        <el-table-column prop="cycle" label="生产周期" />
        <el-table-column prop="product" label="产品" />
        <el-table-column prop="buildPrice" label="建造费用" />
        <el-table-column label="操作" width="120">
            <template #default="scope">
                <el-button @click="buildProductionLine(scope.row)">建造</el-button>
            </template>
        </el-table-column>
    </el-table>

    <h2>当前生产线</h2>
    <el-table :data="currentProductLine.lines" style="width: 100%">
        <el-table-column prop="label" label="类型标签" />
        <el-table-column prop="workers.tradition" label="手工工人" />
        <el-table-column prop="workers.advance" label="高级工人" />
        <el-table-column prop="fee" label="生产费用" />
        <el-table-column prop="efficiency" label="生产效率" />
        <el-table-column prop="cycle" label="生产周期" />
        <el-table-column prop="product" label="产品" />
        <el-table-column prop="buildPrice" label="建造费用" />
    </el-table>
</template>

<script lang="ts" setup>
import type { productLineType } from '@/types';
import { financeState, productionState } from '@/states'
const finance = financeState();
const currentProductLine = productionState();

const productionLines: productLineType[] = [
    {
        label: "自动",
        workers: {
            tradition: 10,
            advance: 5
        },
        fee: 5000,
        efficiency: 90,
        cycle: 1,
        product: "电子产品",
        buildPrice: 100000,
        buildCycle: 1
    },
    {
        label: "柔性",
        workers: {
            tradition: 20,
            advance: 10
        },
        fee: 7000,
        efficiency: 80,
        cycle: 0,
        product: "家用电器",
        buildPrice: 150000,
        buildCycle: 1
    },
    {
        label: "传统",
        workers: {
            tradition: 30,
            advance: 0
        },
        fee: 3000,
        efficiency: 70,
        cycle: 2,
        product: "家具",
        buildPrice: 50000,
        buildCycle: 2
    }
];

function buildProductionLine(line: productLineType) {
    /**判断预算不足处理 */
    if (finance.production.total < finance.production.used + line.buildPrice) {
        ElMessage.error('预算不足');
        return;
    }
    finance.use("production", line.buildPrice);
    currentProductLine.lines.push(line);
    ElMessage.success(`成功建造 ${line.label} 生产线`);
}
</script>