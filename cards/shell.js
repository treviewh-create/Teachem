/* A Lab app shell: builds the side rail from ../apps.js, low-poly art and toasts. */
(function(){
  function rng(seed){var s=seed>>>0||1;return function(){s=(s*1664525+1013904223)>>>0;return s/4294967296}}
  function hex(c){return [1,3,5].map(function(i){return parseInt(c.substr(i,2),16)})}
  function mix(a,b,t){var A=hex(a),B=hex(b);return 'rgb('+A.map(function(v,i){return Math.round(v+(B[i]-v)*t)}).join(',')+')'}
  function lowpoly(w,h,cols,rows,c1,c2,seed){
    var r=rng(seed),pts=[],i,j,out='';
    for(j=0;j<=rows;j++){pts[j]=[];for(i=0;i<=cols;i++){var x=i*w/cols,y=j*h/rows;
      if(i>0&&i<cols)x+=(r()-.5)*w/cols*.7;if(j>0&&j<rows)y+=(r()-.5)*h/rows*.7;pts[j][i]=[x,y]}}
    function tri(a,b,c){var cx=(a[0]+b[0]+c[0])/3,cy=(a[1]+b[1]+c[1])/3;
      var t=Math.max(0,Math.min(1,cx/w*.7+cy/h*.3+(r()-.5)*.3));var f=mix(c1,c2,t);
      out+='<polygon points="'+a+' '+b+' '+c+'" fill="'+f+'" stroke="'+f+'" stroke-width=".6"/>'}
    for(j=0;j<rows;j++)for(i=0;i<cols;i++){var a=pts[j][i],b=pts[j][i+1],c=pts[j+1][i],d=pts[j+1][i+1];
      if(r()>.5){tri(a,b,c);tri(b,d,c)}else{tri(a,b,d);tri(a,d,c)}}
    return out;
  }
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

  document.addEventListener('DOMContentLoaded',function(){
    // hero art
    document.querySelectorAll('.hero-art').forEach(function(svg,i){
      var h=svg.parentNode,c1=h.dataset.c1||'#ffffff',c2=h.dataset.c2||'#000000';
      svg.setAttribute('viewBox','0 0 800 200');svg.setAttribute('preserveAspectRatio','xMidYMid slice');
      svg.innerHTML=lowpoly(800,200,14,4,c1,c2,21+i);
    });
    // side rail
    var rail=document.getElementById('rail');
    if(rail){
      var here=decodeURIComponent(location.pathname.split('/').pop()),html='';
      html+='<a class="home" href="../magazine.html" title="Wall Magazine" aria-label="Back to the Wall Magazine"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg></a><span class="sep"></span>';
      (window.APPS||[]).forEach(function(a){
        if(a.soon)return;
        var file=decodeURIComponent(a.url.replace(/^cards\//,'')),p=a.palette||['#888','#444'];
        html+='<a href="'+encodeURI(file)+'" title="'+esc(a.title)+'" aria-label="'+esc(a.title)+'" class="'+(file===here?'active':'')+
          '" style="background:linear-gradient(135deg,'+p[0]+','+p[1]+')">'+esc(a.title.charAt(0))+'</a>';
      });
      html+='<span class="badge">A</span>';
      rail.innerHTML=html;
    }
    var t=document.createElement('div');t.id='toast';document.body.appendChild(t);
  });

  var timer;
  window.Shell={esc:esc,lowpoly:lowpoly,
    toast:function(msg,bad){var t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.className=(bad?'bad ':'')+'show';
      clearTimeout(timer);timer=setTimeout(function(){t.className=bad?'bad':''},2600)}};
})();
