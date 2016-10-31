/**
 * Created by giant on 16/10/29.
 */
//那些你不知道的事，今天。。。
 var msg= '<h2>browes window</h2><p>width: ' + window.innerWidth + '</p>'
 msg = '<p>height: ' + window.innerHeight + '</p>'

 msg = '<h2>history</h2><p> item: ' + window.history.length + '</p>'
 msg = '<h2>screen</h2> width:' + window.screen.width + '</p>'
 msg = '<p>height:' + window.screen.height + '</p>'

 var e1 = document.getElementById('info')
 e1.innerHTML = msg

 alert('Current Page:' + window.location)
