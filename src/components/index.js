import formilyVueRender from './FormilyVueRender';

const components = [
  formilyVueRender,
];

export const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export const FormilyVueRender = formilyVueRender;
