exports.getDate = ()=>{
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  }
  const day = new Date().toLocaleDateString("en-US", options)
  
  return day
}

exports.getDay = ()=>{
  const options = {
    weekday: "long"
  }
  const day = new Date().toLocaleDateString("en-US", options)
  
  return day
}
