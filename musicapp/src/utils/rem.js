function remResize(){
    var deviceWidth = document.documentElement.clientWidth || window.innerHeight;
    if(deviceWidth >= 750){
        deviceWidth = 750;
    }
    if(deviceWidth<=320){
        deviceWidth = 320;
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    document.body.style.fontSize = 0.16 + 'rem';
}

export default function remSet(){
    remResize();
    console.log("rem已应用！")
    window.onresize = function(){
        remResize();
    }
}