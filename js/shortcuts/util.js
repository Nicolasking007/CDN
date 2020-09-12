/*
<!--
* author:Nicolas-kings
* date:2020/08/08
* 详尽信息请看：https://nkupp.com
* Copyright by Nicolas-kings 版权所有
*
* 请尊重原创，未经允许请勿转载。
* 在保留版权的前提下可应用于个人或商业用途

-->
*/


let bodyWidth = Number(
  getComputedStyle(document.body).width.replace("px", ""),
)

let halfBodyWidth = bodyWidth / 2

let loadImgHeights = (imgs) => {
  return new Promise((resolve, reject) => {
    const length = imgs.length
    const heights = []
    let count = 0
    const load = (index) => {
      let img = new Image()
      const checkIfFinished = () => {
        count++
        if (count === length) {
          resolve(heights)
        }
      }
      img.onload = () => {
        const ratio = img.height / img.width
        const halfHeight = ratio * halfBodyWidth
        // 高度按屏幕一半的比例来计算
        heights[index] = halfHeight
        checkIfFinished()
      }
      img.onerror = () => {
        heights[index] = 0
        checkIfFinished()
      }
      img.src = imgs[index]
    }
    imgs.forEach((img, index) => load(index))
  })
}

let sum = (nums) => nums.reduce((a, b) => a + b, 0)

let omitByIndexes = (arr, omitIndexes) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (!omitIndexes.includes(i)) {
      res.push(i)
    }
  }
  return res
}