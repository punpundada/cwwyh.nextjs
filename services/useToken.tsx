
const useToken = ():string | null => {

  return (sessionStorage.getItem('token'))
}

export default useToken
