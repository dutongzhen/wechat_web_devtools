'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('classnames');class d extends a.Component{constructor(a){super(a),this.state={lazyLoaded:!1,show:!1,animationType:'none'}}componentDidMount(){this.props.show&&this.setState({show:!0,animationType:'show'})}componentWillReceiveProps(a){if(a.show!=this.props.show){let b={lazyLoaded:!0,animationType:a.show?'show':'hide'};a.show&&(b.show=!0),this.setState(b)}!this.props.show&&a.show?this.setState({show:!0,animationType:'show'}):this.props.show&&!a.show&&this.setState({animationType:'hide'})}handleCancelClick(){'function'==typeof this.props.onCancel&&this.props.onCancel()}handleItemClick(a){'function'==typeof this.props.onSelect&&this.props.onSelect(a)}onMaskClick(){'function'==typeof this.props.onMaskClick&&this.props.onMaskClick()}render(){if(!this.state.lazyLoaded)return null;this.state;let d=this.props.itemList.map((b,c)=>{let d=this.props.itemColor;return c==this.props.alertIndex&&(d='#ff0000'),a.createElement('div',{className:'weui-actionsheet__cell',key:c,style:{color:d},onClick:this.handleItemClick.bind(this,c)},b)});return a.createElement('div',{style:this.state.show?{}:b.displayNone},a.createElement('div',{className:c('weui-mask',{"ui-animate-fadeIn":'show'===this.state.animationType,"ui-animate-fadeOut":'hide'===this.state.animationType}),onAnimationEnd:()=>{'hide'===this.state.animationType&&this.setState({show:!1})},onClick:this.onMaskClick.bind(this)}),a.createElement('div',{className:c('weui-actionsheet',{"ui-animate-swipeInUp":'show'===this.state.animationType,"ui-animate-swipeInDown":'hide'===this.state.animationType})},a.createElement('div',{className:'weui-actionsheet__menu'},d),a.createElement('div',{className:'weui-actionsheet__action'},a.createElement('div',{className:'weui-actionsheet__cell',onClick:this.handleCancelClick.bind(this),style:{color:this.props.cancelColor}},this.props.cancelText))))}}module.exports=d}(require('lazyload'),require);