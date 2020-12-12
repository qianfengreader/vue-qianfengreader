<template>
    <div>
        <el-table
          border
          style="width: 100%"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="goodsName"
            label="商品名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="price"
            label="价格"
            width="120">
          </el-table-column>
          <el-table-column
            prop="comment"
            label="描述"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="deleteShopCart(scope.row.id)" type="text" size="small">删除购物车</el-button>
            </template>

          </el-table-column>
        </el-table>
      <el-button @click="pay()" >购买</el-button>


      <div v-html="payForm" ref="payForm">

      </div>
    </div>


</template>

<script>
  import axios from 'axios';
  axios.defaults.withCredentials=true;
    export default {
        name: "",
      data(){
          return{
            tableData:[],
            multipleSelection: [],
            payForm:""
          }
      },
      methods:{
          findShopCartL:function () {
            axios.post("http://localhost:7000/goods/findShopCart").then(res=>{
              if (res.data.code==200){
                this.tableData=res.data.data;
              }
            })
          },
        deleteShopCart:function (id) {
          axios.post("http://localhost:7000/goods/deleteShopCart",{id:id}).then(res=>{
            if (res.data.code==200){
              this.findShopCartL();
            }
          })
        },
        pay:function(){
            var  ids= [];
          for (var i=0;i<this.multipleSelection.length;i++){
            console.log(this.multipleSelection[i].id)
              ids.push(this.multipleSelection[i].id)
          }
          console.log(ids);
          axios.post("http://localhost:7000/goods/pay",{ids:ids}) .then(res=>{
            this.payForm=res.data.data;
            console.log(this.payForm)

            this.$nextTick(() => {
              this.$refs.payForm.children[0].submit()
            })
          })
        },
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      },
      mounted(){
          this.findShopCartL();
      }
    }
</script>

<style scoped>

</style>
