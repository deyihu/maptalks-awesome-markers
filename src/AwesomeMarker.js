// import  {ui} from 'maptalks';
import * as maptalks from 'maptalks';

const UIMarker = maptalks.ui.UIMarker;

class AwesomeMarker extends UIMarker {

    constructor(coordinate, options) {
        super(coordinate, options);
        this._wrapContext();
    }

    _wrapContext() {
        const icon = this.options.icon;
        const markerColor = this.options.markerColor || 'red';
        const iconColor = this.options.iconColor || 'white';

        const divContext = `<div class="awesome-marker-icon-${markerColor} awesome-marker">#</div>`;
        const iContext = `<i class=" fa fa-${icon}" style="color:${iconColor}"></i>`;
        this.options.content = divContext.replace('#', iContext);

    }

}
export default AwesomeMarker;
