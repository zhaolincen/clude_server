(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9e52896"],{"18bd":function(e,t,s){},5118:function(e,t,s){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function n(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new n(a.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new n(a.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},s("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,s("c8ba"))},5713:function(e,t,s){"use strict";s("18bd")},6017:function(e,t,s){(function(e,t){(function(e,s){"use strict";if(!e.setImmediate){var i,a=1,n={},r=!1,c=e.document,o=Object.getPrototypeOf&&Object.getPrototypeOf(e);o=o&&o.setTimeout?o:e,"[object process]"==={}.toString.call(e.process)?m():f()?h():e.MessageChannel?v():c&&"onreadystatechange"in c.createElement("script")?g():b(),o.setImmediate=l,o.clearImmediate=u}function l(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),s=0;s<t.length;s++)t[s]=arguments[s+1];var r={callback:e,args:t};return n[a]=r,i(a),a++}function u(e){delete n[e]}function d(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(s,i);break}}function p(e){if(r)setTimeout(p,0,e);else{var t=n[e];if(t){r=!0;try{d(t)}finally{u(e),r=!1}}}}function m(){i=function(e){t.nextTick((function(){p(e)}))}}function f(){if(e.postMessage&&!e.importScripts){var t=!0,s=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=s,t}}function h(){var t="setImmediate$"+Math.random()+"$",s=function(s){s.source===e&&"string"===typeof s.data&&0===s.data.indexOf(t)&&p(+s.data.slice(t.length))};e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),i=function(s){e.postMessage(t+s,"*")}}function v(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;p(t)},i=function(t){e.port2.postMessage(t)}}function g(){var e=c.documentElement;i=function(t){var s=c.createElement("script");s.onreadystatechange=function(){p(t),s.onreadystatechange=null,e.removeChild(s),s=null},e.appendChild(s)}}function b(){i=function(e){setTimeout(p,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,s("c8ba"),s("f28c"))},ad43:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rule-actions"},[e._l(e.rawValue,(function(t,i){return s("div",{key:i,staticClass:"action-item"},[s("div",{staticClass:"action-item-head"},[s("div",{staticClass:"action-item-type"},[s("div",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.actionType")))]),s("div",{staticClass:"desc"},[e._v(e._s((t._config||{}).title)+" ("+e._s(t.name)+")")])]),e.disabled?s("div",{staticClass:"action-item-btn action-item-type"},[s("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.success"))+" ")]),s("span",{staticClass:"desc"},[e._v(e._s(t.success))]),s("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.fail"))+" ")]),s("span",{staticClass:"desc"},[e._v(e._s(t.failed))])]):s("div",{staticClass:"action-item-btn"},[s("span",{staticClass:"btn",on:{click:function(s){return e.editAction(t,i)}}},[e._v("\n          "+e._s(e.$t("Base.edit"))+"\n        ")]),s("span",{staticClass:"btn",on:{click:function(t){return e.removeAction(i)}}},[e._v("\n          "+e._s(e.$t("RuleEngine.remove"))+"\n        ")]),t.fallbacks.length?e._e():s("div",{staticClass:"fallbacks"},[s("el-popover",{attrs:{placement:"top-start",trigger:"hover","open-delay":500,content:e.$t("RuleEngine.fallbackActionCreate")}},[s("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-plus"},on:{click:function(s){return e.handleAddFallbacks(t)}},slot:"reference"},[e._v("\n              "+e._s(e.$t("RuleEngine.fallbackAction"))+"\n            ")])],1)],1)])]),s("div",{staticClass:"action-item-description"},[e._v("\n      "+e._s((t._config||{}).description)+"\n    ")]),t._value?s("div",{staticClass:"action-item-params"},[e.disabled?s("div",{staticClass:"action-item-field"},[s("div",{staticClass:"title"},[e._v("\n          "+e._s(e.$t("RuleEngine.detailedMetrics"))+"\n        ")]),s("div",{staticClass:"value"},[s("span",{staticClass:"btn btn-default show-btn",on:{click:function(s){return e.toggleShowMetrics(t)}}},[e._v("\n            "+e._s(t.showList?e.$t("RuleEngine.hide"):e.$t("Base.view"))+"\n          ")])])]):e._e(),e._l(t._value,(function(t,i){return s("div",{key:i,staticClass:"action-item-field"},[s("div",{staticClass:"title"},[e._v(e._s(t.label))]),s("div",{staticClass:"value"},[e._v(e._s(t.value))])])}))],2):e._e(),e.disabled&&t.showList?s("div",{staticClass:"metrics-detail"},[s("div",{staticClass:"main-title"},[e._v("\n        "+e._s(e.$t("RuleEngine.actionMetricsTips"))+"\n      ")]),e._l(t.metrics,(function(t,i){return s("div",{key:i,staticClass:"item"},[s("span",{staticClass:"title"},[e._v("\n          "+e._s(e.$t("RuleEngine.node"))+"\n        ")]),s("span",{staticClass:"value"},[e._v("\n          "+e._s(t.node)+"\n        ")]),s("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.success"))+" ")]),s("span",{staticClass:"value"},[e._v(e._s(t.success))]),s("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.fail"))+" ")]),s("span",{staticClass:"value"},[e._v(e._s(t.failed))])])}))],2):e._e(),t.fallbacks&&t.fallbacks.length?[s("el-divider"),e._l(t.fallbacks,(function(a,n){return s("div",{key:n,staticClass:"action-item error-action"},[s("div",{staticClass:"action-item-head"},[s("div",{staticClass:"action-item-type"},[s("div",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.actionType")))]),s("div",{staticClass:"desc"},[e._v(e._s((a._config||{}).title)+" ("+e._s(a.name)+")")])]),e.disabled?s("div",{staticClass:"action-item-btn action-item-type"},[s("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.success"))+" ")]),s("span",{staticClass:"desc"},[e._v(e._s(e.showFallbacksMtrics(a,"success")))]),s("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.fail"))+" ")]),s("span",{staticClass:"desc"},[e._v(e._s(e.showFallbacksMtrics(a,"failed"))+" ")])]):s("div",{staticClass:"action-item-btn"},[s("span",{staticClass:"btn",on:{click:function(s){return e.editFallback(t,a,i)}}},[e._v("\n              "+e._s(e.$t("Base.edit"))+"\n            ")]),s("span",{staticClass:"btn",on:{click:function(s){return e.removeFallback(t)}}},[e._v("\n              "+e._s(e.$t("RuleEngine.remove"))+"\n            ")]),s("div",{staticClass:"fallbacks"},[s("el-popover",{attrs:{placement:"top-start",trigger:"hover","open-delay":500,content:e.$t("RuleEngine.fallbackActionTip")}},[s("span",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n                  "+e._s(e.$t("RuleEngine.fallbackAction"))+"\n                ")])])],1)])]),s("div",{staticClass:"action-item-description"},[e._v("\n          "+e._s((e.actionsMap[a.name]||{}).description)+"\n        ")]),a._value?s("div",{staticClass:"action-item-params"},[e.disabled?s("div",{staticClass:"action-item-field"},[s("div",{staticClass:"title"},[e._v("\n              "+e._s(e.$t("RuleEngine.detailedMetrics"))+"\n            ")]),s("div",{staticClass:"value"},[s("span",{staticClass:"btn btn-default show-btn",on:{click:function(t){return e.toggleShowMetrics(a)}}},[e._v("\n                "+e._s(a.showList?e.$t("RuleEngine.hide"):e.$t("Base.view"))+"\n              ")])])]):e._e(),e._l(a._value,(function(t,i){return s("div",{key:i,staticClass:"action-item-field"},[s("div",{staticClass:"title"},[e._v(e._s(t.label))]),s("div",{staticClass:"value"},[e._v(e._s(t.value))])])}))],2):e._e(),e.disabled&&a.showList?s("div",{staticClass:"metrics-detail"},[s("div",{staticClass:"main-title"},[e._v("\n            "+e._s(e.$t("RuleEngine.actionMetricsTips"))+"\n          ")]),e._l(a.metrics,(function(t,i){return s("div",{key:i,staticClass:"item"},[s("span",{staticClass:"title"},[e._v("\n              "+e._s(e.$t("RuleEngine.node"))+"\n            ")]),s("span",{staticClass:"value"},[e._v("\n              "+e._s(t.node)+"\n            ")]),s("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.success"))+" ")]),s("span",{staticClass:"value"},[e._v(e._s(t.success))]),s("span",{staticClass:"title"},[e._v(e._s(e.$t("RuleEngine.fail"))+" ")]),s("span",{staticClass:"value"},[e._v(e._s(t.failed))])])}))],2):e._e()])}))]:e._e()],2)})),e.disabled?e._e():s("el-button",{attrs:{size:"small",icon:"el-icon-plus"},on:{click:e.addAction}},[e._v("\n    "+e._s(e.$t("RuleEngine.addAction"))+"\n  ")]),s("el-dialog",{attrs:{visible:e.actionDialogVisible,title:e.actionDialogTitle,width:"520px"},on:{"update:visible":function(t){e.actionDialogVisible=t}}},[s("el-form",{ref:"record",attrs:{model:e.record,rules:e.rules,size:"small","label-position":"top"}},[s("el-form-item",{attrs:{prop:"name",label:e.$t("RuleEngine.actionType")}},[s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:8}},[s("el-select",{staticClass:"reset-width",attrs:{disabled:e.isEdit},on:{change:e.actionCategoryChange},model:{value:e.actionCategory,callback:function(t){e.actionCategory=t},expression:"actionCategory"}},e._l(e.actionCategoryOptions,(function(t,i){return s("el-option",{key:i,attrs:{label:e.$t("RuleEngine."+t),value:t}})})),1)],1),s("el-col",{attrs:{span:16}},[s("emq-select",{staticClass:"reset-width",staticStyle:{width:"240px"},attrs:{disabled:e.isEdit,field:{options:e.availableActions[e.actionCategory]},"field-name":{label:"title",value:"name"}},on:{change:e.actionTypeChange},model:{value:e.record.name,callback:function(t){e.$set(e.record,"name",t)},expression:"record.name"}})],1)],1)],1),e.selectedAction.title.length-e.selectedAction.description.length>18?s("div",{staticClass:"action-description"},[e._v("\n        "+e._s(e.selectedAction.description)+"\n      ")]):e._e(),e.selectedAction.params.$resource?s("el-form-item",{attrs:{prop:"params.$resource",label:""}},[s("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          "+e._s(e.$t("RuleEngine.useOfResources"))+"\n          "),s("el-popover",{attrs:{trigger:"hover",width:"220",placement:"top"}},[s("div",{staticClass:"emq-popover-content",domProps:{innerHTML:e._s(e.$t("RuleEngine.resourceSelectTip"))}}),s("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),s("emq-select",{staticClass:"reset-width",staticStyle:{width:"403px"},attrs:{field:{options:e.availableResources},"field-name":{label:"id",value:"id"}},on:{"visible-change":e.checkResource},scopedSlots:e._u([{key:"option",fn:function(t){var i=t.item;return s("div",{staticClass:"custom-option",attrs:{title:i.description}},[s("span",{staticClass:"key"},[e._v(e._s(i.description||i.id))]),s("span",{staticClass:"value"},[e._v(e._s(i.config.title))])])}}],null,!1,3965597931),model:{value:e.record.params.$resource,callback:function(t){e.$set(e.record.params,"$resource",t)},expression:"record.params.$resource"}}),s("span",{staticClass:"tips btn",attrs:{icon:"el-icon-plus"},on:{click:e.toCreateResource}},[e._v("\n          "+e._s(e.$t("RuleEngine.createNew"))+"\n        ")])],1):e._e(),e.selectedAction.params.$resource?s("div",{staticClass:"line"}):e._e(),e.paramsLoading||e.paramsList?s("el-row",{staticClass:"params-item-wrapper",attrs:{gutter:50}},[e._l(e.paramsList,(function(t){return s("el-col",{key:e.record.name+t.key,attrs:{span:"textarea"===t.type||"object"===t.type?24:12}},[s("el-form-item",e._b({class:"sql"===t.key?"code-editor__item":""},"el-form-item",t.formItemAttributes,!1),[t.formItemAttributes.description?s("template",{slot:"label"},[e._v("\n                "+e._s(t.formItemAttributes.label)+"\n                "),s("el-popover",{attrs:{trigger:"hover",width:"220",placement:"top"}},[s("div",{staticClass:"emq-popover-content",domProps:{innerHTML:e._s(t.formItemAttributes.description)}}),s("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1):e._e(),"object"===t.elType?[s("key-and-value-editor",{model:{value:e.record.params[t.key],callback:function(s){e.$set(e.record.params,t.key,s)},expression:"record.params[item.key]"}})]:"cfgselect"===t.elType?[s("config-select",e._b({staticClass:"reset-width",attrs:{extraConfigs:t.extraConfigs},on:{updateConfig:e.addConfigAccordingType},model:{value:e.record.params[t.key],callback:function(s){e.$set(e.record.params,t.key,s)},expression:"record.params[item.key]"}},"config-select",t.bindAttributes,!1))]:"select"!==t.elType?["number"===t.type?s("el-input",e._b({model:{value:e.record.params[t.key],callback:function(s){e.$set(e.record.params,t.key,e._n(s))},expression:"record.params[item.key]"}},"el-input",t.bindAttributes,!1)):"password"===t.type?s("el-input",e._b({attrs:{"show-password":""},model:{value:e.record.params[t.key],callback:function(s){e.$set(e.record.params,t.key,s)},expression:"record.params[item.key]"}},"el-input",t.bindAttributes,!1)):"sql"===t.key?s("div",{staticClass:"monaco-container monaco-action__sql"},[s("monaco",{attrs:{id:e.record.name+"-sql"+Math.random().toString(16).slice(3),lang:"sql"},model:{value:e.record.params.sql,callback:function(t){e.$set(e.record.params,"sql",t)},expression:"record.params.sql"}})],1):s("el-input",e._b({model:{value:e.record.params[t.key],callback:function(s){e.$set(e.record.params,t.key,s)},expression:"record.params[item.key]"}},"el-input",t.bindAttributes,!1))]:["number"===t.type?s("emq-select",e._b({model:{value:e.record.params[t.key],callback:function(s){e.$set(e.record.params,t.key,e._n(s))},expression:"record.params[item.key]"}},"emq-select",t.bindAttributes,!1)):s("emq-select",e._b({model:{value:e.record.params[t.key],callback:function(s){e.$set(e.record.params,t.key,s)},expression:"record.params[item.key]"}},"emq-select",t.bindAttributes,!1))]],2)],1)}))],2):e._e()],1),s("div",{staticClass:"dialog-align-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:e.handleCancel}},[e._v("\n        "+e._s(e.$t("Base.cancel"))+"\n      ")]),s("el-button",{staticClass:"dialog-primary-btn",attrs:{type:"primary",size:"small"},on:{click:e.handleCreate}},[e._v("\n        "+e._s(e.$t("Base.confirm"))+"\n      ")])],1)],1),s("resource-dialog",{ref:"resource",on:{created:e.confirmResource,cache:function(t){return e.confirmResource(null)}}})],2)},a=[],n=(s("8e6e"),s("768b")),r=(s("ffc1"),s("6b54"),s("55dd"),s("01c8")),c=s("bd86"),o=(s("456d"),s("96cf"),s("3b8d")),l=(s("7f7f"),s("ac6a"),s("5df3"),s("4f7f"),s("75fc")),u=(s("6762"),s("2fdb"),s("2ef0")),d=s.n(u),p=s("bd43"),m=s("90b9"),f=s("7d5c"),h=s("9146"),v=s("5118"),g=s("caba"),b=s("6985");function _(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?_(Object(s),!0).forEach((function(t){Object(c["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):_(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var C={name:"RuleActions",components:{ResourceDialog:f["a"],Monaco:h["a"],KeyAndValueEditor:g["a"],ConfigSelect:b["a"]},props:{value:{type:Array,required:!0},disabled:{type:Boolean,default:!1},event:{type:String,default:"message.publish"}},data:function(){return{actionDialogTitle:this.$t("RuleEngine.addActions"),actionDialogVisible:!1,isFallbacks:!1,setRefresh:!1,actionsMap:{},paramsList:[],paramsLoading:!1,currentEditIndex:0,currentOper:"",currentAction:{},actionCategory:"",actionCategoryOptions:[],originParamsList:[],originRules:{name:{required:!0,message:this.$t("General.pleaseChoose")},params:{$resource:{required:!0,message:this.$t("General.pleaseChoose")}}},originRecord:{name:"",params:{$resource:""},fallbacks:[]},record:{name:"",params:{$resource:""},fallbacks:[]},rules:{name:{required:!0,message:this.$t("General.pleaseChoose")},params:{$resource:{required:!0,message:this.$t("General.pleaseChoose")}}},selectedAction:{title:"",description:"",params:{$resource:""},fallbacks:[]},actions:[],resources:[],isEdit:!1}},computed:{rawValue:{get:function(){return this.value},set:function(e){this.$emit("update:value",e)}},availableActions:function(){var e=this,t=this.actions.filter((function(t){return["$any",e.event].includes(t.for)})),s=function(e){return Object(l["a"])(new Set(e))};this.actionCategoryOptions=s(t.map((function(e){return e.category})));var i={};return this.actionCategoryOptions.forEach((function(e){var s=[];t.forEach((function(t){t.category===e&&(s.push(t),i[e]=s)}))})),!this.record.name&&t[0]&&(this.record.name=t[0].name,this.actionTypeChange(this.record.name),this.actionCategory=this.actionCategoryOptions[0]),i},availableResources:function(){var e=this.selectedAction.types;return e?this.resources.filter((function(t){return e.includes(t.type)})):[]}},watch:{actionDialogVisible:function(e){e||(this.initData(),this.isFallbacks=!1)}},created:function(){this.loadActions()},methods:{initData:function(){this.record={name:"",params:{$resource:""},fallbacks:[]},this.originRecord={name:"",params:{$resource:""},fallbacks:[]},this.currentAction={}},toggleShowMetrics:function(e){var t=e.showList,s=void 0!==t&&t;this.$set(e,"showList",!s)},atDialogClose:function(){var e=this;Object(v["setTimeout"])((function(){e.$refs.record.clearValidate()}),10)},handleCreate:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.initRecordEnableBatch(),e.prev=1,e.next=4,this.$refs.record.validate();case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e["catch"](1),e.abrupt("return");case 9:this.record.params&&Object.keys(this.record.params).forEach((function(e){var t=s.record.params[e];"true"!==t&&"false"!==t||(s.record.params[e]=JSON.parse(t))})),t={},this.isFallbacks?(t=y({},this.record),"edit"===this.currentOper&&(this.currentAction.fallbacks=[]),this.currentAction.fallbacks.push(t),this.rawValue.splice(this.currentEditIndex,1,this.currentAction)):(t=y({},this.record),"edit"===this.currentOper?this.rawValue.splice(this.currentEditIndex,1,t):"add"===this.currentOper&&this.rawValue.push(t)),t.params&&!t.params.$resource&&delete t.params.$resource,this.fillRawValue(),this.actionDialogVisible=!1,this.atDialogClose();case 16:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}(),handleCancel:function(){this.actionDialogVisible=!1,this.atDialogClose()},checkResource:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&0===this.availableResources.length&&this.loadResourceData()},toCreateResource:function(){var e=this.selectedAction.types,t=void 0===e?[]:e;this.$refs.resource.setup({types:t,action:"create"}),this.actionDialogVisible=!1,sessionStorage.setItem("currentAction",JSON.stringify({record:this.record,paramsList:this.paramsList,originRecord:this.originRecord,originParamsList:this.originParamsList,actionCategory:this.actionCategory,actionCategoryOptions:this.actionCategoryOptions,types:t,isFallbacks:this.isFallbacks,action:this.currentAction}))},confirmResource:function(e){var t=this;Object(v["setTimeout"])((function(){t.$refs.record&&t.$refs.record.clearValidate()}),10),this.actionDialogVisible=!0;var s=sessionStorage.getItem("currentAction");if(s){var i=JSON.parse(s),a=i.record,n=i.paramsList,r=i.types,c=i.actionCategoryOptions,o=i.actionCategory,l=i.originParamsList,u=i.originRecord,d=i.isFallbacks,p=i.action;this.record=a,this.originRecord=u,this.originParamsList=l,this.paramsList=n,this.selectedAction.types=r,this.actionCategory=o,this.actionCategoryOptions=c,this.isFallbacks=d,this.currentAction=p,sessionStorage.removeItem("currentAction")}e&&(this.record.params.$resource=e),this.loadResourceData(),this.currentOper=this.actionDialogTitle===this.$t("RuleEngine.editActions")?"edit":"add"},loadResourceData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["i"])();case 2:this.resources=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),loadParamsList:function(e){var t=this;this.currentOper=e;var s=this.selectedAction.params,i=Object(m["l"])(s,"params"),a=i.form,n=i.rules;this.storeOriginData(i,e),"add"===e&&(this.record.params={},a.forEach((function(e){var s=e.key,i=e.value,a=s,n=i;"sql"===a&&void 0===n&&(n=""),t.$set(t.record.params,a,n)})),this.$set(this.record.params,"$resource",""),this.$refs.record&&Object(v["setTimeout"])(this.$refs.record.clearValidate,0)),this.paramsList=a,this.rules.params=y({$resource:{required:!0,message:this.$t("General.pleaseChoose")}},n),this.paramsLoading=!1},assignRecordParams:function(e){var t=this,s={};return e.forEach((function(e){var i=e.key,a=e.value,n=i,r=a;"sql"===n&&void 0===r&&(r=""),t.$set(s,n,r)})),s},storeOriginData:function(e,t){var s=e.form,i=e.rules;if(this.originParamsList=s,this.originRules.params=y({$resource:{required:!0,message:this.$t("General.pleaseChoose")}},i),"add"===t){var a=this.assignRecordParams(s),n=Object.assign({},a);this.originRecord.params=n}},addConfigAccordingType:function(e,t,s){var i="true"===t?"false":"true",a=s[i];this.deleteHideItems(a);var n=this.record.params.$resource,c=Object(r["a"])(this.originParamsList),o=c.slice(0),l=Object.assign({},this.originRules.params),u=Object.assign({},this.originRecord.params);if(Object.assign(u,{$resource:n}),Object.keys(e).length){var d=Object(m["l"])(e,"params"),p=d.form,f=d.rules;this.paramsList=o.concat(p),this.rules.params=Object.assign(l,f);var h=this.assignRecordParams(p),g=Object.assign({},h),b=g;this.record.params=Object.assign(u,b)}else this.paramsList=o,this.rules.params=l,this.record.params=u;this.paramsList.sort((function(e,t){return e.order-t.order})),this.record.params.enable_batch=t,this.$refs.record&&Object(v["setTimeout"])(this.$refs.record.clearValidate,10)},deleteHideItems:function(e){var t=this,s=Object.keys(e);s.forEach((function(e){delete t.originRecord.params[e]}))},actionTypeChange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"add";this.selectedAction=JSON.parse(JSON.stringify(this.actionsMap[e])),this.actionCategory=this.selectedAction.category,this.paramsList=[],this.paramsLoading=!0,this.loadParamsList(t),this.loadResourceData()},actionCategoryChange:function(e){var t=this.availableActions[e];t[0]&&(this.record.name=t[0].name,this.actionTypeChange(this.record.name))},addAction:function(){this.actionDialogTitle=this.$t("RuleEngine.addActions"),this.actionTypeChange(this.record.name,"add"),this.actionDialogVisible=!0,this.isEdit=!1},editAction:function(e,t){var s=d.a.cloneDeep(e);this.actionDialogTitle=this.$t("RuleEngine.editActions"),this.currentEditIndex=t,this.actionTypeChange(s.name,"edit"),this.initEnableBatch(s),this.record=y({},s),this.originRecord=y({},s),this.actionDialogVisible=!0,this.isEdit=!0},initEnableBatch:function(e){var t=y({},e),s=t._config,i=t.params,a=i.enable_batch;if(void 0!==a){var n=s.params.enable_batch.items,r=a.toString(),c=n,o=c[r];this.addConfigAccordingType(o,r,c)}},initRecordEnableBatch:function(){void 0!==this.record.params.enable_batch&&(this.record.params.enable_batch=this.record.params.enable_batch.toString())},removeAction:function(e){this.rawValue.splice(e,1)},loadActions:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["h"])();case 2:t=e.sent,this.actions=t,t.forEach((function(e){var t=e.name;s.actionsMap[t]=e})),this.fillRawValue();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fillRawValue:function(){var e=this,t=function(t){t.forEach((function(t){t._config=e.actionsMap[t.name];var s=t.params,i=t._config.params,a=t.fallbacks;t._value=Object.entries(s).map((function(e){var t=Object(n["a"])(e,2),s=t[0],r=t[1];return{label:(i[s]||{}).title,value:r,key:s,fallbacks:a}}))}))},s=this.rawValue;t(s),s.forEach((function(e){t(e.fallbacks)}))},handleAddFallbacks:function(e){this.isFallbacks=!0,this.actionDialogTitle=this.$t("RuleEngine.addActions"),this.actionDialogVisible=!0,this.currentAction=e},editFallback:function(e,t,s){var i=d.a.cloneDeep(t);this.actionDialogTitle=this.$t("RuleEngine.editActions"),this.currentEditIndex=s,this.currentAction=e,this.isFallbacks=!0,this.actionTypeChange(i.name,"edit"),this.initEnableBatch(i),this.record=y({},i),this.originRecord=y({},i),this.actionDialogVisible=!0},removeFallback:function(e){e.fallbacks=[]},showFallbacksMtrics:function(e,t){var s=e.metrics,i=0,a=0;return s.forEach((function(e){i+=e.success,a+=e.failed})),"success"===t?i:a}}},k=C,$=(s("5713"),s("2877")),R=Object($["a"])(k,i,a,!1,null,null,null);t["a"]=R.exports}}]);