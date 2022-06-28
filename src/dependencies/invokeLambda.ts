
const invokeLambda = async (target: any, prop: any) => {




    let url = `https://yrsmhsmmm0.execute-api.eu-central-1.amazonaws.com/dev/users`

    console.log(url)

    let response = await fetch(url, {
        headers: {
        },
    })
    let data = await response.json()

    console.log(data)
    return data
}

export default invokeLambda