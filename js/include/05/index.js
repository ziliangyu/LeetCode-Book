/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  let arr=s.split('')
  let res=arr.map((item)=>{
      if(item==' ') return "%20"
      else return item
  })
  return res.join('')

};

let s="We are happy."
let res =replaceSpace(s)
console.log(res)