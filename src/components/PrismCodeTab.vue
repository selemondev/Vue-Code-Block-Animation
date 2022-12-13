<script setup lang="ts">
import { highlight, languages } from "prismjs/components/prism-core";
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; 
const props = defineProps<{
    code: string,
    lang?: string
}>();

const highlighter = () => {
    return highlight(props.code, languages.php);
};
</script>
<template>
    <div>
        <prism-editor class="my-editor" v-model="props.code" :highlight="highlighter" line-numbers readonly></prism-editor>
    </div>
</template>
<style>
.my-editor {
    background: #2d2d2d;
    color: #ccc;

    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
}
.prism-editor__textarea:focus {
    outline: none;
}
</style>