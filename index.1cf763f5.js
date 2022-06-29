var time=2,cc=1;$(window).scroll((function(){$("#advantages").each((function(){$(this).offset().top<$(window).scrollTop()+200&&cc<2&&($(".number").addClass("viz"),$("div").each((function(){var t=1,c=$(this).data("num"),n=1e3*time/c,a=$(this),i=setInterval((function(){t<=c?a.html(t):(cc+=2,clearInterval(i)),t++}),n)})))}))}));
//# sourceMappingURL=index.1cf763f5.js.map
