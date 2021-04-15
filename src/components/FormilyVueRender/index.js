import FormilyVueRender from "./FormilyVueRender";

FormilyVueRender.install = Vue => {
  Vue.component(FormilyVueRender.name, FormilyVueRender);
};

export default FormilyVueRender;
