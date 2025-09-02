// src/utils/validators.js
export function onlyDigits(str=''){ return (str||'').replace(/\D/g, '') }

export function isValidEmail(email=''){
  // RFC 5322-ish, but simple and robust enough for UX
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((email||'').trim())
}

export function isValidPhoneBR(phone=''){
  const digits = onlyDigits(phone)
  // Brasil: 10 (fixo) ou 11 dígitos (celular com 9)
  return digits.length === 10 || digits.length === 11
}

// Validação de CNPJ com dígitos verificadores
export function isValidCNPJ(cnpj=''){
  const digits = onlyDigits(cnpj)
  if (!digits || digits.length !== 14) return false
  if (/^([0-9])\1+$/.test(digits)) return false // sequências repetidas

  function calc(base){
    let sum = 0
    let pos = base.length - 7
    for(let i = 0; i < base.length; i++){
      sum += parseInt(base[i], 10) * pos--
      if(pos < 2) pos = 9
    }
    const result = sum % 11
    return (result < 2) ? 0 : 11 - result
  }

  const base12 = digits.substring(0, 12)
  const d1 = calc(base12)
  const base13 = base12 + String(d1)
  const d2 = calc(base13)

  return digits.endsWith(String(d1) + String(d2))
}
