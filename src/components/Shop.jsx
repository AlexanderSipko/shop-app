
function Shop(props) {

    const {
        api_key:API_KEY,
        api_url:API_URL,
        user:userName,
        time
    } = props
    return (
        <>
        <h3>Shop information {time}</h3>
            <div className='content'>
            <h3>Hello { userName }</h3>
            <h4 className="bg-primary text-white text-center p-2">
              API_KEY: {API_KEY}<br/>
              API_URL: {API_URL}
            </h4>
        </div>
        </>
        
    )
}

export default Shop