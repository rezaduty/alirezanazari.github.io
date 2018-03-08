/*Developed by 
┬─┐┌─┐┌─┐┌─┐┌┬┐┬ ┬┌┬┐┬ ┬
├┬┘├┤ ┌─┘├─┤ │││ │ │ └┬┘
┴└─└─┘└─┘┴ ┴─┴┘└─┘ ┴  ┴ 
    reza.duty.persian@gmail.com
*/
// dl-menu options
$(function() {
  $( '#dl-menu' ).dlmenu({
    animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
  });
});
// Need this to show animation when go back in browser
window.onunload = function() {};

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function() {
  $(".content").fitVids();
});

// All others
$(document).ready(function() {


// about qutoe slider



( function($) {
  
  $(document).ready(function() {
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


      //CONTENT ANIMATIONS

      var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
      var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

      TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
      TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
      TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
      TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

    });
          
  });
})(jQuery);

$('.overlay').addClass('overlay-blue');

//


console.clear();

var colors = ["#ED5565", "#FC6E51", "#FFCE54", "#2ECC71", "#4FC1E9", "#8067B7", "#A0D468", "#48CFAD", "#5D9CEC", "#AC92EC", "#EC87C0"];
var previous = 0;

$(document).mousemove(function(e){
    console.log( e.pageX-50)
    
   var x = e.pageX-50,
       y = e.pageY-50,
       a = Math.PI - Math.atan2(x,y),
       p = Math.sqrt(x*x + y*y),
       m = Math.sqrt(($(window).width()-50)*($(window).width()-50) + ($(window).height()-50)*($(window).height()-50));
   $(".stem").css("transform", `translate(-50%,-50%) rotate(${a}rad)`);
   $(".stem").css("height", `${(p*35)/m}px`);
   $(".pupil").css("height", `${12.5-(p*3)/m}px`).css("width", `${12.5-(p*3)/m}px`);
      if(x>1300){
        $(".pupil").css("height", `28.5px`).css("width", `28.5px`);
      }
}).mouseleave(function(e) {

   $(".stem").css("height", `0px`);
   $(".pupil").css("height", `12.5px`).css("width", `12.5px`);

});

$(".ball").click(function(){
   var r = random(0, colors.length-1);
   while(r == previous) {
      r = random(0, colors.length-1);
   }
   previous = r;
   var c = colors[r];
   $(".eye").append(`<div class="skin" style="background-color:${c};"></div>`).css("background-color", c);
});





function random(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}









