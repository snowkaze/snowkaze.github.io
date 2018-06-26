$(function () {
    // console.log($('#ttbar-mycity .item a').text())
    // console.log($('#ttbar-navs dt'))
    // console.log( $('#ttbar-navs .dropdown-layer .fore1 dt').text())
    var location =[]
    $('#ttbar-mycity .item a').each(function(i, v) {
               var locData ={
                   val:$(v).text()
               }
               location.push(locData)
    })
    console.log(location)
    $.post({
        url: "/jd/loc",
        data: {
            list: location
        },
        success: function(data) {
            alert(data);
        },
        error: function() {
            alert("爬取数据失败");
        }
    });
   
})


