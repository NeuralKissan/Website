const c1=document.createElement('div')

c1.id='c1'


document.body.append(c1)

const cursor1=document.getElementById('c1')

window.onmousemove=(e)=>{
    mX=e.clientX
    mY=e.clientY
    console.log(mY,mX)
    cursor1.style.transform=`translate3d(${mX}px,${mY}px,0)`
  
}




