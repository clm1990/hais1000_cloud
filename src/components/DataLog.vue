<template>
  <div class="DataLog">
    <div class="search">
      <el-button type="primary" icon="el-icon-back" size="mini" @click="clk()"
        >返回</el-button
      >
    </div>

    <div class="content">
      <el-table
        :data="tableData"
        border
        height="700px"
        max-height="700px"
        style="width: 100%"
        :header-cell-style="{
          background: '#FAFAFA',
          color: '#000000',
          'text-align': 'center',
        }"
      >
        <el-table-column prop="macAddr" label="Mac地址" width="180">
        </el-table-column>
        <el-table-column prop="log" label="日志数据"> </el-table-column>
        <el-table-column prop="eventTime" label="上传时间" width="180">
        </el-table-column>
      </el-table>

      <el-pagination
        class="page"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentpage"
        :page-sizes="[10, 20, 40, 100]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalsize"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getDataInfoByMac } from "../api/Datalog";
export default {
  name: "DataLogC",
  data() {
    return {
      tableData: [],
      pagesize: 10,
      currentpage: 1,
      totalsize: 0
    };
  },
  props: ["macAddr"],
  methods: {
    clk() {
      this.$emit("ProjectClick");
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.currentpage = 1;
      getDataInfoByMac(this.macAddr, this.pagesize, this.currentpage).then(
        (response) => {
          this.tableData = response.data.data.list;
          this.totalsize = response.data.data.totalCount;
        }
      );
    },
    handleCurrentChange(val) {
      this.currentpage = val;
      getDataInfoByMac(this.macAddr, this.pagesize, this.currentpage).then(
        (response) => {
          this.tableData = response.data.data.list;
          this.totalsize = response.data.data.totalCount;
        }
      );
    },
  },
  mounted() {
    console.log(this.macAddr);
    getDataInfoByMac(this.macAddr, this.pagesize, this.currentpage).then(
      (response) => {
        this.tableData = response.data.data.list;
        this.totalsize = response.data.data.totalCount;
      }
    );
  },
};
</script>

<style scoped>
.DataLog {
  font-size: 14px;
}
.search {
  margin-top: 10px;
  margin-left: 10px;
}
.content {
  margin: 20px 10px;
}
.page {
  float: right;
  margin-top: 30px;
  margin-right: 30px;
  margin-bottom: 40px;
}
</style>