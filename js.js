/**
 * Created by byaxe on 4/27/16.
 */
$(function () {
    arrayOfNames = [['fadeInRight', 3000], ['flash', 2000], ['hinge', 1000]];
    foo('.foo1', arrayOfNames, 0, 0);
});


function foo(selectorName, classNameArray, step, duration) {

    duration = 0 == step ? 0 : classNameArray[step - 1][1];
    setTimeout(function () {
        console.log('animation begin. classNameArray[step][0]= ' + classNameArray[step][1] + " ");
        step-1==0? $(selectorName).removeClass(classNameArray[step-1][0]):"";
        $(selectorName).attr('style', 'animation-duration:' + (parseInt(classNameArray[step][1]/1000)) + "s;");
        $(selectorName).addClass(String(classNameArray[step][0]));

        step = step + 1;
        console.log(step);
        console.log(duration);
        if (step < classNameArray.length) {

            foo(selectorName, classNameArray, step, duration);
        }
    }, duration);
}