$(function(){
    //design 탭메뉴
    $('.tab_btn li').on('click', function(){
        let num = $(this).index();
        console.log(num)

        $('.tab_content>div').hide();
        $('.tab_content>div').eq(num).show();

        $('.tab_btn li').removeClass('on')
        $(this).addClass('on')
    })

    // 메뉴 클릭하면 글자 색상 변하게 추가하기
    
})

new fullpage('#fullpage', {
//options here
// 위아래 스크롤
autoScrolling:true,
scrollHorizontally: true,
// 네비게이터 보이기or숨기기
navigation: true,
// 네이게이터 위치
navigationPosition: 'right',
// 하이퍼링크
anchors:['num0', 'num1', 'num2','num3','num4','num5','num6','num7','num8','num9'],

afterLoad : function(orgin, destination, direction){
    var origin = this;

    // destination 변수는 해당 섹션에 들어왔을 때
    if(destination.index == 1){
        
    }else if(destination.index == 2){
        // alert('프로젝트 페이지입니다')
    }else if(destination.index == 3){
        // alert('갤러리 페이지입니다')
    }else if(destination.index == 4){
        // alert('연락처입니다')
        sec_in()
    }else if(destination.index == 9){
        // alert('감사합니다')
    }
    // orgin 변수는 해당 섹션을 벗어났을 때
    if(orgin.index == 4){
        sec_out()
    }
}
});



function sec_in(){
// alert ("저의 소개 페이지에 오신 것을 환영합니다~!");
var tl = anime.timeline({
    easing: 'linear',
    duration: 500
});

tl
.add({
    targets: '.g1',
    height: '95%',
    delay : 300
})
.add({
    targets: '.g2',
    height: '95%',
})
.add({
    targets: '.g3',
    height: '70%',
})
.add({
    targets: '.g4',
    height: '80%',
})
.add({
    targets: '.g5',
    height: '60%',
})
.add({
    targets: '.g6',
    height: '95%',
})
.add({
    targets: '.g7',
    height: '95%',
})
.add({
    targets: '.g8',
    height: '85%',
})

}
function sec_out(){
// alert ('저의 소개를 봐주셔서 감사합니다~');
anime({
    targets:'.gagein',
    height: 0
})
}

