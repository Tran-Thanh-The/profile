
function start()  {
  loadChart()
  console.log('ok')
}

start()

function loadChart() {
  const list = document.querySelectorAll('.full div')
  const colors = ['#2ed573', '#ff4757', '#3742fa', '#fed330', '#82589F']
  const percent = [300, 300, 300, 200, 400]

  list.forEach((item, index) => {
    item.style.width = `${percent[index]}px`
    item.style.backgroundColor = colors[index]
  })
}