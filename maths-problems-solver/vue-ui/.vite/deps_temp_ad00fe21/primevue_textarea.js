import {
  script,
  useStyle
} from "./chunk-HW6XNEP3.js";
import "./chunk-TLTUNC2T.js";
import {
  createElementBlock,
  mergeProps,
  openBlock
} from "./chunk-QNGQRF5U.js";
import "./chunk-76J2PTFD.js";

// node_modules/primevue/textarea/textarea.esm.js
var styles = "\n.p-inputtextarea-resizable {\n    overflow: hidden;\n    resize: none;\n}\n\n.p-fluid .p-inputtextarea {\n    width: 100%;\n}\n";
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-inputtextarea p-inputtext p-component", {
      "p-filled": instance.filled,
      "p-inputtextarea-resizable ": props.autoResize
    }];
  }
};
var _useStyle = useStyle(styles, {
  name: "textarea",
  manual: true
});
var loadStyle = _useStyle.load;
var script$1 = {
  name: "BaseTextarea",
  "extends": script,
  props: {
    modelValue: null,
    autoResize: Boolean
  },
  css: {
    classes,
    loadStyle
  },
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script2 = {
  name: "Textarea",
  "extends": script$1,
  emits: ["update:modelValue"],
  mounted: function mounted() {
    if (this.$el.offsetParent && this.autoResize) {
      this.resize();
    }
  },
  updated: function updated() {
    if (this.$el.offsetParent && this.autoResize) {
      this.resize();
    }
  },
  methods: {
    resize: function resize() {
      var style = window.getComputedStyle(this.$el);
      this.$el.style.height = "auto";
      this.$el.style.height = "calc(".concat(style.borderTopWidth, " + ").concat(style.borderBottomWidth, " + ").concat(this.$el.scrollHeight, "px)");
      if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
        this.$el.style.overflowY = "scroll";
        this.$el.style.height = this.$el.style.maxHeight;
      } else {
        this.$el.style.overflow = "hidden";
      }
    },
    onInput: function onInput(event) {
      if (this.autoResize) {
        this.resize();
      }
      this.$emit("update:modelValue", event.target.value);
    }
  },
  computed: {
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    ptmParams: function ptmParams() {
      return {
        context: {
          disabled: this.$attrs.disabled || this.$attrs.disabled === ""
        }
      };
    }
  }
};
var _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("textarea", mergeProps({
    "class": _ctx.cx("root"),
    value: _ctx.modelValue,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, _ctx.ptm("root", $options.ptmParams), {
    "data-pc-name": "textarea"
  }), null, 16, _hoisted_1);
}
script2.render = render;
export {
  script2 as default
};
//# sourceMappingURL=primevue_textarea.js.map
