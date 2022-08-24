<template>
    <div>
        HelloWorld
        <vueUse-example />

        <el-button>测试</el-button>
    </div>
</template>

<script>
import VueUseExample from './demo/vueuse-example.vue'
import { add } from '@/utils/test.ts'
export default {
    components: {
        VueUseExample
    },
    computed: {
    },
    mounted() {
        console.log(add('1', 1))
    },
    methods: {

    }
}
</script>