(function(){$("pre code").parent().addClass("line-numbers")}());window.MathJax={tex2jax:{inlineMath:[["$","$"]],processEscapes:true}};(function(){if(["localhost","127.0.0.1"].indexOf(window.location.hostname)!=-1){document.getElementById("gitalk-container").innerHTML="Gitalk comments not available by default when the website is previewed locally.";return}if(typeof Gitalk=="undefined"){return}var gitalk=new Gitalk({clientID:"01585f5d7be10aa5afa0",clientSecret:"590ac86f17c91fce7f5b8e8cfe31ee7c40b75fe5",repo:"BlogComments",owner:"xmlwch",admin:["xmlwch"],id:location.pathname,distractionFreeMode:false});if(["blog.xmlwch.cn"].indexOf(window.location.hostname)!=-1){gitalk=new Gitalk({clientID:"b497a8d1c7bad5ae3cfb",clientSecret:"a0a92bb904e4a54154860dc93068114d07a65c64",repo:"BlogComments",owner:"xmlwch",admin:["xmlwch"],id:location.pathname,distractionFreeMode:false})}gitalk.render("gitalk-container")})();