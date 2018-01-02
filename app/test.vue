<template>
    <panel>

        <!--搜索区-->
        <el-form :model="form" ref="form" :inline="true" labelWidth="120px">
            

            <el-form-item>
                <el-button type="primary" @click="search">{{$t('search[0]')}}</el-button>
            </el-form-item>
        </el-form>

        <!--列表区-->
        <el-table :data="list" border>
            
        </el-table>

        <el-pagination
                class="mt10"
                @size-change="sizeChange"
                @current-change="currentChange"
                :current-page="pageNum"
                :page-sizes="[5, 10, 20, 50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="count">
        </el-pagination>
    </panel>
</template>

<script>
    import CN from './zh-CN';

    export default {
    	locales: {
		    zh: CN
        },

    	data() {
    		return {
    			form: {
    				pageSize: 10,
                    pageNum: 1
                },

			    count: 0,

    			list: []
            }
        },

        methods: {
	        sizeChange(val) {
	        	this.form.pageSize = val;
	        	this.getList();
            },

	        currentChange(val) {
	        	this.form.pageNum = val;
	        	this.getList();
            },

            search() {
	        	this.pageNum = 1;
	        	this.getList();
            },

            getList() {}
        }
    }
</script>