$(function() {

  
  
// Verical Slider
var $row = $('.vertical-slider__item'),
    $container = $('.vertical-slider');
    currentMarginTop = 0,
    itemHeight = $row.height(),
    rowsNr = $row.length, 
    maxPadd = (rowsNr-1) * itemHeight;
console.log(itemHeight);
   
function setHeight() {
  console.log(itemHeight);
  $('.text-slider__dynamic').css({
    'height' : itemHeight
  });
  
}

function animateSlider () {
  //setInterval(moveRows,2000);
  setHeight();
  function moveRows () {
      $container.animate({
    'margin-top' : currentMarginTop - itemHeight  
  },500);
  currentMarginTop -= itemHeight;
      }
  if (currentMarginTop == -(maxPadd)) {
     $container.css({
    'margin-top' : 0
  })
    currentMarginTop = 0;
   // moveRows();
  } else {
    moveRows();
  }
}

function automateSlider (interval) {
  setInterval(animateSlider,interval);  
}

automateSlider(3000);

});















    // zoom in/zoom out animations
    if ($(".container").hasClass('fadeOut')) {
        $(".container").removeClass("fadeOut").addClass("fadeIn");
    }
    if ($(".wrapper").hasClass('fadeOut')) {
        $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
    }
    $(".zoombtn").click(function() {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    // go up button
    $.goup({
        trigger: 500,
        bottomOffset: 10,
        locationOffset: 20,
        containerRadius: 0,
        containerColor: '#fff',
        arrowColor: '#000',
        goupSpeed: 'normal'
    });
	$('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});




var RadarChart = {
  draw: function(id, d, options) {
    var cfg = {
      radius: 5,
      w: 600,
      h: 600,
      factor: 1,
      factorLegend: 0.85,
      levels: 3,
      maxValue: 5,
      radians: 2 * Math.PI,
      opacityArea: 0.5,
      ToRight: 5,
      TranslateX: 80,
      TranslateY: 30,
      ExtraWidthX: 100,
      ExtraWidthY: 100,
      color: d3.scaleOrdinal(d3.schemeCategory10)
    };

    if ("undefined" !== typeof options) {
      for (var i in options) {
        if ("undefined" !== typeof options[i]) {
          cfg[i] = options[i];
        }
      }
    }
    cfg.maxValue = Math.max(
      cfg.maxValue,
      d3.max(d, function(i) {
        return d3.max(
          i.map(function(o) {
            return o.value;
          })
        );
      })
    );
    var allAxis = d[0].map(function(i, j) {
      return i.axis;
    });
    var total = allAxis.length;
    var radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);
    var Format = d3.format("%");
    d3
      .select(id)
      .select("svg")
      .remove();

    var g = d3
      .select(id)
      .append("svg")
      .attr("width", cfg.w + cfg.ExtraWidthX)
      .attr("height", cfg.h + cfg.ExtraWidthY)
      .append("g")
      .attr(
        "transform",
        "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")"
      );
    var tooltip;

    //Circular segments
    for (var j = 0; j < cfg.levels - 1; j++) {
      var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
      g
        .selectAll(".levels")
        .data(allAxis)
        .enter()
        .append("svg:line")
        .attr("x1", function(d, i) {
          return (
            levelFactor * (1 - cfg.factor * Math.sin(i * cfg.radians / total))
          );
        })
        .attr("y1", function(d, i) {
          return (
            levelFactor * (1 - cfg.factor * Math.cos(i * cfg.radians / total))
          );
        })
        .attr("x2", function(d, i) {
          return (
            levelFactor *
            (1 - cfg.factor * Math.sin((i + 1) * cfg.radians / total))
          );
        })
        .attr("y2", function(d, i) {
          return (
            levelFactor *
            (1 - cfg.factor * Math.cos((i + 1) * cfg.radians / total))
          );
        })
        .attr("class", "line")
        .style("stroke", "grey")
        .style("stroke-opacity", "0.75")
        .style("stroke-width", "0.3px")
        .attr(
          "transform",
          "translate(" +
            (cfg.w / 2 - levelFactor) +
            ", " +
            (cfg.h / 2 - levelFactor) +
            ")"
        );
    }

    //Text indicating at what % each level is
    // for (var j = 0; j < cfg.levels; j++) {
    //   var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
    //   g
    //     .selectAll(".levels")
    //     .data([1]) //dummy data
    //     .enter()
    //     .append("svg:text")
    //     .attr("x", function(d) {
    //       return levelFactor * (1 - cfg.factor * Math.sin(0));
    //     })
    //     .attr("y", function(d) {
    //       return levelFactor * (1 - cfg.factor * Math.cos(0));
    //     })
    //     .attr("class", "legend")
    //     .style("font-family", "sans-serif")
    //     .style("font-size", "10px")
    //     .attr(
    //       "transform",
    //       "translate(" +
    //         (cfg.w / 2 - levelFactor + cfg.ToRight) +
    //         ", " +
    //         (cfg.h / 2 - levelFactor) +
    //         ")"
    //     )
    //     .attr("fill", "#737373")
    //     .text(Format((j + 1) * cfg.maxValue / cfg.levels));
    // }

    series = 0;

    var axis = g
      .selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");

    axis
      .append("line")
      .attr("x1", cfg.w / 2)
      .attr("y1", cfg.h / 2)
      .attr("x2", function(d, i) {
        return cfg.w / 2 * (1 - cfg.factor * Math.sin(i * cfg.radians / total));
      })
      .attr("y2", function(d, i) {
        return cfg.h / 2 * (1 - cfg.factor * Math.cos(i * cfg.radians / total));
      })
      .attr("class", "line")
      .style("stroke", "grey")
      .style("stroke-width", "1px");

    axis
      .append("text")
      .attr("class", "legend")
      .text(function(d) {
        return d;
      })
      .style("font-family", "Iransans")
      .style("font-size", "11px")
      .attr("text-anchor", "middle")
      .attr("dy", "1.5em")
      .attr("transform", function(d, i) {
        return "translate(0, -10)";
      })
      .attr("x", function(d, i) {
        return (
          cfg.w /
            2 *
            (1 - cfg.factorLegend * Math.sin(i * cfg.radians / total)) -
          60 * Math.sin(i * cfg.radians / total)
        );
      })
      .attr("y", function(d, i) {
        return (
          cfg.h / 2 * (1 - Math.cos(i * cfg.radians / total)) -
          20 * Math.cos(i * cfg.radians / total)
        );
      });

    d.forEach(function(y, x) {
      dataValues = [];
      g.selectAll(".nodes").data(y, function(j, i) {
        dataValues.push([
          cfg.w /
            2 *
            (1 -
              parseFloat(Math.max(j.value, 0)) /
                cfg.maxValue *
                cfg.factor *
                Math.sin(i * cfg.radians / total)),
          cfg.h /
            2 *
            (1 -
              parseFloat(Math.max(j.value, 0)) /
                cfg.maxValue *
                cfg.factor *
                Math.cos(i * cfg.radians / total))
        ]);
      });
      dataValues.push(dataValues[0]);
      g
        .selectAll(".area")
        .data([dataValues])
        .enter()
        .append("polygon")
        .attr("class", "radar-chart-serie" + series)
        .style("stroke-width", "2px")
        .style("stroke", cfg.color(series))
        .attr("points", function(d) {
          var str = "";
          for (var pti = 0; pti < d.length; pti++) {
            str = str + d[pti][0] + "," + d[pti][1] + " ";
          }
          return str;
        })
        .style("fill", function(j, i) {
          return cfg.color(series);
        })
        .style("fill-opacity", cfg.opacityArea)
        .on("mouseover", function(d) {
          z = "polygon." + d3.select(this).attr("class");
          g
            .selectAll("polygon")
            .transition(200)
            .style("fill-opacity", 0.1);
          g
            .selectAll(z)
            .transition(200)
            .style("fill-opacity", 0.7);
        })
        .on("mouseout", function() {
          g
            .selectAll("polygon")
            .transition(200)
            .style("fill-opacity", cfg.opacityArea);
        });
      series++;
    });
    series = 0;

    d.forEach(function(y, x) {
      g
        .selectAll(".nodes")
        .data(y)
        .enter()
        .append("svg:circle")
        .attr("class", "radar-chart-serie" + series)
        .attr("r", cfg.radius)
        .attr("alt", function(j) {
          return Math.max(j.value, 0);
        })
        .attr("cx", function(j, i) {
          dataValues.push([
            cfg.w /
              2 *
              (1 -
                parseFloat(Math.max(j.value, 0)) /
                  cfg.maxValue *
                  cfg.factor *
                  Math.sin(i * cfg.radians / total)),
            cfg.h /
              2 *
              (1 -
                parseFloat(Math.max(j.value, 0)) /
                  cfg.maxValue *
                  cfg.factor *
                  Math.cos(i * cfg.radians / total))
          ]);
          return (
            cfg.w /
            2 *
            (1 -
              Math.max(j.value, 0) /
                cfg.maxValue *
                cfg.factor *
                Math.sin(i * cfg.radians / total))
          );
        })
        .attr("cy", function(j, i) {
          return (
            cfg.h /
            2 *
            (1 -
              Math.max(j.value, 0) /
                cfg.maxValue *
                cfg.factor *
                Math.cos(i * cfg.radians / total))
          );
        })
        .attr("data-id", function(j) {
          return j.axis;
        })
        .style("fill", cfg.color(series))
        .style("fill-opacity", 0.9)
        .on("mouseover", function(d) {
          newX = parseFloat(d3.select(this).attr("cx")) - 10;
          newY = parseFloat(d3.select(this).attr("cy")) - 5;

          tooltip
            .attr("x", newX)
            .attr("y", newY)
            .text(Format(d.value))
            .transition(200)
            .style("opacity", 1);

          z = "polygon." + d3.select(this).attr("class");
          g
            .selectAll("polygon")
            .transition(200)
            .style("fill-opacity", 0.1);
          g
            .selectAll(z)
            .transition(200)
            .style("fill-opacity", 0.7);
        })
        .on("mouseout", function() {
          tooltip.transition(200).style("opacity", 0);
          g
            .selectAll("polygon")
            .transition(200)
            .style("fill-opacity", cfg.opacityArea);
        })
        .append("svg:title")
        .text(function(j) {
          return Math.max(j.value, 0);
        });

      series++;
    });
   
  }
};

// end of radar script
var w = 300,
  h = 300;

var colorscale = d3.scaleOrdinal(d3.schemeCategory10);

//Legend titles
// var LegendOptions = ["Smartphone", "Tablet"];

//Data
var d = [
  [
    { axis: "Android", value: 4.5 },
    { axis: "Java", value: 4 },
    { axis: "Sql", value: 4 },
    { axis: "Xml", value: 4 },
    { axis: "Photoshop", value: 4 },
    { axis: "Php", value: 3.5 }
  ]
];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 5,
  levels: 5,
  ExtraWidthX: 300
};

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

