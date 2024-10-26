//トップ画面のスリック（カルーセル）
$(function(){
    $('.carousel').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    pauseOnHover: false
       
 }); 
 //ナビゲーションメニュー
 $('.home,.menu1,.menu2').on('mouseover',function(){
    $(this).css('opacity','0.5');
   
    });
    $(function(){
      $('.home,.menu1,.menu2').on('mouseout',function(){
        $(this).css('opacity','1.0');
      });
    });
  // 100pxを境にTOPに戻るボタンの表示・非表示を切り替える  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });
// ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
$('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works img').click(function () {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.big-img').attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $('.modal').fadeIn();
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
  });
});


