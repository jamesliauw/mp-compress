import{VantComponent}from"../common/component";VantComponent({classes:["title-class"],props:{title:String,leftText:String,rightText:String,leftArrow:Boolean,fixed:Boolean,zIndex:{type:Number,value:1}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}});