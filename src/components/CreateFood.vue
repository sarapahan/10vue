<template>
<div class="container fluid">
    <br />
    <div>
        <div class="card">
            <div class="card-header">
                <h2>เลือกภาพยนต์</h2>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addFood()">
                    <div class="form-group">
                        <label>ชื่อภาพยนต์</label>
                        <div style="padding:20px 0">
                            <select v-model="name">
                                <option value="Jumanji:จูแมนจี้เกมดูดโลกมหัศจรรย์">Jumanji:จูแมนจี้เกมดูดโลกมหัศจรรย์</option>
                                <option value="Mulan (2020) มู่หลาน">Mulan (2020) มู่หลาน</option>
                                <option value="Train to Busan 2 (2020) ฝ่านรกซอมบี้คลั่ง"> Train to Busan 2 (2020) ฝ่านรกซอมบี้คลั่ง</option>
                                <option value="ฮาวทูทิ้ง..ทิ้งอย่างไรไม่ให้เหลือเธอ">ฮาวทูทิ้ง..ทิ้งอย่างไรไม่ให้เหลือเธอ</option>
                                </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>ราคาตั๋วหนัง</label>
                        <input type="number" class="form-control" placeholder="ระบุราคาตั๋ว" v-model="price" />
                    </div>
                    <button class="btn btn-primary" type="submit">เพิ่มรายการภาพยนต์</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            price: 0,
        };
    },
    methods: {
        addFood() {
            if (this.name) {
                let payload = {
                    name: this.name,
                    price: this.price
                };
                this.$store.dispatch("addFood", payload);
            }
        }
    }
};
</script>
