<template>
    <div>
        <!-- <RelayArrow /> -->
        <b-button @click="test_set"> set_encryptStorage </b-button>
        <b-button @click="test_get"> get_encryptStorage </b-button>
    </div>
</template>
<script>
import RelayArrow from '@/components/test/RelayArrow.vue'
import { encryptStorage } from '@/plugins/EncryptStorage';
export default {
    components: {
        RelayArrow
    },
    data() {
        return {
            testObj: {
                name: 'test1',
                age: 26,
                address: '서울시 성동구'
            }
        }
    },
    methods: {
        test_set() {
            encryptStorage.setItem('test', this.testObj);
        },
        test_get() {
            const testStorage= encryptStorage.getItem('test');
            console.log(testStorage);
        }
    }
}
</script>