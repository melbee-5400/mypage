document.addEventListener('DOMContentLoaded', ()=>{
  const email = ['m', '.', 's', '@', 'u', 'b', 'e', 'r', 'l', 'i', '.', 'c', 'h'].join('')
  document.querySelectorAll('.email-protected').forEach((placeholder) => {
    const link = document.createElement('a')
    link.href = `mailto:${email}`
    link.textContent = email
    placeholder.replaceChildren(link)
  })

  const btn = document.getElementById('download-cv')
  if(btn){
    btn.addEventListener('click', ()=>{
      // small analytics hook placeholder
      console.log('CV download clicked')
    })
  }
})
