/*
 * maptalks-awesome-markers v0.0.1
 * this is extends maptalks.js 
 * build by deyihu 
*/

import { ui } from 'maptalks';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// import  {ui} from 'maptalks';

var UIMarker = ui.UIMarker;

var AwesomeMarker = function (_UIMarker) {
    inherits(AwesomeMarker, _UIMarker);

    function AwesomeMarker(coordinate, options) {
        classCallCheck(this, AwesomeMarker);

        var _this = possibleConstructorReturn(this, (AwesomeMarker.__proto__ || Object.getPrototypeOf(AwesomeMarker)).call(this, coordinate, options));

        _this._wrapContext();
        return _this;
    }

    createClass(AwesomeMarker, [{
        key: '_wrapContext',
        value: function _wrapContext() {
            var icon = this.options.icon;
            var markerColor = this.options.markerColor || 'red';
            var iconColor = this.options.iconColor || 'white';

            var divContext = '<div class="awesome-marker-icon-' + markerColor + ' awesome-marker">#</div>';
            var iContext = '<i class=" fa fa-' + icon + '" style="color:' + iconColor + '"></i>';
            this.options.content = divContext.replace('#', iContext);
        }
    }]);
    return AwesomeMarker;
}(UIMarker);

export { AwesomeMarker };
