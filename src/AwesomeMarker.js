import  {ui} from 'maptalks';

const UIMarker=ui.UIMarker;

class AwesomeMarker extends UIMarker{
    

    constructor(coordinate, options){
        super(coordinate,options);
        this._wrapContext();
    }

    _wrapContext(){
        let icon=this.options.icon;
        let markerColor=this.options.markerColor||'red';
        let iconColor=this.options.iconColor||'white';

        let divContext=`<div class="awesome-marker-icon-${markerColor} awesome-marker">#</div>`;
        let iContext=`<i class=" fa fa-${icon}" style="color:${iconColor}"></i>`
        this.options.content=divContext.replace("#",iContext);

    }

}

if(window.maptalks){
    window.maptalks.AwesomeMarker=AwesomeMarker;
}