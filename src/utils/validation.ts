const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const handleFirstName = (value:string) => {
  console.log('SSSSSSSSSS', value)
  if ( value.length < 3) {
    console.log('fffff')
    return "Enter your first name"
  } else {
    return ''
  }
}

export const handleLastName = (value:string) => {

  if (value.length < 3) {
    return  "Enter your last name "
  } else {
    return ''
  }
  
}

export const handleDob = ( value:string) => {
 
  if ( value.length < 3) {
    return "Enter your dob "
  } else {
    return ''
  } 
}

export const handleGender = ( value:string) => {
  
  if (value.length < 3) {
    return "Enter your gender"
  } else {
    return ''
  }
 
}

export const handleEmailid = ( value:string) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
  if (!value.match(mailformat)) {
    return "Enter your valid emailid"
  } else {
    return ''  
  }
  
}

export const handlePassword = ( value:string) => {
  if (value.length < 5) {
    return "Enter your password"
  } else {
    return ''  
  } 
}