import React from 'react'
const url = 'https://api.github.com/users/mojombo';
const MultipleReturnsFetchingExample = () => {
    const [user, setUser] = React.useState('default user');
    const [isLoading, setIsLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)

    React.useEffect(() => {
        fetch(url)
        .then((response)=>{
            if(response.status >=200){
                return response.json()
            }
            else{
                setIsError(true)
               setIsLoading(false)
            }
        })
        .then((user)=>{
            setUser(user.login)
            setIsLoading(false)
        })
        .catch((error)=>{console.log(error)})
    },[])
    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
    if (isError) {
        return (
            <div>
                <h1>Error....</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
}

export default MultipleReturnsFetchingExample
