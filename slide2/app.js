const log = console.log;
window.onload = function() {

    let imgList = $(".slide-image");
    let current = 0;
    let isSlide = false;
    let arr = [0,100,200,300,-300,-200,-100];
    function slide(target, dir) {
        if(isSlide) return;
        log(`이전위치는${current}번 이미지 움직인 위치는${target}번째 이미지 방향은${dir}`);
        if(target >= $('.slide-image').length) {        
            target = 0;
        }
        if(target <= -1 ) {
            target = $('.slide-image').length -1;
            log("작동"+target);
        }
        isSlide = true;
        let a = target;
        for(let i = 0; i < 7; i++){
            a++;
            if(a > 6) {
                a=0;
            }
            if(i == 3 || i == 4) {
                $('.slide-image').eq(a).css({'opacity':'0'});    
            }else {
                $('.slide-image').eq(a).css({'opacity':'1'});    
            }
            $('.slide-image').eq(a).animate({'left':`${arr[i]}%`},800,function() {
                isSlide = false;
            });
        }
        log("------------------");
        let ii = target;
        if(ii < 1) {
            ii = 7;
        }
        $(".now").text(ii);

        current = target;
    }

    $(".slide-btn").on("click",function() {
        let dir = $(this).data("dir") * 1;
        slide(current+dir,dir) ;
    });
    $('.stop').on("click",function() {
        if(isMove) {
            clearInterval(id);
            isMove = false;
            $('.stop').text("▷");
        }else {
            id = setInterval(() => {
                slide(current+1,1) ;
            }, 500);
            isMove = true;
            $('.stop').text("∥");            
        }
    });
    slide(current+1,1);
    let id = setInterval(() => {
        slide(current+1,1) ;
    }, 200);
    let isMove = true;
}