import dotenv from 'dotenv'
dotenv.config()

export const PAGE = {
  URL:'https://www.saucedemo.com/'
}
export const CREDENTIALS = {
  VALID_USER:{
    USER:process.env.USER_NAME,
    PASSWORD:process.env.PASSWORD
  },
  INVALID_USER:{
    USER:'user',
    PASSWORD:'password'
  }
}
export const USER_INFO = {
  FIRST_NAME:process.env.FIRST_NAME,
  LAST_NAME:process.env.LAST_NAME,
  POSTAL_CODE:process.env.POSTAL_CODE
}
