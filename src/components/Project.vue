<template>
  <div class="project">
    <div class="search">
      <span>项目名称：</span>
      <el-input
        class="in"
        placeholder="请输入项目名称"
        v-model="projectName"
        size="mini"
      >
      </el-input>
      <span>Mac地址：</span>
      <el-input
        class="in"
        placeholder="请输入Mac地址"
        v-model="macAddr"
        size="mini"
      >
      </el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="mini"
        @click="getProjectInfoByP()"
        >查询</el-button
      >
      <el-button
        type="primary"
        icon="el-icon-plus"
        size="mini"
        @click="dialogFormVisible = true"
        >新增</el-button
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
        :cell-style="cellStyle"
      >
        <el-table-column fixed prop="projectId" label="项目ID" width="350">
        </el-table-column>
        <el-table-column prop="projectName" label="项目名称" width="400">
        </el-table-column>
        <el-table-column prop="projectAddress" label="项目地址">
        </el-table-column>
        <el-table-column prop="macAddr" label="Mac地址"> </el-table-column>
        <el-table-column prop="projectSn" label="项目sn"> </el-table-column>
        <el-table-column
          prop="projectState"
          label="状态"
          :formatter="stateFormat"
        >
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button
              @click="handleUpdateClick(scope.row)"
              type="text"
              size="small"
              >编辑</el-button
            >
            <el-button
              @click="handleDelClick(scope.row)"
              type="text"
              size="small"
              >删除</el-button
            >
          </template>
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

      <el-dialog title="项目信息" :visible.sync="dialogFormVisible">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="项目名称">
            <el-input v-model="form.projectName"></el-input>
          </el-form-item>
          <el-form-item label="项目地址">
            <el-input v-model="form.projectAddress"></el-input>
          </el-form-item>
          <el-form-item label="Mac地址">
            <el-input v-model="form.macAddr"></el-input>
          </el-form-item>
          <el-form-item label="项目sn">
            <el-input v-model="form.projectSn"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit()">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="项目信息" :visible.sync="updateProjectVisible">
        <el-form ref="updateForm" :model="updateForm" label-width="80px">
          <el-form-item label="项目名称">
            <el-input v-model="updateForm.projectName"></el-input>
          </el-form-item>
          <el-form-item label="项目地址">
            <el-input v-model="updateForm.projectAddress"></el-input>
          </el-form-item>
          <el-form-item label="Mac地址">
            <el-input v-model="updateForm.macAddr"></el-input>
          </el-form-item>
          <el-form-item label="项目sn">
            <el-input v-model="updateForm.projectSn"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateProjectVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmitUpdate()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {
  getProjectInfo,
  addProjectInfo,
  getProjectInfoByParam,
  updateProjectInfo,
  delProjectInfo,
} from "../api/project";
export default {
  name: "ProjectC",
  data() {
    return {
      projectName: "",
      macAddr: "",
      tableData: [],
      pagesize: 10,
      currentpage: 1,
      totalsize: 0,
      dialogFormVisible: false,
      updateProjectVisible: false,
      form: {
        projectName: "",
        projectAddress: "",
        macAddr: "",
        projectSn: "",
      },
      updateForm: {
        projectID: "",
        projectName: "",
        projectAddress: "",
        macAddr: "",
        projectSn: "",
      },
    };
  },
  methods: {
    handleClick(row) {
      //this.$router.push("/datalog")
      this.$emit("DataClick", row.macAddr);
    },

    handleUpdateClick(row) {
      this.updateForm.projectId = row.projectId;
      this.updateForm.projectName = row.projectName;
      this.updateForm.projectAddress = row.projectAddress;
      this.updateForm.macAddr = row.macAddr;
      this.updateForm.projectSn = row.projectSn;

      this.updateProjectVisible = true;
    },

    onSubmitUpdate() {
      updateProjectInfo(
        this.updateForm.projectId,
        this.updateForm.projectName,
        this.updateForm.projectAddress,
        this.updateForm.macAddr,
        this.updateForm.projectSn
      ).then((response) => {
        if (response.data.code == "0") {
          this.openSucess(response.data.message);
          getProjectInfo(this.pagesize, this.currentpage).then((response) => {
            this.tableData = response.data.data.list;
            this.totalsize = response.data.data.totalCount;
          });
        } else {
          this.openFail(response.data.message);
        }
        this.updateProjectVisible = false;
      });
    },

    handleDelClick(row) {
      delProjectInfo(row.projectId).then((response) => {
        if (response.data.code == "0") {
          this.openSucess(response.data.message);
          getProjectInfo(this.pagesize, this.currentpage).then((response) => {
            this.tableData = response.data.data.list;
            this.totalsize = response.data.data.totalCount;
          });
        } else {
          this.openFail(response.data.message);
        }
        this.dialogFormVisible = false;
      });
    },

    handleSizeChange(val) {
      this.pagesize = val;
      this.currentpage = 1;
      getProjectInfo(this.pagesize, this.currentpage).then((response) => {
        this.tableData = response.data.data.list;
        this.totalsize = response.data.data.totalCount;
      });
    },
    handleCurrentChange(val) {
      this.currentpage = val;
      getProjectInfo(this.pagesize, this.currentpage).then((response) => {
        this.tableData = response.data.data.list;
        this.totalsize = response.data.data.totalCount;
      });
    },
    onSubmit() {
      addProjectInfo(
        this.form.projectName,
        this.form.projectAddress,
        this.form.macAddr,
        this.form.projectSn
      ).then((response) => {
        if (response.data.code == "0") {
          this.openSucess(response.data.message);
          getProjectInfo(this.pagesize, this.currentpage).then((response) => {
            this.tableData = response.data.data.list;
            this.totalsize = response.data.data.totalCount;
          });
        } else {
          this.openFail(response.data.message);
        }
        this.dialogFormVisible = false;
      });
    },

    openSucess(message) {
      this.$message({
        message,
        type: "success",
      });
    },

    openFail(message) {
      this.$message({
        message,
        type: "error",
      });
    },

    getProjectInfoByP() {
      getProjectInfoByParam(
        this.pagesize,
        this.currentpage,
        this.projectName,
        this.macAddr
      ).then((response) => {
        this.tableData = response.data.data.list;
        this.totalsize = response.data.data.totalCount;
      });
    },

    stateFormat(row, column, cellValue, index) {
      return row.projectState == "1" ? "在线" : "离线";
    },

    cellStyle({ row, column, rowIndex, columnIndex }) {
      let cstyle = "text-align : center;";

      if (column.label == "状态") {
        if (row.projectState == "1") {
          cstyle += "color:green;";
        } else {
          cstyle += "color:red;";
        }
      }

      return cstyle;
    },
  },
  mounted() {
    getProjectInfo(this.pagesize, this.currentpage).then((response) => {
      this.tableData = response.data.data.list;
      this.totalsize = response.data.data.totalCount;
    });
  },
};
</script>

<style scoped>
.project {
  font-size: 14px;
}
.search {
  margin-top: 10px;
  margin-left: 10px;
}
.in {
  width: 200px;
  margin-right: 10px;
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