<!--
 * @Author: HuTong 470048408@qq.com
 * @Date: 2025-08-08 13:15:19
 * @LastEditors: HuTong 470048408@qq.com
 * @LastEditTime: 2025-08-08 14:13:43
 * @FilePath: \Weathering2025\components\AppCountdown.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="container mx-auto py-4 animate__animated animate__bounceInUp">
        <h2 class="time-unit py-4">距离大会开幕还有：</h2>
        <div id="countdown" class="flex justify-center flex-wrap">
            <div class="time-unit">
                <span>{{ timeUnits.days < 10 ? '0' + timeUnits.days : timeUnits.days }}</span>
                        <label>天</label>
            </div>
            <div class="time-unit">
                <span>{{ timeUnits.hours < 10 ? '0' + timeUnits.hours : timeUnits.hours }}</span>
                        <label>时</label>
            </div>
            <div class="time-unit">
                <span>{{ timeUnits.minutes < 10 ? '0' + timeUnits.minutes : timeUnits.minutes }}</span>
                        <label>分</label>
            </div>
            <div class="time-unit">
                <span>{{ timeUnits.seconds < 10 ? '0' + timeUnits.seconds : timeUnits.seconds }}</span>
                        <label>秒</label>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const timeUnits = ref({
            days: '0',
            hours: '0',
            minutes: '0',
            seconds: '0',
        });

        const countdown = (targetDate) => {
            const target = new Date(targetDate);
            const intervalId = setInterval(() => {
                const now = new Date();
                const diff = target - now;

                if (diff <= 0) {
                    clearInterval(intervalId);
                    return;
                }

                timeUnits.value.days = Math.floor(diff / (1000 * 60 * 60 * 24));
                timeUnits.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                timeUnits.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                timeUnits.value.seconds = Math.floor((diff % (1000 * 60)) / 1000);
            }, 1000);
        };

        onMounted(() => {
            countdown('2025-10-18T00:08:30');
        });

        return {
            timeUnits,
        };
    },
};
</script>

<style scoped>
/* ...其他样式... */
.time-unit {
    text-align: center;
}

.time-unit span {
    font-size: 24px;
    color: #fff;
    background-color: #102693;
    padding: 10px 10px;
    border-radius: 6px;
    width: 100px;
}

.time-unit label {
    align-items: center;
    font-size: 12px;
    line-height: 12px;
    color: #666;
    padding: 10px;
}

@media (min-width: 750px) {
    .time-unit span {
        font-size: 30px;
        padding: 10px 10px;
        width: 150px;
    }

    .time-unit label {
        font-size: 24px;
    }
}
</style>