// var svg = d3
//   .select("#body")
//   .selectAll("svg")
//   .append("svg")
//   .attr("width", w + 300)
//   .attr("height", h);

// //Create the title for the legend
// var text = svg
//   .append("text")
//   .attr("class", "title")
//   .attr("transform", "translate(90,0)")
//   .attr("x", w - 70)
//   .attr("y", 10)
//   .attr("font-size", "12px")
//   .attr("fill", "#404040")
//   .text("What % of owners use a specific service in a week");

// //Initiate Legend
// var legend = svg
//   .append("g")
//   .attr("class", "legend")
//   .attr("height", 100)
//   .attr("width", 200)
//   .attr("transform", "translate(90,20)");
// //Create colour squares
// legend
//   .selectAll("rect")
//   .data(LegendOptions)
//   .enter()
//   .append("rect")
//   .attr("x", w - 65)
//   .attr("y", function(d, i) {
//     return i * 20;
//   })
//   .attr("width", 10)
//   .attr("height", 10)
//   .style("fill", function(d, i) {
//     return colorscale(i);
//   });
// //Create text next to squares
// legend
//   .selectAll("text")
//   .data(LegendOptions)
//   .enter()
//   .append("text")
//   .attr("x", w - 52)
//   .attr("y", function(d, i) {
//     return i * 20 + 9;
//   })
//   .attr("font-size", "11px")
//   .attr("fill", "#737373")
//   .text(function(d) {
//     return d;
//   });




 function gregorian_to_jalali(gy,gm,gd){
         g_d_m=[0,31,59,90,120,151,181,212,243,273,304,334];
         if(gy > 1600){
          jy=979;
          gy-=1600;
         }else{
          jy=0;
          gy-=621;
         }
         gy2=(gm > 2)?(gy+1):gy;
         days=(365*gy) +(parseInt((gy2+3)/4)) -(parseInt((gy2+99)/100)) +(parseInt((gy2+399)/400)) -80 +gd +g_d_m[gm-1];
         jy+=33*(parseInt(days/12053)); 
         days%=12053;
         jy+=4*(parseInt(days/1461));
         days%=1461;
         if(days > 365){
          jy+=parseInt((days-1)/365);
          days=(days-1)%365;
         }
         jm=(days < 186)?1+parseInt(days/31):7+parseInt((days-186)/30);
         jd=1+((days < 186)?(days%31):((days-186)%30));
         return [jy,jm,jd];
        }



 var day = $("#h4_day").text();


