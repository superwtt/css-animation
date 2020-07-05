var boxes = document.querySelectorAll('#boxes > div');

[].forEach.call(boxes,box=>{
  box.addEventListener("mousemove",e=>{
      document.body.style.setProperty(
          '--bg-color',
          box.style.getPropertyValue('--color')
      )
  })
})