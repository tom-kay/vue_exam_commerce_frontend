<template>
    <div class="orders">
        <div class="container">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>주문자명</th>
                        <th>주소</th>
                        <th>결제수단</th>
                        <th>구입항목</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(o, idx) in state.orders" :key="idx">
                        <td>{{ state.orders.length - idx }}</td>
                        <td>{{ o.name }}</td>
                        <td>{{ o.address }}</td>
                        <td>{{ o.payment }}</td>
                        <td>
                            <div v-for="(i, idx2) in o.items" :key="i">{{ i.name }}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import lib from "@/scripts/lib";
import axios from "axios";
import { reactive } from "vue";

export default {
    setup() {
        const state = reactive({
            orders: [],

        });

        axios.get("/api/orders").then(({ data }) => {
            state.orders = [];

            for (const d of data) {
                if (d.items) {
                    d.items = JSON.parse(d.items);
                }
                state.orders.push(d);
            }
        })


        return { state, lib, };
    },
};
</script>
<style scoped>
table {
    margin-top: 30px;
}

.table>tbody {
    border-top: 1px solid #eee;
}
</style>
