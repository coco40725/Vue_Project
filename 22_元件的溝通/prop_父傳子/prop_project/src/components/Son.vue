<template>
    <div>
        <h1>這是子元件，當前數字: {{ count }}</h1>
        <h1>這是子元件，當前數字乘以2: {{ count2 }}</h1>
    </div>
</template>

<script>
    import {watch, ref} from "vue";

    export default{
        name: 'SonValue',
        // props 是指從父層接受到的資料，為了得到父層的資料，
        // Son 元件會產生一個 count attribue 去接收資料
        props: ['count'],

        // son 本身的資料
        // 注意，即使 count 更新了，也不會更新 data，換言之你會看到 
        // <h1>這是子元件，當前數字: {{ count }}</h1>  --> 有跟著父元件變動
        // <h1>這是子元件，當前數字乘以2: {{ count2 }}</h1> --> 完全沒動
        // 因此我們需要監聽 props，當 props 更新，也要更新 data
        // 總結
        // 1. watch監聽 props 中的基本類型數據，需要通過 getter 函數返回值的形式（()=>props.xxx）才能監聽
        // 2. watch監聽 props 中的引用類型數據，且父組件中沒有改變地址指向時，可以直接監聽
        // 3. watch監聽 props 中的引用類型數據，且父組件中改變了地址指向時，需要通過 getter 函數返回值的形式（()=>props.xxx）才能監聽
        // 4. 開發情景：做瀑布流展示
        // 原文：https://blog.csdn.net/weixin_46683645/article/details/125481381 

        setup(props) {
            let count2 = ref(props.count * 2)
            watch (
                () => props.count, 
                (newValue, oldValue) => {
                    console.log('oldValue: ' + oldValue)
                    count2.value = oldValue * 2
                    console.log('newValue: ' + newValue)
                }
            )
            return {
                count2 : count2
            }
        }
    }


   
</script>

<style>
    div{
        background-color: rgb(178, 246, 147);
    }
</style>