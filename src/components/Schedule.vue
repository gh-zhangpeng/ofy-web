<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>日程管理</el-breadcrumb-item>
  </el-breadcrumb>
  <el-table :data="schedules" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="title" label="日程" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>


<script>
import { onMounted, ref, watch } from "vue";
import api from "../api/api.js";
import { Format } from "@/utils/date.ts";
export default {
  setup() {
    const schedules = ref([]);
    const getSchedules = function (params) {
      console.log(Format.formatTimestamp(1624620379))
      api
        .getSchedules()
        .then(function (response) {
          for (var i = 0; i < response.data.schedules.length; i++) {
            schedule = {
              time: 1
            }
          }
          // /
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // 在 `mounted` 时调用 `getSchedules`
    onMounted(getSchedules);

    watch(schedules, (newValue, oldValue) => {
      console.log("The new value is: " + newValue);
    });

    return {
      schedules,
      getSchedules, // 返回的函数与方法的行为相同
    };
  },
};
</script>

<style scoped>
</style>
