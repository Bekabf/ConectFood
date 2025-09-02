// Simple localStorage-based auth mock (for demo only)
const KEY = 'conectfood:user'

export function login({email}){
  const user = { email, name: email.split('@')[0] }
  localStorage.setItem(KEY, JSON.stringify(user))
  return user
}

export function logout(){
  localStorage.removeItem(KEY)
}

export function getUser(){
  try {
    return JSON.parse(localStorage.getItem(KEY) || 'null')
  } catch { return null }
}

export function isAuthenticated(){
  return !!getUser()
}
