(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44dd8f5b"],{"0409":function(e,t,n){"use strict";n("ec38")},"179b":function(e,t,n){"use strict";n("7668")},"59f0":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"product-list-container"},[n("Search",{attrs:{categoryList:e.categoryList},on:{submit:e.handleSubmit}}),n("ProductTable",{attrs:{formData:e.formList,page:e.pageInfo},on:{changePage:e.handleChangePage,delete:e.handleDelete,edit:e.handleEidt}})],1)},a=[],i=n("5530"),c=n("1da1"),o=(n("96cf"),n("d81d"),n("b0c0"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"secrch-container"},[n("a-form-model",{attrs:{layout:"inline",model:e.searchForm},on:{submit:e.handleSubmit},nativeOn:{submit:function(e){e.preventDefault()}}},[n("a-form-model-item",{staticClass:"searchInp",attrs:{label:"检索关键字"}},[n("a-input",{attrs:{placeholder:"请输入关键字"},model:{value:e.searchForm.searchWord,callback:function(t){e.$set(e.searchForm,"searchWord",t)},expression:"searchForm.searchWord"}})],1),n("a-form-model-item",{attrs:{label:"商品类目"}},[n("a-select",{staticStyle:{width:"200px"},attrs:{allowClear:"","show-search":"",placeholder:"请选择商品类目"},on:{change:e.handleChange}},e._l(e.categoryList,(function(t){return n("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),n("a-form-model-item",[n("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" "+e._s(e.isLoading?"搜索中...":"搜索")+" ")])],1)],1),n("router-link",{staticClass:"add",attrs:{to:{name:"ProductAdd"}}},[e._v("添加商品")])],1)}),s=[],u={data:function(){return{searchForm:{searchWord:"",category:""},isLoading:!1}},props:{categoryList:{require:!0,default:[]}},methods:{handleChange:function(e){this.searchForm.category=e},handleSubmit:function(){var e=this;this.isLoading=!0,this.$emit("submit",this.searchForm,(function(t){e.isLoading=t}))}}},l=u,d=(n("0409"),n("2877")),p=Object(d["a"])(l,o,s,!1,null,"28b8aabd",null),f=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:e.page},on:{change:e.handleChangePage},scopedSlots:e._u([{key:"operation",fn:function(t,r){return[n("div",[n("button",{staticClass:"btn",on:{click:function(n){return e.editProduct(t,r)}}},[e._v("编辑")]),n("button",{staticClass:"btn",on:{click:function(n){return e.showConfirm(t,r)}}},[e._v("删除")])])]}}])})},m=[],g=[{title:"id",dataIndex:"id",key:"_id"},{title:"标题",dataIndex:"title",key:"title",ellipsis:!0},{title:"描述",dataIndex:"desc",key:"desc",ellipsis:!0},{title:"类目",dataIndex:"categoryName",key:"category",ellipsis:!0},{title:"预售价格",dataIndex:"price",key:"price",ellipsis:!0},{title:"折扣价格",dataIndex:"price_off",key:"price_off"},{title:"标签",dataIndex:"tags",key:"tags"},{title:"限制购买数量",dataIndex:"inventory",key:"inventory"},{title:"上架状态",dataIndex:"status",key:"status",customRender:function(e,t){return 1===t.status?"上架":"下架"}},{title:"操作",dataIndex:"name",key:"name",scopedSlots:{customRender:"operation"}}],b={props:{formData:{type:Array,require:!0},page:{require:!0}},data:function(){return{columns:g}},computed:{list:function(){return this.formData.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{key:e.id})}))}},methods:{handleChangePage:function(e){this.$emit("changePage",e)},showConfirm:function(e,t){var n=this;this.$confirm({title:"确认删除商品".concat(t.id,"？"),content:"".concat(t.title),onOk:function(){n.$emit("delete",t.id)},onCancel:function(){}})},editProduct:function(e,t){this.$emit("edit",t)}}},y=b,v=(n("179b"),Object(d["a"])(y,h,m,!1,null,"5ffe7776",null)),w=v.exports,x=n("c4c8"),k={data:function(){return{formList:[],pageInfo:{current:1,pageSize:10,showSizeChanger:!0,total:1},searchFormList:{searchWord:"",category:""},categoryList:[],categoryObj:{}}},components:{Search:f,ProductTable:w},methods:{getTableData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x["e"](e.pageInfo.current,e.pageInfo.pageSize,e.searchFormList.searchWord,e.searchFormList.category);case 2:n=t.sent,e.formList=n.data,e.formList=e.formList.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{categoryName:e.categoryObj[t.category].name})})),e.pageInfo.total=n.total;case 6:case"end":return t.stop()}}),t)})))()},handleSubmit:function(e,t){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.pageInfo.current=1,n.pageInfo.pageSize=10,n.searchFormList=e,n.getTableData(),t(!1);case 5:case"end":return r.stop()}}),r)})))()},handleChangePage:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.pageInfo=e,n.next=3,t.getTableData();case 3:t.$bus.$emit("scrollToTop",0);case 4:case"end":return n.stop()}}),n)})))()},handleDelete:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,x["b"](e);case 2:t.getTableData();case 3:case"end":return n.stop()}}),n)})))()},handleEidt:function(e){this.$router.push({name:"ProductEidt",params:{id:e.id}})}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,x["d"]();case 2:n=t.sent,e.categoryList=n.data,n.data.forEach((function(t){e.categoryObj[t.id]=t})),e.getTableData();case 6:case"end":return t.stop()}}),t)})))()}},R=k,O=Object(d["a"])(R,r,a,!1,null,null,null);t["default"]=O.exports},7668:function(e,t,n){},c4c8:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return m}));var r=n("1da1"),a=(n("96cf"),n("0c6d"));function i(e){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/category/all",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function o(){return s.apply(this,arguments)}function s(){return s=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r,i,c,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,n=o.length>1&&void 0!==o[1]?o[1]:10,r=o.length>2&&void 0!==o[2]?o[2]:"",i=o.length>3&&void 0!==o[3]?o[3]:"",e.next=6,a["a"].get("/products/all",{params:{page:t,size:n,searchWord:r,category:i}});case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function u(e){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].delete("/products/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("/products/add",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/products/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].put("/products/edit",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}},ec38:function(e,t,n){}}]);
//# sourceMappingURL=chunk-44dd8f5b.47665890.js.map