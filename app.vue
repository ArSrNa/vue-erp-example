<template>
    <el-container>
        <el-menu class="nav-bar" :default-active="route.path" mode="horizontal" :ellipsis="true" @select="handleChange">
            <el-menu-item index="/" style="display: flex;gap:15px;">
                <img style="width: 30px" src="https://res.arsrna.cn/logo.png" alt="logo" />
                Ar-Sr-Na FRM
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
                            生产 {{ finance.production.used }}/{{ finance.production.total }}
                        </el-col>
                        <el-col :span="6">
                            营销 {{ finance.advertisement.used }}/{{ finance.advertisement.total }}
                        </el-col>
                        <el-col :span="6">
                            人力 {{ finance.hr.used }}/{{ finance.hr.total }}
                        </el-col>
                        <el-col :span="6">
                            现金 {{ finance.store.used }}/{{ finance.store.total }}
                        </el-col>
                    </el-row>
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
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// You might choose this based on an API call or logged-in status
const layout = "main-content";

import { financeState } from '@/states'
const finance = financeState();

const config = useRuntimeConfig()
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




</script>