if(day=="Sunday"){
    $("#h4_day").text("یکشنبه");
}else if(day=="Saturday"){
    $("#h4_day").text("شنبه");
}else if(day=="Monday"){
    $("#h4_day").text("دوشنبه");
}else if(day=="Tuesday"){
    $("#h4_day").text("سه شنبه");
}else if(day=="Wednesday"){
    $("#h4_day").text("چهارشنبه");
}else if(day=="Thursday"){
    $("#h4_day").text("پنجشنبه");
}else if(day=="Friday"){
    $("#h4_day").text("جمعه");
}


 var a = $("#h4_date").text();
        var da = a.split("/")
        console.log(gregorian_to_jalali(parseInt(da[0]),parseInt(da[1]),parseInt(da[2])))
         $("#h4_date").text(gregorian_to_jalali(parseInt(da[0]),parseInt(da[1]),parseInt(da[2])));








  persian={0:'۰',1:'۱',2:'۲',3:'۳',4:'۴',5:'۵',6:'۶',7:'۷',8:'۸',9:'۹'};
  function traverse(el){
    if(el.nodeType==3){
      var list=el.data.match(/[0-9]/g);
      if(list!=null && list.length!=0){
        for(var i=0;i<list.length;i++)
          el.data=el.data.replace(list[i],persian[list[i]]);
      }
    }
    for(var i=0;i<el.childNodes.length;i++){
      traverse(el.childNodes[i]);
    }
  }
    traverse(document.body);



