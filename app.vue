<template>
    <el-container>
        <el-menu class="nav-bar" :default-active="route.path" mode="horizontal" :ellipsis="true" @select="handleChange">
            <el-menu-item index="/" style="display: flex;gap:15px;">
                <img style="width: 30px" src="https://res.arsrna.cn/logo.png" alt="logo" />
                Ar-Sr-Na ERP
            </el-menu-item>
            <el-menu-item index="/">财务</el-menu-item>
            <el-menu-item index="/production">生产</el-menu-item>
            <el-menu-item index="/advertisement">营销</el-menu-item>
            <el-menu-item index="/hr">人力</el-menu-item>
        </el-menu>
        <NuxtLayout :name="layout">
            <el-main style="min-height: 80vh;--el-main-padding:20px;margin-top: 40px">

                <ElCard>
                    <template #header>财务预算（已用/总预算）</template>
                    <el-row>
                        <el-col :span="6">
                            生产
                            <h2>{{ finance.production.used }}/{{ finance.production.total }}</h2>
                        </el-col>
                        <el-col :span="6">
                            营销<h2>{{ finance.advertisement.used }}/{{ finance.advertisement.total }}</h2>
                        </el-col>
                        <el-col :span="6">
                            人力<h2>{{ finance.hr.used }}/{{ finance.hr.total }}</h2>
                        </el-col>
                        <el-col :span="6">
                            现金<h2>{{ finance.cash.used }}/{{ finance.cash.total }}</h2>
                        </el-col>
                    </el-row>
                    <template #footer>
                        <ElButton @click="handleClear">清除数据</ElButton>
                    </template>
                </ElCard>

                <ElCard>
                    <template #header>操作</template>
                    <NuxtPage />
                </ElCard>
            </el-main>
        </NuxtLayout>
        <el-footer class="footer-text">
            <div>
                上海绫中信息技术有限公司
                <ElDivider direction="vertical" />
                ©2016 - {{ new Date().getFullYear() }} Ar-Sr-Na. 保留所有权利
                <ElDivider direction="vertical" />
                <el-link type="info" href="https://beian.miit.gov.cn" target="_blank">沪ICP备2023039698号-1</el-link>
            </div>
        </el-footer>
    </el-container>
</template>


<script setup lang="ts">
import './app.scss';

// You might choose this based on an API call or logged-in status
const layout = "main-content";

import { financeState, productionState } from '@/states'
const finance = financeState();
const production = productionState();
const route = useRoute();
let activeIndex = ref('/');
const handleChange = (key: string, keyPath: string[]) => {
    navigateTo(key);
    // console.log(key, keyPath);
    activeIndex.value = key;
}

useHead({
    title: 'ERP DEMO | Ar-Sr-Na',
    link: [{
        rel: 'shortcut icon', href: 'https://res.arsrna.cn/logo.png'
    }]
});


function handleClear() {
    finance.$reset();
    production.$reset();
}
</script>